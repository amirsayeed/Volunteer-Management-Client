import React from 'react';

const BenefitCard = ({benefit}) => {
    const {icon,title,description} = benefit;

    return (
        <div className='card border-2 border-[#2dcfc4] py-4 px-3 rounded-2xl'>
             <figure>
                <img src={icon} className='w-16 h-16 object-cover' alt="" />
            </figure>
            <div className="card-body space-y-2 text-center">
                <h2 className="text-2xl font-bold">{title}</h2>
                <p className='text-base font-medium'>{description}</p>
            </div>
        </div>
    );
};

export default BenefitCard;