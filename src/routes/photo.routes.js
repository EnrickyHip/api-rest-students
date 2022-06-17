import { Router } from "express";
import multer from "multer";

import PhotoController from "../controllers/PhotoController.js";
import multerConfig from "../config/multer.cjs";

const upload = multer(multerConfig);

const routes = new Router();

routes.post("/", upload.single("photo"), PhotoController.create);

export default routes;
