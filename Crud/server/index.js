const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");


// Services

const registrar = ("/register")

// Conexão com banco Mysql
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "494577",
  database: "crudreact",
});

app.use(cors());
app.use(express.json());

app.post("/register", (req, res) => {
  const { name } = req.body;
  const { cost } = req.body;
  const { category } = req.body;

  let query = "INSERT INTO peixes (name,cost,category) VALUES (?,?,?);";

  db.query(query, [name, cost, category],(err, result) => {
    err ? console.log(err) : res.send(result);
  });
});

app.get("/getCards", (req, res) => {

  let query = "SELECT * FROM crudreact.peixes;";

  db.query(query,(err, result) => {
    err ? console.log(err) : res.send(result);
  });
});

app.put("/edit", (req, res) => {
  const { id } = req.body;
  const { name } = req.body;
  const { cost } = req.body;
  const { category } = req.body;

  let query = "UPDATE peixes SET name = ?, cost = ?, category = ? WHERE idpeixes = ?";

  db.query(query, [name, cost, category, id], (err, result) => {
    err ? console.log(err) : res.send(result);
  });
  console.log("Atualizado com sucesso!");
});

app.delete("/delete/:id", (req, res) => {
  const { id } = req.params;

  let query = "DELETE FROM peixes WHERE idpeixes = ?";

  db.query(query, [id], (err, result) => {
    err ? console.log(err) : res.send(result);
  });
  console.log("Deletado com sucesso!");
});

app.listen(3001, () => {
  console.log("Rodando Server.");
});
