const mongoose = require("mongoose");
const crypto = require("crypto");
// user schema
const productReviewScheama = new mongoose.Schema(
  {
    userName: {
      type: String,
      trim: true,
      max: 32,
    },
    userEmail: {
      type: String,
      trim: true,
      required: true,

      lowercase: true,
    },
    reviewStar: {
      type: Number,
    },
    reviewText: {
      type: String,
      trim: true,
    },
    reviewTitle: {
      type: String,
      trim: true,
    },
    productImage: [
      {
        type: String,
      },
    ],
    profileImage: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ProductReview", productReviewScheama);
