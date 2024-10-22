var count = 0;
var interval = setInterval(function () {
    console.log("hello");
    count++;
    if (count === 10) {
        clearInterval(interval);
    }
}, 1000);
