const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const parkingSchema = new Schema({
  lat: {
    type: String,
  },
  lng: {
    type: String,
  },
  parkingName: {
    type: String,
  },
  contactInfo: { type: String, default: "" },
});
const Model = mongoose.model("parking", parkingSchema);

module.exports = Model;
