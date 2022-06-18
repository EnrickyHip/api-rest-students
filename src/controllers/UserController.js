import User from "../models/User.js";

class UserController {
  async create(request, response) {
    try {
      const user = await User.create(request.body, { attributes: ["id", "name", "email"] });
      return response.json(user);
    } catch (error) {
      return response.status(400).json({ errors: error.errors.map((error) => error.message) });
    }
  }

  async update(request, response) {
    try {
      const user = await User.findByPk(request.userId, { attributes: ["id", "name", "email"] });

      if (!user) {
        return response.status(400).json({
          errors: ["user does not exists"],
        });
      }

      await user.update(request.body);
      return response.json(user);
    } catch (error) {
      return response.status(400).json({ errors: error.errors.map((error) => error.message) });
    }
  }

  async delete(request, response) {
    try {
      const user = await User.findByPk(request.userId, { attributes: ["id", "name", "email"] });

      if (!user) {
        return response.status(400).json({
          errors: ["user does not exists"],
        });
      }

      await user.destroy();
      return response.json("user deleted");
    } catch (error) {
      return response.status(400).json({ errors: error.errors.map((error) => error.message) });
    }
  }

  //! remova posteriormente, será usado apenas para testes.
  // async index(request, response) {
  //   try {
  //     console.log(request.userId, request.userEmail);
  //     const users = await User.findAll({ attributes: ["id", "name", "email"] });
  //     return response.json(users);
  //   } catch (error) {
  //     return response.json(null);
  //   }
  // }

  //! remova posteriormente, será usado apenas para testes.
  // async show(request, response) {
  //   try {
  //     const { id } = request.params;
  //     const user = await User.findByPk(id, { attributes: ["id", "name", "email"] });
  //     return response.json(user);
  //   } catch (error) {
  //     return response.json(null);
  //   }
  // }
}

export default new UserController();
