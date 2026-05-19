import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:3002",
  withCredentials: true, // still send cookies where available
});

// Attach JWT from localStorage as Authorization header on every request.
// This ensures auth works even when cookies are blocked by browser
// SameSite/cross-origin policies (localhost:3000 → localhost:3002).
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;