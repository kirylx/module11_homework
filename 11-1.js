function parity(array) {
    let even = 0,
        odd = 0,
        zero = 0;
    array.forEach((element) => {
        if (typeof element === "number" && !isNaN(element)) {
            if (element === 0) {
                zero++;
            } else if (element % 2 === 0) {
                even++;
            } else {
                odd++;
            }
        }
    });

    console.log("Odd elements :", odd);
    console.log("Even elements :", even);
    console.log("Zero elements :", zero);
}

parity([0, 1, 2, "", null, 0, 1, 2]);
