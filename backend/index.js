require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const requireAuth = require("./Middlewares/requireAuth");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");

const authRoute = require("./Routes/AuthRoute");

const PORT = process.env.PORT || 3002;

const app = express();

// ✅ Middlewares
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));

app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());

// ✅ Routes
app.use("/api/auth", authRoute);

// ✅ APIs
// app.get("/allHoldings", async (req, res) => {
//   const allHoldings = await HoldingsModel.find({});
//   res.json(allHoldings);
// });

// app.get("/allPositions", async (req, res) => {
//   const allPositions = await PositionsModel.find({});
//   res.json(allPositions);
// });


app.get("/allHoldings", requireAuth, async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", requireAuth, async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

// ✅ PROPER DB CONNECTION + SERVER START
const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
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