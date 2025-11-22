import React from 'react';
import { NavLink } from 'react-router';
import { Home, BookOpen, PlusSquare } from 'lucide-react';

const DashboardLinks = () => {
    return (
        <div className="w-64 h-screen  bg-base-200 text-base-content p-4">
            <div className="flex items-center mb-8">
                <h2 className="text-2xl font-bold">Dashboard</h2>
            </div>
            <nav>
                <ul>

                    <li>
                        <NavLink
                            to="/dashboard/myCourses"
                            className={({ isActive }) =>
                                `flex items-center p-2 rounded-lg ${isActive ? 'bg-base-300' : ''}`
                            }
                        >
                            <BookOpen className="mr-3" />
                            My Added Courses
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/dashboard/enrolledCourses"
                            className={({ isActive }) =>
                                `flex items-center p-2 rounded-lg ${isActive ? 'bg-base-300' : ''}`
                            }
                        >
                            <BookOpen className="mr-3" />
                            My Enrolled Courses
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/dashboard/addCourse"
                            className={({ isActive }) =>
                                `flex items-center p-2 rounded-lg ${isActive ? 'bg-base-300' : ''}`
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

