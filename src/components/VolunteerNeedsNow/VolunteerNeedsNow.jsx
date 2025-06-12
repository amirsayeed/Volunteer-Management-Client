import React from 'react';
import VolunteerNeedPostCard from '../../pages/AllVolunteerNeedPosts/VolunteerNeedPostCard';

const VolunteerNeedsNow = ({upcomingNeedPosts}) => {
    return (
        <div className='my-20'>
            <div className='space-y-3 text-center'>
                <h2 className="text-3xl font-bold">Volunteer Needs Now</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
                {
                    upcomingNeedPosts.map(volNeed=><VolunteerNeedPostCard key={volNeed._id} volNeed={volNeed}/>)
                }
            </div>
        </div>
    );
};

export default VolunteerNeedsNow;