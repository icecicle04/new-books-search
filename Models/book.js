const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: "Title is required",
  },
  authors: {
    type: Schema.Types.ObjectId,
    ref: "Authors",
  },
  description: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    data: Buffer,
  },
  link: {
    type: String,
    ref: "Link",
  },
});

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;
