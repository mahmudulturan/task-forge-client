import { FaGoogle } from "react-icons/fa";
import useAuth from "../../../../hooks/useAuth";

const SocialLogin = () => {
    const { goggleLogin } = useAuth();
    const handleSocialLogin = async (method) => {
        await method()
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