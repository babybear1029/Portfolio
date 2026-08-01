import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import blog1 from '@assets/generated_images/blog-1.jpg';
import blog2 from '@assets/generated_images/blog-2.jpg';
import blog3 from '@assets/generated_images/blog-3.jpg';

const posts = [
  {
    title: 'Building AI Systems That People Actually Use',
    date: 'Product Strategy',
    category: 'AI',
    image: blog1,
    desc: 'How practical LLM applications differ from flashy demos and why user workflows matter more than raw model capability.',
  },
  {
    title: 'Designing Scalable SaaS Architecture',
    date: 'Engineering',
    category: 'Architecture',
    image: blog2,
    desc: 'A look at structuring modern web platforms for growth, resilience, and maintainability from the start.',
  },
  {
    title: 'From RAG to Automation: The Next Layer of AI Products',
    date: 'Automation',
    category: 'Innovation',
    image: blog3,
    desc: 'Why retrieval, orchestration, and workflow automation are becoming core ingredients in AI-powered software.',
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-24 bg-card border-t border-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-2 block">
              Thinking & Notes
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
              Topics I care about at the intersection of AI and product delivery
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-background rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all group flex flex-col"
            >
              <div className="h-56 overflow-hidden relative">
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full z-10">
                  {post.category}
                </div>
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800';
                  }}
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                  <Sparkles size={14} />
                  <span>{post.date}</span>
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                  {post.desc}
                </p>
                <a href="#contact" className="text-primary font-semibold flex items-center gap-2 mt-auto group/btn">
                  Discuss this topic
                  <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
