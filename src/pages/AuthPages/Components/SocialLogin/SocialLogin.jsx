import { FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div className="text-center"> 
            <h6 className="text-white my-2 font-medium text-base">
                or <br /> Continue with
            </h6>
            <button className="text-2xl py-2 px-2 rounded-full bg-white text-secondery-col"><FaGoogle></FaGoogle></button>
        </div> 
    );
};

export default SocialLogin;