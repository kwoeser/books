const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

// Enable CORS for all origins
app.use(cors());

// Connect to the database
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Herbertpur@3",
  database: "test",
});

// CRUD OPERATIONS (CREATE, READ, UPDATE, DELETE)
app.get("/books", (req, res) => {
  const q = "SELECT * FROM books";
  db.query(q, (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  });
});

app.use(express.json());

app.post("/books", (req, res) => {
  const q =
    "INSERT INTO books (`title`, `author`, `price`, `cover`) VALUES (?)";
  const values = [
    req.body.title,
    req.body.author,
    req.body.price,
    req.body.cover,
  ];
  db.query(q, [values], (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json("Book has been created successfully.");
  });
});

// Handles deleting book DELETE
app.delete("/books/:id", (req, res) => {
  const bookId = req.params.id;
  const q = "DELETE FROM books WHERE id = ?";
  db.query(q, [bookId], (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json("Book has been deleted successfully.");
  });
});

// Handles updating book PUT
app.put("/books/:id", (req, res) => {
  const bookId = req.params.id;
  const q =
    "UPDATE books SET `title`= ?, `author`= ?, `price`= ?, `cover`= ? WHERE id = ?";

  const values = [
    req.body.title,
    req.body.author,
    req.body.price,
    req.body.cover,
  ];

  db.query(q, [...values, bookId], (err, data) => {
    if (err) {
      return res.send(err);
    }

    return res.json("Book has been updated successfully.");
  });
});

app.listen(3333, () => {
  console.log("Connected to backend LISTENING...");
});
