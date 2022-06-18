import User from "../models/User.js";
import jwt from "jsonwebtoken";

class TokenController {
  async create(request, response) {
    try {
      const { email = "", password = "" } = request.body;

      if (!password || !email) {
        return response.status(401).json({
          error: ["email and password cannot be blank!"],
        });
      }

      const user = await User.findOne({ where: { email } });

      if (!user) {
        return response.status(401).json({
          error: ["user does not exists"],
        });
      }

      if (!(await user.checkPassword(password))) {
        return response.status(401).json({
          error: ["invalid password"],
        });
      }

      const { id } = user;
      const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
        expiresIn: process.env.TOKEN_EXPIRATION,
      });

      return response.json({ token });
    } catch (error) {
      return response.status(400).json({ errors: error.errors.map((error) => error.message) });
    }
  }
}

export default new TokenController();
