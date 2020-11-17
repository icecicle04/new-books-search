const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const db = require("../models");

// axios
router.get("/api/books", (req, res) => {
  db.getBook
    .find({})
    .then((foundBooks) => {
      res.json(foundBooks);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: true,
        data: null,
        message: "failed to retrieve all books.",
      });
    });
});

router.post("/api/books", (req, res) => {
  console.log(req.body);
  db.Book.create({})
    .then((newBook) => {
      console.log(newBook);
    })
    .then((err) => {
      if (err) throw err;
    });
});

router.delete("/api/books/:id", (req, res) => {
  console.log(req.body);
});

export default router;
