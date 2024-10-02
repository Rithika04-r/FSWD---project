import Member from "../../models/member.js";
router.post("/goes", async (req, res) => {
  try {
    const member = Member(req.body);
    await member.save();
    res.send("Membership sucessfully created");
  } catch (error) {
    res.send(error);
  }
});
router.get("/get2", async (req, res) => {
  try {
    const member = await Member.find();
    res.send(member);
  } catch (error) {
    res.send(error);
  }
});
