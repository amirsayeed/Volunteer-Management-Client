import React, { use } from 'react';
import VolunteerNeedRow from './VolunteerNeedRow';

const VolunteerNeedPostList = ({myVolunteerNeedPromise}) => {
    const volunteerNeedPost = use(myVolunteerNeedPromise);
    console.log(volunteerNeedPost);
    return (
        <div>
            <div className="overflow-x-auto mt-10 mb-20 max-w-7xl mx-auto bg-base-200 border rounded-2xl p-3">
                <table className="table">
                    <thead className='text-lg font-bold'>
                    <tr>
                        <th>#</th>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Location</th>
                        <th>Edit</th>
                    </tr>
                    </thead>
                    <tbody className='text-base font-medium'>
                        {
                            volunteerNeedPost.map((post,idx)=><VolunteerNeedRow key={post._id} 
                            idx={idx} 
                            post={post} />)
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default VolunteerNeedPostList;