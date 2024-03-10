import mongoose from "mongoose";

// mongoose
const user=new mongoose.Schema({
    name:{
        // name:String
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
     
    password:{
       
        type:String,
        required:true,
    },
    mob:{
        type:String,
        required:true
    }

});
export const Product =  mongoose.models && mongoose.models.ours 
? mongoose.models.ours
: mongoose.model('ours', user);