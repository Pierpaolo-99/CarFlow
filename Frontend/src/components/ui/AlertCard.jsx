export default function AlertCard({ item }) {
  const today = new Date();
  const expiry = new Date(item.data_scadenza);
  const diffDays = Math.ceil((expiry - today) / (1000 * 60 * 60 * 24));

  let color = "#facc15";
  if (diffDays <= 7) color = "#dc2626";

  return (
    <div className="alert-card" style={{ borderLeft: `6px solid ${color}` }}>
      🚗 {item.marca} {item.modello} ({item.targa}) -{" "}
      <b>{item.tipo}</b> scade il{" "}
      <b>{item.data_scadenza}</b>
    </div>
  );
}