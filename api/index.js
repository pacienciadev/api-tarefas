import express from "express";
import pkg from "body-parser";

const { json, urlencoded } = pkg;

const app = express();

app.use(json());
app.use(urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Paciencia dev - api rodando");
});

app.listen(3000, () =>
  console.log("\n ✨ Api rodando em - http://localhost:3000/")
);
