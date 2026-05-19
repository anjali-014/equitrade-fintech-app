const mongoose = require("mongoose");

const PositionsSchema = new mongoose.Schema({
  name: String,
  qty: Number,
  avg: Number,
  price: Number,
  net: String,
  day: String,
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const PositionsModel = mongoose.model("position", PositionsSchema);

module.exports = { PositionsModel };