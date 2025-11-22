import { useEffect, useState } from "react";
import { motion } from "motion/react";

const statsData = [
  { value: 51, suffix: "K+", label: "Students" },
  { value: 1200, suffix: "+", label: "Courses" },
  { value: 300, suffix: "+", label: "Expert Instructors" },
];

export default function StatsCounter() {
  const [counts, setCounts] = useState(statsData.map(() => 0));

  useEffect(() => {
    const duration = 2000; // animation duration in ms
    const frameRate = 60;
    const totalFrames = Math.round((duration / 1000) * frameRate);

    const counters = statsData.map((stat, index) => {
      let frame = 0;
      const increment = stat.value / totalFrames;

      const interval = setInterval(() => {
        frame++;
        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[index] = Math.min(prev[index] + increment, stat.value);
          return newCounts;
        });

        if (frame >= totalFrames) clearInterval(interval);
      }, 1000 / frameRate);

      return interval;
    });

    return () => counters.forEach((i) => clearInterval(i));
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 1 }}
      className="flex flex-wrap gap-8 pt-8 m-auto"
    >
      {statsData.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
          className="text-center"
        >
          <div className=" text-3xl mb-1">
            {Math.ceil(counts[index]).toLocaleString()}
            {stat.suffix}
          </div>
          <div className=" text-sm">{stat.label}</div>
        </motion.div>
      ))}
    </motion.div>
  );
}
