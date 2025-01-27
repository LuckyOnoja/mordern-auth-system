import { Router } from 'express';
import passport from 'passport';
import { loginPage, dashboardPage, logout } from '../controllers/authController';
import { isAuthenticated } from '../middlewares/authMiddleware';

const router = Router();

router.get('/login', loginPage);

router.get('/auth/google', passport.authenticate('google', { scope: ['profile'] }));

router.get(
  '/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => res.redirect('/dashboard')
);

router.get('/dashboard', isAuthenticated, dashboardPage);

router.get('/logout', logout);

export default router;
