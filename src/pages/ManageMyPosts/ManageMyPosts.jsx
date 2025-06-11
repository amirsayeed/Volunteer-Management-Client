import React from 'react';
import MyVolunteerNeedPost from './MyVolunteerNeedPost/MyVolunteerNeedPost';
import MyVolunteerRequestPost from './MyVolunteerRequestPost/MyVolunteerRequestPost';

const ManageMyPosts = () => {
    return (
        <div className='my-20'>
            <MyVolunteerNeedPost/>
            <MyVolunteerRequestPost/>
        </div>
    );
};

export default ManageMyPosts;