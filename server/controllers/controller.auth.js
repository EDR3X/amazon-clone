const User = require("../models/model.user");

const getUser = (_req, res) => {
  res.send("Hello world");
};

const signup = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    let user = new User({
      email,
      password,
      name,
    });

    user = await user.save();

    res.status(200).json({ user, message: "User created successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
module.exports = { getUser, signup };
