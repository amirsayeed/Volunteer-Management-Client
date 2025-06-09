import React from 'react';
import { useLoaderData } from 'react-router';
import VolunteerNeedPostCard from './VolunteerNeedPostCard';

const AllVolunteerNeedPosts = () => {
    const allVolNeedData = useLoaderData();
    console.log(allVolNeedData);
    return (
        <div className='max-w-7xl mx-auto my-20'>
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
                {
                    allVolNeedData.map(volNeed=> <VolunteerNeedPostCard key={volNeed._id} volNeed={volNeed}/>)
                }
            </div>
        </div>
    );
};

export default AllVolunteerNeedPosts;