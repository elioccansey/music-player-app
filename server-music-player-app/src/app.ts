import express, { Request, Response, NextFunction } from "express";
import cors from "cors"; // Importing cors using ES6 module syntax
import UserRouter from "./routes/UserRouter"; // Importing routers using ES6 syntax

import PlaylistRouter from "./routes/PlayListRoute";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/user", UserRouter);
app.use("/playlists", PlaylistRouter);

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ isSuccess: false, message: err.message });
});

// 404 Not Found middleware
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({ isSuccess: false, message: "Page not found!!" });
});