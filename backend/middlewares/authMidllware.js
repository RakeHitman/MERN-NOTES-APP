import jwt from "jsonwebtoken";

export const authMiddleware = async ( req ,res , next) => {
    const token = req.headers["authorization"]?.split("")[1];
    if (!token) {
        res.status(401).json({message : "Unauthorized"});
    }
    jwt.verify(token , process.env.JWT_SECRET , (err , data) => {
        if(err) {
            res.status(401).json({message:"Invalid token or token expired !"})
        }
        req.user =  user;
        next();
    })
}