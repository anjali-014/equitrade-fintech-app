// resetPassword.js
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("./model/UserModel");
require("dotenv").config();

const uri = process.env.MONGO_URL;

mongoose.connect(uri)
  .then(async () => {
    console.log("DB connected");

    const email = "testuser@example.com"; // your user email
    const newPassword = "Test1234!";      // the password you want to set

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    const result = await User.updateOne(
      { email },
      { password: hashedPassword }
    );

    console.log("Password reset result:", result);
    process.exit();
  })
  .catch(err => console.error(err));
