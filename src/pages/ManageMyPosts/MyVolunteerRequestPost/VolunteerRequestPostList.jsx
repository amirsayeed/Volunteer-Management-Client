import React, { use, useState } from 'react';
import VolunteerRequestRow from './VolunteerRequestRow';

const VolunteerRequestPostList = ({myVolunteerRequestPromise}) => {
    const volunteerRequestData = use(myVolunteerRequestPromise);
    //console.log(volunteerRequestData);
    const [reqPosts,setReqPosts] = useState(volunteerRequestData);

    return (
        <div>
            {reqPosts.length === 0 ? 
                (<div className="flex items-center justify-center mt-10 mb-20 text-xl font-bold">
                    <h3>No volunteer request post added yet</h3>
                </div> ) :
                (<div className="overflow-x-auto mt-10 mb-20 max-w-7xl mx-auto bg-base-200 border rounded-2xl p-3">
                    <table className="table">
                        <thead className='text-lg font-bold'>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Category</th>
                            <th>Location</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody className='text-base font-medium'>
                            {
                                reqPosts.map((post,idx)=><VolunteerRequestRow key={post._id} 
                                idx={idx} 
                                post={post}
                                reqPosts={reqPosts}
                                setReqPosts={setReqPosts} />)
                            }
                            
                        </tbody>
                    </table>
                </div>)
            }
        </div>
    );
};

export default VolunteerRequestPostList;