import mongoose from "mongoose";

const user=new mongoose.Schema({
    name:String,
    Password:String,
    email:String,
    mob:String

});
export const Product =  mongoose.models && mongoose.models.ours 
? mongoose.models.ours
: mongoose.model('ours', user);