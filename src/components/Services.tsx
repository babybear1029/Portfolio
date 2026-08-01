import { motion } from 'framer-motion';
import { BrainCircuit, Code2, Cloud, Workflow } from 'lucide-react';

const services = [
  {
    icon: BrainCircuit,
    title: 'AI SaaS & Intelligence Systems',
    desc: 'Design and build AI SaaS apps, AI dashboards, chat and automation systems, and business AI tools powered by LLMs, agents, and RAG.',
  },
  {
    icon: Code2,
    title: 'Modern Full-Stack Engineering',
    desc: 'Create robust React, Next.js, TypeScript, Node.js, and Python applications with secure APIs, modern frontend and backend architecture, and polished user experiences.',
  },
  {
    icon: Cloud,
    title: 'Cloud Architecture & DevOps',
    desc: 'Deploy resilient systems on AWS and Azure with Docker, Kubernetes, CI/CD, and infrastructure automation.',
  },
  {
    icon: Workflow,
    title: 'Technical Leadership',
    desc: 'Guide teams from concept to launch, mentor engineers, and shape architecture decisions for fast-moving product organizations.',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
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
            How I turn ambitious ideas into reliable products
          </h2>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, i) => (
            <motion.div key={i} variants={item}>
              <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-colors group relative overflow-hidden h-full">
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
