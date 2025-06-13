import React from 'react';
import { motion } from "motion/react"
const Slider = () => {
    return (
        <div className="carousel my-10 rounded-2xl">
            <div id="slide1" className="carousel-item relative w-full px-1">
                <img
                src="https://i.ibb.co/MDwyWJ5X/2148687336.jpg"
                className="w-full h-[85vh] object-cover opacity-60" />
                <div className="absolute left-3 right-3 top-1/2 flex -translate-y-1/2 z-10 transform justify-between">
                <a href="#slide3" className="btn btn-circle">❮</a>
                <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
                <div className='max-w-md space-y-5 absolute top-10 md:top-1/3 left-12 md:left-20'>
                    <motion.h2 
                    initial={{ scale: 0 }} 
                    animate={{ 
                        scale: 1,
                        transition: { duration: 2 }
                     }}
                    className="font-bold text-2xl md:text-4xl"><motion.span
                    animate={{
                    color: ['#f05146', '#72ee5b', '#41f1e4'],
                    transition: { duration: 3, repeat: Infinity }
                    }}
                    >Be the Healing Hands</motion.span> for Your Community</motion.h2>
                    <p
                     className='text-sm md:text-base font-medium text-wrap'>Join health camps and care initiatives. Your time can change lives across Bangladesh.</p>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img
                src="https://i.ibb.co/m5XjWj8R/Naveen-i-Volunteer-2.jpg"
                className="w-full h-[85vh] object-cover opacity-60" />
                <div className="absolute left-3 right-3 top-1/2 flex -translate-y-1/2 z-10 transform justify-between">
                <a href="#slide1" className="btn btn-circle">❮</a>
                <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
                <div className='max-w-md space-y-5 absolute top-10 md:top-1/3 left-12 md:left-20'>
                    <motion.h2 
                    initial={{ scale: 0 }} 
                    animate={{ 
                        scale: 1,
                        transition: { duration: 2 }
                     }}
                    className="font-semibold text-2xl md:text-4xl"><motion.span
                     animate={{
                        color: ['#f05146', '#72ee5b', '#41f1e4'],
                        transition: { duration: 3, repeat: Infinity }
                     }}
                     >Educate. Empower.</motion.span> Make a Difference</motion.h2>
                    <p className='text-sm md:text-base font-medium text-wrap'>Volunteer in education drives and light the path for children who need you most.</p>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img
                src="https://i.ibb.co/60DBWvB0/2147807235.jpg"
                className="w-full h-[85vh] object-cover opacity-60" />
                <div className="absolute left-3 right-3 top-1/2 flex -translate-y-1/2 z-10 transform justify-between">
                <a href="#slide2" className="btn btn-circle">❮</a>
                <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
                <div className='max-w-md space-y-5 absolute top-10 md:top-1/3 left-12 md:left-20'>
                    <motion.h2 
                    initial={{ scale: 0 }} 
                    animate={{ 
                        scale: 1,
                        transition: { duration: 2 }
                    }}
                    className="font-semibold text-2xl md:text-4xl"><motion.span animate={{
                    color: ['#f05146', '#72ee5b', '#41f1e4'],
                    transition: { duration: 3, repeat: Infinity }
                    }}
                    >Act for the Planet,</motion.span> Clean Bangladesh</motion.h2>
                    <p className='text-sm md:text-base font-medium text-wrap'>Participate in environmental cleanups and help create a greener, cleaner tomorrow.</p>
                </div>
            </div>
        </div>
    );
};

export default Slider;