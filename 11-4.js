(function (a = 5, b = 15) {
    let intervalId = setInterval(() => {
        console.log(a);
        a++;
        a > b ? clearInterval(intervalId) : null;
    }, 1000);
})();
