const { userVerification } = require("../Middlewares/AuthMiddleware");

const requireAuth = require("../Middlewares/requireAuth");

const express = require('express');
const router = express.Router();

// Import the controller
const { Signup, Login } = require('../Controllers/AuthController');

const { buyStock } = require("../Controllers/TradeController");

// router.post("/buy", buyStock);

router.post("/buy", requireAuth, buyStock);

router.get("/verify", userVerification);

// Signup route
router.post('/signup', Signup);

// Login route
router.post('/login', Login);



module.exports = router;
