function indexCalculation(array) {
    let totalOddIndexes = 0;
    let totalEvenIndexes = 0;
    let totalZeroElements = 0;
    array.forEach(function (meshedArrayElement, meshedArrayIndex) {
        if (meshedArrayIndex % 2 === 0 && meshedArrayElement !== 0) {
            totalEvenIndexes++;
        } else if (meshedArrayIndex % 2 !== 0 && meshedArrayElement !== 0) {
            totalOddIndexes++;
        } else {
            totalZeroElements++;
        }
    });
    console.log("totalOddIndexes :", totalOddIndexes);
    console.log("totalEvenIndexes :", totalEvenIndexes);
    console.log("totalZeroElements :", totalZeroElements);
}

indexCalculation([1, "", null, 4.5, 0, null, 23]);
