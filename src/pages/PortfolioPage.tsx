import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Ticker from '../components/Ticker';
import Services from '../components/Services';
import About from '../components/About';
import TechStack from '../components/TechStack';
import Stats from '../components/Stats';
import Portfolio from '../components/Portfolio';
import Journey from '../components/Journey';
import Awards from '../components/Awards';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';
import Blog from '../components/Blog';
import NextProjects from '../components/NextProjects';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function PortfolioPage() {
  return (
    <div className="bg-background text-foreground min-h-screen font-sans selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <Services />
        <About />
        <TechStack />
        <Stats />
        <Portfolio />
        <Journey />
        <Awards />
        <Pricing />
        <Testimonials />
        <Blog />
        <NextProjects />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
