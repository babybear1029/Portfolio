import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const offerings = [
  {
    name: 'AI Product Build',
    desc: 'End-to-end development of copilots, agents, and AI-native SaaS features.',
    features: ['LLM integration', 'RAG pipelines', 'Prompt engineering', 'Secure APIs'],
    highlight: true,
  },
  {
    name: 'Platform Engineering',
    desc: 'Design and build robust product platforms for startups and scaling teams.',
    features: ['Frontend architecture', 'Backend services', 'Database design', 'CI/CD'],
    highlight: false,
  },
  {
    name: 'Technical Leadership',
    desc: 'Help founders and companies make the right technical calls and move faster.',
    features: ['System design', 'Team mentoring', 'Cloud strategy', 'Delivery planning'],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section className="py-24 bg-card border-t border-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-2 block">
            Engagement Options
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
            Ways I can help teams move from idea to production
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {offerings.map((offering, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`relative rounded-3xl p-8 border ${
                offering.highlight
                  ? 'bg-background border-primary shadow-[0_0_40px_rgba(245,166,35,0.15)] md:-mt-8 md:mb-8'
                  : 'bg-background border-border hover:border-primary/50'
              } transition-all`}
            >
              {offering.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                  Most Requested
                </div>
              )}

              <div className="text-center border-b border-border/50 pb-8 mb-8">
                <h3 className="text-xl font-display font-semibold text-white mb-2">{offering.name}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{offering.desc}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {offering.features.map((feat, j) => (
                  <li key={j} className="flex items-center gap-3 text-gray-300 text-sm">
                    <Check size={18} className="text-primary flex-shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
