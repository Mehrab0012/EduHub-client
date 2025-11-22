import React from 'react';
import { Link, useNavigate } from 'react-router'; // Updated to match your v6+ usage
import { motion } from 'framer-motion';
import { Home, ArrowLeft, FileQuestion } from 'lucide-react';

const Error404 = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen w-full bg-base-100 flex items-center justify-center p-4 relative overflow-hidden">

            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50" />
                <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-blue-500/10 rounded-full blur-3xl opacity-50" />
            </div>

            <div className="max-w-2xl w-full text-center space-y-8">

                {/* Animated Icon/Number */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative inline-block"
                >
                    <h1 className="text-9xl md:text-[12rem] font-black text-base-200 select-none">
                        404
                    </h1>
                    <motion.div
                        initial={{ y: 10 }}
                        animate={{ y: -10 }}
                        transition={{ repeat: Infinity, repeatType: "reverse", duration: 2 }}
                        className="absolute inset-0 flex items-center justify-center"
                    >
                        <span className="text-primary font-bold text-4xl md:text-5xl bg-base-100/80 backdrop-blur-sm px-6 py-2 rounded-2xl border border-base-200 shadow-xl">
                            Page Not Found
                        </span>
                    </motion.div>
                </motion.div>

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="space-y-4"
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-base-content">
                        Oops! You seem to be lost.
                    </h2>
                    <p className="text-base-content/60 max-w-md mx-auto leading-relaxed">
                        The page you're looking for doesn't exist or has been moved.
                        Don't worry, let's get you back on track.
                    </p>
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
                >
                    {/* Go Back Button */}
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center gap-2 px-6 py-3 rounded-xl border border-base-300 hover:bg-base-200 hover:border-base-400 transition-all duration-300 group"
                    >
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        <span className="font-medium">Go Back</span>
                    </button>

                    {/* Go Home Button */}
                    <Link to="/">
                        <button className="flex items-center gap-2 px-8 py-3 rounded-xl bg-primary text-primary-content hover:bg-primary/90 shadow-lg shadow-primary/30 hover:shadow-primary/40 transition-all duration-300 active:scale-95">
                            <Home className="w-5 h-5" />
                            <span className="font-bold">Back to Home</span>
                        </button>
                    </Link>
                </motion.div>

                {/* Footer Help Text */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    className="text-sm text-base-content/40 mt-12"
                >
                    Error Code: 404 • EduHub System
                </motion.p>
            </div>
        </div>
    );
};

export default Error404;