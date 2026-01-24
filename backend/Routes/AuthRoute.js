const express = require('express');
const router = express.Router();

// Import the controller
const { Signup, Login } = require('../Controllers/AuthController');

// Signup route
router.post('/signup', Signup);

// Login route
router.post('/login', Login);

const jwt = require("jsonwebtoken");

router.get("/verify", (req, res) => {
  const token = req.cookies.token; // get token from cookies
  if (!token) return res.json({ status: false });

  try {
    const secret = process.env.JWT_SECRET || "devSecret";
    const decoded = jwt.verify(token, secret);
    res.json({ status: true, user: decoded.email });
  } catch (err) {
    res.json({ status: false });
  }
});


module.exports = router;
