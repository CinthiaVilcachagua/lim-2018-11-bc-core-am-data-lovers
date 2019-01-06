const filterData = (data, filter) => {
    const arrayFilter = data.filter((champion) => {
        const propiedad = champion.tags;
        return propiedad[0] === filter || propiedad[1] === filter;
    });
    return arrayFilter;
};
const sortData = (data, sortBy, sortOrder) => {
    const arrayOrder = data.sort(function(prmA, prmB) {
        if (prmA[sortBy] > prmB[sortBy]) {
            return 1 * sortOrder;
        }
        if (prmA[sortBy] < prmB[sortBy]) {
            return -1 * sortOrder;
        }
        return 0;
    });
    return arrayOrder;
};
window.lol = {
    filterData,
    sortData,
};