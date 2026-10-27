import { useState } from 'react';
import { 
  ArrowRight, 
  Mail, 
  Phone, 
  Copy, 
  Check, 
  Code2, 
  Layers, 
  Cpu, 
  Terminal, 
  MapPin, 
  Sparkles
} from 'lucide-react';
import { Github, Linkedin } from './Icons';
import confetti from 'canvas-confetti';
import avatarImg from '../assets/avatar.jpg';

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('dassayantandas@gmail.com');
    setCopied(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 }
    });
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="about" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background ambient lighting glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[350px] bg-purple-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-10 left-10 w-[350px] h-[350px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Bio & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs sm:text-sm font-medium mb-6 backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></span>
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              <span>Full-Stack MERN Developer • Kolkata, WB</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight text-white leading-[1.08] mb-6">
              Hi, I'm{' '}
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400">
                Sayantan Das
              </span>
              <span className="block text-2xl sm:text-3xl lg:text-4xl text-slate-300 font-semibold mt-2">
                Building Scalable, Modern Web Apps.
              </span>
            </h1>

            {/* Bio Paragraph */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl mb-8">
              Motivated software engineer pursuing <span className="text-white font-medium">B.Tech in Computer Science</span> (Lateral Entry) and trained in full-stack architecture through <span className="text-white font-medium">GUVI</span>. With a solid foundation in on-ground IT infrastructure, dome projection tech, and hands-on MERN stack development, I craft fast, accessible, and responsive user experiences.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-sm sm:text-base text-black bg-gradient-to-r from-cyan-400 via-sky-400 to-cyan-300 shadow-neo hover:shadow-glow-cyan hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-white bg-slate-800/80 hover:bg-slate-700/80 border border-white/10 hover:border-cyan-500/50 backdrop-blur-md shadow-sm transition-all duration-200"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Contact Me</span>
              </a>

              <button
                onClick={copyEmail}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-mono text-xs sm:text-sm text-slate-300 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-200"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 font-sans">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-400" />
                    <span className="font-sans">dassayantandas@gmail.com</span>
                  </>
                )}
              </button>
            </div>

            {/* Social Links Row */}
            <div className="flex items-center gap-3 pt-4 border-t border-white/10 w-full">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 mr-2">
                Connect:
              </span>
              <a
                href="https://github.com/das690"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-white/5 hover:bg-cyan-500/10 border border-white/10 hover:border-cyan-500/30 text-slate-300 hover:text-cyan-400 transition-all"
                aria-label="GitHub profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/sayantan-das-38096a204"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-white/5 hover:bg-cyan-500/10 border border-white/10 hover:border-cyan-500/30 text-slate-300 hover:text-cyan-400 transition-all"
                aria-label="LinkedIn profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="tel:8910452520"
                className="p-2.5 rounded-lg bg-white/5 hover:bg-cyan-500/10 border border-white/10 hover:border-cyan-500/30 text-slate-300 hover:text-cyan-400 transition-all"
                aria-label="Call Sayantan"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href="mailto:dassayantandas@gmail.com"
                className="p-2.5 rounded-lg bg-white/5 hover:bg-cyan-500/10 border border-white/10 hover:border-cyan-500/30 text-slate-300 hover:text-cyan-400 transition-all"
                aria-label="Email Sayantan"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-8 border-t border-white/10 w-full">
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-display font-extrabold text-cyan-400">
                  3+
                </span>
                <span className="text-xs text-slate-400 font-medium">Production Projects</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-display font-extrabold text-purple-400">
                  MERN
                </span>
                <span className="text-xs text-slate-400 font-medium">Core Stack Focus</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-display font-extrabold text-emerald-400">
                  1.5+ Yrs
                </span>
                <span className="text-xs text-slate-400 font-medium">Tech & Systems Exp</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-display font-extrabold text-amber-400">
                  B.Tech
                </span>
                <span className="text-xs text-slate-400 font-medium">Computer Science</span>
              </div>
            </div>

          </div>

          {/* Right Column: High-Tech Avatar Card & Interactive Terminal */}
          <div className="lg:col-span-5 flex flex-col items-center">
            
            {/* Visual Container */}
            <div className="relative w-full max-w-md">
              
              {/* Outer decorative glow gradient */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 rounded-3xl blur-xl opacity-35 animate-pulse-slow"></div>

              {/* Main Avatar Card */}
              <div className="relative rounded-3xl bg-[#0e1424] border border-white/15 p-4 shadow-2xl overflow-hidden">
                
                {/* Header tag */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 px-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                  </div>
                  <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                    <Terminal className="w-3 h-3 text-cyan-400" />
                    sayantan.profile.json
                  </span>
                </div>

                {/* Developer Image */}
                <div className="relative rounded-2xl overflow-hidden aspect-square bg-[#0b0e17] border border-white/10 group">
                  <img
                    src={avatarImg}
                    alt="Sayantan Das - Full-Stack MERN Developer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e1424] via-transparent to-transparent opacity-80 pointer-events-none"></div>
                  
                  {/* Bottom overlay badge */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between bg-black/60 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/10">
                    <div className="flex flex-col">
                      <span className="text-xs font-semibold text-white">Sayantan Das</span>
                      <span className="text-[10px] text-cyan-300 font-mono">Full-Stack MERN Developer</span>
                    </div>
                    <span className="text-[10px] bg-cyan-400/20 text-cyan-300 border border-cyan-400/30 px-2 py-0.5 rounded-full font-mono">
                      v2.5
                    </span>
                  </div>
                </div>

                {/* Floating Tech Chips */}
                <div className="grid grid-cols-3 gap-2 mt-3 pt-3 border-t border-white/10">
                  <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-xl px-2.5 py-1.5">
                    <Code2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span className="text-xs font-semibold text-slate-200">React 19</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-xl px-2.5 py-1.5">
                    <Cpu className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span className="text-xs font-semibold text-slate-200">Node / Express</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-xl px-2.5 py-1.5">
                    <Layers className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                    <span className="text-xs font-semibold text-slate-200">MongoDB</span>
                  </div>
                </div>

              </div>

              {/* Floating notification badge */}
              <div className="hidden sm:flex absolute -bottom-5 -left-5 items-center gap-3 bg-[#0d1322]/95 border border-cyan-500/30 shadow-neo-sm backdrop-blur-md p-3 rounded-2xl animate-float">
                <div className="w-9 h-9 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-white">Placement Ready</span>
                  <span className="text-[11px] text-slate-400">MERN • Clean Code Architecture</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
