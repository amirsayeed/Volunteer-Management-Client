import React, { useEffect, useState } from 'react';
import StatsCard from './StatsCard';


const StatAnalysis = () => {
    const [stats,setStats] = useState([]);

    useEffect(()=>{
        fetch('/stats.json')
        .then(res=>res.json())
        .then(data=>setStats(data))
    },[])

    return (
        <div className='my-10 px-1 md:px-3'>
            <div className='max-w-4xl mx-auto text-center space-y-4'>
                <h2 className="text-xl md:text-3xl font-bold">Making Every Contribution Count</h2>
                <p className='font-medium italic'>Every number reflects a story of help, hope and humanity.</p>
            </div>
            <div className='mt-10 flex flex-wrap gap-4 items-center justify-center md:justify-between'>
                {
                    stats.map(stat=><StatsCard key={stat.id} stat={stat}/>)
                }
            </div>
        </div>
    );
};

export default StatAnalysis;