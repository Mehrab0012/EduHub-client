import React, { use, useState } from 'react';
import { LuEye, LuEyeOff } from 'react-icons/lu';
import { toast, ToastContainer } from 'react-toastify';
import { ImCross } from 'react-icons/im';
import { FaCheck } from 'react-icons/fa';
import { AuthContext } from '../provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { useLocation, useNavigate } from 'react-router';
import styled from 'styled-components';

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
            <ToastContainer />
            <div className="pt-6">
                <StyledWrapper>
                    <div className="w-full">
                        <form onSubmit={handleRegisterWithEmail} className="form">
                    <label className="text-black font-semibold leading-normal ">
                        Name
                    </label>
                    <input
                        type='text'
                        name='name'
                        required
                        placeholder="Enter your name"
                        className="input"
                    />
                    <label className="text-black font-semibold leading-normal ">
                        Photo URL
                    </label>
                    <input
                        type='text'
                        className="input"
                        placeholder='URL'
                    />

                    <label className="text-black font-semibold leading-normal ">
                        Email
                    </label>
                    <input
                        type='email'
                        name='email'
                        placeholder="Enter your email"
                        required
                        className="input"
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
                            className="input"
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
                    
                    <button type='submit' className="login-button">
                        Register
                    </button>
                        </form>
                    </div>
                </StyledWrapper>
            </div>
        </div >
    );
};


export default Register;
const StyledWrapper = styled.div`
  .container {
    max-width: 350px;
    background: #F8F9FD;
    background: linear-gradient(0deg, rgb(255, 255, 255) 0%, rgb(244, 247, 251) 100%);
    border-radius: 40px;
    padding: 25px 35px;
    border: 5px solid rgb(255, 255, 255);
    box-shadow: rgba(133, 189, 215, 0.8784313725) 0px 30px 30px -20px;
    margin: 20px;
  }

  .heading {
    text-align: center;
    font-weight: 900;
    font-size: 30px;
    color: rgb(16, 137, 211);
  }
  .form{
    margin-top:10px;
  }
 

  .form .input {
    width: 100%;
    background: white;
    border: none;
    padding: 15px 20px;
    border-radius: 20px;
    margin-top: 15px;
    box-shadow: #cff0ff 4px 10px 10px -5px;
    border-inline: 2px solid transparent;
    margin-top:5px;
  }

  .form .input::-moz-placeholder {
    color: rgb(170, 170, 170);
  }

  .form .input::placeholder {
    color: rgb(170, 170, 170);
  }

  .form .input:focus {
    outline: none;
    border-inline: 2px solid #12B1D1;
  }



  .form .login-button {
    display: block;
    width: 100%;
    font-weight: bold;
    background: linear-gradient(45deg, rgb(16, 137, 211) 0%, rgb(18, 177, 209) 100%);
    color: white;
    padding-block: 15px;
    margin: 30px auto;
    border-radius: 20px;
    box-shadow: rgba(133, 189, 215, 0.8784313725) 0px 20px 10px -15px;
    border: none;
    transition: all 0.2s ease-in-out;

  }

  .form .login-button:hover {
    transform: scale(1.03);
    box-shadow: rgba(133, 189, 215, 0.8784313725) 0px 23px 10px -20px;
  }

  .form .login-button:active {
    transform: scale(0.95);
    box-shadow: rgba(133, 189, 215, 0.8784313725) 0px 15px 10px -10px;
  }

  .social-account-container {
    margin-top: 25px;
  }

  .social-account-container .title {
    display: block;
    text-align: center;
    font-size: 10px;
    color: rgb(170, 170, 170);
  }

  .social-account-container .social-accounts {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-top: 5px;
  }

  .social-account-container .social-accounts .social-button {
    background: linear-gradient(45deg, rgb(0, 0, 0) 0%, rgb(112, 112, 112) 100%);
    border: 5px solid white;
    padding: 5px;
    border-radius: 50%;
    width: 40px;
    aspect-ratio: 1;
    display: grid;
    place-content: center;
    box-shadow: rgba(133, 189, 215, 0.8784313725) 0px 12px 10px -8px;
    transition: all 0.2s ease-in-out;
  }

  .social-account-container .social-accounts .social-button .svg {
    fill: white;
    margin: auto;
  }

  .social-account-container .social-accounts .social-button:hover {
    transform: scale(1.2);
  }

  .social-account-container .social-accounts .social-button:active {
    transform: scale(0.9);
  }

  .agreement {
    display: block;
    text-align: center;
    margin-top: 15px;
  }

  .agreement a {
    text-decoration: none;
    color: #0099ff;
    font-size: 9px;
  }`;