import Container from "../../Components/Shared/Container/Container";
import useAuth from "../../hooks/useAuth";
import Complete from "./Components/Complete/Complete";
import CreateTaskForm from "./Components/CreateTaskForm/CreateTaskForm";
import Ongoing from "./Components/Ongoing/Ongoing";
import Todo from "./Components/Todo/Todo";

const Dashboard = () => {
    const { user } = useAuth();

    return (
        <Container>
            <div className="flex items-center justify-center flex-col gap-6 my-6">
                <img className="max-w-36 max-h-48 rounded-full" src={user?.photoURL} alt="" />
                <h3 className="text-white text-4xl font-medium"><span className="text-primary-col font-semibold">{user?.displayName}</span>&apos;s Dashboard</h3>
            </div>
            <CreateTaskForm></CreateTaskForm>
            <div className="flex gap-6 my-12 flex-col md:flex-row">
                <Todo></Todo>
                <Ongoing></Ongoing>
            </div>
            <div className="flex items-center justify-center">
                <Complete></Complete>
            </div>
        </Container>
    );
};


export default Dashboard;