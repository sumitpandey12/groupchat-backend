const bcryptjs = require("bcryptjs");
const User = require("../models/user");

const salt = 10;

exports.registerUser = (req, res) => {
  try {
    const { name, email, password, phone } = req.body;
    const hashedPassword = bcryptjs.hashSync(password, salt);
    User.create({ name, email, phone, password: hashedPassword })
      .then((result) => {
        return res.send(result);
      })
      .catch((err) => res.send(err));
  } catch (error) {
    res.status(400).json({
      message: "Server Error :" + error,
    });
  }
};
