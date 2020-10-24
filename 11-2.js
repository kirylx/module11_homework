(function isPrime(num = 7) {
    if (num > 1000) {
        console.log(
            "Input number is incorrect. Please, provide a number less than 1000"
        );
    } else {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                console.log(false);
                return false;
            }
        }
        const result = num > 1 ? true : false;
        console.log(result);
        return result;
    }
})();
