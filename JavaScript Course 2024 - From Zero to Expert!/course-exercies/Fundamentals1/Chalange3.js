let dolphin1 = 97;
let dolphon2 = 112;
let dolphin3 = 101;

let koala1 = 109;
let koala2 = 95;
let koala3 = 106;

let avg_dolphin = (dolphin1 + dolphon2 + dolphin3) / 3;
let avg_koala = (koala1 + koala2 + koala3) / 3;


if (avg_dolphin >= 100 || avg_koala >= 100) {

    if (avg_dolphin === avg_koala && avg_dolphin >= 100 && avg_koala >= 100) {
        console.log(`its draw`);
    }
    else if (avg_dolphin > avg_koala) {
        console.log(`dolphins won`);
    }
    else if (avg_koala > avg_dolphin) {
        console.log(`koalas won`);
    }
}
else console.log(`neither team have 100 points or more`)