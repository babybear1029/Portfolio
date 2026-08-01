import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'What kind of work do you enjoy most?',
    a: 'I enjoy building AI-powered products, modern SaaS platforms, and automation systems that make complex work feel simple and reliable.',
  },
  {
    q: 'Do you work across the full stack?',
    a: 'Yes. I regularly work from product and architecture decisions through frontend, backend, APIs, data, cloud infrastructure, and deployment.',
  },
  {
    q: 'Can you help add AI to an existing product?',
    a: 'Absolutely. I’ve integrated LLMs, agent workflows, and RAG systems into both new products and established platforms.',
  },
  {
    q: 'What environments do you work best in?',
    a: 'I’m strongest in startup, consulting, and fast-moving product environments where technical leadership, speed, and clear execution matter.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-card border-t border-border">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-2 block">
            Questions
          </span>
          <h2 className="text-4xl font-display font-bold text-white">
            Common questions about my work
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              className="border border-border rounded-xl bg-background overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left px-6 py-5 flex items-center justify-between hover:bg-white/5 transition-colors focus:outline-none"
              >
                <span className="font-display font-semibold text-white text-lg pr-8">{faq.q}</span>
                <ChevronDown
                  size={20}
                  className={`text-primary transition-transform duration-300 flex-shrink-0 ${openIndex === i ? 'rotate-180' : ''}`}
                />
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="px-6 pb-5 pt-0 text-gray-400 leading-relaxed border-t border-border/50 mt-2 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
