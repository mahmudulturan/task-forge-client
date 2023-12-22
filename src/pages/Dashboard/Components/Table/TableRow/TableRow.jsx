import { useDrag } from "react-dnd";
import { CiCircleRemove } from "react-icons/ci";
import PropTypes from 'prop-types';
import { axiosSecure } from "../../../../../api/axiosSecure";
import toast from "react-hot-toast";
import useTodo from "../../../../../hooks/useTodo";
import useOngoing from "../../../../../hooks/useOngoing";

const TableRow = ({ task, indx }) => {
    const { refetch: todoRefetch } = useTodo()
    const { refetch: ongogingRefetch } = useOngoing()

    const [{ isDragging }, drag] = useDrag(() => ({
        type: "task",
        item: { _id: task._id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }))
    const handleDelete = async () => {
        const { data } = await axiosSecure.delete(`/delete-task/${task?._id}`)
        if (data.deletedCount > 0) {
            toast.success("Successfully Deleted")
            todoRefetch()
            ongogingRefetch()
        }
    }

    return (
        <tr key={task._id} ref={drag} draggable className={`${indx % 2 == 0 ? "bg-primary-col/35" : "bg-primary-col/15"} ${isDragging && "opacity-25"}`}>
            <td className="px-2">{indx}</td>
            <td className="text-lg py-2">{task.task}</td>
            <td className="max-w-40 overflow-auto">{task.description}</td>
            <td>{task.taskDeadline}</td>
            <td>{task.priority}</td>
            <td className="text-2xl"><button onClick={handleDelete}><CiCircleRemove></CiCircleRemove></button></td>
        </tr>
    );
};

TableRow.propTypes = {
    task: PropTypes.object,
    indx: PropTypes.number
}

export default TableRow;