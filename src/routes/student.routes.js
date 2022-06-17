import { Router } from "express";
import StudentController from "../controllers/StudentController.js";
import loginRequired from "../middlewares/loginRequired.js";

const router = new Router();

router.get("/", StudentController.index);
router.get("/:id", StudentController.show);
router.post("/", loginRequired, StudentController.create);
router.delete("/:id", loginRequired, StudentController.delete);
router.put("/:id", loginRequired, StudentController.update);

export default router;
