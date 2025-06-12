import React from 'react';
import MyVolunteerNeedPost from './MyVolunteerNeedPost/MyVolunteerNeedPost';
import MyVolunteerRequestPost from './MyVolunteerRequestPost/MyVolunteerRequestPost';

const ManageMyPosts = () => {
    return (
        <>
        <title>Volunteer Management | Manage My Posts</title>
        <div className='my-20'>
            <MyVolunteerNeedPost/>
            <MyVolunteerRequestPost/>
        </div>
        </>
        
    );
};

export default ManageMyPosts;