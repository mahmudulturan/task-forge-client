import { FaGoogle } from "react-icons/fa";
import useAuth from "../../../../hooks/useAuth";
import { saveUser } from "../../../../api/auth";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const { goggleLogin } = useAuth();
    const navigate = useNavigate();
    const loc = useLocation();
    const handleSocialLogin = async (method) => {
        const { user } = await method()
        const userData = { name: user.displayName, imageUrl: user.photoURL, email: user.email }
        await saveUser(userData)
        toast.success("Successfully Registered")
        navigate(loc?.state?.from?.pathname || '/')
    }
    return (
        <div className="text-center">
            <h6 className="text-white my-2 font-medium text-base">
                or <br /> Continue with
            </h6>
            <button onClick={() => handleSocialLogin(goggleLogin)} className="text-2xl py-2 px-2 rounded-full bg-white text-secondery-col"><FaGoogle></FaGoogle></button>
        </div>
    );
};

export default SocialLogin;