import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import proj1 from '@assets/generated_images/project-1.jpg';
import proj2 from '@assets/generated_images/project-2.jpg';
import proj3 from '@assets/generated_images/project-3.jpg';

const projects = [
  {
    id: 1,
    title: "Insight Analytics Dashboard",
    category: "Full-Stack Development",
    tags: ["React", "Node.js", "PostgreSQL"],
    image: proj1,
    desc: "A comprehensive data visualization dashboard for enterprise metrics."
  },
  {
    id: 2,
    title: "NeuroPredict AI",
    category: "Machine Learning",
    tags: ["Python", "TensorFlow", "FastAPI"],
    image: proj2,
    desc: "Predictive modeling interface for financial market trends."
  },
  {
    id: 3,
    title: "FitTrack Mobile",
    category: "App Design",
    tags: ["React Native", "Firebase"],
    image: proj3,
    desc: "A sleek health and fitness tracking application with social features."
  }
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
              Let's Have a Look at My Recent Work
            </h2>
          </div>
          <button className="text-white font-semibold flex items-center gap-2 hover:text-primary transition-colors border-b border-white hover:border-primary pb-1">
            View All Projects <ExternalLink size={18} />
          </button>
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
                  <button className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                    <ExternalLink size={20} />
                  </button>
                  <button className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                    <Github size={20} />
                  </button>
                </div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800";
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
                  {project.tags.map(tag => (
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
