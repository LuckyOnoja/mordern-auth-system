import { Request, Response, NextFunction } from 'express';

export const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
};

export const isAdmin = (req: Request, res: Response, next: NextFunction) => {
  const user = req.user as Express.User;  
  if (req.isAuthenticated() && user.role === 'admin') {
    return next();
  }
  res.status(403).send('Access Denied: Admins Only');
};
