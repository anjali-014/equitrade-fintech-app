// backend/controller/authController.js

const User = require("../model/UserModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

/* ================= SIGNUP ================= */
module.exports.Signup = async (req, res) => {
  try {
    const { email, username, password } = req.body;

    // Basic validation
    if (!email || !username || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user in DB
    const user = await User.create({
      email,
      username,
      password: hashedPassword,
    });

    console.log("New user created:", user.email);

    // Response
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

    // Validation
    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    console.log("Login attempt for:", email);

    // Find user
    const user = await User.findOne({ email });
    console.log("User from DB:", user);

    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    console.log("Password match:", isMatch);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // JWT secret
    const secret = process.env.JWT_SECRET || "devSecret"; // change to strong secret in production
    const token = jwt.sign(
      { id: user._id, email: user.email },
      secret,
      { expiresIn: "1h" }
    );

    // Send token as HTTP-only cookie
    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "lax",
      maxAge: 3600000, // 1 hour
    });

    res.status(200).json({
      message: "Login successful",
      success: true,
      token, // optional in body
    });

  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error" });
  }
};
