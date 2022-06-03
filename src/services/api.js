import axios from "axios";

const api = axios.create({
    baseURL: "http://192.168.60.60:3000"
});

export default api;