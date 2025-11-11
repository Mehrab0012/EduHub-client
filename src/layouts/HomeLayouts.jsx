import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const HomeLayouts = () => {
    return (
        <div className='max-w-7xl m-auto'>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default HomeLayouts;