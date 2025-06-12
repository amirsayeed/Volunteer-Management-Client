import React from 'react';
import Slider from '../../components/Slider/Slider';
import VolunteerNeedsNow from '../../components/VolunteerNeedsNow/VolunteerNeedsNow';
import { useLoaderData } from 'react-router';

const Home = () => {
    const upcomingNeedPosts = useLoaderData();
    //console.log(upcomingNeedPosts);
    
    return (
        <>
        <title>Volunteer Management | Home</title>
        <div className='max-w-7xl mx-auto'>
           <Slider/>
           <VolunteerNeedsNow upcomingNeedPosts={upcomingNeedPosts}/>
        </div>
        </>
    );
};

export default Home;