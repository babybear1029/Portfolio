import { motion } from 'framer-motion';
import { PenTool, BrainCircuit, Code, Cloud } from 'lucide-react';

const services = [
  {
    icon: PenTool,
    title: "Application Design",
    desc: "Crafting intuitive, user-centric interfaces with modern design principles and responsive layouts."
  },
  {
    icon: BrainCircuit,
    title: "AI/ML Solutions",
    desc: "Integrating predictive models, NLP, and intelligent features into applications seamlessly."
  },
  {
    icon: Code,
    title: "Full-Stack Dev",
    desc: "Building robust, scalable architectures using React, Node.js, and modern web frameworks."
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    desc: "Deploying and managing scalable infrastructure on AWS/GCP with automated CI/CD pipelines."
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-2">
            Services
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
            How I Bring Ideas to Life
          </h2>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, i) => (
            <motion.div key={i} variants={item}>
              <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-colors group relative overflow-hidden h-full">
                {/* Hover Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <service.icon size={28} />
                </div>
                
                <h3 className="text-xl font-display font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
