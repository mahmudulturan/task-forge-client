import { useQuery } from "@tanstack/react-query";
import { axiosSecure } from "../../../../api/axiosSecure";
import useAuth from "../../../../hooks/useAuth";
import { useDrop } from "react-dnd";
import useTodo from "../../../../hooks/useTodo";
import Table from "../Table/Table";

const Ongoing = () => {
    const { user } = useAuth();
    const { refetch: todoRefetch } = useTodo()
    const { data: tasks, refetch } = useQuery({
        queryKey: ['ongoing'], queryFn: async () => {
            const { data } = await axiosSecure.get(`/get-tasks/${user.email}?progressKey=ongoing`)
            return data
        }
    })
    const [{ isOver }, drop] = useDrop(() => ({
        accept: "task",
        drop: (item) => changeItemProgress(item),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    }))
    const changeItemProgress = async (item) => {
        console.log(item._id);
        await axiosSecure.patch(`/update-task/${item._id}`, { progress: "ongoing" })
        refetch()
        todoRefetch()
    }
    return (
        <div ref={drop} className={`max-w-2xl  shadow-2xl rounded w-full max-h-[40vh] min-h-[40vh] overflow-auto ${isOver ? "bg-primary-col/35" : "bg-primary-col/15"}`}>
            <h3 className="text-white font-medium text-center text-2xl py-2">Ongoing</h3>
            <Table tasks={tasks}></Table>
        </div>
    );
};

export default Ongoing;