import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h2>🚗 CarFlow</h2>

      <nav>
        <Link to="/">📊 Dashboard</Link>
        <Link to="/vehicles">🚗 Veicoli</Link>
        <Link to="/technicians">👨‍🔧 Tecnici</Link>
        <Link to="/assignments">🔁 Assegnazioni</Link>
        <Link to="/documents">📄 Documenti</Link>
      </nav>
    </div>
  );
}