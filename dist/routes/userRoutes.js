"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
const authMiddleware_1 = require("../middlewares/authMiddleware");
const router = (0, express_1.Router)();
router.get('/admin', authMiddleware_1.isAuthenticated, authMiddleware_1.isAdmin, userController_1.adminPage);
exports.default = router;
