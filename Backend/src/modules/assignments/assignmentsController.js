const db = require("../../config/db");

exports.assignVehicle = (req, res) => {
  const { vehicle_id, technician_id, data_inizio } = req.body;

  const query = `
    INSERT INTO assignments (vehicle_id, technician_id, data_inizio)
    VALUES (?, ?, ?)
  `;

  db.query(query, [vehicle_id, technician_id, data_inizio], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Veicolo assegnato ✅" });
  });
};

exports.getAssignments = (req, res) => {
  const query = `
    SELECT a.*, v.targa, t.nome, t.cognome
    FROM assignments a
    JOIN vehicles v ON a.vehicle_id = v.id
    JOIN technicians t ON a.technician_id = t.id
  `;

  db.query(query, (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};