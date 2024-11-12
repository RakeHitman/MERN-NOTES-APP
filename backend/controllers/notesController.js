import Notes from "../models/Notes.js";
import User from "../models/User.js"
// import mongoose from "mongoose";

export const createNote = async (req, res) => {
    try {
        const userID = req.user.id;
        const { title, content } = req.body;
        const user = await User.findById(userID);
        if (!user) {
            console.log("User not found")
            res.status(500).json("User not found")
        }

        const newNote = new Notes({
            userID ,
            notesId: user.notes + 1,
            title,
            content,
            createdAt: new Date()
        })

        await newNote.save();

        user.notes.push(newNote._id);
        await user.save();

        console.log("Note successfully created !")
        return res.status(200).json({message : "Note successfully created" , note : newNote});
    } catch (error) {
        console.log("An error was found ", error)
        return res.status(500).json({ message: error });
    }
}