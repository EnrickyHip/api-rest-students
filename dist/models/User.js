"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _bcryptjs = require('bcryptjs'); var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

 class User extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        name: {
          type: _sequelize2.default.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 50],
              msg: "name should be between 3 and 50 caracters",
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

        password_hash: {
          type: _sequelize2.default.STRING,
          defaultValue: "",
        },

        password: {
          type: _sequelize2.default.VIRTUAL,
          allowNull: false,
          defaultValue: "",
          validate: {
            len: {
              args: [6, 50],
              msg: "password should be between 6 and 50 caracters",
            },
          },
        },
      },
      {
        sequelize,
      },
    );

    this.addHook("beforeSave", async (user) => {
      if (user.password) {
        user.password_hash = await _bcryptjs2.default.hash(user.password, 8);
      }
    });

    return this;
  }

  async checkPassword(password) {
    return await _bcryptjs2.default.compare(password, this.password_hash);
  }
} exports.default = User;
