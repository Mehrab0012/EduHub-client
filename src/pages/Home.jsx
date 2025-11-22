import Testimonials from '../components/Testimonials/Testimonials';
import TeacherReviews from '../components/TeacherReviews/TeacherReviews';
import { ChevronRight } from 'lucide-react';
import banner2 from '/banner2.png';
import { motion } from 'motion/react';
import StatsCounter from '../components/StatsData/StatsCounter';
import { useLoaderData } from 'react-router';
import CourseCard from '../components/CourseCard/CourseCard';
import useTitle from '../hooks/useTitle';

const Home = () => {
    const homeData = useLoaderData();
    useTitle('Home');

    return (
        <div className="min-h-screen bg-base-100 overflow-x-hidden">
            
            {/* Hero Section */}
            <section className="relative pt-12 pb-16 lg:pt-24 lg:pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        
                        {/* Content (Left on Desktop, Bottom on Mobile if you use order classes, but standard flow is usually Text First on Mobile) */}
                        <div className="relative z-10 order-2 lg:order-1">
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="space-y-8 text-center lg:text-left"
                            >
                                {/* Badge */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                    className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 backdrop-blur-sm rounded-full px-4 py-2"
                                >
                                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                                    <span className="text-sm font-medium text-primary">Start Learning Today</span>
                                </motion.div>

                                {/* Headline */}
                                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-base-content">
                                    Unlock Your Potential <br className="hidden lg:block" />
                                    with <span className="text-primary">EduHub</span>
                                </h1>
                                
                                <p className="text-lg text-base-content/70 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                                    Discover a world of knowledge with our expert-led courses. 
                                    Join a community of learners and take the next step in your career today.
                                </p>

                                {/* CTA Buttons */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.8 }}
                                    className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2"
                                >
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="group relative bg-primary text-primary-content px-8 py-4 rounded-xl overflow-hidden transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                                        <span className="relative flex items-center font-bold gap-2">
                                            Get Started
                                            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </span>
                                    </motion.button>
                                </motion.div>

                                {/* Stats */}
                                <div className="pt-6 border-t border-base-300/50 ">
                                <div className=' max-lg:w-85 m-auto'>
                                    <StatsCounter />

                                </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Image (Right on Desktop) */}
                        <div className="order-1 lg:order-2 flex justify-center relative">
                            {/* Decorative Background Elements */}
                            <div className="absolute -inset-4 bg-primary/5 rounded-full blur-3xl opacity-70 animate-pulse" />
                            
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8 }}
                                className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-base-100"
                            >
                                <img 
                                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" 
                                    src={banner2} 
                                    alt="Education Banner" 
                                />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Courses Section */}
            <section className="py-16 lg:py-24 bg-base-200/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="text-center mb-12 space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold">Popular Courses</h2>
                        <p className="text-base-content/70 max-w-2xl mx-auto">
                            Explore our highest-rated courses designed to help you master new skills.
                        </p>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">      
                        {homeData.map((details) => (
                            <CourseCard key={details._id} details={details} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-16 lg:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Testimonials />
                </div>
            </section>

            {/* Teacher Reviews Section */}
            <section className="py-16 lg:py-24 bg-base-200/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <TeacherReviews />
                </div>
            </section>
        </div>
    );
};

export default Home;