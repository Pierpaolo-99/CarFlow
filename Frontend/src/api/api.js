const BASE_URL = "http://localhost:3000";

// ALERTS
export async function getExpiringDocuments() {
  const res = await fetch(`${BASE_URL}/alerts/expiring-documents`);

  if (!res.ok) {
    throw new Error("Errore API alerts");
  }
  return res.json();
}

// 🚗 VEHICLES
export async function getVehicles() {
  const res = await fetch(`${BASE_URL}/vehicles`);
  return res.json();
}

export async function createVehicle(data) {
  const res = await fetch(`${BASE_URL}/vehicles`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  return res.json();
}

// TECHNICIANS
export async function getTechnicians() {
  const res = await fetch(`${BASE_URL}/technicians`);
  return res.json();
}

export async function createTechnician(data) {
  const res = await fetch(`${BASE_URL}/technicians`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  return res.json();
}

// ASSIGNMENTS
export async function getAssignments() {
  const res = await fetch(`${BASE_URL}/assignments`);
  return res.json();
}

export async function createAssignment(data) {
  const res = await fetch(`${BASE_URL}/assignments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  return res.json();
}

// DOCUMENTS
export async function getDocumentsByVehicle(vehicleId) {
  const res = await fetch(`${BASE_URL}/documents/${vehicleId}`);
  return res.json();
}

export async function createDocument(data) {
  const res = await fetch(`${BASE_URL}/documents`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  return res.json();
}

// DASHBOARD
export async function getDashboardData() {
  const [alerts, vehicles, technicians] = await Promise.all([
    fetch("http://localhost:3000/alerts/expiring-documents").then(r => r.json()),
    fetch("http://localhost:3000/vehicles").then(r => r.json()),
    fetch("http://localhost:3000/technicians").then(r => r.json())
  ]);

  return { alerts, vehicles, technicians };
}