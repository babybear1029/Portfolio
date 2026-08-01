import { motion } from 'framer-motion';
import { BrainCircuit, Layers3, Rocket, ShieldCheck } from 'lucide-react';

const highlights = [
  {
    icon: BrainCircuit,
    title: 'AI Product Delivery',
    detail: 'Built conversational AI systems, AI dashboards, and intelligent agents for startup and enterprise products.',
  },
  {
    icon: Layers3,
    title: 'Full-Stack Architecture',
    detail: 'Delivered modern frontend and backend systems using React, Next.js, TypeScript, Node.js, Python, FastAPI, and PostgreSQL.',
  },
  {
    icon: Rocket,
    title: 'Cloud-Native Launches',
    detail: 'Shipped scalable platforms on AWS and Azure with Docker, Kubernetes, CI/CD, and secure API integrations.',
  },
  {
    icon: ShieldCheck,
    title: 'Leadership & Mentorship',
    detail: 'Guided engineering teams, established best practices, and helped founders shape technical direction.',
  },
];

export default function Awards() {
  return (
    <section className="py-24 bg-background border-t border-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-2 block">
            Career Highlights
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
            What I consistently bring to product and engineering teams
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card border border-border rounded-2xl p-8 text-center hover:border-primary/50 transition-all group"
            >
              <div className="w-16 h-16 mx-auto bg-background rounded-full flex items-center justify-center border border-border group-hover:border-primary text-primary mb-6 transition-colors">
                <item.icon size={28} />
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
