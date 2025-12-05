import React, { useContext, useRef, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { useNavigate, useLocation } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import { LuEye, LuEyeOff } from 'react-icons/lu';
import { GoogleAuthProvider, sendPasswordResetEmail, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';
import styled from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
import useTitle from '../hooks/useTitle';

const SignIn = () => {
  const { signIn, setLoading } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  useTitle('Sign In');
  const emailRef = useRef(null);

  const [showPassword, setShowPassword] = useState(false);
  const [passwordType, setPasswordType] = useState('password');

  const togglePassword = () => {
    setShowPassword(prev => {
      setPasswordType(prev ? 'password' : 'text');
      return !prev;
    });
  };

  const handleSignIn = e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');

    signIn(email, password)
      .then(() => {
        toast.success('Sign in successful');
        setLoading(false);
        navigate(location.state?.from || '/');
      })
      .catch(error => {
        if (error.code === 'auth/user-not-found') {
          toast.error('No user found! Please register.');
          setTimeout(() => navigate('/authenticate/register'), 800);
        } else if (error.code === 'auth/wrong-password') toast.error('Wrong password!');
        else toast.error('Login failed!');
      });
  };

  const handleForgetPassword = e => {
    e.preventDefault();
    const email = emailRef.current.value;
    if (!email) return toast.info('Enter an email first!');
    sendPasswordResetEmail(auth, email)
      .then(() => toast.success('Check your email to reset password'))
      .catch(() => toast.error('Error sending reset email'));
  };

  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(() => {
        toast.success('Sign in successful');
        navigate(location.state?.from || '/');
      })
      .catch(() => toast.error('Google sign in failed'));
  };

  return (
    <div>
      <ToastContainer />
      <StyledWrapper>
        <div className="container">
          <h2 className="heading">Sign In</h2>
          <form onSubmit={handleSignIn} className="form">
            <label className='font-bold'>Email</label>
            <input type="email" name="email" placeholder="Enter your email" className="input" required ref={emailRef} />
            <button onClick={handleForgetPassword} className="forgot-button">Forgot password?</button>
            <br />
            <label className='font-bold'>Password</label>
            <div className="relative">
              <input
                type={passwordType}
                name="password"
                placeholder="Enter password"
                className="w-full border input border-gray-300 rounded-lg py-2 px-4 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                required
              />
              {showPassword ? (
                <LuEye
                  onClick={togglePassword}
                  className="absolute top-1/2 font-bold text-2xl z-199 right-3 -translate-y-1/2 text-gray-600 cursor-pointer hover:text-blue-500"
                />
              ) : (
                <LuEyeOff
                  onClick={togglePassword}
                  className="absolute top-1/2 font-bold text-2xl z-199 right-3 -translate-y-1/2 text-gray-600 cursor-pointer hover:text-blue-500"
                />
              )}
            </div>

            <button type="submit" className="login-button">Sign In</button>
          </form>

          <div className="social-container">
            <span className="title">Or continue with</span>
            <div className="social-buttons">
              <button onClick={handleGoogleSignIn} className="social-button google">
                <svg xmlns="http://www.w3.org/2000/svg" className='fill-white' viewBox="0 0 488 512" height="1em">
                  <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </StyledWrapper>
    </div>
  );
};

export default SignIn;

const StyledWrapper = styled.div`
.container {
  max-width: 400px;
  background: linear-gradient(0deg, #ffffff 0%, #f4f7fb 100%);
  border-radius: 40px;
  padding: 25px 35px;
  margin: 20px auto;
  box-shadow: rgba(133, 189, 215, 0.88) 0px 30px 30px -20px;
}
.heading {
  text-align: center;
  font-weight: 900;
  font-size: 28px;
  color: #1089d3;
  margin-bottom: 20px;
}
.form .input {
  width: 100%;
  padding: 15px 20px;
  border-radius: 20px;
  border: none;
  margin: 5px 0;
  box-shadow: #cff0ff 4px 10px 10px -5px;
}
.form .input:focus {
  outline: none;
  border-inline: 2px solid #12B1D1;
}
.eye-icon {
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  font-size: 1.5rem;
  cursor: pointer;
}
.login-button {
  width: 100%;
  padding: 15px;
  margin-top: 25px;
  border-radius: 20px;
  background: linear-gradient(45deg, #1089d3 0%, #12b1d1 100%);
  color: #fff;
  font-weight: bold;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}
.login-button:hover { transform: scale(1.03); }
.login-button:active { transform: scale(0.95); }
.forgot-button {
  font-size: 0.85rem;
  color: #1089d3;
  cursor: pointer;
  background: none;
  border: none;
  margin-left: 4px;
  margin-top: 4px;
}
.social-container { text-align: center; margin-top: 20px; }
.social-buttons { display: flex; justify-content: center; margin-top: 10px; }
.social-button {
  background: linear-gradient(45deg, #000 0%, #707070 100%);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: grid;
  place-items: center;
  margin: 0 5px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}
.social-button:hover { transform: scale(1.2); }
`;
