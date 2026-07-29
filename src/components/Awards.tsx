import { motion } from 'framer-motion';
import { Award, Trophy, Star, ShieldCheck } from 'lucide-react';

const awards = [
  {
    icon: Trophy,
    title: "Best AI Innovation 2023",
    issuer: "TechCrunch Awards",
    year: "2023"
  },
  {
    icon: Award,
    title: "Developer of the Year",
    issuer: "Global Web Summit",
    year: "2022"
  },
  {
    icon: ShieldCheck,
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    year: "2021"
  },
  {
    icon: Star,
    title: "Top Rated Freelancer",
    issuer: "Upwork & TopTal",
    year: "2020 - Present"
  }
];

export default function Awards() {
  return (
    <section className="py-24 bg-background border-t border-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-2 block">
            Achievements
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
            Award Winning Experiences
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {awards.map((award, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card border border-border rounded-2xl p-8 text-center hover:border-primary/50 transition-all group"
            >
              <div className="w-16 h-16 mx-auto bg-background rounded-full flex items-center justify-center border border-border group-hover:border-primary text-primary mb-6 transition-colors">
                <award.icon size={28} />
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-2">{award.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{award.issuer}</p>
              <span className="inline-block bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full">
                {award.year}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
