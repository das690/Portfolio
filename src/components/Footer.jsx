import { 
  ArrowUp, 
  Mail, 
  Phone, 
  Code2 
} from 'lucide-react';
import { Github, Linkedin } from './Icons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative bg-[#06080d] border-t border-white/10 py-16 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-400 to-purple-500 p-[2px]">
                <div className="w-full h-full bg-[#080b11] rounded-[9px] flex items-center justify-center font-mono font-bold text-cyan-400 text-sm">
                  SD
                </div>
              </div>
              <span className="font-display font-bold text-xl text-white">
                Sayantan Das
              </span>
            </div>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Full-Stack MERN Developer dedicated to crafting high-performance, responsive web applications and scalable API solutions.
            </p>

            <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Available for immediate software developer hiring</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono text-white uppercase tracking-wider font-semibold">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="hover:text-cyan-400 transition-colors">About & Profile</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-cyan-400 transition-colors">Tech Arsenal</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-cyan-400 transition-colors">Selected Projects</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience & Education</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-400 transition-colors">Get In Touch</a>
              </li>
            </ul>
          </div>

          {/* Connect & Socials */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono text-white uppercase tracking-wider font-semibold">
              Connect Directly
            </h4>
            <div className="flex flex-col space-y-2 text-sm">
              <a
                href="mailto:dassayantandas@gmail.com"
                className="hover:text-cyan-400 transition-colors flex items-center gap-2"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>dassayantandas@gmail.com</span>
              </a>
              <a
                href="tel:8910452520"
                className="hover:text-cyan-400 transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-purple-400" />
                <span>+91 8910452520</span>
              </a>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/das690"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-all"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/sayantan-das-38096a204"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright & back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-1.5">
            <span>Designed & Developed with</span>
            <Code2 className="w-3.5 h-3.5 text-cyan-400 inline" />
            <span>by Sayantan Das • Kolkata</span>
          </div>

          <div className="flex items-center gap-4">
            <span>React 19 • Tailwind CSS • Vite</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-white/5 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-500/30 text-slate-300 hover:text-cyan-400 transition-all"
              title="Back to Top"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
