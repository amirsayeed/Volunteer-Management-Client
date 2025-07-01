import React from 'react';
import { Link } from 'react-router';

const AllVolunteerNeedRow = ({post,index}) => {
    const {_id,thumbnail,title,category,location} = post;

    return (
        <>
         <tr className='text-base font-medium'>
            <td>{index+1}</td>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle h-16 w-16">
                            <img src={thumbnail} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                </div>
            </td>
            <td>{title}</td>
            <td>{category}</td>
            <td>{location}</td> 
            <td>
                <Link to={`/volunteerNeedPost/${_id}`}>
                    <button className="btn bg-[#2dcfc4] text-white rounded-xl">View Details</button>
                </Link>    
            </td>   
        </tr>   
        </>
    );
};

export default AllVolunteerNeedRow;