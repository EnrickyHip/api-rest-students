import Sequelize from "sequelize";
import databaseConfig from "../config/database.cjs";
import Student from "../models/Student.js";
import User from "../models/User.js";

const models = [Student, User];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => {
  model.init(connection);
});
