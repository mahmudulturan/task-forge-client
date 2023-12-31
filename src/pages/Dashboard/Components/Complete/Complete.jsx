import { axiosSecure } from "../../../../api/axiosSecure";
import { useDrop } from "react-dnd";
import useTodo from "../../../../hooks/useTodo";
import Table from "../Table/Table";
import useComplete from "../../../../hooks/useComplete";
import useOngoing from "../../../../hooks/useOngoing";

const Complete = () => {
    const { refetch: todoRefetch } = useTodo()
    const { refetch: ongoingRefetch } = useOngoing()
    const { tasks, refetch } = useComplete()
    const [{ isOver }, drop] = useDrop(() => ({
        accept: "task",
        drop: (item) => changeItemProgress(item),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    }))
    const changeItemProgress = async (item) => {
        await axiosSecure.patch(`/update-task/${item._id}`, { progress: "complete" })
        refetch()
        todoRefetch()
        ongoingRefetch()
    }
    return (
        <div ref={drop} className={`max-w-2xl  shadow-2xl rounded w-full max-h-[40vh] min-h-[40vh] overflow-auto ${isOver ? "bg-primary-col/35" : "bg-primary-col/15"}`}>
            <h3 className="text-white font-medium text-center text-2xl py-2">Complete</h3>
            <Table tasks={tasks}></Table>
        </div>
    );
};

export default Complete;