require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const helmet = require("helmet");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { celebrate, Joi, errors } = require("celebrate");
const limiter = require("./middlewares/limiter");
const auth = require("./middlewares/auth");
const errorsHandler = require("./middlewares/errorsHandler");
const regExp = require("./regexp/regexp");
const NotFound = require("./errors/NotFound");
const { requestLogger, errorLogger } = require("./middlewares/logger");
const { createUser, login } = require("./controllers/users");

const { BASE_URL = "mongodb://localhost:27017/moviesdb" } = process.env;
const app = express();

const allowedCors = [
  "https://iresta.rest",
  "https://api.iresta.rest",
  "http://localhost:3000",
  "http://localhost:5000",
];

app.use(
  cors({
    origin: allowedCors,
  })
);

const { PORT = 5001 } = process.env;
app.use(helmet());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS"
  );
  if (req.method === "OPTIONS") {
    res.status(200).send();
    return;
  }
  next();
});

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(BASE_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

app.use(requestLogger);
app.use(limiter);

app.post(
  "/signup",
  celebrate({
    body: Joi.object().keys({
      name: Joi.string().min(2).max(30),
      about: Joi.string().min(2).max(30),
      avatar: Joi.string().pattern(regExp),
      email: Joi.string().email().required(),
      password: Joi.string().required().min(8).max(35),
    }),
  }),
  createUser
);
app.post(
  "/signin",
  celebrate({
    body: Joi.object().keys({
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    }),
  }),
  login
);

app.use("/", auth, require("./routes/users"));
app.use("/", auth, require("./routes/movies"));

app.use("*", (req, res, next) => {
  next(new NotFound("The requested resource was not found"));
});

app.use(errorLogger);
app.use(errors());

app.use(errorsHandler);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
