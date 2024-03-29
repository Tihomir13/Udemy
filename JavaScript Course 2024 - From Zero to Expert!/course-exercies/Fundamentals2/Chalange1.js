const dolphin1 = 85;
const dolphin2 = 54;
const dolphin3 = 41;

const koala1 = 23;
const koala2 = 34;
const koala3 = 27;

const calcAverage = (animal1, animal2, animal3) => {
    return (animal1 + animal2 + animal3) / 3;
}

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins > 2 * avgKoalas)
        console.log(`Koalas win (${avgDolphins} vs ${avgKoalas})`);
    else if (avgKoalas > 2 * avgDolphins)
        console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
    else
        console.log(`Neither team won`);

}

const avgDolphins = calcAverage(dolphin1, dolphin2, dolphin3);
const avgKoalas = calcAverage(koala1, koala2, koala3);

checkWinner(avgDolphins, avgKoalas);
