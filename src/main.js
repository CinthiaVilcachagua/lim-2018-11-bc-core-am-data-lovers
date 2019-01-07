const menuBtn = document.getElementById('id-menuButton');
const menuShow = document.getElementById('id-menuShow');
const mainBtn = document.getElementById('id-mainButton');
const championsBtn = document.getElementById('id-championsButton');
const filterBtn = document.getElementById('id-championsFilter');
// Cargar menú desplegable
const loadMenu = () => {
    if (menuShow.className === 'show') {
        menuShow.className = '';
    } else {
        menuShow.className = 'show';
    }
};
menuBtn.addEventListener('click', loadMenu);
// Cargar Inicio
const loadMain = () => {
    document.getElementById('id-createTitle').style.display = 'none';
    document.getElementById('id-containerChampions').style.display = 'none';
    document.getElementById('id-mainFilter').style.display = 'none';
};
mainBtn.addEventListener('click', loadMain);
// Cargar campeones
const loadChampions = () => {
    document.getElementById('id-createTitle').style.display = 'block';
    document.getElementById('id-containerChampions').style.display = 'block';
    document.getElementById('id-mainFilter').style.display = 'none';
    const containerTitle = document.getElementById('id-createTitle');
    const createTitle = `
        <div class="Title">CAMPEONES</div>
    `;
    containerTitle.innerHTML = createTitle;
    const data = Object.values(dataLol.data);
    const containerList = document.getElementById('id-containerList');
    const createTemplate = (data) => {
        let listChampions = '';
        data.forEach((data) => {
            const cardChampions = `
                <li class="list-champions">
                    <div class="champion-name">${ data.name}</div>
                    <div class="champion-img"><img class= "post-image" src="${ data.img}"/></div>
                </li>
          `;
            listChampions += cardChampions;
        });
        containerList.innerHTML = listChampions;
    };
    createTemplate(data);
};
championsBtn.addEventListener('click', loadChampions);
// Filtrar por roles
const filterOfRole = () => {
    document.getElementById('id-mainFilter').style.display = 'block';
    document.getElementById('id-auxiliary').style.display = 'block';
    document.getElementById('id-containerChampions').style.display = 'none';
    const selectRole = document.getElementById('id-selectRole');
    const roleValue = selectRole.options[selectRole.selectedIndex].value;
    const data = Object.values(dataLol.data);
    const filter = roleValue;
    let newArrayOfRole = lol.filterData(data, filter);
    // Ordenar data
    const sortBy = 'name';
    let sortOrder;
    if (document.getElementById('r1').checked)
        sortOrder = document.getElementById('r1').value;
    else
        sortOrder = document.getElementById('r2').value;
    newArrayOfRole = lol.sortData(newArrayOfRole, sortBy, sortOrder);
    // Mostrar estadistica
    const statsResults = lol.computeStats(newArrayOfRole);
    document.getElementById('idResultMax').innerHTML = statsResults[0];
    document.getElementById('idResultMin').innerHTML = statsResults[1];
    document.getElementById('idResultMedia').innerHTML = statsResults[2];
    // Creacion de template
    const containerTitle = document.getElementById('id-createTitleRole');
    const createTitle = `
        <div class="createTitle">FILTROS</div>
        `;
    containerTitle.innerHTML = createTitle;
    const containerList = document.getElementById('id-listRole');
    const createTemplate = (data) => {
        let listChampions = '';
        data.forEach((newArrayOfRole) => {
            const cardChampions = `
                <li class="list-champions">
                    <div class="champion-name">${ newArrayOfRole.name}</div>
                    <div class="champion-img"><img class= "post-image" src="${ newArrayOfRole.img}"/></div>
                </li>
          `;
            listChampions += cardChampions;
        });
        containerList.innerHTML = listChampions;
    };
    createTemplate(newArrayOfRole);
};
filterBtn.addEventListener('click', filterOfRole);
let radioButtons = document.getElementsByName('radio-name');
for (let iIndex in radioButtons) {
    let iRadio = radioButtons[iIndex];
    iRadio.addEventListener('click', filterOfRole);
}
