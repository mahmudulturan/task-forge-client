import { Link, useRouteError } from "react-router-dom";
import ErrorAnimation from '../../assets/animation/ErrorAnimation.json'
import Lottie from "lottie-react";
import Button from "../../Components/Shared/Button/Button";

const ErrorPage = () => {
    const routeError = useRouteError();
    console.log(routeError.data);
    return (
        <div>
            <div className="min-h-screen">
                <Lottie className="max-w-2xl mx-auto" animationData={ErrorAnimation}></Lottie>
                <h3 className="text-center font-semibold text-lg text-black -mt-6 pb-4">{routeError.data}</h3>
                <div className="text-center">
                    <Link to="/">
                        <Button>Go To Home</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;