import { motion } from 'framer-motion';
import { GraduationCap, Briefcase } from 'lucide-react';

const education = [
  {
    title: 'Bachelor’s Degree of Computer Science',
    org: 'University of Michigan',
    year: '09/2002 - 05/2006',
    desc: 'Led student development work for university organizations and built web applications, dashboards, and internal tools using Java, JavaScript, PHP, and database technologies.',
  },
  {
    title: 'Software Development Club Member',
    org: 'Michigan Technical College',
    year: '05/2000 - 12/2001',
    desc: 'Built small business applications, practiced object-oriented programming, version control, and software testing while collaborating on web projects.',
  },
];

const experience = [
  {
    title: 'Principal AI & Full-Stack Engineer',
    org: 'NexaCore AI Labs',
    year: '01/2022 - 07/2026',
    desc: 'Architected and developed AI-driven SaaS products, AI dashboards, chat and automation systems, and business AI tools with LLMs, RAG, agents, React, Next.js, Python, Node.js, PostgreSQL, and cloud services.',
  },
  {
    title: 'Lead AI & Full-Stack Engineer',
    org: 'InnovateAI Consulting Group',
    year: '07/2016 - 12/2021',
    desc: 'Led startup consulting projects focused on AI SaaS platforms, workflow automation, AI dashboards, and custom business applications using OpenAI, vector search, and FastAPI.',
  },
  {
    title: 'Senior Full-Stack Engineer',
    org: 'CloudBridge Technologies',
    year: '01/2011 - 06/2016',
    desc: 'Built business automation and analytics platforms with React, Angular, TypeScript, Node.js, Python, Django, and AWS while mentoring developers and shaping product architecture.',
  },
  {
    title: 'Full-Stack Software Engineer',
    org: 'BrightStack Solutions',
    year: '09/2006 - 12/2010',
    desc: 'Helped launch early-stage SaaS products, built customer portals, reporting dashboards, REST APIs, and authentication systems in fast-paced startup environments.',
  },
  {
    title: 'Software Engineering Intern',
    org: 'Microsoft',
    year: '06/2006 - 08/2006',
    desc: 'Supported enterprise application development and testing using C# and .NET while collaborating with engineering teams on code quality and feature delivery.',
  },
];

function TimelineItem({ item, i }: { item: any; i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.2 }}
      className="relative pl-8 pb-10 last:pb-0"
    >
      <div className="absolute left-3 top-2 bottom-0 w-px bg-border group-last:bg-transparent"></div>
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
            My academic foundation and professional journey
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
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
