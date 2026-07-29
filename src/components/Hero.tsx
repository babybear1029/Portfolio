import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Download, ArrowRight, Code2, BrainCircuit, Cloud, Terminal } from 'lucide-react';
import { useEffect, useState } from 'react';

const floatingIcons = [
  { Icon: Code2,       label: 'React',      angle: 0,   dist: 42 },
  { Icon: BrainCircuit,label: 'AI/ML',      angle: 60,  dist: 42 },
  { Icon: Terminal,    label: 'Node.js',    angle: 120, dist: 42 },
  { Icon: Cloud,       label: 'AWS',        angle: 180, dist: 42 },
  { Icon: Code2,       label: 'Python',     angle: 240, dist: 42 },
  { Icon: BrainCircuit,label: 'TypeScript', angle: 300, dist: 42 },
];

export default function Hero() {
  const roles = ["AI Engineer", "Full-Stack Dev", "Problem Solver", "ML Architect"];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-[100dvh] pt-24 pb-16 flex items-center bg-background relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center relative z-10">

        {/* Left — Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start order-2 lg:order-1"
        >
          <span className="inline-block py-1 px-3 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-5">
            FULL-STACK AI ENGINEER
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-3 leading-tight">
            I'm{' '}
            <span className="font-script text-primary text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal leading-none">
              Alfred Martinez
            </span>
          </h1>

          <div className="h-9 mb-5 flex items-center">
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 font-medium">
              Passionate{' '}
              <span className="text-white border-b-2 border-primary pb-0.5">
                {roles[currentRole]}
              </span>
            </p>
          </div>

          <p className="text-gray-400 text-base sm:text-lg mb-7 max-w-lg leading-relaxed">
            I craft intelligent, scalable, and high-performance applications that bridge the gap between cutting-edge AI models and exceptional user experiences.
          </p>

          <div className="flex flex-wrap items-center gap-3 mb-8">
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-semibold transition-all flex items-center gap-2 text-sm sm:text-base">
              <Download size={18} />
              Download CV
            </button>
            <button className="border border-white/20 hover:border-white text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-semibold transition-all flex items-center gap-2 group text-sm sm:text-base">
              View Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-xs text-gray-500 font-medium uppercase tracking-wider">Follow Me:</span>
            <div className="flex gap-3">
              {[Github, Linkedin, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-card border border-border flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-all"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right — Abstract Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center lg:justify-end order-1 lg:order-2"
        >
          {/* Orbital container */}
          <div className="relative w-[260px] h-[260px] sm:w-[340px] sm:h-[340px] md:w-[420px] md:h-[420px]">

            {/* Outer spinning dashed ring */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30 animate-[spin_25s_linear_infinite]" />

            {/* Middle ring */}
            <div className="absolute inset-4 rounded-full border border-primary/15 animate-[spin_18s_linear_infinite_reverse]" />

            {/* Core circle */}
            <div className="absolute inset-[10%] rounded-full bg-gradient-to-br from-card via-background to-card border border-border flex items-center justify-center shadow-2xl overflow-hidden">
              {/* Grid pattern background */}
              <div className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: 'linear-gradient(hsl(40,92%,55%,0.15) 1px, transparent 1px), linear-gradient(90deg, hsl(40,92%,55%,0.15) 1px, transparent 1px)',
                  backgroundSize: '24px 24px'
                }}
              />

              {/* Central initials */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="text-5xl sm:text-6xl md:text-7xl font-display font-black text-primary leading-none tracking-tight select-none">
                  AC
                </div>
                <div className="text-[10px] sm:text-xs text-gray-500 font-medium tracking-[0.3em] uppercase mt-1">
                  Full-Stack AI
                </div>
              </div>

              {/* Subtle inner glow */}
              <div className="absolute inset-0 bg-radial-gradient from-primary/8 to-transparent rounded-full pointer-events-none" />
            </div>

            {/* Floating icon badges around the ring */}
            {floatingIcons.map(({ Icon, label, angle, dist }, i) => {
              const rad = (angle * Math.PI) / 180;
              const x = 50 + dist * Math.cos(rad);
              const y = 50 + dist * Math.sin(rad);
              return (
                <motion.div
                  key={i}
                  animate={{ y: [0, i % 2 === 0 ? -6 : 6, 0] }}
                  transition={{ repeat: Infinity, duration: 3 + i * 0.4, ease: 'easeInOut' }}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${x}%`, top: `${y}%` }}
                >
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-card border border-border shadow-lg flex items-center justify-center text-primary hover:border-primary transition-colors">
                      <Icon size={14} className="sm:hidden" />
                      <Icon size={18} className="hidden sm:block" />
                    </div>
                    <span className="hidden sm:block text-[9px] text-gray-500 font-medium">{label}</span>
                  </div>
                </motion.div>
              );
            })}

            {/* Available badge */}
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="absolute -bottom-2 right-0 sm:-bottom-4 sm:-right-2 bg-card border border-border px-3 py-1.5 rounded-xl shadow-lg flex items-center gap-2"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs sm:text-sm font-medium text-white">Available for work</span>
            </motion.div>

            {/* Experience badge */}
            <motion.div
              animate={{ y: [8, -8, 8] }}
              transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
              className="absolute -top-2 left-0 sm:-top-4 sm:-left-2 bg-primary text-primary-foreground px-3 py-1.5 rounded-xl shadow-lg flex items-center gap-2"
            >
              <span className="text-xs sm:text-sm font-bold">5+ Years Exp.</span>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
