import React, { use, useState } from 'react';
import VolunteerNeedRow from './VolunteerNeedRow';

const VolunteerNeedPostList = ({myVolunteerNeedPromise}) => {
    const volunteerNeedPost = use(myVolunteerNeedPromise);
    //console.log(volunteerNeedPost);
    const [needPost, setNeedPost] = useState(volunteerNeedPost);
    return (
        <div>
        {needPost.length===0 ? (
            <div className="flex items-center justify-center mt-10 mb-20 text-xl font-bold">
                <h3>No volunteer need post added yet</h3>
            </div> 
        ): (<div className="overflow-x-auto mt-10 mb-20 max-w-7xl mx-auto bg-base-200 border-2 border-[#2dcfc4] rounded-2xl p-3">
                <table className="table">
                    <thead className='text-lg font-bold'>
                    <tr>
                        <th>#</th>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Location</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody className='text-base font-medium'>
                        {
                            needPost.map((post,idx)=><VolunteerNeedRow key={post._id} 
                            idx={idx} 
                            post={post}
                            needPost={needPost}
                            setNeedPost={setNeedPost} />)
                        }
                        
                    </tbody>
                </table>
            </div>)
            }    
        </div>
    );
};

export default VolunteerNeedPostList;