import React from 'react';
import { BsFacebook } from 'react-icons/bs';
import { FaLinkedin, FaSquareXTwitter, FaYoutube } from 'react-icons/fa6';
import useAuth from '../../hooks/useAuth';
import { NavLink } from 'react-router';

const Footer = () => {
    const {user} = useAuth();

    return (
        <div className='bg-neutral'>
        <footer className="footer sm:footer-horizontal text-neutral-content footer-center p-12">
            <div className='flex flex-col gap-7'>
            <aside>
                <div className='flex flex-col items-center gap-2'>
                    <img src="https://i.ibb.co/gbVxsxh3/images-q-tbn-ANd9-Gc-Qb-Ab-GWxsb-UCMy-Gu2opp-NAg-Hn-DT6tx2fe-jrj-Hj337bkae-TR7-Mis3-Kgo8-BFk-LFN8k-C.png" 
                    className='h-16 w-16 object-cover'
                    alt="" />
                    <h2 className='text-2xl font-bold'>
                        Volunteer Management
                    </h2>
                </div>
            </aside>
            <nav>
                <ul className='flex flex-col md:flex-row gap-4 md:gap-10 lg:gap-16 text-base'>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/allVolunteerNeedPosts'>All Posts</NavLink></li>
                    <li><NavLink to='/aboutUs'>About Us</NavLink></li>
                    {user && <>
                    <li><NavLink to='/addVolunteerNeedPost'>Add Volunteer</NavLink></li>
                    <li><NavLink to='/manageMyPosts'>Manage Posts</NavLink></li>
                    </>
                    }
                </ul>
            </nav>
            <nav className='space-y-3'>
                <h6 className="text-lg font-bold">Find us on</h6>
                 <div className="grid grid-flow-col gap-8 md:gap-12 lg:gap-20">
                        <a href="https://www.facebook.com/" target="_blank">
                        <BsFacebook size={25} />
                        </a>
                        <a href="https://x.com/" target="_blank">
                        <FaSquareXTwitter size={25} />
                        </a>
                        <a href="https://www.linkedin.com/" target="_blank">
                        <FaLinkedin size={25} />
                        </a>
                        <a href="https://www.youtube.com/" target="_blank">
                        <FaYoutube size={25} />
                        </a>
                    </div>
            </nav>
            </div>
        </footer>
        <footer className="footer sm:footer-horizontal border-t border-dashed footer-center bg-neutral text-neutral-content p-5">
        <aside>
            <p>Copyright © {new Date().getFullYear()} - All right reserved by Volunteer Management</p>
        </aside>
        </footer>
        </div>
    );
};

export default Footer;