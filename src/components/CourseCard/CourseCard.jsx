import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa'; // for rating stars

const CourseCard = ({ details }) => {
    const [isHovered, setIsHovered] = useState(false);

    // Destructure the details object
    const {
        title,
        author,
        category,
        date,
        description,
        duration,
        level,
        price,
        rating,
        students,
        image
    } = details;

    return (
        <motion.div
            className="bg-gray-100 dark:bg-[#1a2633] border border-gray-200 dark:border-[#334d66] rounded-xl overflow-hidden cursor-pointer group shadow-lg"
            whileHover={{ y: -5, borderColor: "#1280ed", boxShadow: "0 10px 20px rgba(18,128,237,0.4)" }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            transition={{ duration: 0.3 }}
        >
            
            <div className="relative">
                <img src={image} alt={title} className="w-full h-48 object-cover" />
                <motion.div
                    className={`absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />
            </div>

          
            <div className="p-6 flex flex-col justify-between h-full">
        
                <div>
                    <h3 className="text-gray-800 dark:text-white text-lg font-semibold line-clamp-2 mb-2">{title}</h3>
                    <p className="text-gray-600 dark:text-[#90a4ae] text-sm mb-2">{category} • {level}</p>
                    <p className="text-gray-700 dark:text-[#cfd8e4] text-sm mb-4 line-clamp-3">{description}</p>
                </div>

              
                <div className="flex justify-between items-center mt-auto">
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-[#90a4ae]">
                        <FaStar className="text-yellow-400" />
                        <span>{rating}</span>
                        <span>• {students.toLocaleString()} students</span>
                    </div>
                    <span className="text-gray-800 dark:text-white font-semibold text-lg">${price}</span>
                </div>

             
                <div className="flex justify-between mt-4 text-gray-600 dark:text-[#90a4ae] text-xs">
                    <span>{author}</span>
                    <span>{duration}</span>
                </div>
            </div>
        </motion.div>
    );
};

export default CourseCard;
