import { Link } from "react-router-dom";

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
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          Dashboard
        </Link>

        <Link to="/vehicles" style={{ color: "white", textDecoration: "none" }}>
          Veicoli
        </Link>
      </div>
    </div>
  );
}