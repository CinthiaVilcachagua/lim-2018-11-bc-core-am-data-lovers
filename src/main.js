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
// Cargar campeones
const loadChampions = () => {   
    document.getElementById('id-createTitle').style.display = 'block';
    document.getElementById('id-containerChampions').style.display = 'block';
    const containerTitle = document.getElementById('id-createTitle');
    const createTitle = `
        <div class="Title">CAMPEONES</div>
    `;
    containerTitle.innerHTML = createTitle;
    const jsonChampions = Object.values(dataLol.data);
    const containerList = document.getElementById('id-containerList');
    const createTemplate = (data) => {
        let listChampions = '';
        data.forEach((jsonChampions) => {
            const cardChampions = `
                <li class="list-champions">
                    <div class="champion-name">${ jsonChampions.name}</div>
                    <div class="champion-img"><img class= "post-image" src="${ jsonChampions.img}"/></div>
                </li>
          `;
            listChampions += cardChampions;
        });
        containerList.innerHTML = listChampions;
    };
    createTemplate(jsonChampions);
};
championsBtn.addEventListener('click', loadChampions); 
// Filtrar por roles
const loadMain = () => {
    document.getElementById('id-createTitle').style.display = 'none';
    document.getElementById('id-containerChampions').style.display = 'none';
    document.getElementById('id-mainFilter').style.display = 'none';
};
mainBtn.addEventListener('click', loadMain);
const filterOfRole = () => {
    document.getElementById('id-mainFilter').style.display = 'block';
    document.getElementById('id-auxiliary').style.display = 'block';
    document.getElementById('id-containerChampions').style.display = 'none';
    const selectRole = document.getElementById('id-selectRole');
    const roleValue = selectRole.options[selectRole.selectedIndex].value;
    const jsonChampions = Object.values(dataLol.data);
    const filter = roleValue;
    const newArrayOfRole = lol.filterRoleChampions(jsonChampions, filter);
    const containerTitle = document.getElementById('id-createTitle');
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
