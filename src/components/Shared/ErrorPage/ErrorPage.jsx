import React from 'react';
import errorImg from '../../../assets/404-page-n3.png'
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';
import { Link } from 'react-router';
const ErrorPage = () => {
    return (
        <>
        <title>Volunteer Management | Error Page</title>
        <Navbar/>
        <div className='max-w-md mx-auto px-1'>
            <div className='flex flex-col items-center justify-center gap-3 min-h-screen my-10'>
            <img className='h-[350px] object-cover' src={errorImg} alt="" />
            <Link to='/'>
                <button className='btn btn-primary'>Go Back Home</button>
            </Link>
            </div>
        </div>
        <Footer/>
        </>
    );
};

export default ErrorPage;