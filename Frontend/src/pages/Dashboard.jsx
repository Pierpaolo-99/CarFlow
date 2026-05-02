import { useEffect, useState } from "react";
import { getExpiringDocuments } from "../api/api";

export default function Dashboard() {
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    try {
      const data = await getExpiringDocuments();
      setAlerts(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  if (loading) return <p>Caricamento...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>🚗 CarFlow Dashboard</h1>

      <h2>🚨 Scadenze in arrivo</h2>

      {alerts.length === 0 ? (
        <p>Nessuna scadenza imminente 🎉</p>
      ) : (
        <ul>
          {alerts.map((item) => (
            <li key={item.id}>
              🚗 {item.marca} {item.modello} ({item.targa}) -{" "}
              <b>{item.tipo}</b> scade il {item.data_scadenza}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}