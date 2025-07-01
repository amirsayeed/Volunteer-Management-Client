import React from 'react';
import { Link } from 'react-router';

const VolunteerNeedPostCard = ({volNeed}) => {
    const {_id,thumbnail,title,description} = volNeed;

    return (
        <div className="card bg-base-200 shadow-md p-3 hover:scale-105 hover:bg-[#c2fdf9] rounded-2xl">
            <figure>
                <img className='card w-full h-[200px] object-cover rounded-2xl'
                src={thumbnail}
                alt="Shoes" />
            </figure>
            <div className="card-body space-y-1 text-center">
                <h2 className="font-bold text-lg">{title}</h2>
                <p className='font-medium text-base'>{description.slice(0,100)}...</p>
                {/* <p className='font-medium text-base'>Category: {category}</p>
                <p className='font-medium text-base'>Deadline: {deadline}</p> */}
                <div className="card-actions justify-center">
                <Link to={`/volunteerNeedPost/${_id}`}>
                    <button className="btn bg-[#2dcfc4] text-white rounded-xl">View Details</button>
                </Link>
                </div>
            </div>
            </div>
    );
};

export default VolunteerNeedPostCard;