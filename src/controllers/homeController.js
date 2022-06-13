import Student from "../models/Student.js";

class HomeController {
  async index(request, response) {
    const student = await Student.create({
      name: "Pedro",
      last_name: "Silva",
      email: "pedro@gmail.com",
      age: 19,
      weight: 75,
      height: 1.85,
    });
    response.json(student);
  }
}

export default new HomeController();
