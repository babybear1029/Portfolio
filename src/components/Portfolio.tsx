import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import proj1 from '@assets/generated_images/project-1.jpg';
import proj2 from '@assets/generated_images/project-2.jpg';
import proj3 from '@assets/generated_images/project-3.jpg';

const projects = [
  {
    id: 1,
    title: 'NexaCore AI Platform',
    category: 'AI SaaS Product',
    tags: ['React', 'Next.js', 'OpenAI', 'PostgreSQL'],
    image: proj1,
    desc: 'A conversational AI and analytics product for business teams, combining LLM orchestration, AI dashboards, and secure workflow automation.',
  },
  {
    id: 2,
    title: 'Knowledge Assistant for Internal Ops',
    category: 'RAG + Automation',
    tags: ['Python', 'FastAPI', 'Vector Search', 'Azure'],
    image: proj2,
    desc: 'A retrieval-augmented assistant that helps teams query documentation, trigger actions, and surface answers from enterprise knowledge bases through chat and automation workflows.',
  },
  {
    id: 3,
    title: 'Enterprise Automation Portal',
    category: 'Full-Stack Platform',
    tags: ['TypeScript', 'Node.js', 'AWS', 'Docker'],
    image: proj3,
    desc: 'A cloud-native business operations portal that unified API integrations, reporting, internal tooling, and multi-step workflow execution.',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-2 block">
              Portfolio
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white max-w-xl leading-tight">
              Recent work at the intersection of AI, SaaS, and product delivery
            </h2>
          </div>
          <a href="#contact" className="text-white font-semibold flex items-center gap-2 hover:text-primary transition-colors border-b border-white hover:border-primary pb-1">
            Discuss a project <ArrowRight size={18} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all group"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center gap-4">
                  <div className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                    <ArrowRight size={20} />
                  </div>
                </div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800';
                  }}
                />
              </div>
              <div className="p-6">
                <span className="text-primary text-sm font-medium mb-3 block">
                  {project.category}
                </span>
                <h3 className="text-2xl font-display font-semibold text-white mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-2">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs font-medium bg-background border border-border px-3 py-1 rounded-full text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
