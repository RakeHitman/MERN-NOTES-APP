import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const registerController = async (req ,res) => {
    try {
        const { username , password , email} = req.body;
        const existingUser = await User.findOne({$or : [{username , email}]}) ;
        if (existingUser ) { 
            res.status(404).json("User already exists.")
            console.log("User alredy exists.")
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = bcrypt.hashSync(password , salt);
        const newUser = new User({...req.body , password:hashedPassword});
        const savedUser = await newUser.save();
        const token = jwt.sign({ id : newUser._id } , JWT_SECRET , {expiresIn : '1d'});
        res.status(200).json("User successfully registered !",savedUser , token);
    } catch (error) {
        res.status(404).json(error);
        console.log(error);
    }
}

// 1. Checking if the user exists
// 2. if not =>  creating new user 
// 3. making password secret with bcrypt
// 3. JWT assigining a json web token 
// 5. Then saving the new user