import React from 'react';
import { Link, NavLink } from 'react-router';
import useAuth from '../../hooks/useAuth';
import { FaUserCircle } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { LuLogIn } from 'react-icons/lu';

const Navbar = () => {
    const {user, logOut} = useAuth();

    const handleLogOut = () =>{
        logOut().then(()=>{
            toast.success('Successfully logged out');
        })
        .catch(error=>{
            toast.error(error.message);
        })
    }

    const links = <>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/allVolunteerNeedPosts'>All Posts</NavLink></li>
                    <li><NavLink to='/aboutUs'>About Us</NavLink></li>
                    {user && <>
                    <li><NavLink to='/addVolunteerNeedPost'>Add Volunteer</NavLink></li>
                    <li><NavLink to='/manageMyPosts'>Manage Posts</NavLink></li>
                    </>}
                  </>
    return (
        <div className='bg-base-200 sticky top-0 z-50 shadow-md'>
            <div className="navbar max-w-[1500px] mx-auto md:px-3">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-lg font-medium">
                    {links}
                    <div className='flex md:hidden'>
                        <label className="toggle text-base-content">
                        <input type="checkbox" value="dark" className="theme-controller" />

                        <svg aria-label="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></g></svg>

                        <svg aria-label="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></g></svg>

                        </label>
                    </div>
                </ul>
                </div>
                <a className="font-semibold text-base md:text-xl">Volunteer Management</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-base font-medium">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-3">
                <div className='hidden md:flex'>
                    <label className="toggle text-base-content">
                    <input type="checkbox" value="dark" className="theme-controller" />

                    <svg aria-label="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></g></svg>

                    <svg aria-label="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></g></svg>

                    </label>
                </div>
                {user ? 
                    <div className='flex gap-2'>
                        <div className="tooltip tooltip-bottom" data-tip={user?.displayName}>
                            {user?.photoURL ? <img className='w-10 h-10 rounded-full' src={user.photoURL} alt="" /> : <FaUserCircle size={40} />}
                        </div> 
                        <button onClick={handleLogOut} className='btn bg-[#2dcfc4] text-white rounded-xl'>Logout</button>
                    </div> 
                    : <Link to='/auth/login'><button className="btn flex bg-[#2dcfc4] text-white rounded-xl p-2">
                        <span>Login</span>
                        <span><LuLogIn size={15} /></span>
                    </button></Link>
                }
            </div>
            </div>
        </div>
    );
};

export default Navbar;