import React, { useEffect, useState } from 'react';
import BenefitCard from './BenefitCard';

const Benefits = () => {
    const [benefits, setBenefits] = useState([]);

    useEffect(()=>{
        fetch('/benefits.json')
        .then(res=>res.json())
        .then(data=>setBenefits(data))
    },[])

    return (
        <div className='my-10 px-1 md:px-3'>
            <div className='max-w-4xl mx-auto text-center space-y-4'>
                <h2 className="text-xl md:text-3xl font-bold">Discover the Rewards of Giving Back</h2>
                <p className='font-medium italic'>Volunteering lights a path for others, and in doing so, it brightens your own.</p>
            </div>
            <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                {
                    benefits.map(benefit=><BenefitCard key={benefit.id} benefit={benefit}/>)
                }
            </div>
        </div>
    );
};

export default Benefits;