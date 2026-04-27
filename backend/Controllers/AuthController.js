// // backend/controller/authController.js
// const User = require("../model/UserModel");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");

// const { HoldingsModel } = require("../model/HoldingsModel");
// const { OrdersModel } = require("../model/OrdersModel");




// module.exports.buyStock = async (req, res) => {
//   try {
//     let { name, qty, price } = req.body;

//     // ✅ FIX: normalize name
//     name = name.trim().toUpperCase();

//         console.log("BUY HIT:", name, qty, price);

//     // ✅ convert to numbers
//     qty = Number(qty);
//     price = Number(price);

//     // 1️⃣ Save order
//     await OrdersModel.create({
//       name,
//       qty,
//       price,
//       mode: "BUY",
//     });

//     // 2️⃣ Update holdings
//     const existing = await HoldingsModel.findOne({ name });

//     if (existing) {
//       const totalQty = existing.qty + qty;

//       existing.avg =
//         ((existing.avg * existing.qty) + (price * qty)) / totalQty;

//       existing.qty = totalQty;
//       existing.price = price;

//       await existing.save();
//     } else {
//       await HoldingsModel.create({
//         name,
//         qty,
//         avg: price,
//         price,
//         net: "0",
//         day: "0",
//       });
//     }

//     res.status(200).json({ message: "Stock bought successfully" });

//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Error buying stock" });
//   }
// };

// /* ================= SIGNUP ================= */
// module.exports.Signup = async (req, res) => {
//   try {
//     const { email, username, password } = req.body;

//     // Basic validation
//     if (!email || !username || !password) {
//       return res.status(400).json({ message: "All fields are required" });
//     }

//     // Check if user already exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: "User already exists" });
//     }

//     // Create user in DB (password hashing handled by User model pre-save hook)
//     const user = await User.create({
//       email,
//       username,
//       password,
//     });

//     console.log("New user created:", user.email);

//     // Response
//     res.status(201).json({
//       message: "Signup successful",
//       success: true,
//       userId: user._id,
//     });
//   } catch (error) {
//     console.error("Signup error:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// };

// /* ================= LOGIN ================= */
// module.exports.Login = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     // Validation
//     if (!email || !password) {
//       return res.status(400).json({ message: "All fields are required" });
//     }

//     console.log("Login attempt for:", email);

//     // Find user
//     const user = await User.findOne({ email });
//     console.log("User from DB:", user);

//     if (!user) {
//       return res.status(401).json({ message: "Invalid email or password" });
//     }

//     // Check password
//     const isMatch = await bcrypt.compare(password, user.password);
//     console.log("Password match:", isMatch);

//     if (!isMatch) {
//       return res.status(401).json({ message: "Invalid email or password" });
//     }

//     // JWT secret
//    const secret = process.env.JWT_SECRET; // change to strong secret in production
//     const token = jwt.sign(
//       { id: user._id, email: user.email },
//       secret,
//       { expiresIn: "1h" }
//     );

//     // Send token as HTTP-only cookie
//     res.cookie("token", token, {
//       httpOnly: true,
//       sameSite: "lax",
//       maxAge: 3600000, // 1 hour
//     });

//     res.status(200).json({
//       message: "Login successful",
//       success: true,
//       token, // optional in body
//     });

//   } catch (error) {
//     console.error("Login error:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// };




// backend/controller/authController.js
const User = require("../model/UserModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { HoldingsModel } = require("../model/HoldingsModel");
const { OrdersModel } = require("../model/OrdersModel");

/* ================= BUY STOCK ================= */
module.exports.buyStock = async (req, res) => {
  try {
    let { name, qty, price } = req.body;

    name = name.trim().toUpperCase();
    qty = Number(qty);
    price = Number(price);

    const userId = req.user.id; // 🔥 IMPORTANT

    console.log("BUY HIT:", name, qty, price, userId);

    // ✅ Save Order (with userId)
    await OrdersModel.create({
      name,
      qty,
      price,
      mode: "BUY",
      userId
    });

    // ✅ Find holding ONLY for this user
    const existing = await HoldingsModel.findOne({
      name,
      userId
    });

    if (existing) {
      const totalQty = existing.qty + qty;

      existing.avg =
        ((existing.avg * existing.qty) + (price * qty)) / totalQty;

      existing.qty = totalQty;
      existing.price = price;

      await existing.save();
    } else {
      // ✅ Create new holding for this user
      await HoldingsModel.create({
        name,
        qty,
        avg: price,
        price,
        net: "0",
        day: "0",
        userId
      });
    }

    res.status(200).json({ message: "Stock bought successfully" });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error buying stock" });
  }
};

/* ================= SIGNUP ================= */
module.exports.Signup = async (req, res) => {
  try {
    const { email, username, password } = req.body;

    if (!email || !username || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = await User.create({
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

    const user = await User.findOne({ email });

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
      sameSite: "lax",
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