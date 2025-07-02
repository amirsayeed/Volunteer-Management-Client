import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Loading from '../components/Shared/Loading/Loading';

const Root = () => {
    const {state} = useNavigation();

    return (
        <div>
            <Navbar/>
            {state==='loading' ? <Loading/> : (
                <div className='max-w-[1500px] mx-auto min-h-[calc(100%-474px)]'>
                    <Outlet/>
                </div>    
            )}
            <Footer/>
        </div>
    );
};

export default Root;