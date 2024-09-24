import { Router } from "express";
import * as SongController from "../controller/SongController"; // Importing the controller using ES6 module syntax

const router = Router();

router.get("/all", SongController.getAllSongs);

export default router;
