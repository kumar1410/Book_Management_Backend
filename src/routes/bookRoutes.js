import express from "express";
import { handleAddBook, handleGetBooks } from "../controllers/bookController.js";
import { validateBook } from "../middlewares/validationMiddleware.js";
import { verifyToken } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/books",verifyToken, handleGetBooks);
router.post("/add/books",verifyToken, validateBook, handleAddBook);

export default router;
