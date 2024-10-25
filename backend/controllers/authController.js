import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


// REGISTER CONTROLLER
export const registerController = async (req, res) => {
    try {
        const { username, password, email } = req.body;
        const existingUser = await User.findOne({ $or: [{ username, email }] });
        if (existingUser) {
            res.status(409).json("User already exists.")
            console.log("User alredy exists.")
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hashSync(password, salt);
        const newUser = new User({ ...req.body, password: hashedPassword });
        const savedUser = await newUser.save();
        const token = jwt.sign(
            { id: newUser._id, username: savedUser.username },
            process.env.JWT_SECRET,
            { expiresIn: '1d' }
        );
        res.cookie("token", token, { httpOnly: true, secure: process.env.NODE_ENV === "production", maxage: 60 * 60 * 1000 });
        res.status(200).json({ message: "User registered successfully", user: savedUser });
    } catch (error) {
        res.status(404).json({ message: "An error was found.", error: error.message });
        console.log(error);
    }
}

// LOG-IN CONTROLLER
export const loginController = async (req ,res) => {
    let existingUser;
    try {
        const { username, email, password } = req.body;
        existingUser = await User.findOne({ $or: [{ email }, { username }] });
        if (!existingUser) {
            res.status(404).json("User not found !");
        }
        const match = await bcrypt.compare(password, existingUser.password);
        if( !match ) {
            res.status(400).json("Incorrect password !")
        }
        const token = jwt.sign(
            { id: existingUser._id, username: existingUser.username },
            process.env.JWT_SECRET,
            { expiresIn: '1d' }
        );
        res.cookie("token" , token , {httpOnly : true , secure : process.env.NODE_ENV == "production"});
        return res.status(200).json({message:"User logged in successfully !" , user :existingUser});

    } catch (error) {
        res.status(400).json({ message: "An error was found", error: error.message });
        console.log(error);
    }
}

// LOG-OUT CONTROLLER
export const logoutController = async (req , res) => {
    try {
        res.clearCookie("token"  ,{samesite : "none" , secure : true});
        res.status(200).json({message : "User logged out successfully !"})
    } catch (error) {
        console.log(error);
        res.status(400).json({message : "An error was found !" , error : error.message});
    }
}