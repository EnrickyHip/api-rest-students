import { Router } from "express";
import UserController from "../controllers/UserController.js";
import loginRequired from "../middlewares/loginRequired.js";

const routes = new Router();

//! remova esses dois posteriormente. serão usados apenas para testes.
// routes.get("/", UserController.index);
// routes.get("/:id", UserController.show);

routes.post("/", loginRequired, UserController.create);
routes.put("/", loginRequired, UserController.update);
routes.delete("/", loginRequired, UserController.delete);

export default routes;

/*
index -> lista todos os usuários. -> GET
create/store -> cria um usuário. -> POST
delete -> apaga um usuário. -> DELETE
show -> mostra um usuário. -> GET
update -> atualiza um usuário -> PATCH ou PUT
*/

//tenta não utilizar mais do que essas 5 rotas.
