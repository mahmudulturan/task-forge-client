import { useDrop } from "react-dnd";
import useTodo from "../../../../hooks/useTodo";
import useOngoing from "../../../../hooks/useOngoing";
import { axiosSecure } from "../../../../api/axiosSecure";
import Table from "../Table/Table";
import useComplete from "../../../../hooks/useComplete";


const Todo = () => {
    const { tasks, refetch } = useTodo();
    const { refetch: ongoingRefetch } = useOngoing()
    const { refetch: completeRefetch } = useComplete()
    const [{ isOver }, drop] = useDrop(() => ({
        accept: "task",
        drop: (item) => changeItemProgress(item),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    }))
    const changeItemProgress = async (item) => {
        console.log(item._id);
        await axiosSecure.patch(`/update-task/${item._id}`, { progress: "todo" })
        refetch()
        ongoingRefetch()
        completeRefetch()
    }

    return (
        <div ref={drop} className={`max-w-2xl  shadow-2xl rounded w-full max-h-[40vh] min-h-[40vh] overflow-auto ${isOver ? "bg-primary-col/35" : "bg-primary-col/15"}`}>
            <h3 className="text-white font-medium text-center text-2xl py-2">Todos</h3>
            <Table tasks={tasks}></Table>
        </div>
    );
};

export default Todo;