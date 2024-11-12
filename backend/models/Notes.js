import mongoose, { mongo } from "mongoose";

const notesSchema = new mongoose.Schema({
    title : {
        type : String , 
        required : true ,
        trim : true ,
        Default : "My Note"
    } , 
    content : {
        type: String , 
        required : true , 
    } , 
    createdAt : {
        type : Date , 
        default : Date.now , 
        expires : 60 * 60 * 24
    }
})

const noteSchema = mongoose.model("Notes" , notesSchema);
export default noteSchema;