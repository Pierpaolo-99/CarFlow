const db = require("../../config/db");

exports.getVehicles = (req, res) => {
  db.query("SELECT * FROM vehicles", (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

exports.createVehicle = (req, res) => {
  const { targa, marca, modello, anno, stato } = req.body;

  const query = `
    INSERT INTO vehicles (targa, marca, modello, anno, stato)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.query(query, [targa, marca, modello, anno, stato], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Veicolo creato ✅" });
  });
};