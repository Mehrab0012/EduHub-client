import React from 'react';
import { useLoaderData } from 'react-router';
import { FaStar, FaUserFriends, FaClock, FaLayerGroup, FaCertificate, FaInfinity } from 'react-icons/fa';
import { MdLanguage } from 'react-icons/md';

const CourseDetails = () => {
    const data = useLoaderData();
    const { author, category, date, description, duration, image, level, price, rating, students, title } = data.result;

    return (
        <div className="antialiased text-gray-900 dark:text-gray-100">
            {/* Top Banner */}
            <div className="bg-gray-800 text-white py-12">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-sm font-semibold text-gray-400 mb-2">
                        Development &gt; {category}
                    </p>
                    <h1 className="text-3xl md:text-4xl font-bold mb-3">{title}</h1>
                    {/* Short description could go here if available */}
                    <div className="flex flex-wrap items-center text-sm text-gray-300 space-x-4">
                        <div className="flex items-center space-x-1">
                            <span className="text-yellow-400">{rating}</span>
                            <FaStar className="text-yellow-400" />
                            <span>({students} ratings)</span>
                        </div>
                        <span>Created by {author}</span>
                        <div className="flex items-center space-x-1">
                            <FaClock />
                            <span>Last updated {new Date(date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <MdLanguage />
                            <span>English</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto justify-center px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col justify-center">
                    {/* Right Sticky Card */}
                    <div className="w-full lg:pl-8 mb-8 lg:mb-0">
                        <div className="flex justify-center items-center">
                            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
                                <img src={image} alt={title} className="w-full h-auto object-cover" />
                                <div className="p-6">
                                    <p className="text-3xl font-bold mb-4">${price}</p>
                                    <button className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
                                        Enroll Now
                                    </button>
                                    <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-3">30-Day Money-Back Guarantee</p>
                                    <div className="mt-6">
                                        <h3 className="font-bold text-lg mb-3">This course includes:</h3>
                                        <ul className="space-y-2 text-sm">
                                            <li className="flex items-center"><FaClock className="mr-3" />{duration} on-demand video</li>
                                            <li className="flex items-center"><FaLayerGroup className="mr-3" />Content level: {level}</li>
                                            <li className="flex items-center"><FaInfinity className="mr-3" />Full lifetime access</li>
                                            <li className="flex items-center"><FaCertificate className="mr-3" />Certificate of completion</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Left Content */}
                    <div className="lg:w-full mt-20 text-center mb-30 lg: ">
                        <div className="bg-white  dark:bg-gray-800 shadow-lg rounded-lg p-6">
                            <h2 className="text-2xl font-bold mb-4">Description</h2>
                            <p className="text-base leading-relaxed whitespace-pre-line">{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;