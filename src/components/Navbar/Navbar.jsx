import React from 'react';
import { Link, NavLink } from 'react-router';
import useAuth from '../../hooks/useAuth';
import { FaUserCircle } from 'react-icons/fa';
import { toast } from 'react-toastify';

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
                    <li><NavLink to='/allVolunteerNeedPosts'>All volunteer Need posts</NavLink></li>
                  </>
    return (
        <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
            <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-lg">
                {links}
            </ul>
            </div>
            <a className="font-medium text-base md:text-xl">Volunteer Management</a>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-lg">
                {links}
            </ul>
        </div>
        <div className="navbar-end gap-3">
            {user ? 
                <div className='flex gap-2'>
                    <div className="tooltip tooltip-bottom" data-tip={user?.displayName}>
                        {user?.photoURL ? <img className='w-10 h-10 rounded-full' src={user.photoURL} alt="" /> : <FaUserCircle size={40} />}
                    </div> 
                    <button onClick={handleLogOut} className='btn btn-primary'>Logout</button>
                </div> 
                : <Link to='/auth/login' className="btn btn-primary">Login</Link>
            }
            <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button">
            <div>
                <h2 className=" text-base md:text-lg font-medium">My Profile</h2>
            </div>
            </div>  
            <ul
                tabIndex={0}
                className="menu menu-md dropdown-content bg-base-100 rounded-box z-1 mt-4 w-52 p-3 shadow text-lg">
                
                <li><NavLink to='/addVolunteerNeedPost'>Add Volunteer need Post</NavLink></li>
                <li><NavLink>Manage My Posts</NavLink></li>
            </ul>
            </div>
        </div>
        </div>
    );
};

export default Navbar;