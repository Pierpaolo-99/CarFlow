const db = require("../../config/db");

// DOCUMENTI IN SCADENZA
exports.getExpiringDocuments = (req, res) => {
  const query = `
    SELECT 
      d.*,
      v.targa,
      v.marca,
      v.modello
    FROM documents d
    JOIN vehicles v ON d.vehicle_id = v.id
    WHERE d.data_scadenza BETWEEN CURDATE() AND DATE_ADD(CURDATE(), INTERVAL 30 DAY)
    ORDER BY d.data_scadenza ASC
  `;

  db.query(query, (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};