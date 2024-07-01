const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const BadRequest = require("../errors/BadRequest");
const Conflict = require("../errors/Conflict");
const Unauthorized = require("../errors/Unauthorized");
const NotFound = require("../errors/NotFound");

module.exports.getCurrentUser = (req, res, next) => {
  User.findById(req.user._id)
    .then((user) => {
      if (user) {
        return res.send({ data: user });
      }
      return next(new NotFound("User does not exist"));
    })
    .catch((err) => next(err));
};

module.exports.updateCurrentUser = (req, res, next) => {
  const { name, email } = req.body;
  User.findByIdAndUpdate(
    req.user._id,
    { name, email },
    {
      runValidators: true,
      new: true,
    }
  )
    .then((user) => {
      if (user) {
        return res.send({ data: user });
      }
      return next(new NotFound("User does not exist"));
    })
    .catch((err) => {
      if (err.message === "CastError") {
        next(new BadRequest("Invalid data provided when updating the profile"));
      }
      next(err);
    });
};

module.exports.createUser = (req, res, next) => {
  const { name, email, password } = req.body;

  User.findOne({ email }).then((usr) => {
    if (usr) {
      next(new Conflict("A user with this email already exists"));
    }
    bcrypt
      .hash(password, 10)
      .then((hash) =>
        User.create({
          name,
          email,
          password: hash,
        })
      )
      .then((user) =>
        res
          .status(201)
          .send({ _id: user._id, email: user.email, name: user.name })
      )
      .catch((err) => {
        if (err.message === "ValidationError") {
          next(new BadRequest("Invalid data provided when creating"));
        }
        next(err);
      });
  });
};

module.exports.login = (req, res, next) => {
  const { email, password } = req.body;
  const { JWT_SECRET = "dev-key" } = process.env;
  User.findOne({ email })
    .select("+password")
    .orFail(new Error("IncorrectEmail"))
    .then((user) => {
      bcrypt.compare(password, user.password).then((matched) => {
        if (!matched) {
          next(new Unauthorized("Incorrect email or password."));
        } else {
          const token = jwt.sign({ _id: user._id }, JWT_SECRET, {
            expiresIn: "7d",
          });
          res.status(201).send({ token });
        }
      });
    })
    .catch((err) => {
      if (err.message === "IncorrectEmail") {
        next(new Unauthorized("Incorrect email or password."));
      } else {
        next(err);
      }
    });
};
