import { Router } from "express";
import home from "../controllers/homeController.js";

const routes = new Router();

routes.get("/", home.index);

export default routes;
