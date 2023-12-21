import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="mt-12">
            <div className="text-white text-sm underline my-2 flex gap-2 items-center justify-center">
                <a href="https://www.facebook.com/">Terms of use</a>
                <a href="https://www.instagram.com/">Privacy policy</a>
                <a href="https://www.twitter.com/">Cookie policy</a>
            </div>
            <div className="text-white text-2xl flex gap-2 mt-4 items-center justify-center">
                <a href="https://www.facebook.com/"><FaFacebook></FaFacebook></a>
                <a href="https://www.instagram.com/"><FaInstagram></FaInstagram></a>
                <a href="https://www.twitter.com/"><FaTwitter></FaTwitter></a>
            </div>
            <p className="text-text-col  text-sm text-center pb-6 pt-3">
                © 2023 Task Forge. All rights reserved.
            </p>
        </div>
    );
};

export default Footer;