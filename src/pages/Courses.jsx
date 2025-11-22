import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import CourseCard from '../components/CourseCard/CourseCard';
import useTitle from '../hooks/useTitle';

const Courses = () => {

    const courses = useLoaderData();
    const [data , setData]= useState(courses);
    useTitle('Courses');

    

    const handleSearch = (e) => {
        e.preventDefault();
        const search = e.target.search.value;
        console.log(search);
        fetch(`https://eduhub-zeta-one.vercel.app/search?search=${search}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setData(data);
            })
            .catch(err => console.log(err));
    };

    return (
        <div className='max-w-7xl m-auto mt-10 mb-20'>

            <div>
                <h2 className='text-4xl font-bold text-center pb-7'>All courses</h2>
            </div>
            <div className='flex justify-center lg:justify-end mb-10'>
                <form onSubmit={handleSearch} className="flex items-center w-80 border border-base-300 rounded-full px-4 py-2 shadow-sm bg-base-100">
                    <input name='search' type="text" placeholder="Search..." className="flex-1 outline-none text-base-content placeholder-base-content/70" />
                    <button type='submit' className="cursor-pointer text-base-content/70 px-3 hover:text-base-content ml-2">
                        🔍
                    </button>
                </form>
            </div>
            <div className='grid max-md:p-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                {
                    data.map((details) => <CourseCard key={details._id} details={details} ></CourseCard>)
                }
            </div>
        </div>
    );
};

export default Courses;