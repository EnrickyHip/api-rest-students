import { Router } from "express";

import PhotoController from "../controllers/PhotoController.js";
import loginRequired from "../middlewares/loginRequired.js";

const routes = new Router();

routes.post("/", loginRequired, PhotoController.create);

export default routes;
