import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const skills = [
  "React & Next.js",
  "Node.js & Express",
  "Python & FastAPI",
  "Machine Learning",
  "AWS & Docker",
  "PostgreSQL & MongoDB"
];

const skillBars = [
  { label: "Full-Stack Development", pct: 95 },
  { label: "AI / Machine Learning",  pct: 88 },
  { label: "Cloud & DevOps",         pct: 82 },
  { label: "UI / UX Design",         pct: 75 },
];

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-24 bg-card relative">
      <div className="container mx-auto px-4 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-2 block">
              Who Am I?
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
              Empowering Businesses with Intelligent Solutions
            </h2>
            <p className="text-gray-400 text-base sm:text-lg mb-8 leading-relaxed">
              I am a Full-Stack AI Engineer with over 5 years of experience building dynamic, data-driven web applications and integrating advanced machine learning models. I specialize in bridging the gap between complex AI algorithms and intuitive user interfaces.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {skills.map((skill, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-primary flex-shrink-0" />
                  <span className="text-gray-300 font-medium text-sm">{skill}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-8 sm:gap-10 mb-8">
              <div>
                <span className="block text-3xl sm:text-4xl font-display font-bold text-white mb-1">
                  50<span className="text-primary">+</span>
                </span>
                <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Projects Completed</span>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <span className="block text-3xl sm:text-4xl font-display font-bold text-white mb-1">
                  5<span className="text-primary">+</span>
                </span>
                <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Years Experience</span>
              </div>
            </div>

            <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-7 py-3.5 rounded-full font-semibold transition-all flex items-center gap-2 group shadow-lg shadow-primary/20 text-sm sm:text-base">
              Know More
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          {/* Right — Skill bars visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Decorative glows */}
            <div className="absolute -top-8 -right-8 w-40 h-40 bg-primary/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary/8 rounded-full blur-2xl pointer-events-none" />

            <div className="relative bg-background border border-border rounded-2xl p-6 sm:p-8 shadow-2xl">

              {/* Header */}
              <div className="flex items-center gap-3 mb-8">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="text-xs text-gray-500 font-mono">skills.json</span>
              </div>

              {/* Skill bars */}
              <div className="space-y-6">
                {skillBars.map((s, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 text-sm font-medium">{s.label}</span>
                      <span className="text-primary text-sm font-bold">{s.pct}%</span>
                    </div>
                    <div className="w-full h-2 bg-card rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 + i * 0.15, ease: 'easeOut' }}
                        className="h-full bg-gradient-to-r from-primary to-primary/60 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="border-t border-border my-6" />

              {/* Bottom info chips */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: 'Projects', value: '50+' },
                  { label: 'Clients',  value: '30+' },
                  { label: 'Awards',   value: '4'   },
                  { label: 'Years',    value: '5+'  },
                ].map((item) => (
                  <div key={item.label} className="bg-card rounded-xl p-3 text-center border border-border">
                    <div className="text-xl font-display font-bold text-primary">{item.value}</div>
                    <div className="text-xs text-gray-500 font-medium">{item.label}</div>
                  </div>
                ))}
              </div>

              {/* Available badge */}
              <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-3 py-1.5 rounded-full text-xs font-bold shadow-lg">
                Open to Work
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
