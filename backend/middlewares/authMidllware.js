// import jwt from "jsonwebtoken";

// const authMiddleware = async ( req ,res , next) => {
//     const token = req.headers["authorization"]?.split(" ")[1];
//     if (!token) {
//         res.status(401).json({message : "Unauthorized"});
//         console.log("You are Unauthorized")
//     }
//     jwt.verify(token , process.env.JWT_SECRET , (err , data) => {
//         if(err) {
//             res.status(401).json({message:"Invalid token or token expired !"})
//             console.log("Invalid token or token expired !")
//         }
//         req.user =  data;
//         next();
//     })
// }

// export default authMiddleware;

import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const authMiddleware = async (req, res, next) => {
    let token;

    // Check if token is present in the JSON body
    if (req.body.token) {
        token = req.body.token; // Get token from the request body
    }
    // If no token found, check the Authorization header
    else if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1]; // Extract token from Authorization header
    }

    // If token is not present
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized, token not found' });
    }

    try {
        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Attach the user to the request object
        req.user = await User.findById(decoded.id).select('-password'); // Optionally, omit password

        next(); // Proceed to the next middleware/controller
    } catch (error) {
        console.log(error);
        return res.status(401).json({ message: 'Unauthorized, invalid token' });
    }
};

export default authMiddleware;
