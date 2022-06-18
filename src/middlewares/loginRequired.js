import jwt from "jsonwebtoken";
import User from "../models/User.js";

export default async (request, response, next) => {
  const { authorization } = request.headers;

  if (!authorization) {
    return response.status(401).json({
      errors: ["login required"],
    });
  }

  const [, token] = authorization.split(" ");

  try {
    const { email, id } = jwt.verify(token, process.env.TOKEN_SECRET);

    const user = await User.findOne({
      where: {
        id,
        email,
      },
    });

    if (!user) {
      return response.status(401).json({
        errors: ["invalid user"],
      });
    }

    request.userId = id;
    request.userEmail = email;

    return next();
  } catch (error) {
    return response.status(401).json({
      errors: ["invalid token"],
    });
  }
};
