import React from 'react';
import { useLoaderData } from 'react-router';
import CourseCard from '../components/CourseCard/CourseCard';
import useTitle from '../hooks/useTitle';

const EnrolledCourses = () => {

    const data = useLoaderData();
    useTitle('Enrolled Courses');
    

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 mt-5'>
                {
                    data.map(details=><CourseCard key={details._id} details={details}></CourseCard>)
                }
            </div>
        </div>
    );
};

export default EnrolledCourses;