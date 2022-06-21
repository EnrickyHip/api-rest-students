"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _StudentControllerjs = require('../controllers/StudentController.js'); var _StudentControllerjs2 = _interopRequireDefault(_StudentControllerjs);
var _loginRequiredjs = require('../middlewares/loginRequired.js'); var _loginRequiredjs2 = _interopRequireDefault(_loginRequiredjs);

const router = new (0, _express.Router)();

router.get("/", _StudentControllerjs2.default.index);
router.get("/:id", _StudentControllerjs2.default.show);
router.post("/", _loginRequiredjs2.default, _StudentControllerjs2.default.create);
router.delete("/:id", _loginRequiredjs2.default, _StudentControllerjs2.default.delete);
router.put("/:id", _loginRequiredjs2.default, _StudentControllerjs2.default.update);

exports. default = router;
