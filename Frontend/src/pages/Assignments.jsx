import { useEffect, useState } from "react";
import { getAssignments, createAssignment, getVehicles, getTechnicians } from "../api/api";

export default function Assignments() {
  const [assignments, setAssignments] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [techs, setTechs] = useState([]);

  const [form, setForm] = useState({
    vehicle_id: "",
    technician_id: "",
    data_inizio: ""
  });

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    const [a, v, t] = await Promise.all([
      getAssignments(),
      getVehicles(),
      getTechnicians()
    ]);

    setAssignments(a);
    setVehicles(v);
    setTechs(t);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await createAssignment(form);

    setForm({
      vehicle_id: "",
      technician_id: "",
      data_inizio: ""
    });

    loadData();
  }

  return (
    <>
      <h1>🔁 Assegnazioni</h1>

      {/* FORM */}
      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        
        <select
          value={form.vehicle_id}
          onChange={(e) => setForm({ ...form, vehicle_id: e.target.value })}
        >
          <option value="">Seleziona veicolo</option>
          {vehicles.map(v => (
            <option key={v.id} value={v.id}>
              {v.marca} {v.modello} ({v.targa})
            </option>
          ))}
        </select>

        <select
          value={form.technician_id}
          onChange={(e) => setForm({ ...form, technician_id: e.target.value })}
        >
          <option value="">Seleziona tecnico</option>
          {techs.map(t => (
            <option key={t.id} value={t.id}>
              {t.nome} {t.cognome}
            </option>
          ))}
        </select>

        <input
          type="date"
          value={form.data_inizio}
          onChange={(e) => setForm({ ...form, data_inizio: e.target.value })}
        />

        <button type="submit">Assegna</button>
      </form>

      {/* LISTA */}
      <h2>Assegnazioni attive</h2>

      <ul>
        {assignments.map(a => (
          <li key={a.id}>
            🚗 {a.targa} → 👨‍🔧 {a.nome} {a.cognome} | dal {a.data_inizio}
          </li>
        ))}
      </ul>
    </>
  );
}