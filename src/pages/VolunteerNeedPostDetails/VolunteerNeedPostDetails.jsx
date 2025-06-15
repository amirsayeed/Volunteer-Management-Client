import React, { Suspense, useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import VolunteerNeedPostDetailsCard from './VolunteerNeedPostDetailsCard';
import { useParams } from 'react-router';
import Loading from '../../components/Shared/Loading/Loading';
import useVolunteerNeedPostDetails from '../../api/useVolunteerNeedPostDetails';

const VolunteerNeedPostDetails = () => {
    const {user} = useAuth()
    const {postId} = useParams();
    //console.log(postId);
    const {volunteerNeedPostByIdPromise} = useVolunteerNeedPostDetails();
    const [loading,setLoading] = useState(true);
    const [postDetails,setPostDetails] = useState([]);
    

    useEffect(()=>{
        volunteerNeedPostByIdPromise(postId).then(data=>{
            setPostDetails(data);
            setLoading(false);
        })
    },[postId])

    if(loading){
        return <Loading/>
    }
    
    return (
        <>
        <title>Volunteer Management | Volunteer Need Post Details</title>
        <div className='px-1'>
            <VolunteerNeedPostDetailsCard postDetails={postDetails} user={user}/>
        </div>
        </>
        
    );
};

export default VolunteerNeedPostDetails;