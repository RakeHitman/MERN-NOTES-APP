import mongoose from "mongoose";

const connectdb = async (req ,res) => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`Connnected to DB : ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
    }
}
export default connectdb;
