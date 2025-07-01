import React from 'react';
import { BsFacebook } from 'react-icons/bs';
import { FaLinkedin, FaSquareXTwitter, FaYoutube } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div>
        <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-16">
                <aside>
                <div className='flex flex-col gap-2'>
                    <img src="https://i.ibb.co/FbtpN8Sz/images-q-tbn-ANd9-Gc-Qb-Ab-GWxsb-UCMy-Gu2opp-NAg-Hn-DT6tx2fe-jrj-Hj337bkae-TR7-Mis3-Kgo8-BFk-LFN8k-C.png" 
                    className='h-12 w-12 object-cover'
                    alt="" />
                    <h2 className='text-2xl font-bold'>
                        Volunteer Management
                    </h2>
                </div>
            </aside>
            <nav>
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
            <nav>
                <h6 className="footer-title">Social</h6>
                 <div className="grid grid-flow-col gap-6">
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