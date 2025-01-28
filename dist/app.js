"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_session_1 = __importDefault(require("express-session"));
const passport_1 = __importDefault(require("passport"));
const dotenv_1 = __importDefault(require("dotenv"));
const routes_1 = __importDefault(require("./routes"));
const path_1 = __importDefault(require("path"));
const db_1 = require("./config/db");
dotenv_1.default.config();
require("./config/passport");
const app = (0, express_1.default)();
// Set views directory path to work in both src and dist
const viewsPath = process.env.NODE_ENV === "production"
    ? path_1.default.join(__dirname, "views") // This will resolve to dist/views in production
    : path_1.default.join(__dirname, "../views"); // This works for development (src/views)
app.set("views", viewsPath);
// Set view engine
app.set("view engine", "ejs");
app.use(express_1.default.static(path_1.default.join(__dirname, "../public")));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, express_session_1.default)({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
}));
app.use(passport_1.default.initialize());
app.use(passport_1.default.session());
(0, db_1.connectDB)();
app.use("/", routes_1.default);
exports.default = app;
