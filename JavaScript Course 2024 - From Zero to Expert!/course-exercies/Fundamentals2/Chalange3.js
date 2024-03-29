'use strict'

const Mark = {
    fullName: `Mark Miller`,
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        return this.mass / (this.height ** 2);
    }
}

const John = {
    fullName: `John Smith`,
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        return this.mass / (this.height ** 2);
    }
}

if (Mark.calcBMI() > John.calcBMI())
    console.log(`${Mark.fullName}'s BMI (${Mark.calcBMI()}) is higher than John's (${John.calcBMI()})!`)
else
    console.log(`${John.fullName}'s BMI (${John.calcBMI()}) is higher than John's (${Mark.calcBMI()})!`);