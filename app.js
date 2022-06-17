import dotenv from "dotenv";
import express from "express";
import usersRoutes from "./src/routes/user.routes.js";
import homeRoutes from "./src/routes/home.routes.js";
import tokenRoutes from "./src/routes/token.routes.js";
import studentRoutes from "./src/routes/student.routes.js";

import "./src/database/index.js";

dotenv.config();

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use("/", homeRoutes);
    this.app.use("/users", usersRoutes);
    this.app.use("/tokens", tokenRoutes);
    this.app.use("/students", studentRoutes);
  }
}

export default new App().app; //exporta a própriedade app de um objeto já instanciado
