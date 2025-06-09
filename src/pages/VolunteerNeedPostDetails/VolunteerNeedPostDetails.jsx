import React from 'react';
import { useLoaderData} from 'react-router';

const VolunteerNeedPostDetails = () => {
    const {_id,title,thumbnail,description,deadline,category,location,noOfVolunteers} = useLoaderData();
    
    return (
        <div className='max-w-7xl mx-auto my-20'>
            <div className="card card-side gap-5 bg-base-200 shadow-md p-4">
            <figure>
                <img
                src={thumbnail}
                alt="Movie" />
            </figure>
            <div className="space-y-3 my-3">
                <h2 className="text-2xl font-semibold">{title}</h2>
                <p className='text-base font-normal'>Description: {description}</p>
                <p className='text-base font-normal'>Deadline: {deadline}</p>
                <p className='text-base font-normal'>Category: {category}</p>
                <p className='text-base font-normal'>Location: {location}</p>
                <p className='text-base font-normal'>No. of Volunteers: {noOfVolunteers}</p>
                
                <div className="card-actions">
                <button className="btn btn-primary">Be a Volunteer</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default VolunteerNeedPostDetails;