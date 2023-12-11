const book = require("../models/books_model");
const mongoose = require("mongoose");

let addBook = async (req, res) => {
  //extracting the data of the new book record/document
  const new_book = new book(req.body);

  try {
    //saves data to db
    const book_to_db = await new_book.save();
    res.status(200).json({ message: "Adding of book is successful" });
  } catch (error) {
    res.status(400).json(error);
  }
};

let getAllBooks = async (req, res) => {
  try {
    const allBooks = await book.find();
    res.status(200).json(allBooks);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

let getBookById = async (req, res) => {
  const bookId = req.params.id;

  try {
    const foundBook = await book.findById(bookId);

    if (!foundBook) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json(foundBook);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const updateBook = async (req, res) => {
  try {
    const updatedBook = await book.findByIdAndUpdate(
      { _id: req.params.id },
      { ...req.body }
    );
    res.status(200).json({ message: "The product has been updated" });
  } catch (error) {
    res.status(400).json(error);
  }
};

const deleteBook = async (req, res) => {
  try {
    await book.findByIdAndDelete({ _id: req.params.id });
    res.status(200).json({ message: "The book has been removed" });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { addBook, getAllBooks, getBookById, updateBook, deleteBook };
