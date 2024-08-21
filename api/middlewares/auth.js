const jwt = require("jsonwebtoken");
const Unauthorized = require("../errors/Unauthorized");

const extractBearerToken = (header) => header.replace("Bearer ", "");

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith("Bearer ")) {
    next(new Unauthorized("Authorization is required"));
  }

  const token = extractBearerToken(authorization);
  let payload;
  const { JWT_SECRET = "dev-key" } = process.env;

  try {
    payload = jwt.verify(token, JWT_SECRET);
  } catch (err) {
    next(new Unauthorized("Authorization is required"));
  }

  req.user = payload;

  return next();
};
