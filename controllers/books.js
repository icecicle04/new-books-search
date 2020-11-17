const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const db = require("../models");

// axios 
router.get("/api/books", (req, res) => {
  db.Book.find({})
    .populate("authors", "firstName lastName")
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
const newBook = {
    title: req.body.title,
    pages: req.body.pages,
    author: req.body.author,
};