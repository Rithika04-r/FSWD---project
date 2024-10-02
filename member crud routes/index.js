import Router from "express";
import Member from "../../model/member.js";
const router = Router();
router.put("/put/:id", async (req, res) => {
  try {
    const member = await Member.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!member) {
      return res.send("Membership not found");
    }
    res.send(member);
  } catch (error) {
    res.send(error);
  }
});
router.delete("/cust/:id", async (req, res) => {
  try {
    const member = await Member.findByIdAndDelete(req.params.id);
    if (!member) {
      return res.send("Membership not found");
    }
    res.send(member);
  } catch (error) {
    res.send(error);
  }
});
