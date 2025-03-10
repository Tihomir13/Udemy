import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "123",
  port: 5432
});

db.connect();

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


async function visitedCountries() {
  let countries = [];
  const result = await db.query("SELECT country_code FROM visited_countries");

  result.rows.forEach(row => {
    countries.push(row.country_code);
  });
  return countries;
}

app.get("/", async (req, res) => {
  //Write your code here.
  const countries = await visitedCountries();
  res.render("index.ejs", { countries, total: countries.length });
});

app.post("/add", async (req, res) => {
  const newCountry = req.body.country;
  try {
    const queryGetCode = await db.query(`SELECT country_code FROM countries WHERE LOWER (country_name) LIKE '%' || '${newCountry}' || '%'`);
    const code = queryGetCode.rows[0].country_code;
    try {
      await db.query('INSERT INTO visited_countries (country_code) VALUES($1)', [code]);
      res.redirect("/");
    }
    catch (err) {
      console.error(err);
      const countries = await visitedCountries();
      res.render('index.ejs', { countries, total: countries.length, error: "Country has already been added, try again." })
    }
  }
  catch (err) {
    console.error(err);
    const countries = await visitedCountries();
    res.render('index.ejs', { countries, total: countries.length, error: "Country name does not exist, try again." })
  }


})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
