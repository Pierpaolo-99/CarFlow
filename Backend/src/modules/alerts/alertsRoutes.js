const express = require("express");
const router = express.Router();
const controller = require("./alertsController");

router.get("/expiring-documents", controller.getExpiringDocuments);

module.exports = router;