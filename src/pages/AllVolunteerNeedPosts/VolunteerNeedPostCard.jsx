import React from 'react';
import { Link } from 'react-router';

const VolunteerNeedPostCard = ({volNeed}) => {
    const {_id,thumbnail,title,category,deadline} = volNeed;

    return (
        <div className="card bg-base-200 shadow-md p-4">
            <figure>
                <img className='w-full h-[250px] object-cover rounded-2xl'
                src={thumbnail}
                alt="Shoes" />
            </figure>
            <div className="my-5 space-y-3 text-center">
                <h2 className="font-bold text-lg">{title}</h2>
                <p className='font-medium text-base'>Category: {category}</p>
                <p className='font-medium text-base'>Deadline: {deadline}</p>
                <div className="card-actions justify-center">
                <Link to={`/volunteerNeedPost/${_id}`}>
                    <button className="btn btn-primary">View Details</button>
                </Link>
                </div>
            </div>
            </div>
    );
};

export default VolunteerNeedPostCard;