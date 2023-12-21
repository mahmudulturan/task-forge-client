import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import { axiosSecure } from "../api/axiosSecure";

const useTodo = () => {
    const { user } = useAuth();
    const { data: tasks, refetch } = useQuery({
        queryKey: ['todo'], queryFn: async () => {
            const { data } = await axiosSecure.get(`/get-tasks/${user.email}?progressKey=todo`)
            return data
        }
    })
    return { tasks, refetch }
};

export default useTodo;