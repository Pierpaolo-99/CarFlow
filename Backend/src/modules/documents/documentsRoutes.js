const express = require("express");
const router = express.Router();
const controller = require("./documentsController");

router.post("/", controller.createDocument);
router.get("/:vehicleId", controller.getDocumentsByVehicle);

module.exports = router;