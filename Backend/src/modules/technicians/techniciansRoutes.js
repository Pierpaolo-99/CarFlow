const express = require("express");
const router = express.Router();
const controller = require("./techniciansController");

router.get("/", controller.getTechnicians);
router.post("/", controller.createTechnician);

module.exports = router;