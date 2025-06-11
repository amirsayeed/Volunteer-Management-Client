import React from 'react';

const VolunteerRequestRow = ({post,idx}) => {
    const {thumbnail,title,category,location} = post;
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
                <button className="btn btn-primary btn-sm">Cancel</button>
            </div>
            </th>
            </tr>
        </>
    );
};

export default VolunteerRequestRow;