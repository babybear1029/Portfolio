import { motion } from 'framer-motion';
import { Sparkles, Layers3, Workflow } from 'lucide-react';

const values = [
  {
    title: 'Practical AI',
    text: 'I focus on AI systems that solve real operational problems, from copilots and agents to RAG-powered knowledge workflows.',
    icon: Sparkles,
  },
  {
    title: 'Reliable Product Delivery',
    text: 'I build products the way modern startups need them: quickly, safely, and with a strong architecture from day one.',
    icon: Layers3,
  },
  {
    title: 'Cross-Functional Execution',
    text: 'I bridge design, engineering, cloud, and business needs so the technical work stays aligned with product goals.',
    icon: Workflow,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 sm:py-24 bg-background border-t border-border overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 md:px-12">
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-2 block">
            Working Style
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-4 leading-tight">
            What teams can expect when I’m involved
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            A blend of senior engineering depth, AI product thinking, and calm execution across product, architecture, and delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card border border-border p-8 rounded-2xl"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-5">
                <item.icon size={22} />
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-3">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
