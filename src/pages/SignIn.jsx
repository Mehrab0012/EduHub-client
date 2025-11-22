import React, { useContext, useRef, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import { LuEye, LuEyeOff } from 'react-icons/lu';
import { GoogleAuthProvider, sendPasswordResetEmail, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';
import styled from 'styled-components';
import useTitle from '../hooks/useTitle';


const SignIn = () => {
    const { signIn, setLoading } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const [passwordType, setPasswordType] = useState('password');
    const emailRef = useRef(null);
    useTitle('Sign In');
    const showPassword = () => {
        setShow(prev => {
            const newState = !prev;
            setPasswordType(newState ? 'text' : 'password');
            return newState;
        });
    };

    const handleSignInWithEmail = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        signIn(email, password)
            .then(() => {
                toast.success("Sign in successfully");
                setLoading(false);
                navigate(location.state ? location.state : '/');
            })
            .catch((error) => {
                switch (error.code) {
                    case "auth/user-not-found":
                        toast.error("No user found. Please register.");
                        setTimeout(() => navigate('/authenticate/register'), 800);
                        break;
                    case "auth/wrong-password":
                        toast.error("Incorrect password. Try again.");
                        break;
                    case "auth/invalid-email":
                        toast.error("Invalid email format.");
                        break;
                    case "auth/invalid-credential":
                        toast.error("Invalid credentials. Please try again.");
                        break;
                    default:
                        toast.error("Login failed. Try again later.");
                        console.log(error);
                }
            });
    };
    const handleForgetPassword = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        sendPasswordResetEmail(auth, email).then(res => {
            toast.success("Check your email to reset password")
        }).catch(e => {
            if (e.code === 'auth/missing-email') {
                toast.info("Please Enter An Email")
            }
        })
    }
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(() => {
                toast.success("SignIn Successfull");
                navigate(`${location.state ? location.state : '/'}`);
            }).catch((e) => {
                switch (e.code) {
                    case "auth/popup-closed-by-user": {
                        toast.error("Sign in failed. Please try again!");
                        break;
                    }
                }
            })
    }
    {/* <input
                        type='email'
                        name='email'
                        ref={emailRef}
                        placeholder="Enter your email"
                        required
                        className="border w-full rounded-lg h-14 p-[15px]"
                    /> */}

    return (
        <div>
            <ToastContainer />
            <div className="pt-6">

                <StyledWrapper>
                    <div className="w-full">
                        <form onSubmit={handleSignInWithEmail} className="form">

                         
                            <div>
                                <input
                                    type='email'
                                    name='email'
                                    ref={emailRef}
                                    placeholder="Enter your email"
                                    required
                                    className="input"
                                />
                                <button onClick={handleForgetPassword} className='text-sm mb-3 text-blue-500 ml-4 mt-4 cursor-pointer'>forgot password?</button>
                            </div>


                            <div className='relative'>
                               
                                <input
                                    type={passwordType}
                                    name='password'
                                    placeholder="Enter your password"
                                    required
                                    className="input"
                                />
                                {show
                                    ? <LuEye onClick={showPassword} className="absolute top-5 right-4 text-2xl cursor-pointer" />
                                    : <LuEyeOff onClick={showPassword} className="absolute top-5 right-4 text-2xl cursor-pointer" />
                                }
                            </div>

                            <button
                                type='submit'
                                className="login-button "
                            >
                                Login
                            </button>
                        </form>
                        <div className="social-account-container">
                            <span className="title">Or Sign in with</span>
                            <div className="social-accounts">
                                <button onClick={handleGoogleSignIn} className="social-button google">
                                    <svg className="svg" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 488 512">
                                        <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                                    </svg></button>
                            </div>
                        </div>
                    </div>
                </StyledWrapper>
            </div>
        </div>
    );
};
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
  }
`;
export default SignIn;
