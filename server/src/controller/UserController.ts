import { Request, Response } from "express";
import User from "../model/User";

export const login = (req: Request, res: Response): void => {
  const { username, password } = req.body;

  const user = User.findUser(username, password);

  if (user) {
    const token = `${username}-${Date.now()}`;
    User.addSession(token, username);
    res.status(200).json({ token });
  } else {
    res.status(401).json({ error: "Invalid Credentials" });
  }
};

export const logout = (req: Request, res: Response): void => {
  const token = req.headers["authorization"] as string | undefined;

  if (token) {
    User.removeSession(token);
    res.status(200).json({ message: "Logout successful" });
  } else {
    res.status(400).json({ error: "Token not provided" });
  }
};
