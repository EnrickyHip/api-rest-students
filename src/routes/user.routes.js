import { Router } from "express";
import UserController from "../controllers/UserController.js";

const routes = new Router();

routes.post("/", UserController.create);
routes.get("/", UserController.index);
routes.get("/:id", UserController.show);
routes.put("/:id", UserController.update);
routes.delete("/:id", UserController.delete);

export default routes;

/*
index -> lista todos os usuários. -> GET
create/store -> cria um usuário. -> POST
delete -> apaga um usuário. -> DELETE
show -> mostra um usuário. -> GET
update -> atualiza um usuário -> PATCH ou PUT
*/

//tenta não utilizar mais do que essas 5 rotas.
