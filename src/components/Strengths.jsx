import { 
  ShieldCheck, 
  Zap, 
  Terminal, 
  Sparkles, 
  Laptop, 
  Workflow 
} from 'lucide-react';

export default function Strengths() {
  const strengths = [
    {
      icon: Workflow,
      title: 'Full-Stack MERN Cohesion',
      description: 'Architecting clean end-to-end data flows from reactive user interfaces to scalable Express backend routes and MongoDB collections.',
      badge: 'Architecture',
      glow: 'hover:border-cyan-400/40 hover:shadow-glow-cyan',
      iconColor: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
    },
    {
      icon: Terminal,
      title: 'Battle-Tested Tech Troubleshooting',
      description: 'Hands-on IT cell experience at JIMS Hospital and dome projector operations at Science City built rapid diagnostic and problem-solving instincts under pressure.',
      badge: 'Systems Experience',
      glow: 'hover:border-purple-400/40 hover:shadow-glow-purple',
      iconColor: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
    },
    {
      icon: Laptop,
      title: 'Formal CS & Engineering Foundation',
      description: 'Combining a 3-year Diploma in Computer Science & Technology with ongoing B.Tech studies to back up practical coding with algorithmic thinking.',
      badge: 'Education',
      glow: 'hover:border-emerald-400/40',
      iconColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    },
    {
      icon: Zap,
      title: 'Performance & Component Mindset',
      description: 'Dedicated to writing semantic, accessible HTML, modular reusable React components, and responsive layouts tailored for mobile, tablet, and desktop.',
      badge: 'Clean Code',
      glow: 'hover:border-amber-400/40',
      iconColor: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
    },
  ];

  return (
    <section className="relative py-20 bg-[#090d16] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Core Value
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight mb-4">
            Why Work With Me?
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            A unique blend of hardware, networking, on-ground troubleshooting, and modern full-stack software development.
          </p>
        </div>

        {/* Strengths Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {strengths.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`group rounded-2xl bg-[#0e1424] border border-white/10 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 ${item.glow}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl border flex items-center justify-center ${item.iconColor}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono text-slate-400 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-medium text-slate-300">Verified Capability</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
