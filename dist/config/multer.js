"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);
var _path = require('path'); var _path2 = _interopRequireDefault(_path);

const random = () => Math.floor(Math.random() * 10000 + 10000);

exports. default = {
  fileFilter: (request, file, callback) => {
    const alowedTypes = ["image/jpeg", "image/png"];

    if (!alowedTypes.includes(file.mimetype)) {
      return callback(new _multer2.default.MulterError("file is not a image"));
    }

    return callback(null, true);
  },

  storage: _multer2.default.diskStorage({
    destination: (request, file, callback) => {
      callback(null, _path2.default.resolve(__dirname, "..", "..", "uploads", "images"));
    },

    filename: (request, file, callback) => {
      callback(null, `${Date.now()}_${random()}${_path2.default.extname(file.originalname)}`);
    },
  }),
};
