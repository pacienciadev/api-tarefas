import express from "express";
import pkg from "body-parser";
import db from "./utils/database.js";
import { createTask } from "./controllers/tasks.js";

const { json, urlencoded } = pkg;

const app = express();

app.use(json());
app.use(urlencoded({ extended: false }));

// rota inicial ou root
app.get("/", (req, res) => {
  res.send(
    "<div><h1>Tarefas api - Paciencia dev</h1><h2>Crie, edite, busque e apague.</h2></div>"
  );
});

// rota para criar tarefas
app.post("/task", createTask);

db.sync()
  .then(() => {
    app.listen(3000, () =>
      console.log("\n ✨ Api rodando em - http://localhost:3000/")
    );
  })
  .catch((err) => console.log(err));
