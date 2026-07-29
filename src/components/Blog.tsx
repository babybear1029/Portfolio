import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import blog1 from '@assets/generated_images/blog-1.jpg';
import blog2 from '@assets/generated_images/blog-2.jpg';
import blog3 from '@assets/generated_images/blog-3.jpg';

const posts = [
  {
    title: "Optimizing React Performance in 2024",
    date: "Oct 15, 2023",
    category: "Frontend",
    image: blog1,
    desc: "Deep dive into useMemo, concurrent rendering, and techniques for silky smooth 60fps applications."
  },
  {
    title: "Understanding Transformer Models",
    date: "Sep 28, 2023",
    category: "Machine Learning",
    image: blog2,
    desc: "A simplified breakdown of the attention mechanism and how models like GPT really work under the hood."
  },
  {
    title: "Serverless vs Containers on AWS",
    date: "Aug 10, 2023",
    category: "Cloud",
    image: blog3,
    desc: "When to choose Lambda functions over ECS, analyzing cost, cold starts, and scaling architectures."
  }
];

export default function Blog() {
  return (
    <section id="blog" className="py-24 bg-card border-t border-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-2 block">
              Articles
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
              Insights from My Blog
            </h2>
          </div>
          <button className="text-white font-semibold flex items-center gap-2 hover:text-primary transition-colors border-b border-white hover:border-primary pb-1">
            View All Posts <ArrowRight size={18} />
          </button>
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
                    e.currentTarget.src = "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800";
                  }}
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                  <Calendar size={14} />
                  <span>{post.date}</span>
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                  {post.desc}
                </p>
                <button className="text-primary font-semibold flex items-center gap-2 mt-auto group/btn">
                  Read More
                  <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
