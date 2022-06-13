import { Router } from "express";
import homeRoutes from "./home.routes.js";

const router = new Router();

const routes = [homeRoutes];

routes.forEach((route) => {
  router.use(route);
});

export default router;
