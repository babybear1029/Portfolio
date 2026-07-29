import { motion } from 'framer-motion';

const skills = [
  "AI Engineering", "Full-Stack Dev", "Machine Learning", 
  "React & Node.js", "Cloud Architecture", "Python & TensorFlow",
  "UI/UX Design", "System Design"
];

export default function Ticker() {
  return (
    <div className="bg-card py-4 border-y border-border overflow-hidden relative flex">
      {/* Gradients for smooth fade at edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-card to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-card to-transparent z-10" />

      <motion.div
        animate={{ x: [0, -1035] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
        className="flex whitespace-nowrap"
      >
        {/* Render twice for continuous loop */}
        {[...skills, ...skills, ...skills].map((skill, i) => (
          <div key={i} className="flex items-center">
            <span className="text-lg md:text-xl font-display font-medium text-gray-300 mx-8">
              {skill}
            </span>
            <span className="text-primary text-2xl">✧</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
