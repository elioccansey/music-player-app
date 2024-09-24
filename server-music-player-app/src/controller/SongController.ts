import { Request, Response } from "express";
import Song from "../model/Song";

export const getAllSongs = (req: Request, res: Response): void => {
  res.json(Song.getAllSongs());
};
