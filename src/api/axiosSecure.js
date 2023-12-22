import axios from "axios";

export const axiosSecure = axios.create({
    baseURL: "https://task-forge-server-two.vercel.app"
})

export const axiosPublic = axios.create({
    baseURL: "https://task-forge-server-two.vercel.app"
})
