import React, { useEffect, useState } from 'react';
import VolunteerNeedPostCard from './VolunteerNeedPostCard';
import Loading from '../../components/Shared/Loading/Loading';
import { BsGrid3X3GapFill } from 'react-icons/bs';
import { RxDragHandleHorizontal } from 'react-icons/rx';
import AllVolunteerNeedRow from './AllVolunteerNeedRow';

const AllVolunteerNeedPosts = () => {
    const [search,setSearch] = useState('');
    const [loading,setLoading] = useState(false);
    const [posts,setPosts] = useState([]);
    const [layout, setLayout] = useState('grid');

    useEffect(()=>{
        setLoading(true);
        fetch(`http://localhost:5000/addVolunteerNeedPost?searchParams=${search}`)
        .then(res=>res.json())
        .then(data=>{
            setPosts(data);
            setLoading(false)
        })
    },[search])

    const handleGrid = () =>{
        setLayout('grid');
    }

    const handleTable = () =>{
        setLayout('table');
    }

    return (
        <div className='max-w-7xl mx-auto my-20'>
            <div className='flex justify-end gap-3 mb-8'>
                <button onClick={handleGrid}><BsGrid3X3GapFill size={20} /></button>
                <button onClick={handleTable}><RxDragHandleHorizontal size={30} /></button>
            </div>
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
            {loading ? 
                (<Loading />) 
                : 
                layout === 'grid' ? 
                (<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
                    {posts.map((volNeed) => (
                    <VolunteerNeedPostCard key={volNeed._id} volNeed={volNeed} />
                    ))}
                </div>) 
                : 
                (<div className="overflow-x-auto mt-10 mb-20 bg-base-300 border rounded-2xl p-4">
                    <table className="table">
                    <thead className='text-lg font-bold'>
                        <tr>
                            <th>#</th>
                            <th>Thumbnail</th>
                            <th>Title</th>
                            <th>Category</th>
                            <th>Location</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map((post,index) => 
                        <AllVolunteerNeedRow key={post._id} post={post} index={index} />
                        )}
                    </tbody>
                    </table>
                </div>
                )}
        </div>
    );
};

export default AllVolunteerNeedPosts;