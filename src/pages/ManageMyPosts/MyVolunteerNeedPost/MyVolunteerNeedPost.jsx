import React, { Suspense } from 'react';
import useAuth from '../../../hooks/useAuth';
import Loading from '../../../components/Shared/Loading/Loading'
import VolunteerNeedPostList from './VolunteerNeedPostList';
import useNeedVolunteerApi from '../../../api/useNeedVolunteerApi';

const MyVolunteerNeedPost = () => {
    const {user} = useAuth();
    const {myVolunteerNeedPromise} = useNeedVolunteerApi();

    return (
        <div>
            <h3 className="text-2xl font-semibold text-center my-4">My Volunteer Need Post</h3>
            <Suspense fallback={<Loading/>}>
                <VolunteerNeedPostList myVolunteerNeedPromise={myVolunteerNeedPromise(user.email)}/>
            </Suspense>
        </div>
    );
};

export default MyVolunteerNeedPost;