import React from 'react';

const Slider = () => {
    return (
        <div className="carousel my-10 rounded-2xl">
            <div id="slide1" className="carousel-item relative w-full px-1">
                <img
                src="https://i.ibb.co/MDwyWJ5X/2148687336.jpg"
                className="w-full h-[90vh] object-cover opacity-60" />
                <div className="absolute left-3 right-3 top-1/2 flex -translate-y-1/2 z-10 transform justify-between">
                <a href="#slide3" className="btn btn-circle">❮</a>
                <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
                <div className='max-w-md space-y-5 absolute top-10 md:top-1/3 left-12 md:left-20'>
                    <h2 className="font-semibold text-3xl md:text-4xl"><span className='text-yellow-300'>Be the Healing Hands</span> for Your Community</h2>
                    <p className='text-sm md:text-base font-medium text-wrap'>Join health camps and care initiatives. Your time can change lives across Bangladesh.</p>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img
                src="https://i.ibb.co/m5XjWj8R/Naveen-i-Volunteer-2.jpg"
                className="w-full h-[90vh] object-cover opacity-60" />
                <div className="absolute left-3 right-3 top-1/2 flex -translate-y-1/2 z-10 transform justify-between">
                <a href="#slide1" className="btn btn-circle">❮</a>
                <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
                <div className='max-w-md space-y-5 absolute top-10 md:top-1/3 left-12 md:left-20'>
                    <h2 className="font-semibold text-3xl md:text-4xl"><span className='text-yellow-300'>Educate. Empower.</span> Make a Difference</h2>
                    <p className='text-sm md:text-base font-medium text-wrap'>Volunteer in education drives and light the path for children who need you most.</p>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img
                src="https://i.ibb.co/60DBWvB0/2147807235.jpg"
                className="w-full h-[90vh] object-cover opacity-60" />
                <div className="absolute left-3 right-3 top-1/2 flex -translate-y-1/2 z-10 transform justify-between">
                <a href="#slide2" className="btn btn-circle">❮</a>
                <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
                <div className='max-w-md space-y-5 absolute top-10 md:top-1/3 left-12 md:left-20'>
                    <h2 className="font-semibold text-3xl md:text-4xl"><span className='text-yellow-400'>Act for the Planet,</span> Clean Bangladesh</h2>
                    <p className='text-sm md:text-base font-medium text-wrap'>Participate in environmental cleanups and help create a greener, cleaner tomorrow.</p>
                </div>
            </div>
        </div>
    );
};

export default Slider;