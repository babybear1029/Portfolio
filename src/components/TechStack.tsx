import { motion } from 'framer-motion';
import { Bot } from 'lucide-react';
import {
  SiReact,
  SiNodedotjs,
  SiPython,
  SiTypescript,
  SiDocker,
  SiPostgresql,
} from 'react-icons/si';
import { FaAws, FaMicrosoft } from 'react-icons/fa';

const techStack = [
  { name: 'React', icon: SiReact },
  { name: 'Next.js', icon: SiReact },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'Python', icon: SiPython },
  { name: 'FastAPI', icon: SiPython },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'AWS', icon: FaAws },
  { name: 'Azure', icon: FaMicrosoft },
  { name: 'Docker', icon: SiDocker },
  { name: 'Kubernetes', icon: SiDocker },
  { name: 'OpenAI / Claude / Gemini', icon: Bot },
];

export default function TechStack() {
  return (
    <section className="py-16 bg-background border-t border-border relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-10">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-2 block">
            Core Toolkit
          </span>
          <h2 className="text-3xl font-display font-bold text-white">
            Technologies and platforms I use to ship modern products
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
          {techStack.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="flex items-center gap-3 bg-card border border-border px-5 py-3 rounded-full hover:border-primary/50 hover:bg-primary/5 transition-colors group cursor-default"
            >
              <tech.icon className="text-gray-400 group-hover:text-primary transition-colors" size={20} />
              <span className="text-gray-300 font-medium">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
