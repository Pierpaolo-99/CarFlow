const express = require("express");
const router = express.Router();
const controller = require("./assignmentsController");

router.get("/", controller.getAssignments);
router.post("/", controller.assignVehicle);

module.exports = router;