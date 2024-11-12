import express from "express";
const router = express.Router();
import * as notesController from "../controllers/notesController.js"
import authMiddleware from '../middlewares/authMidllware.js'

// POSTING THE NOTE
router.post("/post" , authMiddleware , notesController.createNote);

export default router;