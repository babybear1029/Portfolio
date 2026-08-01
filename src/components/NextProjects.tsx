import { motion } from 'framer-motion';
import { BrainCircuit, Bot } from 'lucide-react';

const projects = [
  {
    title: 'Agentic Product Workflows',
    type: 'AI Systems',
    status: 'Exploring',
    icon: BrainCircuit,
    desc: 'Designing practical agent-based workflows that connect LLM reasoning, business rules, and existing software tools.',
  },
  {
    title: 'Operational AI Assistants',
    type: 'Internal Tools',
    status: 'Building',
    icon: Bot,
    desc: 'Creating copilots and assistants that help teams search knowledge, automate handoffs, and move work forward faster.',
  },
];

export default function NextProjects() {
  return (
    <section className="py-20 bg-background border-t border-border relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            What I’m exploring next
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I’m always looking for the next useful layer of intelligence—whether that means better copilots, more reliable automation, or smarter product experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card border border-border p-6 rounded-2xl flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                  <project.icon size={24} />
                </div>
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                  project.status === 'Exploring'
                    ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                    : 'bg-green-500/10 text-green-400 border border-green-500/20'
                }`}>
                  {project.status}
                </span>
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-1">{project.title}</h3>
              <p className="text-primary text-sm font-medium mb-3">{project.type}</p>
              <p className="text-gray-400 text-sm leading-relaxed mt-auto">
                {project.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
