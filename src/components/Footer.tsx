import { Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <a href="#home" className="text-2xl font-display font-bold text-white tracking-tight mb-4 inline-block">
              Alfred<span className="text-primary">.</span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-6">
              Senior full-stack and AI engineer focused on building scalable SaaS products, intelligent automation, and practical AI systems that create measurable impact.
            </p>
            <div className="flex gap-4">
              {[
                { Icon: Linkedin, href: 'https://www.linkedin.com/in/alfred-martinez-2970a6301' },
                { Icon: Mail, href: 'mailto:jackjohnsonislove401@gmail.com' },
              ].map(({ Icon, href }, i) => (
                <a key={i} href={href} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Portfolio', 'Journey'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-gray-400 hover:text-primary transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Focus Areas</h4>
            <ul className="space-y-3">
              {['AI Products', 'SaaS Engineering', 'Cloud Architecture', 'LLM Integrations', 'Automation'].map((link) => (
                <li key={link}>
                  <span className="text-gray-400 text-sm">{link}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Alfred Martinez. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
