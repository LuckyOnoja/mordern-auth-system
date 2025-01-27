import { Request, Response } from 'express';

export const loginPage = (req: Request, res: Response) => {
  res.render('login');
};

export const dashboardPage = (req: Request, res: Response) => {
  res.render('dashboard', { user: req.user });
};

export const logout = (req: Request, res: Response) => {
  req.logout((err) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Logout error');
    }
    res.redirect('/login');
  });
};
