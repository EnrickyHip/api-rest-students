import Sequelize, { Model } from "sequelize";
import bcryptjs from "bcryptjs";

export default class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 50],
              msg: "name should be between 3 and 40 caracters",
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

        password_hash: {
          type: Sequelize.STRING,
          defaultValue: "",
        },

        password: {
          type: Sequelize.VIRTUAL,
          defaultValue: "",
          validate: {
            len: {
              args: [6, 50],
              msg: "password should be between 6 and 40 caracters",
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
        user.password_hash = await bcryptjs.hash(user.password, 8);
      }
    });

    return this;
  }

  async checkPassword(password) {
    return await bcryptjs.compare(password, this.password_hash);
  }
}
