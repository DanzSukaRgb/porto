import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Portfolio = ({ onNavigateToDocs }) => {
  return (
    <>
      <Navbar onNavigateToDocs={onNavigateToDocs} />
      <Hero onNavigateToDocs={onNavigateToDocs} />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default Portfolio;
