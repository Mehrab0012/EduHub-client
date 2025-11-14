import React from 'react';
import { Link, useLoaderData } from 'react-router';
import CourseCard from '../components/CourseCard/CourseCard';

const Courses = () => {

    const data = useLoaderData();

    
    return (
        <div className='max-w-7xl m-auto mt-15 mb-20'>
            <div>
                <h2 className='text-4xl font-bold text-center pb-12'>All courses</h2>
            </div>
            <div className='grid grid-cols-4 gap-5'>
                {
                data.map((details)=><Link key={details.id} to={`/courses/${details._id}`}><CourseCard details={details} ></CourseCard></Link>)
                }       
            </div>     
        </div>
    );
};

export default Courses;