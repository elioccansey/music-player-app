import { Router } from "express";
import * as PlayListController from "../controller/PlayListController";
const router = Router();

router.get("/:username", PlayListController.getUserPlayList);
router.post("/", PlayListController.addToPlayList);
router.delete("/:username/:songId", PlayListController.removeFromPlaylist);

export default router;
