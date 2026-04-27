const { HoldingsModel } = require("../model/HoldingsModel");
const { OrdersModel } = require("../model/OrdersModel");

module.exports.buyStock = async (req, res) => {
  try {
    let { name, qty, price } = req.body;

    name = name.trim().toUpperCase();
    qty = Number(qty);
    price = Number(price);

    const userId = req.user.id;

    // Save Order
    await OrdersModel.create({
      name,
      qty,
      price,
      mode: "BUY",
      userId,
    });

    // Check existing holding
    const existing = await HoldingsModel.findOne({ name, userId });

    if (existing) {
      const totalQty = existing.qty + qty;

      existing.avg =
        ((existing.avg * existing.qty) + (price * qty)) / totalQty;

      existing.qty = totalQty;
      existing.price = price;

      await existing.save();
    } else {
      await HoldingsModel.create({
        name,
        qty,
        avg: price,
        price,
        net: "0",
        day: "0",
        userId,
      });
    }

    res.status(200).json({ message: "Stock bought successfully" });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error buying stock" });
  }
};