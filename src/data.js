const getChampions = (jsonChampions) => {
    let newarray = [];
    for (let i = 0; i < jsonChampions.length; i++) {
        newarray.push({ name: jsonChampions[i].name, img: jsonChampions[i].img });
    }
    return newarray;
};
const filterRoleChampions = () => {

};
window.lol = {
    getChampions,
    filterRoleChampions,
};