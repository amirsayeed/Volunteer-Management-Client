import axios from 'axios';
import React from 'react';
import useAuth from './useAuth';

const axiosInstance = axios.create({
    baseURL: 'https://volunteer-management-server-tawny.vercel.app'
})
const useAxiosSecure = () => {
    const {user,logOut} = useAuth(); 

    axiosInstance.interceptors.request.use(config => {
        config.headers.authorization = `Bearer ${user.accessToken}`
        return config;
    })


    axiosInstance.interceptors.response.use(response=>{
        return response;
    }, error => {
        if(error.status === 401 || error.status === 403){
            logOut()
            .then(()=>{
                console.log('log out user for 401 or 403 status')
            })
            .catch(error=>{
                console.log(error);
            })
        }
        return Promise.reject(error)
    })

    return axiosInstance;
};

export default useAxiosSecure;