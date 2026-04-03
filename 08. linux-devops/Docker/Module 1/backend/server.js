const express = require("express");
const { Pool } = require("pg");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: 5432,
});

app.get("/notes", async (req, res) => {
  const result = await pool.query("SELECT * FROM notes");
  res.json(result.rows);
});

app.post("/notes", async (req, res) => {
  const { text } = req.body;
  await pool.query("INSERT INTO notes(text) VALUES($1)", [text]);
  res.sendStatus(201);
});

app.listen(5000, () => {
  console.log("Backend running on port 5000");
});
