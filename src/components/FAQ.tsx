import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: "What is your typical process for a new project?",
    a: "I start with a discovery phase to understand your goals, followed by wireframing/design. Once approved, I move into agile development with regular check-ins, concluding with testing, deployment, and documentation."
  },
  {
    q: "Do you offer post-launch support?",
    a: "Yes, depending on the chosen plan, I offer 1 to 12 months of post-launch support covering bug fixes, performance monitoring, and minor updates."
  },
  {
    q: "Can you integrate AI into my existing application?",
    a: "Absolutely. I specialize in integrating machine learning models, OpenAI APIs, and custom RAG solutions into existing codebases to add intelligent features."
  },
  {
    q: "How do you charge for your services?",
    a: "I typically charge on a per-project basis with clear milestones, as outlined in my pricing section. For ongoing consulting or open-ended development, I am available on an hourly retainer."
  }
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
            Frequently Asked Questions
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
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
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
