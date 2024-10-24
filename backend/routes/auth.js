import express from "express";
import *as authController from "../controllers/authController.js"
const router  = express.Router();

// REGISTER
router.post("/register" , authController.registerController);
// LOG-IN
// LOG-OUT
// REFETCH-CONTROLLER


export default router;

