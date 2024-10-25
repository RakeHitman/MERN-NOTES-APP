import express from "express";
const router = express.Router();
import * as notesController from "../controllers/notesController.js"

// GETTING THE NOTES
router.get("/allNotes" , notesController.getNotesController);

export default router;