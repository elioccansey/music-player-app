import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import UserRouter from "./routes/UserRouter";
import SongRouter from "./routes/SongRouter";
import PlaylistRouter from "./routes/PlayListRoute";
import path from "path"
import SongClass from "./model/Song";
import fs from "fs"

const app = express();

app.use(express.json());
app.use("/audio", express.static(path.join(__dirname, "audio")))
app.use(cors());
app.use("/user", UserRouter);
app.use("/songs", SongRouter);
app.use("/playlists", PlaylistRouter);

// app.get("/audio/:songId", (req: Request, res: Response, next: NextFunction) => {
//   const sg = SongClass.getSongById(Number(req.params.songId))
//   const audioPath = path.join(__dirname, "audio", sg.url)
//   res.set("Content-Type", "audio/mp3").sendFile(audioPath)
// })

app.get("/audio/:songId", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const sg = await SongClass.getSongById(Number(req.params.songId));
    if (!sg || !sg.url) {
      return next(new Error("Song not found"));
    }

    const audioPath = path.join(__dirname, "..", "audio", sg.url);
    console.log(audioPath);

    fs.access(audioPath, fs.constants.F_OK, (err) => {
      if (err) {
        return next(new Error("Audio file not found"));
      }
      res.set("Content-Type", "audio/mp3").sendFile(audioPath);
    });
  } catch (error) {
    next(error);
  }
});



// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ isSuccess: false, message: err.message });
});

// 404 Not Found middleware
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({ isSuccess: false, message: "Page not found!!" });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`music player app is running on port ==> ${PORT}`);
});
