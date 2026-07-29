import { motion } from 'framer-motion';

const stats = [
  { value: "200+", label: "Projects Completed" },
  { value: "50+", label: "Happy Clients" },
  { value: "150+", label: "App Designs" },
  { value: "5+", label: "Years Experience" }
];

export default function Stats() {
  return (
    <section className="py-16 bg-card border-y border-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x-0 md:divide-x divide-border">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center px-4"
            >
              <h3 className="text-5xl font-display font-bold text-primary mb-2">
                {stat.value}
              </h3>
              <p className="text-white font-medium uppercase tracking-wider text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
