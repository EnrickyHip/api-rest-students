"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Studentjs = require('../models/Student.js'); var _Studentjs2 = _interopRequireDefault(_Studentjs);
var _Photojs = require('../models/Photo.js'); var _Photojs2 = _interopRequireDefault(_Photojs);

class StudentController {
  async index(request, response) {
    try {
      const students = await _Studentjs2.default.findAll({
        attributes: ["id", "name", "last_name", "email", "age", "height", "weight"],
        order: [
          ["id", "DESC"],
          [_Photojs2.default, "id", "DESC"],
        ],
        include: {
          model: _Photojs2.default,
          attributes: ["id", "filename", "originalname", "url"],
        },
      });

      return response.json(students);
    } catch (error) {
      return response.status(400).json({ errors: error.errors.map((error) => error.message) });
    }
  }

  async show(request, response) {
    try {
      const { id } = request.params;
      const student = await _Studentjs2.default.findByPk(id, {
        attributes: ["id", "name", "last_name", "email", "age", "height", "weight"],
        order: [[_Photojs2.default, "id", "DESC"]],
        include: {
          model: _Photojs2.default,
          attributes: ["id", "filename", "originalname", "url"],
        },
      });

      if (!student) {
        return response.status(400).json({ errors: ["student does not exists"] });
      }

      return response.json(student);
    } catch (error) {
      return response.status(400).json({ errors: error.errors.map((error) => error.message) });
    }
  }

  async create(request, response) {
    try {
      const student = await _Studentjs2.default.create(request.body);
      return response.json({ student });
    } catch (error) {
      return response.status(400).json({ errors: error.errors.map((error) => error.message) });
    }
  }

  async update(request, response) {
    try {
      const { id } = request.params;
      const student = await _Studentjs2.default.findByPk(id);

      if (!student) {
        return response.status(400).json({
          errors: ["student does not exists"],
        });
      }

      await student.update(request.body);
      return response.json(student);
    } catch (error) {
      return response.status(400).json({ errors: error.errors.map((error) => error.message) });
    }
  }

  async delete(request, response) {
    try {
      const { id } = request.params;
      const student = await _Studentjs2.default.findByPk(id);

      if (!student) {
        return response.status(400).json({ errors: ["student does not exists"] });
      }

      await student.destroy();
      return response.json("student deleted");
    } catch (error) {
      return response.status(400).json({ errors: error.errors.map((error) => error.message) });
    }
  }
}

exports. default = new StudentController();
