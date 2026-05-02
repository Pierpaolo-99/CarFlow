const db = require("../../config/db");

exports.getTechnicians = (req, res) => {
  db.query("SELECT * FROM technicians", (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

exports.createTechnician = (req, res) => {
  const { nome, cognome, telefono, email } = req.body;

  const query = `
    INSERT INTO technicians (nome, cognome, telefono, email)
    VALUES (?, ?, ?, ?)
  `;

  db.query(query, [nome, cognome, telefono, email], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Tecnico creato ✅" });
  });
};