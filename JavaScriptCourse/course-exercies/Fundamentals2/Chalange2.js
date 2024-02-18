const bills = [125, 555, 44];
const tips = [];
const total = [];

const calcTip = function (bill) {
    if (bill > 50 && bill < 300)
        tips.push(bill * 0.15);
    else tips.push(bill * 0.20);
}

calcTip(bills[0]);
calcTip(bills[1]);
calcTip(bills[2]);

total.push(bills[0] + tips[0]);
total.push(bills[1] + tips[1]);
total.push(bills[2] + tips[2]);

console.log(tips);
console.log(total);