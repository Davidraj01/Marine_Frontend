const API_ORIGIN = (
  import.meta.env.VITE_API_BASE || "https://back.marinebiodiversityconservation.com"
).replace(/\/+$/, "");

export const BASE_URL = `${API_ORIGIN}/api`;
export const SOCKET_URL = API_ORIGIN;
