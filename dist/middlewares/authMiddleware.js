"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAdmin = exports.isAuthenticated = void 0;
const isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
};
exports.isAuthenticated = isAuthenticated;
const isAdmin = (req, res, next) => {
    const user = req.user;
    if (req.isAuthenticated() && user.role === 'admin') {
        return next();
    }
    res.status(403).send('Access Denied: Admins Only');
};
exports.isAdmin = isAdmin;
