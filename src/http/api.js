import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000",
    headers: {
        "Content-Type": "application/json",
    },
});

export const login = async (data) => api.post("/admin/auth/login", data);
