/**
 * seed.js — One-time script to populate demo holdings and positions
 *           for a specific user in MongoDB.
 *
 * HOW TO RUN:
 *   1. Make sure your backend .env is configured (MONGO_URI, JWT_SECRET)
 *   2. From the /backend directory, run:
 *        node seed.js <your-registered-email>
 *   Example:
 *        node seed.js anjalisaini@gmail.com
 *
 *   This will seed 10 sample holdings and 5 sample positions
 *   tied to that user's _id so /allHoldings and /allPositions return data.
 */

require("dotenv").config();
const mongoose = require("mongoose");

const { UserModel } = require("./Models/UserModel");
const { HoldingsModel } = require("./Models/HoldingsModel");
const { PositionsModel } = require("./Models/PositionsModel");

// ─── Sample Holdings Data ─────────────────────────────────────────────────────
const sampleHoldings = [
  { name: "BHARTIARTL", qty: 2,  avg: 538.05, price: 541.15, net: "+0.58%", day: "+2.99%" },
  { name: "HDFCBANK",   qty: 2,  avg: 1522.05, price: 1525.35, net: "+0.21%", day: "+0.18%" },
  { name: "HINDUNILVR", qty: 1,  avg: 2335.85, price: 2417.40, net: "+3.49%", day: "+0.92%" },
  { name: "INFY",       qty: 1,  avg: 1397.45, price: 1387.65, net: "-0.70%", day: "+0.10%" },
  { name: "ITC",        qty: 5,  avg: 268.00,  price: 258.35,  net: "-3.60%", day: "-0.67%" },
  { name: "JSWSTEEL",   qty: 2,  avg: 680.05,  price: 688.85,  net: "+1.29%", day: "+1.14%" },
  { name: "KOTAKBANK",  qty: 1,  avg: 1914.35, price: 1893.35, net: "-1.10%", day: "-0.45%" },
  { name: "RELIANCE",   qty: 2,  avg: 2335.95, price: 2327.25, net: "-0.37%", day: "+1.53%" },
  { name: "TATASTEEL",  qty: 4,  avg: 102.25,  price: 104.25,  net: "+1.95%", day: "+0.49%" },
  { name: "TCS",        qty: 1,  avg: 3240.10, price: 3229.00, net: "-0.34%", day: "-0.27%" },
];

// ─── Sample Positions Data ────────────────────────────────────────────────────
const samplePositions = [
  { name: "CRUDEOIL",   qty: 2,  avg: 7071.00, price: 7056.50, net: "-0.20%", day: "-0.20%", product: "MIS" },
  { name: "GOLDM",      qty: 1,  avg: 59765.00, price: 57811.00, net: "-3.27%", day: "-3.27%", product: "MIS" },
  { name: "IDEA",       qty: 17, avg: 9.15,  price: 8.45,  net: "-7.65%", day: "-7.65%", product: "MIS" },
  { name: "INFY",       qty: 2,  avg: 1400.45, price: 1395.40, net: "-0.36%", day: "-0.36%", product: "MIS" },
  { name: "M&M",        qty: 2,  avg: 1260.00, price: 1265.00, net: "+0.40%", day: "+0.40%", product: "MIS" },
];

// ─── Main ─────────────────────────────────────────────────────────────────────
async function seed() {
  const email = process.argv[2];

  if (!email) {
    console.error("❌ Please provide your registered email as an argument.");
    console.error("   Usage: node seed.js your-email@example.com");
    process.exit(1);
  }

  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Connected to MongoDB");

    // Find the user
    const user = await UserModel.findOne({ email });
    if (!user) {
      console.error(`❌ No user found with email: ${email}`);
      console.error("   Make sure you have signed up first.");
      process.exit(1);
    }

    const userId = user._id;
    console.log(`✅ Found user: ${user.username} (${userId})`);

    // Clear existing data for this user
    await HoldingsModel.deleteMany({ userId });
    await PositionsModel.deleteMany({ userId });
    console.log("🗑️  Cleared existing holdings and positions for this user");

    // Seed holdings
    const holdingsWithUser = sampleHoldings.map((h) => ({ ...h, userId }));
    await HoldingsModel.insertMany(holdingsWithUser);
    console.log(`✅ Seeded ${holdingsWithUser.length} holdings`);

    // Seed positions
    const positionsWithUser = samplePositions.map((p) => ({ ...p, userId }));
    await PositionsModel.insertMany(positionsWithUser);
    console.log(`✅ Seeded ${positionsWithUser.length} positions`);

    console.log("\n🎉 Seed complete! Refresh your dashboard to see the data.");
    process.exit(0);

  } catch (err) {
    console.error("❌ Seed failed:", err.message);
    process.exit(1);
  }
}

seed();
