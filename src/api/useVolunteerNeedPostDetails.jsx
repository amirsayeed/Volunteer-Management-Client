import React from 'react';
import useAxiosSecure from '../hooks/useAxiosSecure';
const useVolunteerNeedPostDetails = () => {
    const axiosSecure = useAxiosSecure();

    const volunteerNeedPostByIdPromise = id =>{
        return axiosSecure.get(`/addVolunteerNeedPost/${id}`)
        .then(res=>res.data)
    }

    return {
        volunteerNeedPostByIdPromise
    }
};

export default useVolunteerNeedPostDetails;