let counter = 10;
setInterval(() => {
    counter--;
    if (counter >= 0) {
        count = document.getElementById("count");
        count.innerHTML = counter;
    }
    if (counter === 0) {
        count.innerHTML = "Happy Independence Day";
    }
}, 1000);
