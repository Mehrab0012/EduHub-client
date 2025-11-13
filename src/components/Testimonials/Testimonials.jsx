import { useState } from "react";
import { motion } from "motion/react";
import { Star, Heart, Smile } from "lucide-react"; // example icons


function TestimonialCard({ icon: Icon, name, feedback, color }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            className="relative bg-gray-100 dark:bg-[#1a2633] border border-gray-200 dark:border-[#334d66] rounded-xl p-6 overflow-hidden group cursor-pointer"
            whileHover={{ y: -5, borderColor: "#1280ed" }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            transition={{ duration: 0.3 }}
        >
            {/* Background Gradient */}
            <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
            />

            {/* Icon */}
            <motion.div
                className="relative mb-4"
                animate={{
                    scale: isHovered ? 1.1 : 1,
                    rotate: isHovered ? 5 : 0,
                }}
                transition={{ duration: 1 }}
            >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${color} relative`}>
                    <Icon className="w-6 h-6 " />

                    {/* Pulse Animation */}
                    {isHovered && (
                        <motion.div
                            className={`absolute inset-0 rounded-xl bg-gradient-to-br ${color}`}
                            initial={{ scale: 1, opacity: 0.5 }}
                            animate={{ scale: 1.5, opacity: 0 }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                repeatType: "loop",
                                ease: "linear",
                            }}
                        />
                    )}
                </div>
            </motion.div>

            {/* Content */}
            <div className="relative space-y-2">
                <motion.h3
                    className="text-gray-800 dark:text-white font-semibold group-hover:text-[#1280ed] transition-colors"
                    animate={{ x: isHovered ? 5 : 0 }}
                    transition={{ duration: 0.2 }}
                >
                    {name}
                </motion.h3>
                <motion.p
                    className="text-gray-600 dark:text-[#91adc9] text-sm"
                    animate={{ x: isHovered ? 5 : 0 }}
                    transition={{ duration: 0.2, delay: 0.05 }}
                >
                    {feedback}
                </motion.p>
            </div>

            {/* Bottom Line */}
            <motion.div
                className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${color}`}
                initial={{ width: 0 }}
                animate={{ width: isHovered ? "100%" : 0 }}
                transition={{ duration: 0.4 }}
            />

            {/* Corner Decoration */}
            <motion.div
                className="absolute top-0 right-0 w-20 h-20 opacity-10"
                animate={{
                    rotate: isHovered ? 180 : 0,
                    scale: isHovered ? 1.2 : 1,
                }}
                transition={{ duration: 0.6 }}
            >
                <div className={`w-full h-full bg-gradient-to-br ${color} rounded-bl-full`} />
            </motion.div>
        </motion.div>
    );
}

// 🧱 Main Section
export default function Testimonials() {
    const testimonials = [
        {
            icon: Star,
            name: "Sarah Khan",
            feedback: "EduHub helped me land my first job in web development. The instructors are amazing!",
            color: "from-[#1280ed] to-[#64b5f6]",
        },
        {
            icon: Heart,
            name: "John Doe",
            feedback: "The interactive projects made learning fun and practical. Highly recommend EduHub!",
            color: "from-[#ed1280] to-[#f662b5]",
        },
        {
            icon: Smile,
            name: "Amina Rahman",
            feedback: "Loved the community and hands-on approach. It’s the best platform for real learning.",
            color: "from-[#12ed9e] to-[#64f6c2]",
        },
    ];

    return (
        <section className="w-full py-20 ">
            <div className="max-w-7xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold mb-4 light:text-gray-800">What Our Learners Say</h2>
                    <p className="text-gray-600 dark:text-[#91adc9] max-w-2xl mx-auto">
                        Hear from students who transformed their careers through EduHub’s expert-led courses.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={t.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                            <TestimonialCard {...t} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
