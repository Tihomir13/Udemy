//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile('c:/Users/tihom/Udemy/2024 Web Development Bootcamp/BackEnd/3.5 Secrets Project/public/index.html');
})

app.post("/check", (req, res) => {
    if (req.body.password == "ILoveProgramming")
        res.sendFile('c:/Users/tihom/Udemy/2024 Web Development Bootcamp/BackEnd/3.5 Secrets Project/public/secret.html');
    else
        res.sendFile('c:/Users/tihom/Udemy/2024 Web Development Bootcamp/BackEnd/3.5 Secrets Project/public/index.html');
})

app.listen(port, () => {
    console.log(`Listening to port: ${port}`);
});