import axios from "axios";

const api = axios.create({
    // baseURL:'https://611cd22f7d273a0017e2f43c.mockapi.io/',
    baseURL: 'http://localhost:8090/',
});


export default api;