import React, { useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router';
import { ToastContainer } from 'react-toastify';
import AuthenticateAnimation from '../components/AuthenticateAnimation/AuthenticateAnimation';
import { NavLink } from 'react-router';

const AuthenticateLayout = () => {
    const location = useLocation();
    const navigate = useNavigate();

    // Determine active tab based on URL
    const isSignIn = location.pathname.includes('signIn');

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 md:px-0">
            <ToastContainer />

            <div className="w-full max-w-6xl flex flex-col md:flex-row bg-white shadow-lg rounded-xl overflow-hidden">

                {/* Left side: Form */}
                <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center items-center">
                    <div className="text-center mb-6">
                        <h1 className="text-3xl font-bold text-gray-900">
                            Welcome to EduHub
                        </h1>
                        <p className="text-gray-600 mt-2">Sign in or create an account to get started</p>
                    </div>

                    {/* Modern toggle switch for Login/Register */}
                    <div className="relative flex bg-gray-200 rounded-full p-1 w-64 mb-8">
                        {/* Sliding indicator */}
                        <div
                            className={`absolute top-0 left-0 w-1/2 h-full bg-blue-600 rounded-full shadow-md transition-all duration-300`}
                            style={{ transform: isSignIn ? 'translateX(0%)' : 'translateX(100%)' }}
                        ></div>

                        <NavLink
                            to="/authenticate/signIn"
                            className={`w-1/2 text-center py-2 font-semibold cursor-pointer transition-colors duration-300 ${
                                isSignIn ? 'text-white z-10 relative' : 'text-gray-700'
                            }`}
                        >
                            Login
                        </NavLink>

                        <NavLink
                            to="/authenticate/register"
                            className={`w-1/2 text-center py-2 font-semibold cursor-pointer transition-colors duration-300 ${
                                !isSignIn ? 'text-white z-10 relative' : 'text-gray-700'
                            }`}
                        >
                            Register
                        </NavLink>
                    </div>

                    <Outlet />
                </div>

                {/* Right side: Animation */}
                <div className="w-full md:w-1/2 flex justify-center items-center bg-gray-50 p-6 md:p-12">
                    <AuthenticateAnimation />
                </div>
            </div>
        </div>
    );
};

export default AuthenticateLayout;
