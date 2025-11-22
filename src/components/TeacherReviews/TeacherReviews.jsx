import React from 'react';
import { motion } from 'motion/react';

const teachers = [
    {
        id: 1,
        name: 'John Doe',
        course: 'React - The Complete Guide',
        review: 'EduHub has been a great platform to share my knowledge. The students are eager to learn, and the platform provides all the necessary tools for a great learning experience.',
        image: 'https://i.pravatar.cc/150?img=1'
    },
    {
        id: 2,
        name: 'Jane Smith',
        course: 'Advanced CSS and Sass',
        review: 'I love the community at EduHub. It’s a pleasure to teach here and interact with students from all over the world. The platform is intuitive and easy to use.',
        image: 'https://i.pravatar.cc/150?img=2'
    },
    {
        id: 3,
        name: 'Sam Wilson',
        course: 'JavaScript Algorithms and Data Structures',
        review: 'The support from the EduHub team is amazing. They are always ready to help and make the teaching experience as smooth as possible. Highly recommended!',
        image: 'https://i.pravatar.cc/150?img=3'
    }
];

const TeacherReviews = () => {
    return (
        <div className="py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-center"
                >
                    <h2 className="text-3xl font-bold mb-4 light:text-gray-800">What Our Teachers Say</h2>

                    <p className="text-gray-600 dark:text-[#91adc9] max-w-2xl mx-auto">
                        Hear from the experts who are shaping the future of learning.
                    </p>
                </motion.div>
                <div className="mt-12 grid gap-8 lg:grid-cols-3">
                    {teachers.map((teacher, index) => (
                        <motion.div
                            key={teacher.id}
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className="bg-white rounded-lg shadow-lg overflow-hidden"
                        >
                            <div className="p-6">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                        <img className="h-12 w-12 rounded-full" src={teacher.image} alt={teacher.name} />
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-medium text-gray-900">{teacher.name}</h3>
                                        <p className="text-sm text-gray-500">{teacher.course}</p>
                                    </div>
                                </div>
                                <p className="mt-4 text-gray-600">{teacher.review}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TeacherReviews;
