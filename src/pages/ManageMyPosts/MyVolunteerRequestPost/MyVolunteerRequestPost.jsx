import React, { Suspense } from 'react';
import Loading from '../../../components/Shared/Loading/Loading';
import VolunteerRequestPostList from './VolunteerRequestPostList';
import { myVolunteerRequestPromise } from '../../../api/volunteerRequestApi';
import useAuth from '../../../hooks/useAuth';

const MyVolunteerRequestPost = () => {
    const {user} = useAuth();
    
    return (
        <div>
            <h3 className="text-2xl font-semibold text-center my-4">My Volunteer Request Post</h3>
            <Suspense fallback={<Loading/>}>
                <VolunteerRequestPostList myVolunteerRequestPromise={myVolunteerRequestPromise(user.email)}/>
            </Suspense>
        </div>
    );
};

export default MyVolunteerRequestPost;