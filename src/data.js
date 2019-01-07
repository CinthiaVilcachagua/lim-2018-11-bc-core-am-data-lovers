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
const computeStats = (data) => {
    const arrayAttack = data.map((ataque) => {
        return ataque.stats.attackdamage;
    });
    arrayAttack.sort((prmA, prmB) => prmA - prmB);
    const max = Math.max(...arrayAttack);
    const min = Math.min(...arrayAttack);
    let indexRight = Math.floor((arrayAttack.length - 1) / 2);
    let indexLeft = Math.ceil((arrayAttack.length - 1) / 2);
    let median = Math.round(((arrayAttack[indexRight] + arrayAttack[indexLeft]) / 2) * 100) / 100;
    const statsResults = [max, min, median];
    return statsResults;
};
window.lol = {
    filterData,
    sortData,
    computeStats,
};
