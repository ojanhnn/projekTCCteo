import axios from 'axios';
import { jwtDecode } from "jwt-decode";

export const BASE_URL = "http://localhost:5000";

export const axiosJWT = axios.create();

axiosJWT.interceptors.request.use(async (config) => {
    let token = localStorage.getItem("token");

    if (token) {
        let decoded;
        try {
            decoded = jwtDecode(token);
        } catch (e) {
            console.error("Token tidak valid:", e);
            localStorage.removeItem("token");
            throw new Error("Token tidak valid");
        }

        const currentDate = new Date();

        if (decoded.exp * 1000 < currentDate.getTime()) {
            try {
                const response = await axios.get(`${BASE_URL}/token`);
                token = response.data.accessToken;
                localStorage.setItem("token", token);
            } catch (error) {
                console.error("Gagal refresh token:", error);
                localStorage.removeItem("token");
                throw error;
            }
        }

        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
}, (error) => {
    return Promise.reject(error);
});
