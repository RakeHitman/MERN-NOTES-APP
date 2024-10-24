import express from "express";
import dotenv from "dotenv";
dotenv.config();
import authRoute from "./routes/auth.js";
import cookieParser from "cookie-parser";

import connectdb from "./config/config.js"

const port = process.env.PORT || 3000;
const app = express();
const JWT_SECRET = process.env.JWT_SECRET;

app.use(express.json());
app.use(cookieParser());
app.use("/app/register" , authRoute)

app.listen(port , (req , res) => {
    connectdb();
    console.log(`Server running on PORT ${port}`);
})