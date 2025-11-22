import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa'; // for rating stars
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const MyCoursesDetails = ({ details }) => {
    const [isHovered, setIsHovered] = useState(false);

    // Destructure the details object
    const {
        _id,
        title,
        category,
        description,
        level,
        image
    } = details;


    const handleClick = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/courses/${_id}`, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                    }
                }).then(res => res.json())
                    .then(data => {
                        window.location.reload()
                    }).catch(err => {
                        console.log(err)
                    })



            }
        });
    }
    return (
        <motion.div
            className="bg-base-200 border border-gray-200 rounded-xl overflow-hidden shadow-lg flex flex-col gap-3 p-3"
            initial={{ borderColor: "#e5e7eb" }}
            whileHover={{
                y: -5,
                borderColor: "#3b82f6",
                boxShadow: "0 10px 20px rgba(18,128,237,0.4)"
            }}
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
                    <h3 className="text-base-content text-lg font-semibold line-clamp-2 mb-2">{title}</h3>
                    <p className="text-base-content/70 text-sm mb-2">{category} • {level}</p>
                    <p className="text-base-content/80 text-sm mb-4 line-clamp-3">{description}</p>
                </div>

                <div className='flex gap-4 mt-5 mb-5'>
                    <button onClick={handleClick} className='w-full text-white py-2 px-3 rounded-md bg-blue-500 hover:bg-blue-700 cursor-pointer hover:text-red-800'>Delete</button>
                    <Link className='text-white w-full py-2 px-3 rounded-md bg-blue-500 hover:bg-blue-700 cursor-pointer' to={`/dashboard/updateCourse/${details._id}`}><button className='w-full cursor-pointer'>Update</button></Link>

                </div>
            </div>
        </motion.div>
    );
};

export default MyCoursesDetails;
