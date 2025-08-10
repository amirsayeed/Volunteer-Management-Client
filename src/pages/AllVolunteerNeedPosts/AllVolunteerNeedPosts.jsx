import React, { useEffect, useState } from 'react';
import VolunteerNeedPostCard from './VolunteerNeedPostCard';
import Loading from '../../components/Shared/Loading/Loading';
import { BsGrid3X3GapFill } from 'react-icons/bs';
import { RxDragHandleHorizontal } from 'react-icons/rx';
import AllVolunteerNeedRow from './AllVolunteerNeedRow';
import { IoIosArrowDown } from 'react-icons/io';


const AllVolunteerNeedPosts = () => {
    const [search,setSearch] = useState('');
    const [loading,setLoading] = useState(false);
    const [posts,setPosts] = useState([]);
    const [layout, setLayout] = useState('grid');

    useEffect(()=>{
        setLoading(true);
        fetch(`https://volunteer-management-server-tawny.vercel.app/addVolunteerNeedPost?searchParams=${search}`)
        .then(res=>res.json())
        .then(data=>{
            setPosts(data);
            setLoading(false);            
        })
    },[search])

    const handleSortByEarliestDate = () =>{
        const earliestData = [...posts].sort((a,b)=>new Date(a.deadline) - new Date(b.deadline));
        setPosts(earliestData);
    }

    const handleSortByLatestDate = () =>{
        const latestData = [...posts].sort((a,b)=>new Date(b.deadline) - new Date(a.deadline));
        setPosts(latestData);
    }

    const handleGrid = () =>{
        setLayout('grid');
    }

    const handleTable = () =>{
        setLayout('table');
    }

    return (
        <>
        <title>Volunteer Management | All Volunteer Need Posts</title>
        <div className='my-10 px-1 md:px-3'>
            <div className='max-w-4xl mx-auto text-center space-y-4'>
                <h2 className="text-xl md:text-3xl font-bold">Opportunities to Make a Difference</h2>
                <p className='font-medium italic'>Search What Matters to You. Lend a Hand Where It Counts.</p>
            </div>
            <div className='flex justify-end gap-3 my-8'>
                <button onClick={handleGrid}><BsGrid3X3GapFill size={20} /></button>
                <button onClick={handleTable}><RxDragHandleHorizontal size={30} /></button>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-4">
                <label className="input">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
                >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
                </g>
                </svg>
                <input
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                name="search"
                placeholder="Search by title"
                required
                />
                </label>
                
                <div className="dropdown dropdown-bottom">
                    <div tabIndex={0} role="button" className="btn p-2 flex">Sort <IoIosArrowDown size='15' /></div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-40 p-2 shadow-sm">
                        <li><a onClick={handleSortByEarliestDate}>Earliest Deadline</a></li>
                        <li><a onClick={handleSortByLatestDate}>Latest Deadline</a></li>
                    </ul>
                </div>

            </div>
            {loading ? 
                (<Loading />) 
                : 
                layout === 'grid' ? 
                (<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10'>
                    {posts.map((volNeed) => (
                    <VolunteerNeedPostCard key={volNeed._id} volNeed={volNeed} />
                    ))}
                </div>) 
                : 
                (<div className="overflow-x-auto mt-10 mb-20 bg-base-200 border-2 border-[#2dcfc4] rounded-2xl p-4">
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
        </>
        
    );
};

export default AllVolunteerNeedPosts;