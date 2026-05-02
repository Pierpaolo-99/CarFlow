import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Dashboard from "./pages/Dashboard";
import Vehicles from "./pages/Vehicles";
import Technicians from "./pages/Technicians";
import Assignments from "./pages/Assignments";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/technicians" element={<Technicians />} />
          <Route path="/assignments" element={<Assignments />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
