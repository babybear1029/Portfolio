import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-background border-t border-border relative overflow-hidden">
      {/* Glow effect */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-2 block">
            Got a Question?
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
            Let's Talk About Your Idea
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-border p-6 rounded-2xl flex items-start gap-4"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                <Mail size={20} />
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1">Email Me</h4>
                <a href="mailto:hello@alexchen.dev" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  hello@alexchen.dev
                </a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card border border-border p-6 rounded-2xl flex items-start gap-4"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                <Phone size={20} />
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1">Call Me</h4>
                <a href="tel:+1234567890" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  +1 (234) 567-890
                </a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-card border border-border p-6 rounded-2xl flex items-start gap-4"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                <MapPin size={20} />
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1">Location</h4>
                <p className="text-gray-400 text-sm">San Francisco, CA<br/>Available Worldwide</p>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-card border border-border rounded-3xl p-8 md:p-10"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Your Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-gray-600"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Your Email</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-gray-600"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Subject</label>
                <input 
                  type="text" 
                  placeholder="Project Inquiry"
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-gray-600"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Your Message</label>
                <textarea 
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all resize-none placeholder:text-gray-600"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-xl font-bold w-full transition-all flex items-center justify-center gap-2 group"
              >
                Send Message
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
