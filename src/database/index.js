import Sequelize from "sequelize";
import databaseConfig from "../config/database.cjs";
import Student from "../models/Student.js";

const models = [Student];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => {
  model.init(connection);
});
