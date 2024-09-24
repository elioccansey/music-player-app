import { Request, Response, NextFunction } from 'express';
import  User  from '../model/User';  

const authenticate = (req: Request, res: Response, next: NextFunction): void => {
  const token = req.headers['authorization'] as string | undefined;
  
  if (token && User.getSession(token)) {
    next();  // Proceed to the next middleware or route handler
  } else {
    res.status(401).json({ error: 'Unauthorized' });
  }
};

export default authenticate;