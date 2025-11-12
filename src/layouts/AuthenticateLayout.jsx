import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Outlet, useLocation, useNavigate } from 'react-router';
import NavLinks from '../components/NavLinks/NavLinks';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';
import { toast, ToastContainer } from 'react-toastify';
import AuthenticateAnimation from '../components/AuthenticateAnimation/AuthenticateAnimation';


const AuthenticateLayout = () => {
    const location = useLocation();
    const navigate = useNavigate();
    


    return (
        <div>
            <div className='mt-10'>
                <ToastContainer></ToastContainer>

                <div className="layout-container flex h-full grow flex-col items-center justify-center w-full ">
                    <div className="flex flex-col max-w-7xl w-full justify-center py-5">

                        <div className="text-center mb-8">
                            <h1 className="text-3xl font-bold text-black">
                                Welcome to EduHub
                            </h1>
                        </div>


                        <div className="grid grid-cols-2 md:flex-row w-full max-w-4xl mx-auto bg-white dark:bg-background-dark shadow-xl rounded-xl overflow-hidden">

                            <div className="w-full md:w-full p-8 md:p-12 flex flex-col justify-center">

                                <div className="pb-3">
                                    <div className='grid grid-cols-2 '>
                                        <NavLinks
                                            to='/authenticate/signIn'
                                            className={({ isActive }) => isActive ? 'text-blue-500 w-full text-xl font-bold inline-block  pl-2 border-b-3  pb-2  border-blue-400' :
                                                'w-full text-xl font-bold hover:text-blue-500 transition-colors pl-2 text-black  '}
                                        >Login

                                        </NavLinks>
                                        <NavLinks
                                            to='/authenticate/register'
                                            className={({ isActive }) => isActive ? 'text-blue-500 w-full text-xl font-bold inline-block  pl-2 border-b-3  pb-2  border-blue-400' :
                                                'text-xl font-bold hover:text-blue-500 transition-colors pl-2 text-black w-full '}
                                        >Register

                                        </NavLinks>


                                    </div>
                                </div>

                                <Outlet></Outlet>

                            </div>


                            <div className=' flex justify-center items-center'>
                                <AuthenticateAnimation></AuthenticateAnimation>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AuthenticateLayout;