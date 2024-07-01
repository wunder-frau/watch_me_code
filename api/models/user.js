const mongoose = require("mongoose");
const { isEmail, isStrongPassword } = require("validator");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "'name' field must be filled out."],
    minlength: 2,
    maxlength: 30,
  },
  email: {
    type: String,
    unique: [true, "A user with this 'email' already exists."],
    required: [true, "'email' field must be filled out."],
    validate: {
      validator: (v) => isEmail(v),
      message: "Invalid Email",
    },
  },
  password: {
    type: String,
    minlength: [8, "Minimum length for 'password' is 8 characters."],
    required: [true, "'password' field must be filled out."],
    select: false,
    validate: {
      validator(password) {
        return isStrongPassword(password, {
          minUppercase: false,
          minSymbols: false,
        });
      },
      message: "Weak password",
    },
  },
});

module.exports = mongoose.model("user", userSchema);
