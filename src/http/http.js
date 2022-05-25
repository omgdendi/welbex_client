import axios from "axios";

export const API_URL = 'http://localhost:8080/api/'

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
});

export const $apiFile = axios.create({
    withCredentials: true,
    baseURL: API_URL,
    headers: {
        'Content-Type': 'multipart/form-data',
        'Accept': 'multipart/form-data',
    }
});

$apiFile.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
})

$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
})

$api.interceptors.response.use((config) => {
    return config;
},  (async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && error.config && !error.config._isRetry) {
        originalRequest._isRetry = true;
        try {
            debugger
            const response = await axios.get(`${API_URL}auth/refresh`, {withCredentials: true});
            localStorage.setItem('token', response.data.userData.accessToken);
            return $api.request(originalRequest);
        } catch (e) {
            console.log('НЕ АВТОРИЗОВАН');
        }
    }
    throw error;
}))

export default $api;
