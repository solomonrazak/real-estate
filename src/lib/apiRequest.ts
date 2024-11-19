import axios from "axios";

const apiRequest = axios.create({
    baseURL: "http://localhost:8005/api",
    withCredentials: true,

})

export default apiRequest;