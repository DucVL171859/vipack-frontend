import axios from "axios"

const api = axios.create({
    baseURL: 'https://vpack-ecomerce.onrender.com',
    headers: {
        'Content-Type': 'application/json',
    }
});

api.interceptors.request.use(
    (config) => {
        let token = sessionStorage.getItem('token');
        if (token) config.headers.Authorization = `Bearer ${token}`;
        console.log(config);
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
)

export default api;