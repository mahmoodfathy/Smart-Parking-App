const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, "Entering a username is required!"],
  },
  Email: {
    type: String,
    required: [true, "Entering an Email is required!"],
  },
  Password: {
    type: String,
    required: [true, "Entering a Password is required!"],
  },
  userImage: { type: String, default: "" },

  isAdmin: {
    type: Boolean,
    default: false,
  },
});
const Model = mongoose.model("user", userSchema);

module.exports = Model;
