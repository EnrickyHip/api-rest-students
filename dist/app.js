"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);
var _path = require('path');

var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);
var _helmet = require('helmet'); var _helmet2 = _interopRequireDefault(_helmet);

var _userroutesjs = require('./routes/user.routes.js'); var _userroutesjs2 = _interopRequireDefault(_userroutesjs);
var _homeroutesjs = require('./routes/home.routes.js'); var _homeroutesjs2 = _interopRequireDefault(_homeroutesjs);
var _tokenroutesjs = require('./routes/token.routes.js'); var _tokenroutesjs2 = _interopRequireDefault(_tokenroutesjs);
var _studentroutesjs = require('./routes/student.routes.js'); var _studentroutesjs2 = _interopRequireDefault(_studentroutesjs);
var _photoroutesjs = require('./routes/photo.routes.js'); var _photoroutesjs2 = _interopRequireDefault(_photoroutesjs);

require('./database/index.js');

const whiteList = ["http://localhost:3000"];

const corsOptions = {
  origin: function (origin, callback) {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

_dotenv2.default.config();

class App {
  constructor() {
    this.app = _express2.default.call(void 0, );
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(_cors2.default.call(void 0, corsOptions));
    this.app.use(_helmet2.default.call(void 0, ));
    this.app.use(_express2.default.urlencoded({ extended: true }));
    this.app.use(_express2.default.json());
    this.app.use(_express2.default.static(_path.resolve.call(void 0, __dirname, "..", "uploads")));
  }

  routes() {
    this.app.use("/", _homeroutesjs2.default);
    this.app.use("/users", _userroutesjs2.default);
    this.app.use("/tokens", _tokenroutesjs2.default);
    this.app.use("/students", _studentroutesjs2.default);
    this.app.use("/photos", _photoroutesjs2.default);
  }
}

exports. default = new App().app; //exporta a própriedade app de um objeto já instanciado
