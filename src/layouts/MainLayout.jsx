import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar/Navbar";
import Footer from "../Components/Shared/Footer/Footer";
import { Toaster } from 'react-hot-toast';


const MainLayout = () => {
    return (
        <div className="font-poppins bg-bg-col min-h-screen">
            <Toaster />
            <Navbar></Navbar>
            <div className="min-h-screen">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;