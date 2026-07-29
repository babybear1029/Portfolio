import { motion } from 'framer-motion';
import { GraduationCap, Briefcase } from 'lucide-react';

const education = [
  {
    title: "Master of Science in AI",
    org: "Stanford University",
    year: "2018 - 2020",
    desc: "Specialized in Machine Learning and Natural Language Processing. Graduated with Honors."
  },
  {
    title: "Bachelor of Computer Science",
    org: "University of California",
    year: "2014 - 2018",
    desc: "Focus on Software Engineering and Algorithms. Led the University Coding Club."
  }
];

const experience = [
  {
    title: "Senior AI Engineer",
    org: "TechNova Solutions",
    year: "2021 - Present",
    desc: "Leading a team of 5 engineers to develop predictive AI models, improving company efficiency by 40%."
  },
  {
    title: "Full-Stack Developer",
    org: "Creative Web Agency",
    year: "2020 - 2021",
    desc: "Built scalable web applications using React and Node.js for Fortune 500 clients."
  }
];

function TimelineItem({ item, i }: { item: any, i: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.2 }}
      className="relative pl-8 pb-10 last:pb-0"
    >
      {/* Timeline line */}
      <div className="absolute left-3 top-2 bottom-0 w-px bg-border group-last:bg-transparent"></div>
      
      {/* Timeline dot */}
      <div className="absolute left-[7px] top-2 w-3.5 h-3.5 rounded-full bg-primary ring-4 ring-background"></div>
      
      <div className="bg-background border border-border p-6 rounded-2xl hover:border-primary/50 transition-colors group">
        <span className="text-primary font-medium text-sm mb-2 block">{item.year}</span>
        <h4 className="text-xl font-display font-semibold text-white mb-1">{item.title}</h4>
        <h5 className="text-gray-400 font-medium mb-4">{item.org}</h5>
        <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
      </div>
    </motion.div>
  );
}

export default function Journey() {
  return (
    <section id="journey" className="py-24 bg-card border-t border-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-2 block">
            Resume
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
            My Academic & Work Journey
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          
          {/* Education Column */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-2xl font-display font-bold text-white">Education</h3>
            </div>
            
            <div className="relative">
              {education.map((item, i) => (
                <TimelineItem key={i} item={item} i={i} />
              ))}
            </div>
          </div>

          {/* Experience Column */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                <Briefcase size={24} />
              </div>
              <h3 className="text-2xl font-display font-bold text-white">Experience</h3>
            </div>
            
            <div className="relative">
              {experience.map((item, i) => (
                <TimelineItem key={i} item={item} i={i} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
