"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _appConfigjs = require('../config/appConfig.js'); var _appConfigjs2 = _interopRequireDefault(_appConfigjs);

 class Photo extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        originalname: {
          type: _sequelize2.default.STRING,
          defaultValue: "",
          validate: {
            notEmpty: {
              msg: "name should be between 8 and 100 caracters",
            },
          },
        },

        filename: {
          type: _sequelize2.default.STRING,
          defaultValue: "",
          validate: {
            notEmpty: {
              msg: "name should be between 8 and 100 caracters",
            },
          },
        },

        url: {
          type: _sequelize2.default.VIRTUAL,
          get() {
            return `${_appConfigjs2.default.url}/images/${this.getDataValue("filename")}`;
          },
        },
      },
      {
        sequelize,
      },
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Student, { foreignKey: "student_id" });
  }
} exports.default = Photo;
