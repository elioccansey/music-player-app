import { Router } from "express";
import * as SongController from "../controller/SongController";

const router = Router();

router.get("/all", SongController.getAllSongs);

export default router;
