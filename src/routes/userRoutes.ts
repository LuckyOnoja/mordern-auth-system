import { Router } from 'express';
import { adminPage } from '../controllers/userController';
import { isAuthenticated, isAdmin } from '../middlewares/authMiddleware';

const router = Router();

router.get('/admin', isAuthenticated, isAdmin, adminPage);

export default router;
