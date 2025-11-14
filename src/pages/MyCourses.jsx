import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import axios from 'axios';
import CourseCard from '../components/CourseCard/CourseCard';
import { Link } from 'react-router';

const MyCourses = () => {
    const { user } = use(AuthContext);
    const [data, setData] = useState([]);

    console.log(data)
    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/courses`, {
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
            <div className='mt-20 mb-20 max-w-7xl m-auto grid grid-cols-2 gap-5 max-md:px-2 lg:grid-cols-4'>
                {
                     data.map((details)=><Link to={`/updateCourse/${details._id}`}><CourseCard details={details}></CourseCard></Link>)
                }
            </div>
        </div>
    );
};

export default MyCourses;