import React from 'react';
import CountUp from 'react-countup';
const StatsCard = ({stat}) => {
    const {label,value} = stat;

    return (
        <div className='card border-2 border-[#2dcfc4] shadow-md p-6 w-52 rounded-2xl flex flex-col items-center justify-center gap-5'>
          <figure>
            <img src={stat.image} alt={stat.label} className="w-12 h-12 object-contain" />
          </figure>
          <div className='space-y-5 text-center'>
            <h2 className='text-3xl md:text-4xl font-bold'>
              <CountUp delay={0} start={0} end={value} enableScrollSpy duration={3}>
                {({ countUpRef }) => <span ref={countUpRef} />}
              </CountUp>+
            </h2>
            <p className='text-xl font-semibold'>{label}</p>
          </div>
        </div>
    );
};

export default StatsCard;