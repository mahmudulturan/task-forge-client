import { CiCircleRemove } from "react-icons/ci";
import useTodo from "../../../../hooks/useTodo";


const Todo = () => {
    const { tasks } = useTodo();
    console.log(tasks);
    return (
        <div className="max-w-2xl bg-primary-col/15 shadow-2xl rounded w-full max-h-[40vh] overflow-auto">
            <h3 className="text-white font-medium text-center text-2xl py-2">Todos</h3>
            <table className="w-full ">
                <thead className="text-text-col/100">
                    <th>#</th>
                    <th>Task Name</th>
                    <th>Task Details</th>
                    <th>Task Deadline</th>
                    <th>Priority</th>
                    <th> </th>
                </thead>
                <tbody className="text-text-col/85">
                    {
                        tasks?.map((task, indx) => <tr key={task._id} className={`${indx % 2 == 0 ? "bg-primary-col/35" : "bg-primary-col/15"}`}>
                            <td className="px-2">{indx + 1}</td>
                            <td className="text-lg py-2">{task.task}</td>
                            <td className="max-w-40 overflow-auto">{task.description}</td>
                            <td>{task.taskDeadline}</td>
                            <td>{task.priority}</td>
                            <td className="text-2xl"><button><CiCircleRemove></CiCircleRemove></button></td>

                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Todo;