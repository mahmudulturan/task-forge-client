import { useState } from "react";
import Container from "../../../Components/Shared/Container/Container";
import { useForm } from "react-hook-form"
import { IoMdCamera } from "react-icons/io";
import { imageUpload } from "../../../api/utils";
import authAnimation from '../../../assets/animation/AuthAnimation.json'
import Lottie from "lottie-react";
import { FaSpinner } from "react-icons/fa";
import { Link } from "react-router-dom";
import SocialLogin from "../Components/SocialLogin/SocialLogin";



const Register = () => {
    const [imageUrl, setImageUrl] = useState("");
    const [uploadLoading, setUploadLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data);
        if (!imageUrl) {
            console.log(true);
            setErrorMessage("Upload a image of you!!")
        }
    }

    const uploadImage = async (e) => {
        try {
            setUploadLoading(true)
            const { data } = await imageUpload(e.target.files[0])
            setImageUrl(data.display_url)
            setUploadLoading(false)
        }
        catch (err) {
            setUploadLoading(false)
        }
    }

    return (
        <Container className={"flex flex-col-reverse md:flex-row h-full items-center justify-center"}>
            <div className="flex-1">
                <div className="max-w-xl px-3">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h3 className="text-4xl font-semibold text-text-col my-6 text-center">Join the <span className="text-primary-col">Task Forge</span></h3>

                        <div>
                            <div className="relative w-48 h-48 group mx-auto my-4">
                                <label htmlFor="fileInput" className="cursor-pointer">
                                    <img className="rounded-full h-48 w-48 object-contain" src={imageUrl ? imageUrl : "https://i.ibb.co/xgdBCSD/man-avatar-profile-picture-vector-illustration-268834-538.jpg"} alt="User's image" />
                                    <div className="w-48 h-48 absolute top-0 text-3xl bg-bgCol/60 rounded-full justify-center items-center text-white flex flex-col bg-slate-500/40">
                                        {
                                            uploadLoading ?
                                                <FaSpinner className="animate-spin"></FaSpinner>
                                                :
                                                <>
                                                    <IoMdCamera />
                                                    <span className="text-lg font-medium">Upload Your Photo</span>
                                                </>
                                        }
                                    </div>
                                </label>
                                <div className="text-center my-1">
                                </div>
                                <input
                                    type="file"
                                    id="fileInput"
                                    accept="image/*"
                                    className="hidden"
                                    onChange={(e) => uploadImage(e)}
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="name" className="text-primary-col font-semibold text-xl"></label>
                            <input {...register("name", { required: true })} id="name" className="py-3 px-6 my-2 outline-none rounded w-full" type="text" placeholder="Your Name" />
                        </div>
                        {errors.name && <span className="font-medium text-lg text-red-400">You must have to input your name.</span>}
                        <div>
                            <label htmlFor="email" className="text-primary-col font-semibold text-xl"></label>
                            <input {...register("email", { required: true })} id="email" className="py-3 px-6 my-2 outline-none rounded w-full" type="email" placeholder="Your Email Address" />
                        </div>
                        {errors.email && <span className="font-medium text-lg text-red-400">You must have to input your email.</span>}

                        <div>
                            <label htmlFor="password" className="text-primary-col font-semibold text-xl"></label>
                            <input {...register("password",
                                {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })} id="password" className="py-3 px-6 my-2 outline-none rounded w-full" type="password" placeholder="Type Your Password" />
                        </div>
                        {errors.password?.type == "required" && <span className="text-red-400 mt-2 font-medium">You must have to input your password...</span>}
                        {errors.password?.type == "minLength" && <span className="text-red-400 mt-2 font-medium">Password should have minimum 6 characters...</span>}
                        {errors.password?.type == "maxLength" && <span className="text-red-400 mt-2 font-medium">Password should have maxiumum 20 characters...</span>}
                        {errors.password?.type == "pattern" && <span className="text-red-400 mt-2 font-medium">Password should have minimum one lowercase, uppercase, special characters and number...</span>}

                        {
                            errorMessage &&
                            <span className="text-red-400 mt-2 font-medium">{errorMessage}</span>
                        }
                        <input disabled={uploadLoading} type="submit" className="py-3 px-6 my-2 outline-none rounded w-full bg-primary-col font-semibold cursor-pointer text-lg" value={"Register"} />
                    </form>
                    <div>
                        <span className="text-text-col text-left my-2">Already have an account? <Link className="text-primary-col" to="/login">Login here</Link></span>
                    </div>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
            <div className="md:flex-1 w-full">
                <Lottie animationData={authAnimation}></Lottie>
            </div>
        </Container>
    );
};

export default Register;