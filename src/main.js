const menuBtn = document.getElementById('id-menuButton');
const menuShow = document.getElementById('id-menuShow');
const mainBtn = document.getElementById('id-mainButton');
const championsBtn = document.getElementById('id-championsButton');
const filterBtn = document.getElementById('id-championsFilter');
const welcomeBtn = document.getElementById('id-welcomeButton');
document.getElementById('contenedor_top').style.display = 'none';
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
    document.getElementById('id-main').style.display = 'block'
    document.getElementById('id-auxiliary').style.display = 'none';
    document.getElementById('id-welcome').style.display = 'block';
    //document.getElementById('id-topChampions').style.display = 'block';
    document.getElementById('id-createTitle').style.display = 'none';
    document.getElementById('id-containerChampions').style.display = 'none';
    document.getElementById('id-mainFilter').style.display = 'none';
};
mainBtn.addEventListener('click', loadMain);
  //  Cargar Top de campeones
  const topChampions = () => {

    document.getElementById('id-main').style.display = 'none';
  document.getElementById('id-welcome').style.display = 'none';
  document.getElementById('id-auxiliary').style.display = 'block';
  document.getElementById('contenedor_top').style.display = 'block';
 document.getElementById('id-mainFilter').style.display = 'none';

    let campeones = Object.values(dataLol.data);
  //Quiero filtrar por dificultad
  let dificultCampeon = [];
  for (let i = 0; i < campeones.length; i++) {
    dificultCampeon.push(campeones[i]);
  }

  dificultCampeon.sort((ab, cd) => {
    return cd.info.difficulty - ab.info.difficulty;
  }
  );
  let newArray = [];
    for (var i = 0; i < 10; i++) {
      newArray.push(dificultCampeon[i]);
    }

    // insertando las imagenes y nombres
    const containerList = document.getElementById('id-topList');
      const createTemplate = (data) => {
        let listChampions = '';
        data.forEach((newArray) => {
            const cardChampions = `
                <div class="contenedor-topchampion">
                   <div class="champion-card">
                      <img class="imagen_Campeon" src="${ newArray.splash}" width="290"/>
                      <h5 class="campeon-name">${ newArray.name}</h5>
                      <p class="champion-title" id="titulo">${newArray.title}</p>
                      <p class="champion-tags">Tipo: ${newArray.tags}<p>
                     </div>
                  </div>
              `;
                listChampions += cardChampions;
            });
            containerList.innerHTML = listChampions;
        };
        createTemplate(newArray);
  };
  welcomeBtn.addEventListener('click', topChampions);
// Cargar campeones
const loadChampions = () => {

    document.getElementById('id-main').style.display = 'none'
    document.getElementById('contenedor_top').style.display = 'none';
    document.getElementById('id-auxiliary').style.display = 'block';
    document.getElementById('id-createTitle').style.display = 'block';
    document.getElementById('id-welcome').style.display = 'none';
    document.getElementById('id-containerChampions').style.display = 'block';
    document.getElementById('id-mainFilter').style.display = 'none';
    //document.getElementById('id-topChampions').style.display = 'none';
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
                <a class="list-champions" href="#${ data.id}">
                    <div class="champion-name">${ data.name}</div>
                    <div class="champion-img"><img class= "post-image" src="${ data.img}"/></div>
                </a>
                <div id="${ data.id}" class="modal-champions">
                    <div class="container-modal" style="background-image: url('${ data.splash}');">
                        <a href="#container-champions" class="btn-close">Close</a>
                        <h1>${ data.name}</h1>
                        <p class="description-champions">${ data.blurb}<p>
                    </div>
                </div>
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
    document.getElementById('id-welcome').style.display = 'none';
      document.getElementById('id-main').style.display = 'none'
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
                <a class="list-champions" href="#${ newArrayOfRole.key}">
                    <div class="champion-name">${ newArrayOfRole.name}</div>
                    <div class="champion-img"><img class= "post-image" src="${ newArrayOfRole.img}"/></div>
                </a>
                <div id="${ data.id}" class="modal-champions">
                    <div class="container-modal" style="background-image: url('${ data.splash}');">
                        <a href="#container-champions" class="btn-close">Close</a>
                        <h1>${ data.name}</h1>
                        <p class="description-champions">${ data.blurb}<p>
                    </div>
                </div>
          ` /* <div id="${ newArrayOfRole.key}" class="modal-champions">
                    <div class="modal-filter">
                        <a href="#container-champions" class="btn-close">Close</a>
                        <div class="img-modalChampions" ><img class="img-modal" src="${ newArrayOfRole.splash}"/></div>
                        <div class="container-canvas"><canvas id="id-chartChampions" class="chart-champions"></canvas></div>
                    </div>
                </div>  */;
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
