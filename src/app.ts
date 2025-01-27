import express, { Application } from "express";
import session from "express-session";
import passport from "passport";
import dotenv from "dotenv";
import router from "./routes";
import path from "path";
import { connectDB } from "./config/db";

dotenv.config();
import "./config/passport";

const app: Application = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "../public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: process.env.SESSION_SECRET as string,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

connectDB();

app.use("/", router);

export default app;
