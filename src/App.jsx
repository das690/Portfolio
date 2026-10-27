import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Strengths from './components/Strengths';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#080b11] text-slate-100 font-sans selection:bg-cyan-500 selection:text-black relative overflow-x-hidden">
      
      {/* Background subtle technical grid overlay */}
      <div className="fixed inset-0 grid-bg opacity-75 pointer-events-none -z-20" />

      {/* Atmospheric radial ambient light orbs */}
      <div className="fixed top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="fixed bottom-1/4 right-10 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[180px] pointer-events-none -z-10" />
      <div className="fixed top-2/3 left-10 w-[450px] h-[450px] bg-indigo-600/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10">
        {/* Hero Section */}
        <Hero />

        {/* Core Value / Key Differentiators */}
        <Strengths />

        {/* Technical Arsenal & Skills */}
        <Skills />

        {/* Selected Works & Live Deployments */}
        <Projects />

        {/* Career & Academic Pathway Timeline */}
        <Timeline />

        {/* Contact & Inquiry Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default App;