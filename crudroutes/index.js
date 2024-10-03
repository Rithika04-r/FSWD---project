import Router from "express";
import Book from "../..models/book.js";
const router = Router();
router.post("/go", async (req, res) => {
  try {
    const book = Book(req.body);
    await book.save();
    res.send("Library Management created");
  } catch (error) {
    res.send(error);
  }
});
router.get("/get1", async (req, res) => {
  try {
    const book = await Book.find();
    res.send(book);
  } catch (error) {
    console.log(error);
  }
});
export default router;
