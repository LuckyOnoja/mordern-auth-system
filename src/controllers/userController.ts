import { Request, Response } from 'express';

export const adminPage = (req: Request, res: Response) => {
  res.send('Welcome to the Admin Page');
};
