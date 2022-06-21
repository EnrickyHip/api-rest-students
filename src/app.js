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

dotenv.config();

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors());
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
