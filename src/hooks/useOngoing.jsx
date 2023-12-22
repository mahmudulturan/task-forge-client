import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import { axiosSecure } from "../api/axiosSecure";

const useOngoing = () => {
    const { user } = useAuth();
    const { data: tasks, refetch } = useQuery({
        queryKey: ['ongoing'], queryFn: async () => {
            const { data } = await axiosSecure.get(`/get-tasks/${user.email}?progressKey=ongoing`)
            return data
        }
    })
    return { tasks, refetch }
};

export default useOngoing;