"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logout = exports.dashboardPage = exports.loginPage = void 0;
const loginPage = (req, res) => {
    res.render('login');
};
exports.loginPage = loginPage;
const dashboardPage = (req, res) => {
    res.render('dashboard', { user: req.user });
};
exports.dashboardPage = dashboardPage;
const logout = (req, res) => {
    req.logout((err) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Logout error');
        }
        res.redirect('/login');
    });
};
exports.logout = logout;
