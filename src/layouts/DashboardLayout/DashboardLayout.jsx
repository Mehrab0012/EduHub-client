import React, { useState } from 'react';
import { Outlet } from 'react-router';
import DashboardLinks from '../../components/DashboardLinks/DashboardLinks';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { Menu, X } from 'lucide-react';

const DashboardLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // Function to close sidebar when clicking overlay or a link (optional)
    const closeSidebar = () => setIsSidebarOpen(false);

    return (
        <div className="min-h-screen flex flex-col bg-base-100 font-sans">
            {/* Top Navigation */}
            <div className="sticky top-0 z-40 bg-base-100 shadow-sm">
                <Navbar />
            </div>

            <div className="flex flex-1 relative max-w-[1920px] mx-auto w-full">
                
                {/* --- Mobile Overlay (Backdrop) --- */}
                {/* Only visible on mobile when sidebar is open */}
                <div 
                    className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${
                        isSidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
                    onClick={closeSidebar}
                />

                {/* --- Sidebar --- */}
                <aside 
                    className={`
                        fixed md:sticky top-0 md:top-[64px] left-0 z-50 
                        h-[100vh] md:h-[calc(100vh-64px)] 
                        w-72 md:w-64 
                        bg-base-200/80 backdrop-blur-md md:bg-base-200 
                        border-r border-base-300 
                        transform transition-transform duration-300 ease-in-out
                        shadow-2xl md:shadow-none overflow-y-auto
                        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
                    `}
                >
                    {/* Mobile Sidebar Header (Close Button) */}
                    <div className="flex items-center justify-between p-4 md:hidden border-b border-base-300">
                        <span className="font-bold text-lg">Dashboard Menu</span>
                        <button 
                            onClick={closeSidebar}
                            className="p-2 hover:bg-base-300 rounded-full transition-colors"
                        >
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Links Container */}
                    <div className="p-4">
                        <DashboardLinks />
                    </div>
                </aside>

                {/* --- Main Content Area --- */}
                <main className="flex-1 flex flex-col min-w-0 bg-base-100">
                    
                    {/* Mobile Toggle Bar */}
                    {/* Visible only on mobile to provide a cleaner way to open menu */}
                    <div className="md:hidden flex items-center gap-3 p-4 border-b border-base-200 bg-base-100">
                        <button
                            onClick={() => setIsSidebarOpen(true)}
                            className="p-2 -ml-2 hover:bg-base-200 rounded-lg transition-colors"
                            aria-label="Open Sidebar"
                        >
                            <Menu className="w-6 h-6" />
                        </button>
                        <span className="font-semibold text-gray-700">Dashboard</span>
                    </div>

                    {/* Actual Page Content */}
                    <div className="flex-1 p-4 sm:p-6 lg:p-8 overflow-x-hidden">
                        <div className="max-w-5xl mx-auto animate-in fade-in duration-500">
                            <Outlet />
                        </div>
                    </div>

                    {/* Footer (Inside main so it pushes down properly) */}
                    <div className="mt-auto">
                        <Footer />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;