import express from "express";
import pkg from "body-parser";
import db from "./utils/database.js";
import routes from "./routes/index.js";

const { json, urlencoded } = pkg;

const app = express();

app.use(json());
app.use(urlencoded({ extended: false }));

app.use(routes);

db.sync()
  .then(() => {
    app.listen(3000, () =>
      console.log("\n ✨ Api rodando em - http://localhost:3000/")
    );
  })
  .catch((err) => console.log(err));
