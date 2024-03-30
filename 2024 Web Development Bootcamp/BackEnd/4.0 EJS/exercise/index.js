import express from "express";

const app = express()
const port = 3000;

app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  const date = new Date();
  const day = date.getDay();

  let weekd;
  let str;
  if (day != 6 && day != 0) {
    weekd = "weekday";
    str = "work hard!";
  }
  else {
    weekd = "weekend";
    str = "have fun!"
  }
  res.render("index.ejs", { weekday: weekd, word: str });
})

app.listen(port, () => {
  console.log(`Listening to port: ${port}`);
})