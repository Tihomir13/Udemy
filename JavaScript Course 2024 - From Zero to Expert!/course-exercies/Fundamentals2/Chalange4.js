let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];

const calcTip = function (bills) {
    if (bills > 50 && bills < 300)
        tips.push(bills * 0.15);
    else tips.push(bills * 0.20);
}

const calcAverage = function (arr) {
    let sum = 0;
    let avg;

    for (let i = 0; i <= 9; i++) {
        sum += arr[i];
    }
    avg = sum / arr.length;
    console.log(avg);
}

for (let i = 0; i < bills.length; i++) {
    calcTip(bills[i]);
    totals[i] = tips[i] + bills[i];
}

console.log(tips);
console.log(totals);
calcAverage(totals);