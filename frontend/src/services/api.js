import axios from "axios";

const api = axios.create({
  baseURL: "https://task-manager-backend-2jbn.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Attach JWT token to every request if available
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;




