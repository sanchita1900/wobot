const User = require("../models/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const handleSignup = async (req, res) => {
    try {
        const {username, password, firstname, lastname} = req.body;
      const user = await User.findOne({username});
      if (user) return res.status(400).send("already exists");
      const hashed = await bcrypt.hash(password, 10);
      const newuser = new User({
        username,
        firstname,
        lastname,
        password: hashed,
      });
      await newuser.save();
      res.json({
        success:true,
        message: "User created successfully",
      });
    } catch (err) {
      console.log(err);
      res.status(501).json({ message: "Error" });
    }
  };

  const handleLogin = async (req, res) => {
    try {
        const {username, password, firstname, lastname} = req.body;
      const user = await User.findOne({ username });
      if (!user)
        return res.status(400).json({ success: false, message: "User does not exist" });
    
        const cmp = await bcrypt.compare(password, user.password);
        if (cmp) {
          const token = jwt.sign({ userId: user._id}, process.env.SECRET_KEY);
          delete user.password;
          return res.json({
            success: true,
            message: "login successfull",
            token,
          });
        } else {
          return res
            .status(400)
            .json({ success: false, message: "Wrong Credentials" });
        }
      
    } catch (err) {
      console.log(err);
      res.status(501).json({ message: "Error" });
    }
  };
  module.exports = {
    handleSignup,
    handleLogin,
  }