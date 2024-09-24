import { Request, Response } from "express";
import { PlayList } from "../model/playList";

export const getUserPlayList = (req: Request, res: Response): void => {
  const username = req.params.username;
  res.json(PlayList.getPlayListDetails(username));
};

export const addToPlayList = (req: Request, res: Response): void => {
  const username = req.body.username;
  const songId = parseInt(req.body.songId, 10); // Parse songId safely with base 10
  res.status(201).json(PlayList.addToPlayList(username, songId));
};

export const removeFromPlaylist = (req: Request, res: Response): void => {
  const username = req.params.username;
  const songId = parseInt(req.params.songId, 10); // Parse songId safely with base 10
  res.json(PlayList.removeFromPlaylist(username, songId));
};
