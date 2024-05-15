const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "password",
  database: "crud",
});

app.post("/create", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const mno = req.body.mno;
  const dob = req.body.dob;

  db.query(
    "INSERT INTO userinfo (name, email, mno, dob) VALUES (?,?,?,?)",
    [name, email, mno, dob],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.get("/databases", (req, res) => {
    db.query("SELECT * FROM userinfo", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

app.put("/update",(req,res)=>{
  const id = req.body.id;
  const email = req.body.email;
  db.query("UPDATE userinfo SET email = ? WHERE id = ? ",
    [email,id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  )
})


app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM userinfo WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});


app.listen(3007,()=>{
    console.log("your server is working on port 3007");
})