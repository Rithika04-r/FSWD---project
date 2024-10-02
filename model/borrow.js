import mongoose from "mongoose";
const borrowingSchema = new mongoose.Schema({
  bookTitle: {
    type: String,
    required: true,
  },
  memberName: {
    type: String,
    required: true,
  },
  borrowDate: {
    type: String,
    required: true,
  },
  returnDate: {
    type: String,
    required: true,
  },
});

const Borrowing = mongoose.model("Borrowing", borrowingSchema);
export default Borrowing;
