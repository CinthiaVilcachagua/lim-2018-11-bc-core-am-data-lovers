const getChampions = (jsonChampions) => {
    let newarray = [];
    for (let i = 0; i < jsonChampions.length; i++) {
        newarray.push({ name: jsonChampions[i].name, img: jsonChampions[i].img });
    }
    return newarray;
};
const filterRoleChampions = (jsonChampions, filter) => {
    const arrayFilter = jsonChampions.filter((champion) => {
        const propiedad = champion.tags;
        return propiedad[0] === filter || propiedad[1] === filter;
    });
    return arrayFilter;
};
window.lol = {
    getChampions,
    filterRoleChampions,
};