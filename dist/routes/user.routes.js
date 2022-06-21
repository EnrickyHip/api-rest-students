"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _UserControllerjs = require('../controllers/UserController.js'); var _UserControllerjs2 = _interopRequireDefault(_UserControllerjs);
var _loginRequiredjs = require('../middlewares/loginRequired.js'); var _loginRequiredjs2 = _interopRequireDefault(_loginRequiredjs);

const routes = new (0, _express.Router)();

//! remova esses dois posteriormente. serão usados apenas para testes.
// routes.get("/", UserController.index);
// routes.get("/:id", UserController.show);

routes.post("/", _loginRequiredjs2.default, _UserControllerjs2.default.create);
routes.put("/", _loginRequiredjs2.default, _UserControllerjs2.default.update);
routes.delete("/", _loginRequiredjs2.default, _UserControllerjs2.default.delete);

exports. default = routes;

/*
index -> lista todos os usuários. -> GET
create/store -> cria um usuário. -> POST
delete -> apaga um usuário. -> DELETE
show -> mostra um usuário. -> GET
update -> atualiza um usuário -> PATCH ou PUT
*/

//tenta não utilizar mais do que essas 5 rotas.
