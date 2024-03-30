import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  let length = (req.body.fName + req.body.fName).length
  const result = `<h1>There are ${length} letters in your name.</h1>`
  res.render("index.ejs", { result });

});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
