import React, { useState, useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { useNavigate, useLocation } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import { LuEye, LuEyeOff } from 'react-icons/lu';
import { FaCheck } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import styled from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
import useTitle from '../hooks/useTitle';

const Register = () => {
  const { createUser, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  useTitle('Register');

  const [showPassword, setShowPassword] = useState(false);
  const [passwordType, setPasswordType] = useState('password');
  const [showRules, setShowRules] = useState(false);
  const [checkLength, setCheckLength] = useState(false);
  const [checkUpper, setCheckUpper] = useState(false);
  const [checkLower, setCheckLower] = useState(false);

  const togglePassword = () => {
    setShowPassword(prev => {
      setPasswordType(prev ? 'password' : 'text');
      return !prev;
    });
  };

  const handlePasswordChange = e => {
    setShowRules(true);
    const password = e.target.value;
    setCheckLength(password.length >= 6);
    setCheckUpper(/[A-Z]/.test(password));
    setCheckLower(/[a-z]/.test(password));
  };

  const handleRegister = e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const photoURL = formData.get('photoURL');
    const email = formData.get('email');
    const password = formData.get('password');

    createUser(email, password)
      .then(res => {
        toast.success('Registration successful');
        updateProfile(res.user, { displayName: name, photoURL })
          .then(() => {
            setUser(res.user);
            navigate(location.state?.from || '/');
          });
      })
      .catch(e => {
        if (e.code === 'auth/email-already-in-use') toast.error('Email already registered!');
        else if (e.code === 'auth/invalid-email') toast.error('Invalid email!');
        else if (e.code === 'auth/weak-password') toast.error('Password must be at least 6 chars!');
        else toast.error('Something went wrong!');
      });
  };

  return (
    <div>
      <ToastContainer />
      <StyledWrapper>
        <div className="container">
          <h2 className="heading">Register</h2>
          <form onSubmit={handleRegister} className="form">
            <label>Name</label>
            <input type="text" name="name" placeholder="Enter your name" className="input" required />
            <label>Photo URL</label>
            <input type="text" name="photoURL" placeholder="Photo URL" className="input" />
            <label>Email</label>
            <input type="email" name="email" placeholder="Enter your email" className="input" required />
            <label>Password</label>
            <div className="relative">
              <input
                onChange={handlePasswordChange}
                type={passwordType}
                name="password"
                placeholder="Enter password"
                className="w-full border input relative border-gray-300 rounded-lg py-2 px-4 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                required
              />
              {showPassword ? (
                <LuEye
                  onClick={togglePassword}
                  className="absolute top-3 font-bold text-2xl z-199 right-3  text-gray-600 cursor-pointer hover:text-blue-500"
                />
              ) : (
                <LuEyeOff
                  onClick={togglePassword}
                  className="absolute top-3 font-bold text-2xl z-199 right-3  text-gray-600 cursor-pointer hover:text-blue-500"
                />
              )}
              {showRules && (
                <div className="password-rules">
                  <p>{checkLength ? <FaCheck className="check" /> : <ImCross className="cross" />} At least 6 characters</p>
                  <p>{checkLower ? <FaCheck className="check" /> : <ImCross className="cross" />} Lowercase letter</p>
                  <p>{checkUpper ? <FaCheck className="check" /> : <ImCross className="cross" />} Uppercase letter</p>
                </div>
              )}
            </div>
            <button type="submit" className="login-button">Register</button>
          </form>
        </div>
      </StyledWrapper>
    </div>
  );
};

export default Register;

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
.password-rules { margin-top: 10px; }
.password-rules p { display: flex; align-items: center; gap: 5px; font-size: 0.8rem; color: #000000af; }
.check { color: green; }
.cross { color: red; }
`;
