import Container from "../../Components/Shared/Container/Container";
import useAuth from "../../hooks/useAuth";
import CreateTaskForm from "./Components/CreateTaskForm/CreateTaskForm";

const Dashboard = () => {
    const { user } = useAuth();

    return (
        <Container>
            <div className="flex items-center justify-center flex-col gap-6 my-6">
                <img className="max-w-36 max-h-48 rounded-full" src={user?.photoURL} alt="" />
                <h3 className="text-white text-4xl font-medium"><span className="text-primary-col font-semibold">{user?.displayName}</span>&apos;s Dashboard</h3>
            </div>
            <CreateTaskForm></CreateTaskForm>
        </Container>
    );
};


export default Dashboard;