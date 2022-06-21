import dotenv from "dotenv";
import { resolve } from "path";

import express from "express";
import cors from "cors";
import helmet from "helmet";

import usersRoutes from "./routes/user.routes.js";
import homeRoutes from "./routes/home.routes.js";
import tokenRoutes from "./routes/token.routes.js";
import studentRoutes from "./routes/student.routes.js";
import photoRoutes from "./routes/photo.routes.js";

import "./database/index.js";

const whiteList = ["http://localhost:3000"];

const corsOptions = {
  origin: function (origin, callback) {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

dotenv.config();

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors(corsOptions));
    this.app.use(helmet());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, "..", "uploads")));
  }

  routes() {
    this.app.use("/", homeRoutes);
    this.app.use("/users", usersRoutes);
    this.app.use("/tokens", tokenRoutes);
    this.app.use("/students", studentRoutes);
    this.app.use("/photos", photoRoutes);
  }
}

export default new App().app; //exporta a própriedade app de um objeto já instanciado
