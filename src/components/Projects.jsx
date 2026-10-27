import { useState } from 'react';
import { 
  CheckCircle, 
  ArrowUpRight, 
  FolderGit2
} from 'lucide-react';
import { Github } from './Icons';
import placementImg from '../assets/placement.jpg';
import kanbanImg from '../assets/kanban.jpg';
import recipeImg from '../assets/recipe.jpg';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 'placement-system',
      title: 'College Placement Management System',
      category: 'mern',
      type: 'Full-Stack MERN Application',
      image: placementImg,
      summary: 'Comprehensive institutional placement and recruitment automation platform designed for managing corporate hiring drives, tracking applicant pipelines, and generating recruitment analytics.',
      highlights: [
        'Multi-tiered role-based access for students, placement coordinators, and recruiters',
        'Company drive scheduling, eligibility screening, and interview round tracking',
        'Recruitment data analytics with candidate status visualizations and placement reports',
        'End-to-end RESTful API backend built with Express and MongoDB collections'
      ],
      techStack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Tailwind CSS', 'REST APIs'],
      liveUrl: 'https://placementportalmanagesys.netlify.app/',
      githubUrl: 'https://github.com/das690/College-Placement-Management-System.git',
      featured: true,
      badgeColor: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
      accentColor: 'from-purple-500 to-indigo-600',
    },
    {
      id: 'kanban-board',
      title: 'Interactive Agile Kanban Board',
      category: 'frontend',
      type: 'Frontend Productivity Application',
      image: kanbanImg,
      summary: 'High-performance sprint task management board engineered with modern React state architecture, drag-and-drop task movements, and instant local storage data persistence.',
      highlights: [
        'Dynamic multi-column workflow: Backlog, In Progress, In Review, and Done',
        'Priority tagging system (Critical, High, Medium, Low) with custom colored indicators',
        'Robust frontend state management leveraging React Context API to avoid prop drilling',
        'Zero-latency client-side persistence with offline-ready browser local storage'
      ],
      techStack: ['React.js', 'Tailwind CSS', 'Context API', 'LocalStorage', 'Responsive UI'],
      liveUrl: 'https://kanbanboardappguvi.netlify.app/',
      githubUrl: 'https://github.com/das690/kanban-board-app.git',
      featured: true,
      badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
      accentColor: 'from-emerald-400 to-teal-500',
    },
    {
      id: 'recipe-manager',
      title: 'Gourmet Recipe Browser & Meal Planner',
      category: 'mern',
      type: 'Full-Stack / API Integration',
      image: recipeImg,
      summary: 'Interactive culinary exploration engine integrating third-party food databases with a dedicated MongoDB backend for bookmarking favorite recipes and custom meal planning.',
      highlights: [
        'Real-time recipe discovery engine with debounced search and dietary categorization',
        'Detailed cooking view featuring ingredient metrics, culinary tags, and step-by-step guides',
        'Custom Express & MongoDB backend handling user saved collections and favorite bookmarks',
        'Seamless responsive grid with optimized image handling and fluid modal view'
      ],
      techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'TheMealDB API', 'CSS3'],
      liveUrl: 'https://guvirecipeapp.netlify.app/',
      githubUrl: 'https://github.com/das690/RecipeApp.git',
      featured: true,
      badgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
      accentColor: 'from-amber-400 to-orange-500',
    },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-4">
              <FolderGit2 className="w-3.5 h-3.5" />
              Portfolio Showcase
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
              Selected Works & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400">
                Live Deployments
              </span>
            </h2>
          </div>
          <p className="text-slate-400 max-w-md text-sm sm:text-base leading-relaxed">
            Real-world full-stack web applications featuring responsive UI, scalable database schemas, and live production deployments.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 mb-12 p-1.5 bg-[#0e1424] border border-white/10 rounded-2xl w-fit">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
              activeFilter === 'all'
                ? 'bg-cyan-400 text-black shadow-neo-sm'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            All Projects ({projects.length})
          </button>
          <button
            onClick={() => setActiveFilter('mern')}
            className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
              activeFilter === 'mern'
                ? 'bg-cyan-400 text-black shadow-neo-sm'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            Full-Stack MERN
          </button>
          <button
            onClick={() => setActiveFilter('frontend')}
            className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
              activeFilter === 'frontend'
                ? 'bg-cyan-400 text-black shadow-neo-sm'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            Frontend & State
          </button>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-3xl bg-[#0e1424] border border-white/10 overflow-hidden flex flex-col shadow-xl hover:border-cyan-500/40 hover:shadow-glow-cyan transition-all duration-300"
            >
              {/* Project Image Banner */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-900 border-b border-white/10">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e1424] via-transparent to-black/30 opacity-70" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`text-[11px] font-mono font-medium px-3 py-1 rounded-full border backdrop-blur-md ${project.badgeColor}`}>
                    {project.type}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-grow flex flex-col justify-between">
                <div>
                  {/* Title */}
                  <h3 className="font-display font-bold text-2xl text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-sm text-slate-300 leading-relaxed mb-5">
                    {project.summary}
                  </p>

                  {/* Highlights Bullet points */}
                  <div className="space-y-2 mb-6">
                    {project.highlights.slice(0, 2).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                        <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-mono bg-white/5 border border-white/10 text-slate-300 px-2.5 py-1 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 border-t border-white/10 flex items-center gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold text-black bg-cyan-400 hover:bg-cyan-300 shadow-neo-sm hover:shadow-glow-cyan transition-all"
                  >
                    <span>Live Demo</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/15 hover:border-white/30 transition-all"
                    title="View Source on GitHub"
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* GitHub Repository Banner */}
        <div className="mt-16 text-center">
          <p className="text-slate-400 text-sm mb-4">
            Curious to see more commits, contributions, and repositories?
          </p>
          <a
            href="https://github.com/das690"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#111726] border border-white/15 text-slate-200 hover:text-white hover:border-cyan-400/50 hover:shadow-glow-cyan text-sm font-semibold transition-all duration-200"
          >
            <Github className="w-4 h-4 text-cyan-400" />
            <span>Visit @das690 on GitHub</span>
            <ArrowUpRight className="w-4 h-4 text-slate-400" />
          </a>
        </div>

      </div>
    </section>
  );
}
