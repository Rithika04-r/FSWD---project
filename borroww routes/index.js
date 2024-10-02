import Router from "express";
import Borrow from "../../model/borrow.js";
const router = Router();
router.put("/puts/:id", async (req, res) => {
  try {
    const borrow = await Borrow.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!borrow) {
      return res.send("Borrow not found");
    }
    res.send(borrow);
  } catch (error) {
    res.send(error);
  }
});
router.delete("/custs/:id", async (req, res) => {
  try {
    const borrow = await Borrow.findByIdAndDelete(req.params.id);
    if (!borrow) {
      return res.send("Borrow not found");
    }
    res.send(borrow);
  } catch (error) {
    res.send(error);
  }
});
export default router;
