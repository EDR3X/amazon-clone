const User = require("../models/model.user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const getUser = (_req, res) => {
  res.send("Hello world");
};

const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPsw = await bcrypt.hash(password, 8);

    let user = new User({
      email,
      password: hashedPsw,
      name,
    });

    user = await user.save();

    res.status(200).json({ user, message: "User created successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const signin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Email doesn't exist" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ mesaage: "Incorrect password." });
    }

    const token = jwt.sign({ id: user._id }, "passwordKey");
    res.json({ token, ...user._doc });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

const authRoute = async (req, res) => {
  const user = await User.findById(req.user);
  res.json({ ...user._doc, token: req.token });
};

module.exports = { getUser, signup, signin, authRoute };
