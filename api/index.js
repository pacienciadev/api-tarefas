import express from "express";
import pkg from "body-parser";
import db from "./utils/database.js";

const { json, urlencoded } = pkg;

const app = express();

app.use(json());
app.use(urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send(
    "<div><h1>Tarefas api - Paciencia dev</h1><h2>Crie, edite, busque e apague.</h2></div>"
  );
});

db.sync()
  .then(() => {
    app.listen(3000, () =>
      console.log("\n ✨ Api rodando em - http://localhost:3000/")
    );
  })
  .catch((err) => console.log(err));
