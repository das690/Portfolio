import React from 'react';

function App() {
  return (
    <div className="min-h-screen p-6 md:p-12 border-[12px] border-black m-4 md:m-8 bg-white shadow-neo">
      
      {/* Navigation */}
      <nav className="flex flex-wrap justify-between items-center mb-20 border-b-8 border-black pb-6 gap-6">
        <h1 className="text-4xl font-black tracking-tighter bg-black text-white px-3 py-1 -rotate-2">SD.</h1>
        <div className="flex flex-wrap gap-4">
          <a href="https://github.com/das690" target="_blank" rel="noreferrer" 
             className="font-bold border-4 border-black px-6 py-2 hover:bg-neoYellow transition-all shadow-neo-sm hover:shadow-neo hover:-translate-y-1">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/sayantan-das-38096a204" target="_blank" rel="noreferrer"
             className="font-bold border-4 border-black px-6 py-2 hover:bg-neoCyan transition-all shadow-neo-sm hover:shadow-neo hover:-translate-y-1">
            LinkedIn
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-5xl">
        <h2 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase leading-[1.1] mb-8">
          Hi, I'm <br />
          <span className="inline-block bg-neoYellow px-4 py-2 border-8 border-black shadow-neo mt-4 mb-4">
            Sayantan Das
          </span>
        </h2>
        
        <p className="text-xl md:text-3xl font-bold mb-12 max-w-3xl leading-relaxed border-l-8 border-black pl-6">
          Full-Stack MERN Developer based in Kolkata. 
          I build raw, high-performance web applications with React, Node, and Tailwind.
        </p>

        <div className="flex flex-wrap gap-6">
          <a href="#projects" 
             className="bg-neoCyan text-black font-black text-xl md:text-2xl px-8 py-5 border-4 border-black shadow-neo hover:shadow-neo-hover hover:-translate-y-2 hover:-translate-x-1 transition-all">
            VIEW PROJECTS ↓
          </a>
          <a href="mailto:dassayantandas@gmail.com" 
             className="bg-neoPink text-black font-black text-xl md:text-2xl px-8 py-5 border-4 border-black shadow-neo hover:shadow-neo-hover hover:-translate-y-2 hover:-translate-x-1 transition-all">
            LET'S TALK
          </a>
        </div>
      </main>

      {/* Journey / Timeline Section */}
      <section className="mt-32 max-w-5xl">
        <h3 className="text-4xl md:text-6xl font-black uppercase border-b-8 border-black pb-4 mb-16 inline-block shadow-sm">
          The Journey
        </h3>

        <div className="flex flex-col gap-10 border-l-8 border-black ml-4 md:ml-8 pl-8 md:pl-12 py-4 relative">
          
          <div className="relative">
            <div className="absolute -left-[52px] md:-left-[68px] top-2 w-8 h-8 bg-neoGreen border-4 border-black rounded-none rotate-45"></div>
            <div className="bg-white border-4 border-black p-6 md:p-8 shadow-neo hover:-translate-y-1 hover:translate-x-1 hover:shadow-neo-hover transition-all">
              <span className="bg-black text-white px-4 py-1 font-bold text-sm uppercase mb-4 inline-block border-2 border-black">Present</span>
              <h4 className="text-2xl md:text-3xl font-black uppercase mb-2">B.Tech (CS) & Full-Stack Training</h4>
              <p className="font-bold text-xl mb-4 bg-neoYellow inline-block px-2 border-2 border-black">Techno International Batanagar & GUVI</p>
              <p className="font-semibold text-lg md:text-xl text-gray-800">Pursuing B.Tech via lateral entry into 2nd year while mastering the MERN stack through intensive, project-based development.</p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-[52px] md:-left-[68px] top-2 w-8 h-8 bg-neoCyan border-4 border-black rounded-none rotate-45"></div>
            <div className="bg-white border-4 border-black p-6 md:p-8 shadow-neo hover:-translate-y-1 hover:translate-x-1 hover:shadow-neo-hover transition-all">
              <span className="bg-black text-white px-4 py-1 font-bold text-sm uppercase mb-4 inline-block border-2 border-black">6 Months</span>
              <h4 className="text-2xl md:text-3xl font-black uppercase mb-2">IT Cell Support</h4>
              <p className="font-bold text-xl mb-4 bg-neoPink inline-block px-2 border-2 border-black">JIMS Hospital</p>
              <p className="font-semibold text-lg md:text-xl text-gray-800">Handled on-ground technical troubleshooting, network infrastructure, and critical hospital IT systems operations.</p>
            </div>
          </div>

          <div className="relative">
             <div className="absolute -left-[52px] md:-left-[68px] top-2 w-8 h-8 bg-neoYellow border-4 border-black rounded-none rotate-45"></div>
            <div className="bg-white border-4 border-black p-6 md:p-8 shadow-neo hover:-translate-y-1 hover:translate-x-1 hover:shadow-neo-hover transition-all">
              <span className="bg-black text-white px-4 py-1 font-bold text-sm uppercase mb-4 inline-block border-2 border-black">1 Year</span>
              <h4 className="text-2xl md:text-3xl font-black uppercase mb-2">Projector Tech & Dome Show Player</h4>
              <p className="font-bold text-xl mb-4 bg-neoGreen inline-block px-2 border-2 border-black">Science City</p>
              <p className="font-semibold text-lg md:text-xl text-gray-800">Managed complex projection hardware and executed large-scale dome shows, cultivating high-pressure technical problem-solving skills.</p>
            </div>
          </div>

          <div className="relative">
             <div className="absolute -left-[52px] md:-left-[68px] top-2 w-8 h-8 bg-neoPink border-4 border-black rounded-none rotate-45"></div>
            <div className="bg-white border-4 border-black p-6 md:p-8 shadow-neo hover:-translate-y-1 hover:translate-x-1 hover:shadow-neo-hover transition-all">
              <span className="bg-black text-white px-4 py-1 font-bold text-sm uppercase mb-4 inline-block border-2 border-black">2024</span>
              <h4 className="text-2xl md:text-3xl font-black uppercase mb-2">Diploma in Computer Science & Tech</h4>
              <p className="font-bold text-xl mb-4 bg-neoCyan inline-block px-2 border-2 border-black">Budge Budge Institute of Technology</p>
              <p className="font-semibold text-lg md:text-xl text-gray-800">Established foundational knowledge in programming logic, relational databases, and data structures.</p>
            </div>
          </div>

          <div className="relative">
             <div className="absolute -left-[52px] md:-left-[68px] top-2 w-8 h-8 bg-neoGreen border-4 border-black rounded-none rotate-45"></div>
            <div className="bg-white border-4 border-black p-6 md:p-8 shadow-neo hover:-translate-y-1 hover:translate-x-1 hover:shadow-neo-hover transition-all">
              <span className="bg-black text-white px-4 py-1 font-bold text-sm uppercase mb-4 inline-block border-2 border-black">2021</span>
              <h4 className="text-2xl md:text-3xl font-black uppercase mb-2">10th Grade (CBSE)</h4>
              <p className="font-bold text-xl mb-4 bg-neoYellow inline-block px-2 border-2 border-black">Kendriya Vidyalaya Command Hospital</p>
              <p className="font-semibold text-lg md:text-xl text-gray-800">Completed secondary education, establishing a strong foundational interest in technology and problem-solving.</p>
            </div>
          </div>

        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="mt-32 max-w-7xl">
        <h3 className="text-4xl md:text-6xl font-black uppercase border-b-8 border-black pb-4 mb-16 inline-block shadow-sm">
          Selected Works
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          
          <div className="bg-white border-4 border-black shadow-neo flex flex-col hover:-translate-y-2 hover:-translate-x-1 hover:shadow-neo-hover transition-all">
            <div className="h-48 bg-neoPink border-b-4 border-black flex items-center justify-center p-4">
              <h4 className="text-3xl font-black uppercase text-center text-black">Placement<br/>System</h4>
            </div>
            <div className="p-6 flex-grow flex flex-col">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-black text-white text-xs font-bold px-2 py-1 border border-black">MongoDB</span>
                <span className="bg-black text-white text-xs font-bold px-2 py-1 border border-black">Express</span>
                <span className="bg-black text-white text-xs font-bold px-2 py-1 border border-black">React</span>
                <span className="bg-black text-white text-xs font-bold px-2 py-1 border border-black">Node.js</span>
              </div>
              <p className="font-semibold text-gray-800 mb-6 flex-grow">Full-stack MERN application for managing placement drives, tracking student applications, and handling recruitment analytics.</p>
              <div className="flex gap-4 mt-auto">
                <a href="https://placementportalmanagesys.netlify.app/" target="_blank" rel="noreferrer" className="flex-1 bg-neoYellow border-2 border-black font-black text-center py-2 hover:bg-black hover:text-neoYellow transition-colors">LIVE DEMO</a>
                <a href="https://github.com/das690/College-Placement-Management-System.git" target="_blank" rel="noreferrer" className="flex-1 bg-white border-2 border-black font-black text-center py-2 hover:bg-black hover:text-white transition-colors">GITHUB</a>
              </div>
            </div>
          </div>

          <div className="bg-white border-4 border-black shadow-neo flex flex-col hover:-translate-y-2 hover:-translate-x-1 hover:shadow-neo-hover transition-all">
            <div className="h-48 bg-neoGreen border-b-4 border-black flex items-center justify-center p-4">
              <h4 className="text-3xl font-black uppercase text-center text-black">Kanban<br/>Board</h4>
            </div>
            <div className="p-6 flex-grow flex flex-col">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-black text-white text-xs font-bold px-2 py-1 border border-black">React</span>
                <span className="bg-black text-white text-xs font-bold px-2 py-1 border border-black">Tailwind</span>
                <span className="bg-black text-white text-xs font-bold px-2 py-1 border border-black">Context API</span>
              </div>
              <p className="font-semibold text-gray-800 mb-6 flex-grow">Drag-and-drop task management tool focusing on robust frontend state management and local storage persistence.</p>
              <div className="flex gap-4 mt-auto">
                <a href="https://kanbanboardappguvi.netlify.app/" target="_blank" rel="noreferrer" className="flex-1 bg-neoYellow border-2 border-black font-black text-center py-2 hover:bg-black hover:text-neoYellow transition-colors">LIVE DEMO</a>
                <a href="https://github.com/das690/kanban-board-app.git" target="_blank" rel="noreferrer" className="flex-1 bg-white border-2 border-black font-black text-center py-2 hover:bg-black hover:text-white transition-colors">GITHUB</a>
              </div>
            </div>
          </div>

          <div className="bg-white border-4 border-black shadow-neo flex flex-col hover:-translate-y-2 hover:-translate-x-1 hover:shadow-neo-hover transition-all">
            <div className="h-48 bg-neoCyan border-b-4 border-black flex items-center justify-center p-4">
              <h4 className="text-3xl font-black uppercase text-center text-black">Recipe<br/>Manager</h4>
            </div>
            <div className="p-6 flex-grow flex flex-col">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-black text-white text-xs font-bold px-2 py-1 border border-black">React</span>
                <span className="bg-black text-white text-xs font-bold px-2 py-1 border border-black">Express</span>
                <span className="bg-black text-white text-xs font-bold px-2 py-1 border border-black">MongoDB</span>
                <span className="bg-black text-white text-xs font-bold px-2 py-1 border border-black">TheMealDB API</span>
              </div>
              <p className="font-semibold text-gray-800 mb-6 flex-grow">Dynamic recipe browser integrating external APIs for search and filtering, with a custom backend for favorites.</p>
              <div className="flex gap-4 mt-auto">
                <a href="https://guvirecipeapp.netlify.app/" target="_blank" rel="noreferrer" className="flex-1 bg-neoYellow border-2 border-black font-black text-center py-2 hover:bg-black hover:text-neoYellow transition-colors">LIVE DEMO</a>
                <a href="https://github.com/das690/RecipeApp.git" target="_blank" rel="noreferrer" className="flex-1 bg-white border-2 border-black font-black text-center py-2 hover:bg-black hover:text-white transition-colors">GITHUB</a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Tech Arsenal (Skills) Section */}
      <section className="mt-32 max-w-5xl">
        <h3 className="text-4xl md:text-6xl font-black uppercase border-b-8 border-black pb-4 mb-12 inline-block shadow-sm">
          Tech Arsenal
        </h3>
        
        <div className="flex flex-wrap gap-4 md:gap-6">
          <span className="bg-neoYellow border-4 border-black px-6 py-3 text-xl md:text-2xl font-black shadow-neo hover:-translate-y-1 hover:shadow-neo-hover transition-all">React</span>
          <span className="bg-neoCyan border-4 border-black px-6 py-3 text-xl md:text-2xl font-black shadow-neo hover:-translate-y-1 hover:shadow-neo-hover transition-all">Node.js</span>
          <span className="bg-neoGreen border-4 border-black px-6 py-3 text-xl md:text-2xl font-black shadow-neo hover:-translate-y-1 hover:shadow-neo-hover transition-all">Express.js</span>
          <span className="bg-neoPink border-4 border-black px-6 py-3 text-xl md:text-2xl font-black shadow-neo hover:-translate-y-1 hover:shadow-neo-hover transition-all">MongoDB</span>
          <span className="bg-white border-4 border-black px-6 py-3 text-xl md:text-2xl font-black shadow-neo hover:-translate-y-1 hover:shadow-neo-hover transition-all">JavaScript</span>
          <span className="bg-neoCyan border-4 border-black px-6 py-3 text-xl md:text-2xl font-black shadow-neo hover:-translate-y-1 hover:shadow-neo-hover transition-all">Tailwind CSS</span>
          <span className="bg-neoYellow border-4 border-black px-6 py-3 text-xl md:text-2xl font-black shadow-neo hover:-translate-y-1 hover:shadow-neo-hover transition-all">MySQL</span>
          <span className="bg-black text-white border-4 border-black px-6 py-3 text-xl md:text-2xl font-black shadow-neo hover:-translate-y-1 hover:shadow-neo-hover transition-all">Git & GitHub</span>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer className="mt-32 border-t-8 border-black pt-12 pb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h2 className="text-4xl md:text-5xl font-black uppercase mb-2">Sayantan Das</h2>
          <p className="font-bold text-xl text-gray-800">Kolkata, WB</p>
        </div>
        
        <div className="flex flex-col gap-2 font-black text-xl md:text-2xl">
          <a href="mailto:dassayantandas@gmail.com" className="hover:text-neoPink transition-colors inline-block border-b-4 border-transparent hover:border-black">
            Email: dassayantandas@gmail.com
          </a>
          <span className="inline-block">Ph: 8910452520</span>
        </div>
      </footer>

    </div>
  );
}

export default App;