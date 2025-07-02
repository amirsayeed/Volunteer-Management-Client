import React from 'react';
import Slider from '../../components/Slider/Slider';
import VolunteerNeedsNow from '../../components/VolunteerNeedsNow/VolunteerNeedsNow';
import { useLoaderData } from 'react-router';
import StatAnalysis from '../../components/StatAnalysis/StatAnalysis';
import Benefits from '../../components/Benefits/Benefits';
import Partners from '../../components/Partners/Partners';

const Home = () => {
    const upcomingNeedPosts = useLoaderData();
    //console.log(upcomingNeedPosts);
    
    return (
        <>
        <title>Volunteer Management | Home</title>
        <div className='max-w-[1500px] mx-auto'>
           <Slider/>
           <VolunteerNeedsNow upcomingNeedPosts={upcomingNeedPosts}/>
           <StatAnalysis/>
           <Benefits/>
           <Partners/>
        </div>
        </>
    );
};

export default Home;