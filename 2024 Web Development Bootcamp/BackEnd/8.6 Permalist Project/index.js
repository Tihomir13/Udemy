import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "permalist",
  password: "123",
  port: 5432
});

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {
  let items = (await db.query("SELECT * FROM items")).rows;

  res.render("index.ejs", {
    listTitle: "Today",
    listItems: items,
  });
});

app.post("/add", async (req, res) => {
  const item = req.body.newItem;
  try {
    await db.query("INSERT INTO items(title) VALUES ($1)", [item]);
    res.redirect("/");
  } catch (err) {
    console.log(err);
  }
});

app.post("/edit", async (req, res) => {
  const editedTaskId = req.body.updatedItemId;
  const editedTask = req.body.updatedItemTitle;
  await db.query("UPDATE items SET title = $1 WHERE id = $2", [editedTask, editedTaskId]);
  res.redirect('/');
});

app.post("/delete", async (req, res) => {
  const deleteItemId = req.body.deleteItemId;
  await db.query("DELETE FROM items WHERE id = $1", [deleteItemId]);
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
