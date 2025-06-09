import React from 'react';

const VolunteerNeedPostCard = ({volNeed}) => {
    const {thumbnail,title,category,deadline} = volNeed;

    return (
        <div className="card bg-base-200 shadow-md p-4">
            <figure>
                <img className='w-full h-[250px] object-cover rounded-2xl'
                src={thumbnail}
                alt="Shoes" />
            </figure>
            <div className="my-5 space-y-3">
                <h2 className="font-semibold text-lg">{title}</h2>
                <p className='font-medium text-base'>Category: {category}</p>
                <p className='font-medium text-base'>Deadline: {deadline}</p>
                <div className="card-actions justify-center">
                <button className="btn btn-primary">View Details</button>
                </div>
            </div>
            </div>
    );
};

export default VolunteerNeedPostCard;