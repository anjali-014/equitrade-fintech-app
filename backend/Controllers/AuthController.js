
// backend/controller/authController.js
const { UserModel } = require("../Models/UserModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");





/* ================= SIGNUP ================= */
module.exports.Signup = async (req, res) => {
  try {
    const { email, username, password } = req.body;

    if (!email || !username || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = await UserModel.create({
      email,
      username,
      password,
    });

    console.log("New user created:", user.email);

    res.status(201).json({
      message: "Signup successful",
      success: true,
      userId: user._id,
    });

  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ message: "Server error" });
  }
};



/* ================= LOGIN ================= */
module.exports.Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    console.log("Login attempt for:", email);

    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // ✅ STRICT JWT SECRET (NO FALLBACK)
    const secret = process.env.JWT_SECRET;

    if (!secret) {
      console.error("JWT_SECRET is missing in .env");
      return res.status(500).json({ message: "Server configuration error" });
    }

    const token = jwt.sign(
      { id: user._id, email: user.email },
      secret,
      { expiresIn: "1h" }
    );

    res.cookie("token", token, {
  httpOnly: true,
  secure: true,
  sameSite: "none",
  maxAge: 3600000,
});

    res.status(200).json({
      message: "Login successful",
      success: true,
      token,
    });

  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error" });
  }
};