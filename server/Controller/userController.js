const User = require("../Model/user");
const bcrypt = require("bcrypt");

const userRegister = async (req, res) => {
    try {
      const hast_password = bcrypt.hashSync(req.body.password, 10);
      const newUser = new User({
        fisrtName: req.body.fisrtName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: hast_password,
        mobile: req.body.mobile
      });
      await newUser
        .save()
        .then((user) => {
          res.json({
            status: 201,
            message: "User Created Success",
            data: user,
          });
        })
        .catch((err) => console.log(err));
    } catch (err) {
      res.status(500).json({ error: err, message: "Registration failed" });
    }
  };
  const userLogin = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // Find user by email
      const user = await User.findOne({ email });
  
      // Check if user exists
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
  
      // Compare passwords
      const match = await bcrypt.compare(password, user.password);
  
      // If passwords don't match
      if (!match) {
        return res.status(401).json({ message: "Invalid password" });
      }
  
      // If passwords match
      res.status(200).json({ message: "Login successful" });
    } catch (err) {
      // Handle server errors
      res.status(500).json({ error: err, message: "Login failed" });
    }
  };
  
  
  module.exports = {
    userRegister,
    userLogin,
  };