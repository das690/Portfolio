import { useState } from 'react';
import { 
  GraduationCap, 
  Briefcase, 
  Building2, 
  Award, 
  History
} from 'lucide-react';

export default function Timeline() {
  const [filter, setFilter] = useState('all');

  const milestones = [
    {
      id: 1,
      period: 'Present',
      type: 'education',
      title: 'B.Tech in Computer Science & Full-Stack Mastery',
      institution: 'Techno International Batanagar & GUVI Geek Networks',
      location: 'Kolkata, WB',
      categoryBadge: 'Degree & Professional Track',
      badgeColor: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
      icon: GraduationCap,
      iconBg: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
      description: 'Secured lateral entry into the 2nd year of B.Tech (CS) following diploma excellence. Concurrently undertaking specialized full-stack MERN software engineering training at GUVI, building scalable production-grade web applications.',
      skillsLearned: ['React.js', 'Node.js', 'Express', 'MongoDB', 'System Architecture', 'Git/GitHub']
    },
    {
      id: 2,
      period: '6 Months',
      type: 'experience',
      title: 'IT Cell Support Engineer',
      institution: 'JIMS Hospital',
      location: 'Kolkata, WB',
      categoryBadge: 'Hospital Systems & Operations',
      badgeColor: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
      icon: Briefcase,
      iconBg: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
      description: 'Diagnosed and resolved critical on-ground IT infrastructure, network uptime, and hardware operations in a high-stakes healthcare environment. Maintained system reliability across department workstations and patient data portals.',
      skillsLearned: ['Network Troubleshooting', 'System Administration', 'Hardware Diagnostics', 'Critical Uptime']
    },
    {
      id: 3,
      period: '1 Year',
      type: 'experience',
      title: 'Projector Tech & Dome Show Specialist',
      institution: 'Science City Kolkata',
      location: 'Kolkata, WB',
      categoryBadge: 'Technical Operations',
      badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
      icon: Briefcase,
      iconBg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
      description: 'Supervised and operated specialized digital projection systems and automated dome audio-visual gear for thousands of visitors. Cultivated rapid decision-making, equipment calibration, and incident response under real-time audience pressure.',
      skillsLearned: ['AV System Calibration', 'Incident Handling', 'Operational Discipline', 'Public Show Sync']
    },
    {
      id: 4,
      period: '2021 – 2024',
      type: 'education',
      title: 'Diploma in Computer Science & Technology',
      institution: 'Budge Budge Institute of Technology (BBIT)',
      location: 'Kolkata, WB',
      categoryBadge: 'Polytechnic Diploma',
      badgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
      icon: GraduationCap,
      iconBg: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
      description: 'Completed rigorous 3-year foundational technical diploma coursework covering C programming, data structures, relational database management (DBMS), operating systems, and computer architecture.',
      skillsLearned: ['C Programming', 'Data Structures', 'DBMS & SQL', 'Computer Networks', 'OOP Principles']
    },
    {
      id: 5,
      period: '2021',
      type: 'education',
      title: 'Secondary School Certificate (10th Grade)',
      institution: 'Kendriya Vidyalaya Command Hospital',
      location: 'Kolkata, WB',
      categoryBadge: 'CBSE Board',
      badgeColor: 'bg-slate-500/10 text-slate-300 border-slate-500/20',
      icon: Award,
      iconBg: 'bg-slate-500/10 text-slate-300 border-slate-500/30',
      description: 'Graduated under the CBSE curriculum with strong marks in Mathematics, Science, and Information Technology, sparking an early drive for programming and computer systems.',
      skillsLearned: ['Mathematics', 'Science & Logic', 'Basic Computing', 'Problem Solving']
    },
  ];

  const filteredMilestones = filter === 'all'
    ? milestones
    : milestones.filter(m => m.type === filter);

  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-4">
              <History className="w-3.5 h-3.5" />
              Career & Academic Pathway
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
              The Journey So Far
            </h2>
          </div>
          
          {/* Filter Pills */}
          <div className="flex gap-2 p-1.5 bg-[#0e1424] border border-white/10 rounded-2xl w-fit">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                filter === 'all'
                  ? 'bg-cyan-400 text-black shadow-neo-sm'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter('experience')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                filter === 'experience'
                  ? 'bg-cyan-400 text-black shadow-neo-sm'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              Experience
            </button>
            <button
              onClick={() => setFilter('education')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                filter === 'education'
                  ? 'bg-cyan-400 text-black shadow-neo-sm'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              Education
            </button>
          </div>
        </div>

        {/* Timeline Spine & Cards */}
        <div className="relative pl-6 sm:pl-10 border-l-2 border-white/10 space-y-12">
          {filteredMilestones.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.id} className="relative group">
                
                {/* Node icon pin on timeline */}
                <div className={`absolute -left-[35px] sm:-left-[51px] top-1.5 w-8 sm:w-10 h-8 sm:h-10 rounded-full border-2 ${item.iconBg} bg-[#080b11] flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:border-cyan-400 transition-all duration-300`}>
                  <Icon className="w-4 sm:w-5 h-4 sm:h-5" />
                </div>

                {/* Milestone Content Card */}
                <div className="rounded-3xl bg-[#0e1424] border border-white/10 p-6 sm:p-8 shadow-xl hover:border-cyan-500/40 hover:shadow-glow-cyan transition-all duration-300">
                  
                  {/* Period & Category Header */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs sm:text-sm font-bold text-black bg-cyan-400 px-3 py-1 rounded-md shadow-neo-sm">
                        {item.period}
                      </span>
                      <span className={`text-xs font-mono px-2.5 py-0.5 rounded-full border ${item.badgeColor}`}>
                        {item.categoryBadge}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                      <span>{item.location}</span>
                    </div>
                  </div>

                  {/* Title & Institution */}
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-1 group-hover:text-cyan-400 transition-colors">
                    {item.title}
                  </h3>

                  <div className="flex items-center gap-2 text-sm sm:text-base font-semibold text-slate-300 mb-4">
                    <Building2 className="w-4 h-4 text-cyan-400" />
                    <span>{item.institution}</span>
                  </div>

                  {/* Narrative Description */}
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Key Competencies / Skills Tags */}
                  <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-white/10">
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mr-1">
                      Key Takeaways:
                    </span>
                    {item.skillsLearned.map((skill, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-mono bg-white/5 border border-white/10 text-slate-300 px-2.5 py-1 rounded-lg"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
