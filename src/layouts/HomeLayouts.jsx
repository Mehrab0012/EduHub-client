import React, { useContext } from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { AuthContext } from '../provider/AuthProvider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ScrollTop from '../provider/ScrollTop';

const HomeLayouts = () => {
    const {theme} = useContext(AuthContext);
    return (
        <div data-theme={theme} className=' m-auto'>
            <ScrollTop />
            <Navbar />
            <Outlet />
            <Footer />
            <ToastContainer />
        </div>
    );
};

export default HomeLayouts;