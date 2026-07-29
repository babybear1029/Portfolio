import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Basic Plan",
    price: "500",
    period: "/project",
    desc: "Perfect for small projects and simple websites.",
    features: ["Responsive Design", "3 Pages Layout", "Basic SEO", "1 Month Support"],
    popular: false
  },
  {
    name: "Professional",
    price: "800",
    period: "/project",
    desc: "Ideal for growing businesses and web applications.",
    features: ["Custom Web Application", "AI Integration Basic", "Database Setup", "Advanced SEO", "3 Months Support"],
    popular: true
  },
  {
    name: "Premium",
    price: "1500",
    period: "/project",
    desc: "For enterprises needing complex, scalable solutions.",
    features: ["Full-Stack Architecture", "Advanced Machine Learning", "Cloud Deployment", "Unlimited Pages", "1 Year Support"],
    popular: false
  }
];

export default function Pricing() {
  return (
    <section className="py-24 bg-card border-t border-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-2 block">
            Plans
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
            My Pricing Model
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`relative rounded-3xl p-8 border ${
                plan.popular 
                  ? 'bg-background border-primary shadow-[0_0_40px_rgba(245,166,35,0.15)] md:-mt-8 md:mb-8' 
                  : 'bg-background border-border hover:border-primary/50'
              } transition-all`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              
              <div className="text-center border-b border-border/50 pb-8 mb-8">
                <h3 className="text-xl font-display font-semibold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-6 h-10">{plan.desc}</p>
                <div className="flex items-end justify-center gap-1">
                  <span className="text-3xl text-primary font-bold">$</span>
                  <span className="text-6xl font-display font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400 mb-2">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feat, j) => (
                  <li key={j} className="flex items-center gap-3 text-gray-300 text-sm">
                    <Check size={18} className="text-primary flex-shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-full font-bold transition-all ${
                plan.popular
                  ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                  : 'bg-card text-white hover:bg-primary hover:text-primary-foreground border border-border hover:border-primary'
              }`}>
                Choose Plan
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
