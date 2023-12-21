import Marquee from "react-fast-marquee";


const UsersShowcase = () => {

    const userTypes = [
        {
            icon: "https://i.ibb.co/RpY0Z9R/developer.png",
            name: "Developers",
        },
        {
            icon: "https://i.ibb.co/c25TpxB/banker.png",
            name: "Bankers",
        },
        {
            icon: "https://i.ibb.co/M877Z3T/enterpreuner.webp",
            name: "Entrepreneurs",
        },
        {
            icon: "https://i.ibb.co/wZk8FW3/teacher.webp",
            name: "Educators",
        },
        {
            icon: "https://i.ibb.co/WydfzkL/freelancer-icon.png",
            name: "Freelancers",
        },
        {
            icon: "https://i.ibb.co/M8Q9ht6/healthcare-icon.webp",
            name: "Healthcare Professionals",
        },
        {
            icon: "https://i.ibb.co/3WxZ3Rf/web-design-icon.webp",
            name: "Designers",
        },
        {
            icon: "https://i.ibb.co/KrH3XnS/student-icon.webp",
            name: "Students",
        },
        {
            icon: "https://i.ibb.co/RTKkfLz/manager-icon.webp",
            name: "Managers",
        },
        {
            icon: "https://i.ibb.co/c25TpxB/banker.png",
            name: "Corporate Professionals",
        },
    ];

    return (
        <div className="bg-white my-12">
            <h3 className="text-center font-semibold text-4xl text-black py-6">Meet Our Users</h3>
            <Marquee gradient>
                {
                    userTypes.map((user, indx) => <div key={indx} className="m-6">
                        <img className="h-48 w-48 object-cover" src={user.icon} alt="" />
                        <h3 className="text-black text-center text-2xl my-2 font-medium">{user.name}</h3>
                    </div>)
                }
            </Marquee>
        </div>
    );
};

export default UsersShowcase;