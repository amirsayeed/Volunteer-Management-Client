import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { useParams } from 'react-router';
import UpdateVolunteerNeedPostForm from './UpdateVolunteerNeedPostForm';
import Loading from '../../components/Shared/Loading/Loading';
import useUpdatePostApi from '../../api/useUpdatePostApi';

const UpdateVolunteerNeedPost = () => {
    const {user} = useAuth();
    const {postId} = useParams();
    const {updateNeedVolunteerPostPromise} = useUpdatePostApi();
    const [postData, setPostData] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        updateNeedVolunteerPostPromise(postId).then(data=>{
            setPostData(data);
            setLoading(false);
        })
    },[postId])

    if(loading){
        return <Loading/>;
    }

    return (
        <div>
            <title>Volunteer Management | Update Volunteer Need Post</title>
            <UpdateVolunteerNeedPostForm postData={postData} user={user}/>
        </div>
    );
};

export default UpdateVolunteerNeedPost;