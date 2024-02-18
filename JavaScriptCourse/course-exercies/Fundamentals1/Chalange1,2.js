let MarkMass = 78;
let MarkHeight = 1.69;

let JohnMass = 92;
let JohnHeight = 1.95;

let BMI1 = MarkMass / MarkHeight **2;
let BMI2 = JohnMass / JohnHeight **2;

console.log(BMI1,BMI2);
console.log(BMI1>BMI2);

if(BMI1>BMI2)
{
    console.log(`Mark's BMI is higher than John's! \n\ 
    Mark's BMI (${BMI1}) is higher thank John's (${BMI2})`);
}
else
{
    console.log(`John's BMI is higher than Mark's! \n\ 
    John's BMI (${BMI2}) is higher thank Mark's (${BMI1})`);
}
