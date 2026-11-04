// URL de base de l'API REST (backend Spring Boot, port 8082)
const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL || "http://localhost:8082/banque";

export default API_BASE_URL;
