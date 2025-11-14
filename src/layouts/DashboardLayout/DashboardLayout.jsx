import React from 'react';
import { Outlet } from 'react-router';
import DashboardLinks from '../../components/DashboardLinks/DashboardLinks';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const DashboardLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="flex">
                <div><DashboardLinks /></div>
                
                <main className="flex-1 p-3 bg-gray-100">
                    
                    <Outlet />
                </main>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;