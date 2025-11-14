import { use, useState } from 'react';
import NavLinks from '../NavLinks/NavLinks';
import { IoMdMenu } from 'react-icons/io';
import { Link } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';


const Navbar = () => {
    const { user, handleSignOut } = use(AuthContext);
    const [isOpen, setIsOpen] = useState(false);


    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const NavItems = <>
        <NavLinks to='/' className={({ isActive }) => isActive ? 'text-blue-500' : 'hover:text-blue-500 transition-colors text-black'}>Home</NavLinks>
        <NavLinks to='/courses' className={({ isActive }) => isActive ? 'text-blue-500' : 'hover:text-blue-500 transition-colors text-black'}>Courses</NavLinks>
        <NavLinks to='/dashboard' className={({ isActive }) => isActive ? 'text-blue-500' : 'hover:text-blue-500 transition-colors text-black'}>Dashboard</NavLinks>
    </>;

    const handleUser = () => {

    }



    return (
        <>
            <nav  className='max-w-7xl sticky py-5 m-auto flex justify-between items-center p-2 max-md:p-3  z-300'>
                <div className='logo'>
                        
                    <NavLinks to='/' className="text-3xl font-bold text-gray-800">EduHub</NavLinks>
                </div>

                <div className="flex items-center justify-center">
                    <ul className="hidden md:flex gap-5 items-center ">
                        {NavItems}
                    </ul>
                </div>
                
                <div className="  flex items-center justify-center gap-5">

                    {
                        user ? <div>
                            <button onClick={handleSignOut} className="px-4 py-2 max-md:hidden cursor-pointer bg-blue-500 text-white rounded-md
                         hover:bg-blue-600 transition-colors">Sign Out</button>

                        </div> :
                            <div className="hidden md:flex gap-4 ">
                                <NavLinks to='/authenticate/signIn'>
                                    <button className="px-4 py-2 cursor-pointer text-gray-800 border border-gray-300
                         rounded-md hover:bg-gray-100 transition-colors">Login</button>
                                </NavLinks>


                            </div>
                    }
                    <div className=" flex items-center space-x-4">

                        {
                            user && <div>

                                {
                                    user &&
                                        <div
                                            onClick={handleUser}
                                            className="w-10 h-10 cursor-pointer flex justify-center items-center rounded-full bg-gray-200 overflow-hidden"
                                        >
                                            <img
                                                src={user.photoURL}
                                                title={user?.displayName}
                                                className="w-full h-full object-cover"
                                                alt="User"
                                            />
                                        </div>        
                                }


                            </div> 
                        }
                    </div>
                    <button onClick={toggleMenu} className='flex md:hidden'>
                        <IoMdMenu className='cursor-pointer text-3xl' />
                    </button>

                </div>

            </nav >
            {
                isOpen ? <div className='absolute top-15 w-full p-5 md:hidden bg-white z-100'>
                    <div div className='text-center flex flex-col gap-2' >
                        <NavLinks to='/' className={({ isActive }) => isActive ? 'text-blue-500' : ' hover:text-blue-500 transition-colors'}>Home</NavLinks>
                        <NavLinks to='/products' className={({ isActive }) => isActive ? 'text-blue-500' : 'hover:text-blue-500 transition-colors'}>Products</NavLinks>
                        <NavLinks to='/aboutUs' className={({ isActive }) => isActive ? 'text-blue-500' : 'hover:text-blue-500 transition-colors'}>About Us</NavLinks>
                    </div >
                    {
                        user ? <div className='flex w-full justify-center items-center mt-5 px-20'>
                            <div button onClick={handleSignOut} className="px-4 py-2 w-full cursor-pointer bg-blue-500 text-white rounded-md hover: bg - blue - 600 transition - colors">Sign Out</div>
                        </div > :
                            <div>
                                <div className="flex justify-center mt-5 gap-4">
                                    <Link to='/authenticate/signIn' className='w-full'><button className="px-4 py-2 w-full cursor-pointer
                         text-gray-800 border border-gray-300 rounded-md hover:bg-gray-100
                          transition-colors">Login</button></Link>


                                </div>
                            </div>
                    }

                </div >
                    : ''
            }
        </>
    );
};

export default Navbar;