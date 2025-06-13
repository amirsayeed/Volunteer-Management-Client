import React from 'react';
import useAxiosSecure from '../hooks/useAxiosSecure';

const useVolunteerRequestApi = () => {
    const axiosSecure = useAxiosSecure();

    const myVolunteerRequestPromise = email =>{
        return axiosSecure.get(`/myVolunteerRequests?email=${email}`)
        .then(res=>res.data)
    }

    return {
        myVolunteerRequestPromise
    };
};

export default useVolunteerRequestApi;
