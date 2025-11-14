import React from 'react';
import { NavLink } from 'react-router';
import { Home, BookOpen, PlusSquare } from 'lucide-react';

const DashboardLinks = () => {
    return (
        <div className="w-64 h-screen  bg-gray-800 text-white p-4">
            <div className="flex items-center mb-8">
                <h2 className="text-2xl font-bold">Dashboard</h2>
            </div>
            <nav>
                <ul>

                    <li>
                        <NavLink
                            to="/dashboard/myCourses"
                            className={({ isActive }) =>
                                `flex items-center p-2 rounded-lg ${isActive ? 'bg-gray-700' : ''}`
                            }
                        >
                            <BookOpen className="mr-3" />
                            My Courses
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/dashboard/addCourse"
                            className={({ isActive }) =>
                                `flex items-center p-2 rounded-lg ${isActive ? 'bg-gray-700' : ''}`
                            }
                        >
                            <PlusSquare className="mr-3" />
                            Add Course
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default DashboardLinks;
