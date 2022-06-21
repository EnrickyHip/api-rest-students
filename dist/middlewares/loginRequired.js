"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
var _Userjs = require('../models/User.js'); var _Userjs2 = _interopRequireDefault(_Userjs);

exports. default = async (request, response, next) => {
  const { authorization } = request.headers;

  if (!authorization) {
    return response.status(401).json({
      errors: ["login required"],
    });
  }

  const [, token] = authorization.split(" ");

  try {
    const { email, id } = _jsonwebtoken2.default.verify(token, process.env.TOKEN_SECRET);

    const user = await _Userjs2.default.findOne({
      where: {
        id,
        email,
      },
    });

    if (!user) {
      return response.status(401).json({
        errors: ["invalid user"],
      });
    }

    request.userId = id;
    request.userEmail = email;

    return next();
  } catch (error) {
    return response.status(401).json({
      errors: ["invalid token"],
    });
  }
};
