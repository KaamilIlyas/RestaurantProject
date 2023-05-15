const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const DishSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    des: {
      type: String,
      required: true,
    },
    ipath: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Dish = mongoose.model("Dish", DishSchema);
module.exports = Dish;