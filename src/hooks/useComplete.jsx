import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import { axiosSecure } from "../api/axiosSecure";

const useComplete = () => {
    const { user } = useAuth();
    const { data: tasks, refetch } = useQuery({
        queryKey: ['complete'], queryFn: async () => {
            const { data } = await axiosSecure.get(`/get-tasks/${user.email}?progressKey=complete`)
            return data
        }
    })
    return { tasks, refetch }
};

export default useComplete;