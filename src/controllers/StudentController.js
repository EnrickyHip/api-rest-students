import Student from "../models/Student.js";

class StudentController {
  async index(request, response) {
    try {
      const students = await Student.findAll({
        attributes: ["id", "name", "last_name", "email", "age", "height", "weight"],
      });

      return response.json(students);
    } catch (error) {
      return response.status(400).json({ errors: error.errors.map((error) => error.message) });
    }
  }

  async show(request, response) {
    try {
      const { id } = request.params;
      const student = await Student.findByPk(id, {
        attributes: ["id", "name", "last_name", "email", "age", "height", "weight"],
      });

      if (!student) {
        return response.status(400).json({ errors: ["student does not exists"] });
      }

      const { name, last_name, email, age, weight, height } = student;

      return response.json({ name, last_name, email, age, weight, height });
    } catch (error) {
      return response.status(400).json({ errors: error.errors.map((error) => error.message) });
    }
  }

  async create(request, response) {
    try {
      const student = await Student.create(request.body);
      return response.json({ student });
    } catch (error) {
      return response.status(400).json({ errors: error.errors.map((error) => error.message) });
    }
  }

  async update(request, response) {
    try {
      const { id } = request.params;
      const student = await Student.findByPk(id);

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
      const student = await Student.findByPk(id);

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

export default new StudentController();
