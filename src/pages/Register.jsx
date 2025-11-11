import React, { use, useState } from 'react';
import { LuEye, LuEyeOff } from 'react-icons/lu';
import { toast, ToastContainer } from 'react-toastify';
import { ImCross } from 'react-icons/im';
import { FaCheck } from 'react-icons/fa';
import { AuthContext } from '../provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { useLocation, useNavigate } from 'react-router';

const Register = () => {
    const { createUser, setUser } = use(AuthContext);
    const [show, setShow] = useState(false);
    const [passwordType, setPasswordType] = useState('password');
    const [showDiv, setShowDiv] = useState('hidden');
    const [checkLength, setCheckLength] = useState(false);
    const [checkUpperCase, setCheckUpperCase] = useState(false);
    const [checkLowerCase, setCheckLowerCase] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();


    const handleRegisterWithEmail = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photoURL = e.target.photoURL.value;
        const email = e.target.email.value;
        const password = e.target.password.value;


        if (!checkLength) {
            return;
        }
        if (!checkUpperCase) {
            return;
        }
        if (!checkLowerCase) {
            return;
        }

        createUser(email, password).then(res => {
            toast.success("Registration successful");

            const user = res.user;
            updateProfile(user, {
                displayName: name,
                photoURL: photoURL,
            }).then(() => {
                setUser(user);
                navigate(`${location.state ? location.state : '/'}`)
            });

        })
            .catch((e) => {


                switch (e.code) {
                    case "auth/email-already-in-use":
                        toast.error("This email is already registered!");
                        break;
                    case "auth/invalid-email":
                        toast.error("Please enter a valid email address!");
                        break;
                    default:
                        toast.error("Something went wrong. Please try again!");
                }
            })

    }
    const showPassword = () => {
        setShow(show => !show);
        show ? setPasswordType('password') : setPasswordType('text');
    }
    const handlePassword = (e) => {
        setShowDiv('flex');
        const password = e.target.value;
        password.length > 5 ? setCheckLength(true) : setCheckLength(false);
        const hasUpperCase = /[A-Z]/.test(password);
        setCheckUpperCase(hasUpperCase);
        const hasLowerCase = /[a-z]/.test(password);
        setCheckLowerCase(hasLowerCase);

    }

    return (
        <div>
            <div className="space-y-6 pt-6">
                <form onSubmit={handleRegisterWithEmail} className="flex flex-col">
                    <label className="text-black font-semibold leading-normal ">
                        Name
                    </label>
                    <input
                        type='text'
                        name='name'
                        required
                        placeholder="Enter your name"
                        className=" flex w-full min-w-0 flex-1 resize-none mb-5 rounded-lg text-[#181411] 
                        focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#e6dfdb]
                          bg-white  focus:border-primary h-14
                          placeholder:text-[#8a7260]  p-[15px] text-base font-normal leading-normal"
                    />
                    <label className="text-black font-semibold leading-normal ">
                        Photo
                    </label>
                    <input
                        type='text'
                        name='photoURL'

                        placeholder="Enter your photo URL"
                        className=" flex w-full min-w-0 flex-1 resize-none mb-5 rounded-lg text-[#181411] 
                        focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#e6dfdb]
                          bg-white  focus:border-primary h-14
                          placeholder:text-[#8a7260]  p-[15px] text-base font-normal leading-normal"
                    />

                    <label className="text-black font-semibold leading-normal ">
                        Email
                    </label>
                    <input
                        type='email'
                        name='email'
                        placeholder="Enter your email"
                        required
                        className=" flex w-full min-w-0 flex-1 resize-none mb-5 rounded-lg text-[#181411] 
                        focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#e6dfdb]
                          bg-white  focus:border-primary h-14
                          placeholder:text-[#8a7260]  p-[15px] text-base font-normal leading-normal"
                    />


                    <label className="text-black font-semibold leading-normal ">
                        Password
                    </label>
                    <div className='relative'>
                        <input onChange={handlePassword}
                            type={passwordType}
                            name='password'
                            placeholder="Enter your password"
                            required
                            className=" flex w-full min-w-0 flex-1 resize-none  rounded-lg text-[#181411] 
                        focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#e6dfdb]
                          bg-white  focus:border-primary h-14
                          placeholder:text-[#8a7260]  p-[15px] text-base font-normal leading-normal"
                        />{
                            show ? <LuEye onClick={showPassword} className="absolute top-4 right-4 text-2xl cursor-pointer" /> : <LuEyeOff onClick={showPassword} className="absolute top-4 right-4 text-2xl cursor-pointer" />
                        }
                        <div className={`${showDiv} px-1 flex flex-col mt-4`}>
                            <h5 className='flex gap-1 mb-2 items-center text-[14px] font-light text-[#000000af]'>
                                {checkLength ? <FaCheck className='text-green-500' /> : <ImCross className='text-red-500' />}
                                Password must be at least 6 character
                            </h5>
                            <h5 className='flex gap-1 mb-2 items-center text-[14px] font-light text-[#000000af]'>
                                {checkLowerCase ? <FaCheck className='text-green-500' /> : <ImCross className='text-red-500' />}
                                Password must have a Lowercase letter
                            </h5>
                            <h5 className='flex gap-1 mb-2 items-center text-[14px] font-light text-[#000000af]'>
                                {checkUpperCase ? <FaCheck className='text-green-500' /> : <ImCross className='text-red-500' />}
                                Password must have an Uppercase letter
                            </h5>
                        </div>
                    </div>
                    <ToastContainer></ToastContainer>
                    <p className="text-primary mt-5 text-sm font-medium leading-normal text-right underline cursor-pointer hover:text-primary/80">
                        Forgot Password?
                    </p>
                    <button type='submit' className="w-full bg-primary transform duration-100 active:scale-95
                    text-white font-bold py-3 rounded-lg hover:bg-primary/90 transition-all mt-2 cursor-pointer">
                        Register
                    </button>
                </form>


            </div>



        </div >
    );
};

export default Register;