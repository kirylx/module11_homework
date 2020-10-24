function calculateSum(num1) {
    return function calculateSum(num2) {
        return num1 + num2;
    };
}

// invoke
const result = calculateSum(1)(3);
console.log(result);
