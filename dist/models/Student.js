"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Student extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        name: {
          type: _sequelize2.default.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 100],
              msg: "name should be between 3 and 100 caracters",
            },
          },
        },

        lastName: {
          type: _sequelize2.default.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 100],
              msg: "last name should be between 3 and 100 caracters",
            },
          },
        },

        email: {
          type: _sequelize2.default.STRING,
          defaultValue: "",
          unique: {
            msg: "email already exists",
          },
          validate: {
            isEmail: {
              msg: "invalid email",
            },
          },
        },

        age: {
          type: _sequelize2.default.FLOAT,
          defaultValue: "",
          validate: {
            isInt: {
              msg: "invalid age",
            },
          },
        },

        weight: {
          type: _sequelize2.default.FLOAT,
          validate: {
            isFloat: {
              msg: "invalid weight",
            },
          },
        },

        height: {
          type: _sequelize2.default.FLOAT,
          validate: {
            isFloat: {
              msg: "invalid height",
            },
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
    this.hasMany(models.Photo, { foreignKey: "student_id" });
  }
} exports.default = Student;
