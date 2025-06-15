import React from 'react';
import useAxiosSecure from '../hooks/useAxiosSecure';
const useUpdatePostApi = () => {
    const axiosSecure = useAxiosSecure();

    const updateNeedVolunteerPostPromise = id => {
        return axiosSecure.get(`/addVolunteerNeedPost/${id}`)
        .then(res=>res.data)
    }

    return {
        updateNeedVolunteerPostPromise
    }
};

export default useUpdatePostApi;