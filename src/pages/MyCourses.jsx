import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import axios from 'axios';
import CourseCard from '../components/CourseCard/CourseCard';
import { Link } from 'react-router';
import MyCoursesDetails from '../components/MyCourses/MyCoursesDetails';
import useTitle from '../hooks/useTitle';

const MyCourses = () => {
    const { user } = use(AuthContext);
    const [data, setData] = useState([]);
    useTitle('My Courses');

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await axios.get(`http://eduhub-zeta-one.vercel.app/courses`, {
                    params: { email: user.email }
                });
                setData(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchCourses();
    }, [user]);

    return (
        <div>
            <div className='mt-3 mb-20 max-w-7xl m-auto grid grid-cols-2 gap-5 max-md:px-2 lg:grid-cols-4'>
                {
                     data.map((details)=><MyCoursesDetails key={details._id}  details={details}></MyCoursesDetails>)
                }
            </div>
        </div>
    );
};

export default MyCourses;