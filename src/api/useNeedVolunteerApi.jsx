import React from 'react';
import useAxiosSecure from '../hooks/useAxiosSecure';

const useNeedVolunteerApi = () => {
    const axiosSecure = useAxiosSecure();

    const myVolunteerNeedPromise = email =>{
        return axiosSecure.get(`/myVolunteerNeedPost?email=${email}`)
        .then(res=>res.data)
    }

    return {
        myVolunteerNeedPromise
    };
};

export default useNeedVolunteerApi;