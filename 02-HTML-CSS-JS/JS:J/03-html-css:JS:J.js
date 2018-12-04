function checkValue(num) {
    if (num <= 0 || isNaN(num)) {
        console.log('ERROR');
    } else if (num >= 1000000) {
        console.log(num);
    } else if (num < 1000000) {
        do {
            num *= 10;
        } while (num < 1000000);
        console.log(num);
    }
}

checkValue(30);
