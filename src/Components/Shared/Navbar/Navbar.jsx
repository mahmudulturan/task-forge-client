import logo from '../../../assets/logo/task-forge-logo.png'
import { Link, NavLink } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import { useEffect, useState } from 'react';
import Hamburger from 'hamburger-react'
import useAuth from '../../../hooks/useAuth';
import toast from 'react-hot-toast';

const Navbar = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const [usersMenuIsOpen, setUsersMenuIsOpen] = useState(false);
    const [isScroll, setIsScroll] = useState(false);
    const [prevPosition, setPrevPosition] = useState(0);
    const { user, logOut } = useAuth();

    const handleLogOut = async () => {
        await logOut()
        toast.success('Successfully Logout')
    }

    const onScroll = () => {
        const currentPosition = window.scrollY;
        setIsScroll(currentPosition !== 0)
        setPrevPosition(currentPosition)
    }

    useEffect(() => {
        window.addEventListener('scroll', onScroll)
        return () => {
            window.removeEventListener('scroll', onScroll)
        }
    }, [prevPosition])

    const routes = [
        { name: "Home", path: "/" },
        { name: "Dashboard", path: "/dashboard" },
        { name: "Create Task", path: "/create-task" },
        { name: "All Tasks", path: "/tasks" },
    ];
    const navLinks = <>
        {
            routes.map((route, indx) => <NavLink key={indx} to={route.path} className={({ isActive }) => isActive ? "text-black  py-3 px-6 rounded bg-primary-col font-semibold transition duration-300" : "text-text-col hover:text-black py-3 px-6 rounded hover:bg-primary-col font-semibold transition duration-300"
            }>{route.name}</NavLink>)
        }
    </>
    return (
        <div className='fixed w-full z-50'>
            <nav className={`pb-2 ${isScroll ? "shadow-xl bg-bg-col" : "bg-bg-col/40 rounded"} transition-all duration-300`}>
                <div className='max-w-7xl mx-auto relative pt-2'>
                    <div className='pt-4 md:pb-2 flex items-center justify-between'>
                        <div className='hidden lg:flex'>
                            <img className='h-16' src={logo} alt="" />
                        </div>
                        {/* navlinks for larger device */}
                        <div className='hidden lg:flex flex-col lg:flex-row items-center gap-2'>
                            {
                                navLinks
                            }
                        </div>
                        {/* navlinks for small device */}
                        <div className={`flex lg:hidden flex-col gap-4 absolute top-28 w-10/12 bg-bg-col/50 ${menuIsOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-50"} transition duration-300`}>
                            {navLinks}
                        </div>
                        <div className='flex items-center justify-between gap-6 w-full lg:w-auto p-2'>

                            <Link to='/dashboard'>
                                <button className='text-text-col py-2 md:py-3 px-3 md:px-6 bg-secondery-col font-bold rounded hover:drop-shadow-2xl uppercase'>
                                    Get Started
                                </button>
                            </Link>

                            {/* users dropdown */}
                            {
                                user &&
                                <div className="relative">
                                    <button onClick={() => setUsersMenuIsOpen(!usersMenuIsOpen)} className="w-14 rounded object-cover">
                                        {
                                            user?.photoURL ?
                                                <img src={user?.photoURL} className='rounded-full'></img>
                                                :
                                                <CgProfile className='text-text-col text-5xl rounded w-full' />
                                        }
                                    </button>
                                    {
                                        usersMenuIsOpen &&
                                        <div className='bg-primary-col/60 absolute right-0'>
                                            <button onClick={handleLogOut} className='text-text-col py-2 md:py-3 px-3 md:px-6 bg-secondery-col font-bold rounded hover:drop-shadow-2xl uppercase'>
                                                LogOut
                                            </button>
                                        </div>
                                    }

                                </div>
                            }
                            {/* menu dropdown */}
                            <div className='lg:hidden'>
                                <Hamburger color={"white"} toggled={menuIsOpen} toggle={setMenuIsOpen} />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;