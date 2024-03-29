import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    console.log(req.rawHeaders);
    res.send("Hello");
});


app.get("/contact", (req, res) => {
    res.send("0889328488")
})

app.get("/about", (req, res) => {
    res.send("H");
})
app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
})