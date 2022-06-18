import Sequelize, { Model } from "sequelize";
import appConfig from "../config/appConfig.js";

export default class Photo extends Model {
  static init(sequelize) {
    super.init(
      {
        originalname: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            notEmpty: {
              msg: "name should be between 8 and 100 caracters",
            },
          },
        },

        filename: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            notEmpty: {
              msg: "name should be between 8 and 100 caracters",
            },
          },
        },

        url: {
          type: Sequelize.VIRTUAL,
          get() {
            return `${appConfig.url}/images/${this.getDataValue("filename")}`;
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
}
