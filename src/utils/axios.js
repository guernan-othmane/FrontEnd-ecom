import axios from "axios";

const axiosClient = axios.create({
    baseURL: "http://localhost:4444",
    withCredentials: true,
    headers: {
        "Content-type": "application/json",
      },
})

export { axiosClient };