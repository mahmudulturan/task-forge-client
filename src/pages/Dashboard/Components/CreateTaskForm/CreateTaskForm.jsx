import { useForm } from "react-hook-form"
import Button from "../../../../Components/Shared/Button/Button";
import { useState } from "react";

const CreateTaskForm = () => {
    const [deadline, setDeadline] = useState()
    const defaultDate = new Date();
    const year = defaultDate.getFullYear();
    const month = String(defaultDate.getMonth() + 1).padStart(2, '0');
    const day = String(defaultDate.getDate()).padStart(2, '0');
    const hours = String(defaultDate.getHours()).padStart(2, '0');
    const minutes = String(defaultDate.getMinutes()).padStart(2, '0');
    const formattedDefaultDate = `${year}-${month}-${day}T${hours}:${minutes}`;
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        const task = data.task;
        const description = data.description;
        const priority = data.priority;
        const taskDeadline = deadline;
        const taskInfo = {
            task, priority, taskDeadline, description
        }
        console.log(taskInfo);
    }

    return (
        <div>
            <div className="max-w-3xl mx-auto">

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex gap-2 my-2">
                        <input {...register("task", { required: true })} type="text" placeholder="Task Name" className="py-3 px-6 w-full outline-none rounded" />
                        <select defaultValue="none" {...register("priority", { required: true, minLength: 5 })} className="py-3 px-6 w-full outline-none rounded" >
                            <option value="none" disabled>Select Priority Level</option>
                            <option value="Minimal">Minimal</option>
                            <option value="Standard">Standard</option>
                            <option value="Critical">Critical</option>
                        </select>
                        <div>
                            <input onChange={(e) => setDeadline(e.target.value)} defaultValue={formattedDefaultDate} min={formattedDefaultDate} className="py-3 px-6 w-full outline-none rounded" type="datetime-local" name="" id="" />
                        </div>
                    </div>
                    <input {...register("description", { required: true })} type="text" placeholder="Task Description" className="py-3 px-6 w-full outline-none rounded" />
                    {errors.task && <span className="font-medium text-lg text-red-400">You must have to input task name.</span>}
                    {errors.priority && <span className="font-medium text-lg text-red-400">You must have to select task priority.</span>}
                    {errors.description && <span className="font-medium text-lg text-red-400">You must have to write description.</span>}

                    <div className="text-center my-4">
                        <Button>Create Task</Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateTaskForm;