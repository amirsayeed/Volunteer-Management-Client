import React from 'react';
import { motion } from 'framer-motion';

const Slider = () => {
    return (
        <div className="px-1 md:px-0">
            <div className="carousel rounded-b-2xl">
                {/* Slide 1 */}
                <div id="slide1" className="carousel-item relative w-full px-1">
                    <img
                        src="https://i.ibb.co/MDwyWJ5X/2148687336.jpg"
                        className="w-full h-[80vh]"
                    />
                    {/* Gradient overlay for better text visibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>

                    {/* Navigation Buttons */}
                    <div className="absolute left-3 right-3 top-1/2 z-20 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>

                    {/* Text Content */}
                    <div className="max-w-lg space-y-5 absolute top-10 md:top-1/3 left-12 md:left-20 z-20 text-white">
                        <motion.h2
                            initial={{ scale: 0 }}
                            animate={{
                                scale: 1,
                                transition: { duration: 2 }
                            }}
                            className="font-bold text-2xl md:text-5xl"
                        >
                            <motion.span
                                animate={{
                                    color: ['#f05146', '#72ee5b', '#41f1e4'],
                                    transition: { duration: 3, repeat: Infinity }
                                }}
                            >
                                Be the Healing Hands
                            </motion.span>{" "}
                            for Your Community
                        </motion.h2>
                        <p className="text-sm md:text-base font-medium text-wrap">
                            Join health camps and care initiatives. Your time can change lives across Bangladesh.
                        </p>
                    </div>
                </div>

                {/* Slide 2 */}
                <div id="slide2" className="carousel-item relative w-full">
                    <img
                        src="https://i.ibb.co/m5XjWj8R/Naveen-i-Volunteer-2.jpg"
                        className="w-full h-[80vh] "
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                    <div className="absolute left-3 right-3 top-1/2 z-20 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                    <div className="max-w-lg space-y-5 absolute top-10 md:top-1/3 left-12 md:left-20 z-20 text-white">
                        <motion.h2
                            initial={{ scale: 0 }}
                            animate={{
                                scale: 1,
                                transition: { duration: 2 }
                            }}
                            className="font-semibold text-2xl md:text-5xl"
                        >
                            <motion.span
                                animate={{
                                    color: ['#f05146', '#72ee5b', '#41f1e4'],
                                    transition: { duration: 3, repeat: Infinity }
                                }}
                            >
                                Educate. Empower.
                            </motion.span>{" "}
                            Make a Difference
                        </motion.h2>
                        <p className="text-sm md:text-base font-medium text-wrap">
                            Volunteer in education drives and light the path for children who need you most.
                        </p>
                    </div>
                </div>

                {/* Slide 3 */}
                <div id="slide3" className="carousel-item relative w-full">
                    <img
                        src="https://i.ibb.co/60DBWvB0/2147807235.jpg"
                        className="w-full h-[80vh] "
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                    <div className="absolute left-3 right-3 top-1/2 z-20 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                    <div className="max-w-lg space-y-5 absolute top-10 md:top-1/3 left-12 md:left-20 z-20 text-white">
                        <motion.h2
                            initial={{ scale: 0 }}
                            animate={{
                                scale: 1,
                                transition: { duration: 2 }
                            }}
                            className="font-semibold text-2xl md:text-5xl"
                        >
                            <motion.span
                                animate={{
                                    color: ['#f05146', '#72ee5b', '#41f1e4'],
                                    transition: { duration: 3, repeat: Infinity }
                                }}
                            >
                                Act for the Planet,
                            </motion.span>{" "}
                            Clean Bangladesh
                        </motion.h2>
                        <p className="text-sm md:text-base font-medium text-wrap">
                            Participate in environmental cleanups and help create a greener, cleaner tomorrow.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;
