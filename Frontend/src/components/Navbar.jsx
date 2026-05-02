export default function Navbar() {
  return (
    <div style={{
      padding: "15px",
      background: "#111",
      color: "white",
      display: "flex",
      justifyContent: "space-between"
    }}>
      <h2>🚗 CarFlow</h2>

      <div style={{ display: "flex", gap: "15px" }}>
        <span>Dashboard</span>
        <span>Veicoli</span>
        <span>Tecnici</span>
      </div>
    </div>
  );
}