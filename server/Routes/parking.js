const express = require("express");
const router = express.Router();
const parkingControllers = require("../Controllers/parking");

router.post("/parking", parkingControllers.addParking);
router.get("/parking:id", parkingControllers.getPraking);
router.get("/parking", parkingControllers.getAllParking);

module.exports = router;
