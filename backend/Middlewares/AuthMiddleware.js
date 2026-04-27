// const User = require("../Models/UserModel");
// require("dotenv").config();
// const jwt = require("jsonwebtoken");

// module.exports.userVerification = (req, res) => {
//   const token = req.cookies.token
//   if (!token) {
//     return res.json({ status: false })
//   }
//   jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
//     if (err) {
//      return res.json({ status: false })
//     } else {
//       const user = await User.findById(data.id)
//       if (user) return res.json({ status: true, user: user.username })
//       else return res.json({ status: false })
//     }
//   })
// }




const User = require("../model/UserModel"); // ⚠️ check path: model vs Models
const jwt = require("jsonwebtoken");

module.exports.userVerification = async (req, res) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ status: false, message: "No token" });
    }

    // 🔥 verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // 🔥 fetch user
    const user = await User.findById(decoded.id);

    if (!user) {
      return res.status(401).json({ status: false, message: "User not found" });
    }

    return res.status(200).json({
      status: true,
      user: user.username,
    });

  } catch (err) {
    return res.status(401).json({
      status: false,
      message: "Invalid token",
    });
  }
};