import React from 'react';

const AboutUs = () => {
  return (
    <div className="max-w-5xl mx-auto px-2 my-16">
      <div className="max-w-2xl mx-auto text-center mb-10 space-y-3">
        <h2 className="text-3xl font-bold mb-4">Get to Know Us</h2>
        <p className="text-lg italic font-medium">
          Empowering communities through volunteerism, one post at a time.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <div>
          <img
            src="https://i.ibb.co/DgL7tKSs/about.jpg"
            alt="Our Mission"
            className="rounded-2xl shadow-md"
          />
        </div>

        <div className='text-justify'>
          <h3 className="text-2xl font-semibold mb-4">Who We Are</h3>
          <p className="text-base font-medium mb-4">
            We are a passionate team dedicated to connecting volunteers with impactful
            opportunities across Bangladesh. Whether it’s disaster relief, education,
            animal care, or community development—our platform helps you take action
            where it matters most.
          </p>
          <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
          <p className="text-base font-medium">
            Our mission is to create a centralized space where individuals and
            organizations can share, find, and manage volunteering activities with ease.
            We believe small acts of service build stronger communities—and you can be
            part of that change.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
