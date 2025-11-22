import { useState, useContext, useEffect, useRef } from 'react';
import NavLinks from '../NavLinks/NavLinks';
import { IoMdMenu, IoMdClose } from 'react-icons/io'; // Added Close icon
import { Link, useLocation } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';

const Navbar = () => {
    const { user, handleSignOut, handleTheme, theme } = useContext(AuthContext);
    const [isOpen, setIsOpen] = useState(false); // Mobile Menu State
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // User Dropdown State

    const dropdownRef = useRef(null);
    const location = useLocation();

    useEffect(() => {
        setIsOpen(false);
        setIsDropdownOpen(false);
    }, [location]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const navLinksClasses = ({ isActive }) =>
        `font-medium transition-colors duration-200 ${isActive ? 'text-primary font-bold' : 'text-base-content/70 hover:text-primary'}`;

    const NavItems = (
        <>
            <li><NavLinks to='/' className={navLinksClasses}>Home</NavLinks></li>
            <li><NavLinks to='/courses' className={navLinksClasses}>Courses</NavLinks></li>
            <li><NavLinks to='/dashboard' className={navLinksClasses}>Dashboard</NavLinks></li>
        </>
    );

    return (
        <nav className="sticky top-0 z-50 w-full bg-base-100/80 backdrop-blur-md border-b border-base-200 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">

                    {/* --- Logo --- */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link to='/' className="text-2xl md:text-3xl font-bold text-primary tracking-tight">
                            EduHub
                        </Link>
                    </div>

                    {/* --- Desktop Navigation --- */}
                    <div className="hidden md:flex items-center space-x-8">
                        <ul className="flex gap-8 text-sm lg:text-base">
                            {NavItems}
                        </ul>
                    </div>

                    {/* --- Right Side (Auth & Mobile Toggle) --- */}
                    <div className="flex items-center gap-4">

                        {/* User Profile / Login Button */}
                        {user ? (
                            <div className="relative" ref={dropdownRef}>
                                {/* Avatar Trigger */}
                                <button
                                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                    className="flex items-center focus:outline-none transition-transform active:scale-95"
                                >
                                    <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary/20 hover:border-primary transition-colors">
                                        <img
                                            src={user.photoURL || "https://via.placeholder.com/150"}
                                            alt={user.displayName}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </button>

                                {/* Dropdown Menu */}
                                {isDropdownOpen && (
                                    <div className="absolute right-0 mt-3 w-72 bg-base-100 rounded-xl shadow-2xl border border-base-200 transform opacity-100 scale-100 transition-all duration-200 origin-top-right overflow-hidden">
                                        {/* Header */}
                                        <div className="px-6 py-4 bg-base-200/50 border-b border-base-200">
                                            <p className="text-sm font-medium text-base-content truncate">{user.displayName}</p>
                                            <p className="text-xs text-base-content/60 truncate">{user.email}</p>
                                        </div>

                                        {/* Menu Items */}
                                        <div className="px-2 py-2 space-y-1">
                                            {/* Theme Toggle Item */}
                                            <div className="flex items-center justify-between px-4 py-2 hover:bg-base-200 rounded-lg transition-colors">
                                                <span className="text-sm font-medium">Theme</span>
                                                <label className="swap swap-rotate">
                                                    <input
                                                        onChange={handleTheme}
                                                        type="checkbox"
                                                        className="theme-controller"
                                                        checked={theme === 'dark'}
                                                    />
                                                    {/* Sun Icon */}
                                                    <svg className="swap-off w-5 h-5 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>
                                                    {/* Moon Icon */}
                                                    <svg className="swap-on w-5 h-5 fill-current text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>
                                                </label>
                                            </div>

                                            <div className="h-px bg-base-200 my-1" />

                                            <button
                                                onClick={handleSignOut}
                                                className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-red-50 rounded-lg transition-colors font-medium"
                                            >
                                                Sign Out
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="hidden md:block">
                                <Link to='/authenticate/signIn'>
                                    <button className="bg-primary hover:bg-primary/90 text-primary-content px-5 py-2 rounded-lg font-medium transition-all shadow-md hover:shadow-lg active:scale-95">
                                        Login
                                    </button>
                                </Link>
                            </div>
                        )}

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden p-2 text-base-content hover:bg-base-200 rounded-lg transition-colors"
                        >
                            {isOpen ? <IoMdClose className="text-2xl" /> : <IoMdMenu className="text-2xl" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* --- Mobile Menu (Slide Down) --- */}
            <div className={`md:hidden absolute w-full bg-base-100 border-b border-base-200 shadow-xl transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-4 pt-2 pb-6 space-y-2">
                    <ul className="flex flex-col space-y-3 text-center">
                        {NavItems}
                    </ul>

                    {/* Mobile Auth Buttons */}
                    <div className="pt-4 mt-4 border-t border-base-200 flex flex-col items-center gap-3">
                        {!user && (
                            <Link to='/authenticate/signIn' className="w-full max-w-xs">
                                <button className="w-full bg-primary text-primary-content px-4 py-2 rounded-lg font-medium">
                                    Login
                                </button>
                            </Link>
                        )}

                        
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;