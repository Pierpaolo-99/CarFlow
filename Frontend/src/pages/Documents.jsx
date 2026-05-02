import { useEffect, useState } from "react";
import { getVehicles, getDocumentsByVehicle, createDocument } from "../api/api";

export default function Documents() {
  const [vehicles, setVehicles] = useState([]);
  const [documents, setDocuments] = useState([]);
  const [selectedVehicle, setSelectedVehicle] = useState("");

  const [form, setForm] = useState({
    tipo: "",
    data_inizio: "",
    data_scadenza: "",
    file_path: ""
  });

  useEffect(() => {
    loadVehicles();
  }, []);

  async function loadVehicles() {
    const data = await getVehicles();
    setVehicles(data);
  }

  async function loadDocuments(vehicleId) {
    const data = await getDocumentsByVehicle(vehicleId);
    setDocuments(data);
  }

  async function handleVehicleChange(id) {
    setSelectedVehicle(id);
    if (id) loadDocuments(id);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    await createDocument({
      vehicle_id: selectedVehicle,
      ...form
    });

    setForm({
      tipo: "",
      data_inizio: "",
      data_scadenza: "",
      file_path: ""
    });

    loadDocuments(selectedVehicle);
  }

  return (
    <>
      <h1>📄 Documenti</h1>

      {/* SELECT VEICOLO */}
      <select
        value={selectedVehicle}
        onChange={(e) => handleVehicleChange(e.target.value)}
      >
        <option value="">Seleziona veicolo</option>
        {vehicles.map(v => (
          <option key={v.id} value={v.id}>
            {v.marca} {v.modello} ({v.targa})
          </option>
        ))}
      </select>

      {/* FORM */}
      {selectedVehicle && (
        <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
          
          <input
            placeholder="Tipo (assicurazione, revisione...)"
            value={form.tipo}
            onChange={(e) => setForm({ ...form, tipo: e.target.value })}
          />

          <input
            type="date"
            value={form.data_inizio}
            onChange={(e) => setForm({ ...form, data_inizio: e.target.value })}
          />

          <input
            type="date"
            value={form.data_scadenza}
            onChange={(e) => setForm({ ...form, data_scadenza: e.target.value })}
          />

          <input
            placeholder="File path"
            value={form.file_path}
            onChange={(e) => setForm({ ...form, file_path: e.target.value })}
          />

          <button type="submit">Aggiungi Documento</button>
        </form>
      )}

      {/* LISTA DOCUMENTI */}
      <h2>Documenti</h2>

      <ul>
        {documents.map(d => (
          <li key={d.id}>
            📄 {d.tipo} - scade il {d.data_scadenza}
          </li>
        ))}
      </ul>
    </>
  );
}