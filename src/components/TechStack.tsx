import { motion } from 'framer-motion';
import { 
  SiReact, SiNodedotjs, SiPython, SiTensorflow, 
  SiDocker, SiPostgresql, SiMongodb 
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';

const techStack = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
  { name: "AWS", icon: FaAws, color: "#FF9900" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" }
];

export default function TechStack() {
  return (
    <section className="py-16 bg-background border-t border-border relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-10">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-2 block">
            Behind My Designs
          </span>
          <h2 className="text-3xl font-display font-bold text-white">
            Technologies I Work With
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {techStack.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="flex items-center gap-3 bg-card border border-border px-5 py-3 rounded-full hover:border-primary/50 hover:bg-primary/5 transition-colors group cursor-default"
            >
              <tech.icon className="text-gray-400 group-hover:text-current transition-colors" style={{ color: 'inherit' }} size={20} />
              <span className="text-gray-300 font-medium">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
