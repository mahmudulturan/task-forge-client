import Button from '../../../../Components/Shared/Button/Button';
import bannerAnimation from '../../../../assets/animation/BannerAnimation.json'
import Lottie from "lottie-react";

const Banner = () => {
    return (
        <div className="max-w-7xl min-h-screen mx-auto pt-[104px] flex flex-col-reverse md:flex-row items-center justify-center px-2 md:px-0">
            <div className='flex-1'>
                <h2 className='text-3xl md:text-6xl font-bold text-text-col my-3'>Craft Your Path to Productivity. Join the Adventure</h2>
                <Button>Let's Explore</Button>
            </div>
            <div className='flex-1'>
                <Lottie animationData={bannerAnimation}></Lottie>
            </div>
        </div>
    );
};

export default Banner;