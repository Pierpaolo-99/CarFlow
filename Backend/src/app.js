const express = require("express");
const cors = require("cors");

const app = express();

// 🔹 Middleware
app.use(cors());
app.use(express.json());

// 🔹 Routes
const vehicleRoutes = require("./modules/vehicles/vehiclesRoutes");
app.use("/vehicles", vehicleRoutes);

// 🔹 Test route
app.get("/", (req, res) => {
  res.send("CarFlow API running 🚗");
});

// 🔹 Export
module.exports = app;