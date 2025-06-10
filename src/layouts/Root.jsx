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
            {state==='loading' ? <Loading/> : <Outlet/>}
            <Footer/>
        </div>
    );
};

export default Root;