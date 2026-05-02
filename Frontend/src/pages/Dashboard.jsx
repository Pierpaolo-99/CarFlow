import { useEffect, useState } from "react";
import { getDashboardData } from "../api/api";

import Card from "../components/ui/Card";
import AlertCard from "../components/ui/AlertCard";

import "../styles/dashboard.css";

export default function Dashboard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    const res = await getDashboardData();
    setData(res);
    setLoading(false);
  }

  if (loading) return <p>Caricamento...</p>;

  return (
    <>
      <h1>🚗 CarFlow Dashboard</h1>

      {/* STATS */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "15px",
        marginBottom: "30px"
      }}>
        <Card title="🚗 Veicoli" value={data.vehicles.length} color="#4f46e5" />
        <Card title="👨‍🔧 Tecnici" value={data.technicians.length} color="#16a34a" />
        <Card title="🚨 Scadenze" value={data.alerts.length} color="#dc2626" />
      </div>

      {/* ALERTS */}
      <h2>🚨 Scadenze imminenti</h2>

      {data.alerts.map(a => (
        <AlertCard key={a.id} item={a} />
      ))}
    </>
  );
}