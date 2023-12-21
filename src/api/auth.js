import { axiosPublic } from "./axiosSecure";

export const saveUser = async (userData) => {
    const { data } = await axiosPublic.put("/users", userData)
    return data;
}