import React from 'react';
import { Link } from 'react-router';

const VolunteerNeedRow = ({post,idx}) => {
    const {thumbnail,title,category,location} = post
    return (
        <>
        <tr>
            <td>
                {idx+1}
            </td>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle h-16 w-16">
                            <img src={thumbnail} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                </div>
            </td>
            <td>
            {title}
            </td>
            <td>
            {category}
            </td>
            <td>{location}</td>
            <th>
            <div className='flex gap-2'>
                <Link>
                <button className="btn btn-primary btn-sm">Update</button>
                </Link>
                <button className="btn btn-primary btn-sm">Delete</button>
            </div>
            </th>
            </tr>
        </>
    );
};

export default VolunteerNeedRow;