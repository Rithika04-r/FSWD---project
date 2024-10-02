import Router from "express";
import Borrow from "../../model/borrow.js";
const router=Router();
router.post("/g",async(req,res)=>{
    try{
        const borrow=Borrow(req.body)
        await borrow.save()
        res.send("Borrow created");
    }catch(error){
        res.send(error);
    }
    
    
});
router.get("/tk",async(req,res)=>{
    try{
    const borrow = await Borrow.find();
    res.send(borrow);
}catch(error){  
        res.send(error)
    }
});