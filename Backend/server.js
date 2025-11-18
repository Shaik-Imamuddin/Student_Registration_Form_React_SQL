const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Your SQL Password",
  database: "studentregdb",
});

db.connect((err) => {
  if (err) {
    console.error("MySQL Connection Error:", err);
    return;
  }
  console.log("MySQL Connected");
});

app.post("/api/students", (req, res) => {
  const { regno, name, email, department } = req.body;

  const query = `
    INSERT INTO students (regno, name, email, department)
    VALUES (?, ?, ?, ?)
  `;

  db.query(query, [regno, name, email, department], (err, result) => {
    if (err) {
      return res.json({ success: false, message: err.message });
    }
    res.json({ success: true, message: "Student saved!" });
  });
});

app.listen(2000, () => {
  console.log("Server running on port 2000");
});