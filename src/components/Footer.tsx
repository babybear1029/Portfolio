import { Github, Linkedin, Twitter, Dribbble } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="md:col-span-2">
            <a href="#home" className="text-2xl font-display font-bold text-white tracking-tight mb-4 inline-block">
              Port<span className="text-primary">folio.</span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-6">
              A Full-Stack AI Engineer passionate about building digital experiences that merge elegant design with powerful machine learning capabilities. Let's create something amazing together.
            </p>
            <div className="flex gap-4">
              {[Github, Linkedin, Twitter, Dribbble].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Portfolio', 'Blog'].map(link => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-gray-400 hover:text-primary transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Services</h4>
            <ul className="space-y-3">
              {['Application Design', 'AI/ML Solutions', 'Full-Stack Dev', 'Cloud Architecture', 'Consulting'].map(link => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Alex Chen. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
