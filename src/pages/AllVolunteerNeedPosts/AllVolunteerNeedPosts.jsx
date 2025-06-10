import React, { useEffect, useState } from 'react';
import VolunteerNeedPostCard from './VolunteerNeedPostCard';

const AllVolunteerNeedPosts = () => {
    const [search,setSearch] = useState('');
    const [posts,setPosts] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:5000/addVolunteerNeedPost?searchParams=${search}`)
        .then(res=>res.json())
        .then(data=>setPosts(data))
    },[search])

    return (
        <div className='max-w-7xl mx-auto my-20'>
            <div className="max-w-xl mx-auto mb-4">
                <input
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                name="search"
                placeholder="Search by title"
                className="input input-bordered w-full"
                required
                />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
                {
                    posts.map(volNeed=> <VolunteerNeedPostCard key={volNeed._id} volNeed={volNeed}/>)
                }
            </div>
        </div>
    );
};

export default AllVolunteerNeedPosts;