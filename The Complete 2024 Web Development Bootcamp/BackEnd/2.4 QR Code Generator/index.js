import inquirer from 'inquirer';
import qr from "qr-image";
import fs from "fs";

inquirer
    .prompt([
        {
            message: "Type in your URL",
            name: "URL",
        }
    ])
    .then((answers) => {
        const url = answers.URL;
        const qrCode = qr.image(url);

        qrCode.pipe(fs.createWriteStream('qrCode.png'));
        fs.writeFile("generatedQR.txt", url, (err) => {
            if (err) throw err;
            console.log("The file has been saved");

        })
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });


// console.log(qrCode);
// 
