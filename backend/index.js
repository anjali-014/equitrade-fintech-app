require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const uri = process.env.MONGO_URI;

const requireAuth = require("./Middlewares/requireAuth");

const { HoldingsModel } = require("./Models/HoldingsModel");
const { PositionsModel } = require("./Models/PositionsModel");
const { OrdersModel } = require("./Models/OrdersModel");

const authRoute = require("./Routes/AuthRoute");

const PORT = process.env.PORT || 3002;

const app = express();

// ✅ Middlewares
app.use(cors({
  origin: process.env.CLIENT_URL || "http://localhost:3000",
  credentials: true
}));

app.use(express.json());
// app.use(bodyParser.json());
app.use(cookieParser());

// ✅ Routes
app.use("/api/auth", authRoute);




app.get("/allHoldings", requireAuth, async (req, res) => {
  try {
    const userId = req.user.id;
    console.log(`[allHoldings] Authenticated userId: ${userId}`);
    const allHoldings = await HoldingsModel.find({ userId });
    console.log(`[allHoldings] Found ${allHoldings.length} holdings`);
    res.json(allHoldings);
  } catch (err) {
    console.error("[allHoldings] Error:", err.message);
    res.status(500).json({ message: "Failed to fetch holdings" });
  }
});

app.get("/allPositions", requireAuth, async (req, res) => {
  try {
    const userId = req.user.id;
    console.log(`[allPositions] Authenticated userId: ${userId}`);
    const allPositions = await PositionsModel.find({ userId });
    console.log(`[allPositions] Found ${allPositions.length} positions`);
    res.json(allPositions);
  } catch (err) {
    console.error("[allPositions] Error:", err.message);
    res.status(500).json({ message: "Failed to fetch positions" });
  }
});

// ✅ PROPER DB CONNECTION + SERVER START
const startServer = async () => {
  try {
   await mongoose.connect(uri); 
    console.log("DB Connected ✅");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT} 🚀`);
    });

  } catch (err) {
    console.error("DB Connection Failed ❌", err);
    process.exit(1);
  }
};

startServer();