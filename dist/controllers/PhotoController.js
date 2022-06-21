"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);
var _multerjs = require('../config/multer.js'); var _multerjs2 = _interopRequireDefault(_multerjs);

var _Photojs = require('../models/Photo.js'); var _Photojs2 = _interopRequireDefault(_Photojs);

const upload = _multer2.default.call(void 0, _multerjs2.default).single("photo");
class PhotoController {
  create(request, response) {
    return upload(request, response, async (error) => {
      if (error) {
        return response.status(400).json({ errors: [error.code] });
      }

      try {
        const { student_id } = request.body;

        const { originalname, filename } = request.file;
        const photo = await _Photojs2.default.create({ originalname, filename, student_id });

        return response.json(photo);
      } catch (error) {
        return response.json({ errors: ["student does not exists"] });
      }
    });
  }
}

exports. default = new PhotoController();
