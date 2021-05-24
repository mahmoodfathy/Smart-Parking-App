const Parking = require("../Models/Parking");
exports.addParking = async (req, res) => {
  const { lat, lng, contactInfo, parkingName } = req.body;
  const parking = new Parking({
    lat,
    lng,
    contactInfo,
    parkingName,
  });
  try {
    await parking.save();
    return res.status(200).json({ message: "Parking Created Successfully!" });
  } catch (err) {
    return res.status(500).json({ message: "Internal Sever Error!" });
  }
};
exports.getPraking = async (req, res) => {
  const { id } = req.params;
  try {
    const parking = await Parking.findById(id);
    if (!parking) {
      return res.status(404).json({ message: "No Parking Found!" });
    }
    return res.status(200).json(parking);
  } catch (err) {
    return res.status(500).json({ message: "Internal Server Error!" });
  }
};

exports.getAllParking = async (req, res) => {
  try {
    const parkings = await Parking.find({});
    return res.status(200).json(parkings);
  } catch (err) {
    return res.status(500).json({ message: "Internal Server Error!" });
  }
};
