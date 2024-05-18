const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    fname: { type: String, required: true },
    lname: { type: String, required: true },
    gender: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    fname: { type: String, required: true },
  },
  { timestamps: true }
);

userSchema.statics.signup = async function (userData) {
  if (!userData?.email || !userData?.password) {
    throw Error("All fields must be filled");
  }
  if (!validator.isEmail(userData?.email)) {
    throw Error("Invalid email format");
  }
  if (!validator.isStrongPassword(userData.password)) {
    throw Error("Your password is too weak");
  }

  const exist = await this.findOne({ email: userData?.email });
  if (exist) {
    throw Error("Email is already taken");
  }
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(userData?.password, salt);

  const user = await this.create({ ...userData, password: hashPassword });
  return user;
};

module.exports = mongoose.model("User", userSchema);
