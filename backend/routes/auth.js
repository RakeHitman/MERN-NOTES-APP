import express from "express";
import *as authController from "../controllers/authController.js"
const router  = express.Router();

// REGISTER
router.post("/register" , authController.registerController);

// LOG-IN
router.post("/login" , authController.loginController);


// LOG-OUT
router.post("/logout" , authController.logoutController);


// REFETCH-CONTROLLER


export default router;

