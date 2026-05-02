const express = require("express");
const router = express.Router();
const controller = require("./vehiclesController");

router.get("/", controller.getVehicles);
router.post("/", controller.createVehicle);

module.exports = router;