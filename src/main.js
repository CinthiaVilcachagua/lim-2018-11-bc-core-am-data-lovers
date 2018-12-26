const menuBtn = document.getElementById('id-menuButton');
const menuShow = document.getElementById('id-menuShow');
const loadMenu = () => {
    if (menuShow.className === 'show') {
        menuShow.className = '';
    } else {
        menuShow.className = 'show';
    }
};
menuBtn.addEventListener('click', loadMenu);

const championsBtn = document.getElementById('id-championsButton');

const loadChampions = () => {
    const containerTitle = document.getElementById('createTitle');
    const createTitle = `
        <div class="createTitle">CAMPEONES</div>
    `;
    containerTitle.innerHTML = createTitle;
    const champions = Object.values(dataLol.data);
    const containerList = document.getElementById('container-list');
    const createTemplate = (data) => {
        let listChampions = '';
        data.forEach((champions) => {
            const cardChampions = `
                <li class="list-champions">
                    <div class="champion-name">${ champions.name}</div>
                    <div class="champion-img"><img class= "post-image" src="${ champions.img}"/></div>
                </li>
          `;
            listChampions += cardChampions;
        });
        containerList.innerHTML = listChampions;
    };
    createTemplate(champions);
};
championsBtn.addEventListener('click', loadChampions); 