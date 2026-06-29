import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import GradientBackground from "./components/background/GradientBackground";
import FloatingBlobs from "./components/background/FloatingBlobs";
{/*import ParticlesBackground from "./components/background/ParticlesBackground";*/}
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-[#050816] text-white min-h-screen">
      <GradientBackground />
      <FloatingBlobs />
      {/*<ParticlesBackground />*/}

      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
