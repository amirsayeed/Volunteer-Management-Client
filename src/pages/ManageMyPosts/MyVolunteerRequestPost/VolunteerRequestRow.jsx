import React from 'react';
import Swal from 'sweetalert2';

const VolunteerRequestRow = ({post,idx,reqPosts,setReqPosts}) => {
    const {_id,thumbnail,title,category,location,postId} = post;

    const handleCancelReq = _id =>{
        console.log(_id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, cancel it!"
            }).then((result) => {
            console.log(result.isConfirmed);
            if (result.isConfirmed) {
                fetch(`https://volunteer-management-server-tawny.vercel.app/myVolunteerRequests/${_id}`,{
                    method: "DELETE",
                    headers: {
                          'content-type': 'application/json'
                        },
                    body: JSON.stringify({postId: postId})
                })
                .then(res=>res.json())
                .then(data => {
                    console.log('after delete', data)
                    Swal.fire({
                    title: "Canceled!",
                    text: "Your volunteer request has been canceled.",
                    icon: "success"
                    });
                    const remaining = reqPosts.filter(post=>post._id !== _id);
                    setReqPosts(remaining);
                })  
                }
                });
    }

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
                <button onClick={()=>handleCancelReq(_id)} className="btn btn-primary btn-sm">Cancel</button>
            </div>
            </th>
            </tr>
        </>
    );
};

export default VolunteerRequestRow;