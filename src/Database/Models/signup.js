import mongoose from "mongoose";

// mongoose
const user=new mongoose.Schema({
    name:String,
    email:String,
     
    passo:String,
    
    mob:String
});
export const Product =  mongoose.models && mongoose.models.ours 
? mongoose.models.ours
: mongoose.model('ours', user);