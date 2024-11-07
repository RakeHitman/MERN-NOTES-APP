import exp from "constants";
import mongoose, { mongo } from "mongoose";
import { type } from "os";

const userSchema = new mongoose.Schema({
    username:{
        type : String , 
        required : false , 
        unique : true , 
        trim : true , 
        lowercase : true
    } , 
    email : {
        type:String , 
        required: true , 
        unique : true , 
        trim : true , 
        lowercase : true
    } ,
    password : {
        type : String , 
        required: true
    } , 
    fullName : {
        type : String , 
        required : false
    } , 
    notes : [{
        type : mongoose.Schema.Types.ObjectId , 
        ref : "Notes"
    }] , 
} , {timestamps:true})

const userModel = mongoose.model("User" , userSchema);
export default userModel;