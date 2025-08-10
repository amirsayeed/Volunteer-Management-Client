import React from 'react';
import { CgDetailsMore } from 'react-icons/cg';
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
                    <button className="btn flex p-2 bg-[#2dcfc4] text-white rounded-xl">
                        <span>View More</span>
                        <span><CgDetailsMore size={15} /></span>
                    </button>
                </Link>    
            </td>   
        </tr>   
        </>
    );
};

export default AllVolunteerNeedRow;