import { Router } from "express";
import TokenController from "../controllers/TokenController.js";

const routes = new Router();

routes.post("/", TokenController.create);

export default routes;
