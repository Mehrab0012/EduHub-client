import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { FiClock, FiUser, FiBarChart } from 'react-icons/fi'; // Clean line icons

const CourseCard = ({ details }) => {
    const {
        _id,
        title,
        author,
        category,
        description,
        duration,
        level,
        price,
        image
    } = details;

    return (
        <motion.div
            className="group flex flex-col h-full bg-base-100 border border-base-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            initial={{ y: 0 }}
            whileHover={{ y: -8 }}
        >
            {/* --- Image Header --- */}
            <div className="relative h-48 overflow-hidden">
                <img 
                    src={image} 
                    alt={title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                
                {/* Category Badge (Floating) */}
                <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 text-xs font-semibold text-white bg-black/50 backdrop-blur-md rounded-full border border-white/20">
                        {category}
                    </span>
                </div>

                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* --- Content Body --- */}
            <div className="flex flex-col flex-grow p-5">
                
                {/* Header: Level & Price */}
                <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center gap-1 text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-md">
                        <FiBarChart />
                        <span>{level}</span>
                    </div>
                    <span className="text-xl font-bold text-primary">
                        ${price}
                    </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-base-content leading-tight mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {title}
                </h3>

                {/* Description */}
                <p className="text-sm text-base-content/60 line-clamp-2 mb-4">
                    {description}
                </p>

                {/* Divider */}
                <div className="border-t border-base-200 my-auto mb-4"></div>

                {/* Meta Data (Author & Duration) */}
                <div className="flex items-center justify-between text-xs text-base-content/70 mb-5">
                    <div className="flex items-center gap-2">
                        <div className="p-1.5 bg-base-200 rounded-full">
                            <FiUser className="w-3 h-3" />
                        </div>
                        <span className="font-medium truncate max-w-[100px]">{author}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <FiClock className="w-3 h-3" />
                        <span>{duration}</span>
                    </div>
                </div>

                {/* CTA Button */}
                <Link
                    to={`/courses/${_id}`}
                    className="block w-full"
                >
                    <button className="w-full py-3 rounded-xl bg-base-200 text-base-content font-semibold hover:bg-primary hover:text-white transition-all duration-300 active:scale-95">
                        View Details
                    </button>
                </Link>
            </div>
        </motion.div>
    );
};

export default CourseCard;