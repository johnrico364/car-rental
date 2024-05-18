const User = require("../models/userSchema");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id: _id }, "CarRental", { expiresIn: "3d" });
};

const signupUser = async (req, res) => {
  const userData = req.body;
  try {
    const user = await User.signup(userData);
    const token = createToken(user._id);

    res.status(200).json({ email: user.email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { signupUser };
