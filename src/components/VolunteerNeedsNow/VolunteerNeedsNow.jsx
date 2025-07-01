import React from 'react';
import VolunteerNeedPostCard from '../../pages/AllVolunteerNeedPosts/VolunteerNeedPostCard';
import { Link } from 'react-router';

const VolunteerNeedsNow = ({upcomingNeedPosts}) => {
    return (
        <div className='my-10'>
            <div className='max-w-4xl mx-auto space-y-4 text-center'>
                <h2 className="text-xl md:text-3xl font-bold">Volunteer Needs Now</h2>
                <p className='font-medium italic'>Make an Impact—Volunteer Before Time Runs Out!</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10 px-1'>
                {
                    upcomingNeedPosts.map(volNeed=><VolunteerNeedPostCard key={volNeed._id} volNeed={volNeed}/>)
                }
            </div>
            <div className='flex justify-center mt-10'>
                <Link to='/allVolunteerNeedPosts'>
                    <button onClick={()=>{
                        window.scroll(0,0);
                    }} className='btn w-40 text-lg bg-[#2dcfc4] text-white rounded-xl'>See all</button>
                </Link>
            </div>
        </div>
    );
};

export default VolunteerNeedsNow;