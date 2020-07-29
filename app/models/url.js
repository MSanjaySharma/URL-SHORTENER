const mongoose = require("mongoose");
const validator = require("validator");
const shorthash = require("shorthash");
const Schema = mongoose.Schema;
const urlSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  originalUrl: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        return validator.isURL(value);
      },
      message: function () {
        return "enter a valid e-mail";
      },
    },
  },
  hashedUrl: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    required: true,
  },
  clicks: [
    {
      clickDateTime: { type: Date },
      ipAddress: { type: String },
      browser: { type: String },
      platform: { type: String },
      device: { type: String },
    },
  ],
});

urlSchema.pre("save", function (next) {
  const originalUrl = this.originalUrl;
  this.hashedUrl = shorthash.unique(originalUrl);
  next();
});

const Url = mongoose.model("Url", urlSchema);

module.exports = Url;
