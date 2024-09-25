import { Request, Response } from "express";
import { PlayList } from "../model/PlayList";

export const getUserPlayList = (req: Request, res: Response): void => {
  const username = req.params.username;
  res.json(PlayList.getPlayListDetails(username));
};

export const addToPlayList = (req: Request, res: Response): void => {
  const username = req.body.username;
  const songId = Number(req.body.songId);
  res.status(201).json(PlayList.addToPlayList(username, songId));
};

export const removeFromPlaylist = (req: Request, res: Response): void => {
  const username = req.params.username;
  const songId = Number(req.params.songId);
  res.json({
    isSuccess: true,
    message: `Song with Id: ${songId} deleted successfully from username: ${username}.`
  });
};
