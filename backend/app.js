import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";


// ROUTES
import authRoute from "./routes/auth.js";
import notesRoute from "./routes/notes.js"

// DATABASE
import connectdb from "./config/config.js"

const port = process.env.PORT || 3000;
const app = express();
const JWT_SECRET = process.env.JWT_SECRET;

app.use(express.json());
app.use(cookieParser());
app.use("/app/auth" , authRoute);
app.use("/app/notes" , notesRoute);


app.listen(port , (req , res) => {
    connectdb();
    console.log(`Server running on PORT ${port}`);
})