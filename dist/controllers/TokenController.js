"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Userjs = require('../models/User.js'); var _Userjs2 = _interopRequireDefault(_Userjs);
var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

class TokenController {
  async create(request, response) {
    try {
      const { email = "", password = "" } = request.body;

      if (!password || !email) {
        return response.status(401).json({
          error: ["email and password cannot be blank!"],
        });
      }

      const user = await _Userjs2.default.findOne({ where: { email } });

      if (!user) {
        return response.status(401).json({
          error: ["user does not exists"],
        });
      }

      if (!(await user.checkPassword(password))) {
        return response.status(401).json({
          error: ["invalid password"],
        });
      }

      const { id, name } = user;
      const token = _jsonwebtoken2.default.sign({ id, email }, process.env.TOKEN_SECRET, {
        expiresIn: process.env.TOKEN_EXPIRATION,
      });

      return response.json({ token, user: { name, email, id } });
    } catch (error) {
      return response.status(400).json({ errors: error.errors.map((error) => error.message) });
    }
  }
}

exports. default = new TokenController();
