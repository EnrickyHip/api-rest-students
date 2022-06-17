import Sequelize, { Model } from "sequelize";

export default class Student extends Model {
  static init(sequelize) {
    super.init(
      {
        name: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 100],
              msg: "name should be between 8 and 100 caracters",
            },
          },
        },

        last_name: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 100],
              msg: "name should be between 8 and 100 caracters",
            },
          },
        },

        email: {
          type: Sequelize.STRING,
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
          type: Sequelize.FLOAT,
          defaultValue: "",
          validate: {
            isInt: {
              msg: "invalid age",
            },
          },
        },

        weight: {
          type: Sequelize.FLOAT,
          validate: {
            isFloat: {
              msg: "invalid weight",
            },
          },
        },

        height: {
          type: Sequelize.FLOAT,
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
}
