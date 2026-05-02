const db = require("../../config/db");

// CREA DOCUMENTO
exports.createDocument = (req, res) => {
  const { vehicle_id, tipo, data_inizio, data_scadenza, file_path } = req.body;

  const query = `
    INSERT INTO documents (vehicle_id, tipo, data_inizio, data_scadenza, file_path)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.query(
    query,
    [vehicle_id, tipo, data_inizio, data_scadenza, file_path],
    (err) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Documento salvato ✅" });
    }
  );
};

// LISTA DOCUMENTI PER VEICOLO
exports.getDocumentsByVehicle = (req, res) => {
  const { vehicleId } = req.params;

  const query = `
    SELECT * FROM documents
    WHERE vehicle_id = ?
    ORDER BY data_scadenza ASC
  `;

  db.query(query, [vehicleId], (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};