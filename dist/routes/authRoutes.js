"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const passport_1 = __importDefault(require("passport"));
const authController_1 = require("../controllers/authController");
const authMiddleware_1 = require("../middlewares/authMiddleware");
const router = (0, express_1.Router)();
router.get('/login', authController_1.loginPage);
router.get('/auth/google', passport_1.default.authenticate('google', { scope: ['profile'] }));
router.get('/auth/google/callback', passport_1.default.authenticate('google', { failureRedirect: '/login' }), (req, res) => res.redirect('/dashboard'));
router.get('/dashboard', authMiddleware_1.isAuthenticated, authController_1.dashboardPage);
router.get('/logout', authController_1.logout);
exports.default = router;
