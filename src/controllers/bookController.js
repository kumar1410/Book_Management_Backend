import Book from "../models/Book.js";

export const handleGetBooks = async (req, res) => {
  try {
    // Fetch all books
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: "Server error occurred" });
  }
};

export const handleAddBook = async (req, res) => {
  const { title, author, description } = req.body;

  try {
    // Check if book already exists
    const existingBook = await Book.findOne({ title, author, description });
    if (existingBook) {
      res.status(400).json({ message: "Book already exists" });
      return;
    }

    // Create and save the new book
    const newBook = new Book({ title, author, description });
    await newBook.save();

    res.status(201).json({ message: "Book added successfully", book: newBook });
  } catch (error) {
    res.status(500).json({ message: "Server error occurred" });
  }
};

export const handleDeleteBook = async (req, res) => {
  const { id } = req.params;

  try {
    // Find and delete the book by ID
    const deletedBook = await Book.findByIdAndDelete(id);
    if (!deletedBook) {
      res.status(404).json({ message: "Book not found" });
      return;
    }

    res.status(200).json({ message: "Book deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error occurred" });
  }
};

export const handleUpdateBook = async (req, res) => {
  const { id } = req.params;
  const { title, author } = req.body;

  try {
    // Find and update the book by ID
    const updatedBook = await Book.findByIdAndUpdate(
      id,
      { title, author },
      { new: true, runValidators: true }
    );

    if (!updatedBook) {
      res.status(404).json({ message: "Book not found" });
      return;
    }

    res
      .status(200)
      .json({ message: "Book updated successfully", book: updatedBook });
  } catch (error) {
    res.status(500).json({ message: "Server error occurred" });
  }
};
