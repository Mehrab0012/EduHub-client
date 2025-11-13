import React, { use } from 'react';
import Testimonials from '../components/Testimonials/Testimonials';
import CategoryCard from '../components/CategoryCard/CategoryCard';
import { ArrowRight, ChevronRight, Play } from 'lucide-react';
import banner2 from '/banner2.png'
import banner3 from '/banner3.png'
import { useTheme } from '../ThemeContext/ThemeContext';
import { motion } from 'motion/react';
import StatsCounter from '../components/StatsData/StatsCounter';
import { useLoaderData } from 'react-router';
import CourseCard from '../components/CourseCard/CourseCard';

const Home = () => {
    const data = useLoaderData();
    const homeData = data.slice(0,4);

    
    const { theme } = useTheme();
    return (
        <div className=''>
            <div className='max-w-7xl m-auto grid grid-cols-[60%_40%] mt-20 items-center'>
                <div>
                    {
                        theme == "dark" ? <img className='rounded-3xl' src={banner3} /> :
                            <img className='rounded-3xl' src={banner2} />
                    }

                </div>
                <div>

                    <div className="relative w-full  flex items-center justify-center ">
                        {/* Background Image with Gradient Overlay */}
                        <div className="absolute inset-0 overflow-hidden rounded-lg mx-4 ">

                            <div className="absolute " />
                        </div>

                        {/* Content */}
                        <div className="relative z-10 max-w-4xl mx-auto px-6 ">
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="space-y-6"
                            >
                                {/* Badge */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                    className="inline-flex items-center gap-2 bg-[#1280ed]/20 border border-[#1280ed]/30 backdrop-blur-sm rounded-full px-4 py-2"
                                >
                                    <div className="w-2 h-2 bg-[#1280ed] rounded-full animate-pulse" />
                                    <span className=" text-sm">Start Learning Today</span>
                                </motion.div>

                                <h1 className=" tracking-tight text-4xl">
                                    Unlock Your Potential with EduHub
                                </h1>


                                {/* CTA Buttons */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.8 }}
                                    className="flex flex-wrap gap-4 pt-4"
                                >
                                    <motion.button
                                        whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(18, 128, 237, 0.3)" }}
                                        whileTap={{ scale: 0.95 }}
                                        className="group relative border-1 bg-[#1280ed] text-white px-8 py-4 rounded-lg overflow-hidden transition-all"
                                    >
                                        <motion.div
                                            className="absolute inset-0 bg-gradient-to-r from-[#0d5fb8] to-[#1280ed]"
                                            initial={{ x: '-100%' }}
                                            whileHover={{ x: 0 }}
                                            transition={{ duration: 0.3 }}
                                        />
                                        <span className="relative flex items-center font-bold gap-2">
                                            Get Started
                                            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </span>
                                    </motion.button>


                                </motion.div>


                                {/* Stats */}
                                <StatsCounter></StatsCounter>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='max-w-7xl m-auto grid grid-cols-4 gap-5 mt-20  justify-between items-center'>      
                    {
                        homeData.map((details)=><CourseCard details={details}></CourseCard>)
                    }

            </div>
            <div className='py-10'>
                <Testimonials></Testimonials>
            </div>

        </div>
    );
};

export default Home;