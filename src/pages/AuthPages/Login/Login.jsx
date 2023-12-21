import Container from "../../../Components/Shared/Container/Container";
import { useForm } from "react-hook-form"
import authAnimation from '../../../assets/animation/AuthAnimation.json'
import Lottie from "lottie-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../Components/SocialLogin/SocialLogin";
import useAuth from "../../../hooks/useAuth";
import { FaSpinner } from "react-icons/fa";
import { useState } from "react";
import toast from "react-hot-toast";

const Login = () => {
    const [submitLoading, setSubmitLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState("");
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const { loginUser } = useAuth();
    const loc = useLocation();
    const navigate = useNavigate();

    // handle login button
    const onSubmit = async (data) => {
        const email = data.email;
        const password = data.password;
        try {
            setErrorMessage("")
            setSubmitLoading(true)
            await loginUser(email, password)
            setSubmitLoading(false)
            toast.success('Sucessfully Login')
            navigate(loc?.state?.from?.pathname || '/')
        }
        catch (err) {
            setErrorMessage(err.message)
            setSubmitLoading(false)
        }

    }

    return (
        <Container className={"flex flex-col-reverse md:flex-row h-full items-center justify-center"}>
            <div className="flex-1">
                <div className="max-w-xl px-3">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h3 className="text-4xl font-semibold text-text-col my-6 text-center">Wellcome Back! to <span className="text-primary-col">Task Forge</span></h3>

                        <div>
                            <label htmlFor="email" className="text-primary-col font-semibold text-xl"></label>
                            <input {...register("email", { required: true })} id="email" className="py-3 px-6 my-2 outline-none rounded w-full" type="email" placeholder="Your Email Address" />
                        </div>
                        {errors.email && <span className="font-medium text-lg text-red-400">You must have to input your email.</span>}

                        <div>
                            <label htmlFor="password" className="text-primary-col font-semibold text-xl"></label>
                            <input {...register("password", { required: true })} id="password" className="py-3 px-6 my-2 outline-none rounded w-full" type="password" placeholder="Type Your Password" />
                            {errors.password && <span className="font-medium text-lg text-red-400">You must have to input your Password.</span>}
                        </div>

                        {
                            errorMessage &&
                            <span className="text-red-400 mt-2 font-medium">{errorMessage}</span>
                        }
                        <button disabled={submitLoading} type="submit" className="py-3 px-6 my-2 outline-none rounded w-full bg-primary-col font-semibold text-lg">
                            {
                                submitLoading ?
                                    <div className="flex items-center justify-center">
                                        <FaSpinner className="animate-spin"></FaSpinner>
                                    </div>
                                    :
                                    "Login"
                            }
                        </button>
                    </form>
                    <div>
                        <span className="text-text-col text-left my-2">New to Task Forge? <Link state={{ from: loc?.state?.from }} className="text-primary-col" to="/register">Register here</Link></span>
                    </div>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
            <div className="w-full md:flex-1 px-2">
                <Lottie animationData={authAnimation}></Lottie>
            </div>
        </Container>
    );
};

export default Login;