const BASE_URL = "http://localhost:3000";

// ALERTS
export async function getExpiringDocuments() {
  const res = await fetch(`${BASE_URL}/alerts/expiring-documents`);

  if (!res.ok) {
    throw new Error("Errore API alerts");
  }

  return res.json();
}