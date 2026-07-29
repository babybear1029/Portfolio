import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO at TechFlow",
    initials: "SJ",
    color: "from-purple-500 to-purple-700",
    text: "Alex completely transformed our internal dashboard. The AI integration saves our team hours of manual work every week. Exceptional quality and communication.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Founder, StartupX",
    initials: "MC",
    color: "from-blue-500 to-blue-700",
    text: "Working with Alex was a breeze. They understood our vision immediately and delivered a flawless React application ahead of schedule.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "Product Manager",
    initials: "ER",
    color: "from-emerald-500 to-emerald-700",
    text: "The machine learning model Alex built for our e-commerce platform increased our conversion rate by 25%. Highly recommended for complex technical challenges.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 sm:py-24 bg-background border-t border-border overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start lg:items-center">

          {/* Left — rating summary */}
          <div className="lg:w-1/3 text-center lg:text-left">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-2 block">
              Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-4 leading-tight">
              About My Work
            </h2>
            <p className="text-gray-400 mb-8 text-sm sm:text-base">
              Don't just take my word for it. Here is what my clients have to say about my services and work quality.
            </p>

            <div className="flex flex-col items-center lg:items-start">
              <div className="flex items-center gap-1.5 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="fill-primary text-primary" size={24} />
                ))}
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-display font-bold text-white">4.9</span>
                <span className="text-gray-400 font-medium text-sm">/ 5.0 Average</span>
              </div>
            </div>
          </div>

          {/* Right — testimonial cards */}
          <div className="lg:w-2/3 w-full">
            {/* Horizontal scroll on mobile, grid on lg */}
            <div className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory lg:grid lg:grid-cols-1 lg:overflow-visible lg:pb-0 scrollbar-none">
              {testimonials.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-card border border-border p-6 sm:p-8 rounded-2xl min-w-[280px] sm:min-w-[340px] lg:min-w-0 snap-center relative flex-shrink-0 lg:flex-shrink"
                >
                  <Quote size={36} className="text-primary/15 absolute top-5 right-5" />

                  {/* Stars */}
                  <div className="flex items-center gap-1 mb-5">
                    {[...Array(t.rating)].map((_, j) => (
                      <Star key={j} className="fill-primary text-primary" size={14} />
                    ))}
                  </div>

                  <p className="text-gray-300 text-sm sm:text-base italic mb-6 leading-relaxed">
                    "{t.text}"
                  </p>

                  {/* Author — initials avatar */}
                  <div className="flex items-center gap-3">
                    <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                      {t.initials}
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm">{t.name}</h4>
                      <p className="text-gray-500 text-xs">{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
