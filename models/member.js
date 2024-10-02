import mongoose from "mongoose"; 
const memberSchema = new mongoose.Schema({
    Name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    memberShipStatus:{
        type: String,
        enum: ["active","inactive"],
        default: "active",
        required: true,

    },
});


const Member = mongoose.model("Member",memberSchema);

export default Member;