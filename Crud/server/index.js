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
    err ? console.log(err) : console.log(result);
  });

});

app.get("/getCards", (req, res) => {

  let query = "SELECT * FROM crudreact.peixes;";

  db.query(query,(err, result) => {
    err ? console.log(err) : res.send(result);
  });
});

// app.post("/register", (req, res) => {
//   const { name } = req.body;
//   const { cost } = req.body;
//   const { category } = req.body;

//   let query = "INSERT INTO peixes (name,cost,category) VALUES (?,?,?)";

//   db.query(query, [name, cost, category],(err, result) => {
//     err ? console.log(err) : console.log(result);
//   });

// });




// app.get("/", (req, res) => {
// //   let query = "SELECT * FROM crudreact.peixes;";

// });

app.listen(3001, () => {
  console.log("Rodando Server.");
});
