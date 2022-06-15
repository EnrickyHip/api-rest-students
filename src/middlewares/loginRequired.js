import jwt from "jsonwebtoken";

export default (request, response, next) => {
  const { authorization } = request.headers;

  if (!authorization) {
    return response.status(401).json({
      errors: ["login required"],
    });
  }

  const [, token] = authorization.split(" ");

  try {
    const data = jwt.verify(token, process.env.TOKEN_SECRET);
    const { email, id } = data;

    request.userId = id;
    request.userEmail = email;

    return next();
  } catch (error) {
    return response.status(401).json({
      errors: ["invalid token"],
    });
  }
};
