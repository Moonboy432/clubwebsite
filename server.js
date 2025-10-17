const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password:"",
  database: "uybfc"
});

db.connect((err) => {
  if(err) {
    console.error("Database connection failed:", err);
  } else {
    console.log("Connected to XAMPP MySQL database");
  }
});

app.post("/add-user", (req, res) => {
  console.log("Received data:", req.body);
  const {first_name, last_name, email, nationality, player_wing} = req.body;

  const sql =
    "INSERT INTO users (first_name, last_name, email, nationality, player_wing) VALUES (?, ?, ?, ?, ?)";
    db.query(sql, [first_name, last_name, email, nationality, player_wing], (err, result) => {
      if (err) {
        console.error("Error inserting data:", err);
        return res.status(500).json({message: "Database error"});
      }
      return res.json({
        message: "User added successfully",
        id: result.insertId,
      });
    });
});

app.get("/", (req, res) => {
  const first_name = "Larry";
  const last_name = "Johnson";
  const email =  "larryjphnson@gmail.com";
  const nationality = "Nigerian";
  const player_wing = "Striker";
  const sql ="INSERT INTO users (first_name, last_name, email, nationality, player_wing) VALUES (?, ?, ?, ?, ?)";

   db.query(sql, [first_name, last_name, email, nationality, player_wing], (err, result) => {
    if (err) {
      console.error("Error inserting data:", err);
      return res.status(500).send("Database error");
    }
    console.log("User added successfully!");
    return res.send("hello");
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});