import User from "../models/User.js";

class UserController {
  async create(request, response) {
    try {
      const user = await User.create(request.body);
      return response.json(user);
    } catch (error) {
      return response.status(400).json({ errors: error.errors.map((error) => error.message) });
    }
  }

  async index(request, response) {
    try {
      console.log(request.userId, request.userEmail);
      const users = await User.findAll();
      return response.json(users);
    } catch (error) {
      return response.json(null);
    }
  }

  async show(request, response) {
    try {
      const { id } = request.params;
      const user = await User.findByPk(id);
      return response.json(user);
    } catch (error) {
      return response.json(null);
    }
  }

  async update(request, response) {
    try {
      const { id } = request.params;

      if (!id) {
        return response.status(400).json({
          error: ["missing id"],
        });
      }

      const user = await User.findByPk(id);

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
      const { id } = request.params;

      if (!id) {
        return response.status(400).json({
          error: ["missing id"],
        });
      }

      const user = await User.findByPk(id);

      if (!user) {
        return response.status(400).json({
          errors: ["user does not exists"],
        });
      }

      await user.destroy();
      return response.json(null);
    } catch (error) {
      return response.status(400).json({ errors: error.errors.map((error) => error.message) });
    }
  }
}

export default new UserController();
