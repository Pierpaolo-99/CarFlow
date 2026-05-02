import { useEffect, useState } from "react";
import { getTechnicians, createTechnician } from "../api/api";

export default function Technicians() {
  const [techs, setTechs] = useState([]);
  const [form, setForm] = useState({
    nome: "",
    cognome: "",
    telefono: "",
    email: ""
  });

  useEffect(() => {
    loadTechs();
  }, []);

  async function loadTechs() {
    const data = await getTechnicians();
    setTechs(data);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await createTechnician(form);

    setForm({
      nome: "",
      cognome: "",
      telefono: "",
      email: ""
    });

    loadTechs();
  }

  return (
    <>
      <h1>👨‍🔧 Tecnici</h1>

      {/* FORM */}
      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <input
          placeholder="Nome"
          value={form.nome}
          onChange={(e) => setForm({ ...form, nome: e.target.value })}
        />

        <input
          placeholder="Cognome"
          value={form.cognome}
          onChange={(e) => setForm({ ...form, cognome: e.target.value })}
        />

        <input
          placeholder="Telefono"
          value={form.telefono}
          onChange={(e) => setForm({ ...form, telefono: e.target.value })}
        />

        <input
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <button type="submit">Aggiungi Tecnico</button>
      </form>

      {/* LISTA */}
      <h2>Lista Tecnici</h2>

      <ul>
        {techs.map((t) => (
          <li key={t.id}>
            👨‍🔧 {t.nome} {t.cognome} - {t.email}
          </li>
        ))}
      </ul>
    </>
  );
}