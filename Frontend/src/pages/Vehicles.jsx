import { useEffect, useState } from "react";
import { getVehicles, createVehicle } from "../api/api";

export default function Vehicles() {
  const [vehicles, setVehicles] = useState([]);
  const [form, setForm] = useState({
    targa: "",
    marca: "",
    modello: "",
    anno: "",
    stato: "attiva"
  });

  useEffect(() => {
    loadVehicles();
  }, []);

  async function loadVehicles() {
    const data = await getVehicles();
    setVehicles(data);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await createVehicle(form);
    setForm({
      targa: "",
      marca: "",
      modello: "",
      anno: "",
      stato: "attiva"
    });
    loadVehicles();
  }

  return (
    <>
      <h1>🚗 Veicoli</h1>

      {/* FORM */}
      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <input
          placeholder="Targa"
          value={form.targa}
          onChange={(e) => setForm({ ...form, targa: e.target.value })}
        />

        <input
          placeholder="Marca"
          value={form.marca}
          onChange={(e) => setForm({ ...form, marca: e.target.value })}
        />

        <input
          placeholder="Modello"
          value={form.modello}
          onChange={(e) => setForm({ ...form, modello: e.target.value })}
        />

        <input
          placeholder="Anno"
          value={form.anno}
          onChange={(e) => setForm({ ...form, anno: e.target.value })}
        />

        <button type="submit">Aggiungi Veicolo</button>
      </form>

      {/* LISTA */}
      <h2>Lista Veicoli</h2>

      <ul>
        {vehicles.map((v) => (
          <li key={v.id}>
            🚗 {v.marca} {v.modello} ({v.targa}) - {v.stato}
          </li>
        ))}
      </ul>
    </>
  );
}