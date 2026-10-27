import { useState } from 'react';
import { 
  Code2, 
  Server, 
  Database, 
  Wrench, 
  Layers, 
  Cpu, 
  Globe, 
  GitBranch, 
  Terminal, 
  Layout, 
  CheckCircle2, 
  Sparkles 
} from 'lucide-react';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Technologies' },
    { id: 'frontend', label: 'Frontend & UI' },
    { id: 'backend', label: 'Backend & APIs' },
    { id: 'database', label: 'Databases' },
    { id: 'tools', label: 'Tools & Workflow' },
  ];

  const skillsData = [
    // Frontend
    {
      name: 'React.js',
      category: 'frontend',
      level: 'Core Expertise',
      icon: Code2,
      color: 'from-cyan-400 to-blue-500',
      glow: 'hover:border-cyan-400/50 hover:shadow-glow-cyan',
      badgeColor: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
      description: 'Component-based architecture, hooks, state management, and modern React 19 standards.',
    },
    {
      name: 'JavaScript (ES6+)',
      category: 'frontend',
      level: 'Core Expertise',
      icon: Terminal,
      color: 'from-amber-400 to-yellow-500',
      glow: 'hover:border-amber-400/50',
      badgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
      description: 'Async/Await, promises, DOM manipulation, closures, and modern ES features.',
    },
    {
      name: 'Tailwind CSS',
      category: 'frontend',
      level: 'Advanced',
      icon: Layout,
      color: 'from-sky-400 to-teal-400',
      glow: 'hover:border-sky-400/50',
      badgeColor: 'bg-sky-500/10 text-sky-400 border-sky-500/20',
      description: 'Utility-first modern styling, responsive layouts, design systems, and glassmorphism.',
    },
    {
      name: 'HTML5 & CSS3',
      category: 'frontend',
      level: 'Strong Foundation',
      icon: Globe,
      color: 'from-orange-400 to-red-500',
      glow: 'hover:border-orange-400/50',
      badgeColor: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
      description: 'Semantic markup, accessibility (a11y), flexbox, grid, and CSS animations.',
    },

    // Backend
    {
      name: 'Node.js',
      category: 'backend',
      level: 'Core Expertise',
      icon: Cpu,
      color: 'from-emerald-400 to-green-600',
      glow: 'hover:border-emerald-400/50',
      badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
      description: 'Event-driven server runtime, asynchronous I/O, npm ecosystem, and backend scripting.',
    },
    {
      name: 'Express.js',
      category: 'backend',
      level: 'Core Expertise',
      icon: Server,
      color: 'from-slate-300 to-slate-500',
      glow: 'hover:border-slate-400/50',
      badgeColor: 'bg-slate-500/10 text-slate-300 border-slate-500/20',
      description: 'RESTful API routing, custom middleware pipelines, authentication, and error handling.',
    },
    {
      name: 'RESTful APIs',
      category: 'backend',
      level: 'Advanced',
      icon: Layers,
      color: 'from-purple-400 to-indigo-500',
      glow: 'hover:border-purple-400/50 hover:shadow-glow-purple',
      badgeColor: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
      description: 'Clean endpoint architecture, JSON payloads, status codes, and CRUD operations.',
    },

    // Database
    {
      name: 'MongoDB & Mongoose',
      category: 'database',
      level: 'Core Expertise',
      icon: Database,
      color: 'from-green-400 to-emerald-500',
      glow: 'hover:border-green-400/50',
      badgeColor: 'bg-green-500/10 text-green-400 border-green-500/20',
      description: 'NoSQL document schemas, indexing, Mongoose ODM modeling, and aggregation queries.',
    },
    {
      name: 'MySQL',
      category: 'database',
      level: 'Proficient',
      icon: Database,
      color: 'from-blue-400 to-cyan-600',
      glow: 'hover:border-blue-400/50',
      badgeColor: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
      description: 'Relational data modeling, table normalization, SQL queries, and foreign key relations.',
    },

    // Tools
    {
      name: 'Git & GitHub',
      category: 'tools',
      level: 'Daily Workflow',
      icon: GitBranch,
      color: 'from-rose-400 to-pink-500',
      glow: 'hover:border-rose-400/50',
      badgeColor: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
      description: 'Version control, feature branching, pull requests, collaboration, and repository management.',
    },
    {
      name: 'Vite & Build Tools',
      category: 'tools',
      level: 'Advanced',
      icon: Sparkles,
      color: 'from-amber-400 to-purple-500',
      glow: 'hover:border-purple-400/50',
      badgeColor: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
      description: 'Fast HMR dev servers, bundle optimization, environment variables, and modern tooling.',
    },
    {
      name: 'Postman & Netlify',
      category: 'tools',
      level: 'Proficient',
      icon: Wrench,
      color: 'from-orange-400 to-amber-500',
      glow: 'hover:border-orange-400/50',
      badgeColor: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
      description: 'API testing, request mockups, cloud deployments, and continuous deployment triggers.',
    },
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skillsData 
    : skillsData.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="relative py-24 sm:py-32 bg-[#090d16] border-y border-white/5">
      {/* Background gradient blur */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-4">
              <Cpu className="w-3.5 h-3.5" />
              Technical Arsenal
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
              Tools & Technologies <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                I Build With
              </span>
            </h2>
          </div>
          <p className="text-slate-400 max-w-md text-sm sm:text-base leading-relaxed">
            Specializing in the full-stack JavaScript ecosystem with a focus on component architecture, resilient backends, and responsive user experiences.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-12 p-1.5 bg-[#0e1424] border border-white/10 rounded-2xl w-fit">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'bg-cyan-400 text-black shadow-neo-sm'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredSkills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className={`group relative rounded-2xl bg-[#0f172a]/70 border border-white/10 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 ${skill.glow}`}
              >
                {/* Header: Icon & Level */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${skill.color} p-[1px] shadow-sm`}>
                    <div className="w-full h-full bg-[#0a0f1d] rounded-[11px] flex items-center justify-center text-white group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <span className={`text-[11px] font-mono font-medium px-2.5 py-1 rounded-full border ${skill.badgeColor}`}>
                    {skill.level}
                  </span>
                </div>

                {/* Skill Name */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {skill.name}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {skill.description}
                </p>

                {/* Visual indicator bar */}
                <div className="mt-4 pt-4 border-t border-white/5 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                    {skill.category}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stack Synergy Banner */}
        <div className="mt-16 rounded-3xl bg-gradient-to-r from-cyan-950/40 via-indigo-950/30 to-purple-950/40 border border-cyan-500/20 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 shrink-0">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                Unified MERN Stack Mastery
              </h3>
              <p className="text-sm text-slate-400 max-w-xl">
                Bridging reactive user interfaces (React & Tailwind) with robust API logic (Node.js & Express) and scalable data persistence (MongoDB).
              </p>
            </div>
          </div>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold text-sm transition-all hover:-translate-y-0.5 shrink-0"
          >
            <span>Explore Implementations</span>
            <Code2 className="w-4 h-4 text-cyan-400" />
          </a>
        </div>

      </div>
    </section>
  );
}
