import { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Copy, 
  Check, 
  Send, 
  Sparkles, 
  MessageSquare, 
  Clock, 
  ArrowUpRight 
} from 'lucide-react';
import { Github, Linkedin } from './Icons';
import confetti from 'canvas-confetti';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Hiring / Placement Opportunity',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const quickSubjects = [
    'Hiring / Placement Opportunity',
    'Full-Stack Web Project',
    'Technical Discussion',
    'General Inquiry'
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('dassayantandas@gmail.com');
    setCopiedEmail(true);
    confetti({ particleCount: 40, spread: 50, origin: { y: 0.8 } });
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('+918910452520');
    setCopiedPhone(true);
    confetti({ particleCount: 40, spread: 50, origin: { y: 0.8 } });
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#38bdf8', '#c084fc', '#4ade80', '#fcd34d']
    });

    setFormSubmitted(true);

    // Open user's email client with pre-populated details
    const mailtoUrl = `mailto:dassayantandas@gmail.com?subject=${encodeURIComponent(
      `[Portfolio Inquiry] ${formData.subject} - from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Hi Sayantan,\n\nName: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`
    )}`;

    window.open(mailtoUrl, '_blank');
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-[#090d16] border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Let's Connect
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight mb-4">
            Ready To Create Impact? <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400">
              Let's Build Together.
            </span>
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            I am actively interviewing for software engineering roles, full-stack development positions, and technical opportunities. Feel free to reach out directly or send a message below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Status card */}
            <div className="rounded-3xl bg-[#0e1424] border border-cyan-500/20 p-6 sm:p-7 shadow-xl">
              <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-medium mb-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                Active Candidate Status
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Open to Full-Time & Internship Roles
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Available immediately for on-site (Kolkata, Bengaluru, Hyderabad, Pune, NCR) or remote software engineering positions.
              </p>
            </div>

            {/* Email Card */}
            <div className="group rounded-3xl bg-[#0e1424] border border-white/10 p-6 flex items-center justify-between gap-4 shadow-md hover:border-cyan-500/40 hover:shadow-glow-cyan transition-all">
              <div className="flex items-center gap-4 min-w-0">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs font-mono text-slate-400 block mb-0.5">Direct Email</span>
                  <a
                    href="mailto:dassayantandas@gmail.com"
                    className="text-sm sm:text-base font-semibold text-white hover:text-cyan-400 transition-colors truncate block"
                  >
                    dassayantandas@gmail.com
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="p-2.5 rounded-xl bg-white/5 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-500/30 text-slate-300 hover:text-cyan-400 transition-all shrink-0"
                title="Copy Email"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="group rounded-3xl bg-[#0e1424] border border-white/10 p-6 flex items-center justify-between gap-4 shadow-md hover:border-cyan-500/40 hover:shadow-glow-cyan transition-all">
              <div className="flex items-center gap-4 min-w-0">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs font-mono text-slate-400 block mb-0.5">Phone / WhatsApp</span>
                  <a
                    href="tel:8910452520"
                    className="text-sm sm:text-base font-semibold text-white hover:text-cyan-400 transition-colors truncate block"
                  >
                    +91 8910452520
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopyPhone}
                className="p-2.5 rounded-xl bg-white/5 hover:bg-purple-500/20 border border-white/10 hover:border-purple-500/30 text-slate-300 hover:text-purple-400 transition-all shrink-0"
                title="Copy Phone"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location Card */}
            <div className="rounded-3xl bg-[#0e1424] border border-white/10 p-6 flex items-center gap-4 shadow-md">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono text-slate-400 block mb-0.5">Location</span>
                <span className="text-sm sm:text-base font-semibold text-white">
                  Kolkata, West Bengal, India
                </span>
              </div>
            </div>

            {/* Social Network Links */}
            <div className="flex gap-4 pt-2">
              <a
                href="https://github.com/das690"
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-3 px-4 rounded-2xl bg-[#0e1424] border border-white/10 hover:border-cyan-500/40 flex items-center justify-center gap-2 text-sm font-semibold text-slate-300 hover:text-white transition-all"
              >
                <Github className="w-4 h-4 text-cyan-400" />
                <span>GitHub Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
              </a>

              <a
                href="https://www.linkedin.com/in/sayantan-das-38096a204"
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-3 px-4 rounded-2xl bg-[#0e1424] border border-white/10 hover:border-cyan-500/40 flex items-center justify-center gap-2 text-sm font-semibold text-slate-300 hover:text-white transition-all"
              >
                <Linkedin className="w-4 h-4 text-cyan-400" />
                <span>LinkedIn Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Message Composer Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-[#0e1424] border border-white/10 p-7 sm:p-10 shadow-2xl relative overflow-hidden">
              
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider mb-6">
                <MessageSquare className="w-4 h-4" />
                Send a Direct Message
              </div>

              {formSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Message Prepared!</h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto">
                    Your email client should have opened with your message. If not, you can copy the details or email Sayantan directly at <span className="text-cyan-400 font-mono">dassayantandas@gmail.com</span>.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-6 px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-sm font-semibold text-white transition-all"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Quick Subject Chips */}
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-2">
                      Topic of Discussion
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {quickSubjects.map((sub) => (
                        <button
                          type="button"
                          key={sub}
                          onClick={() => setFormData({ ...formData, subject: sub })}
                          className={`text-xs px-3 py-1.5 rounded-lg border font-medium transition-all ${
                            formData.subject === sub
                              ? 'bg-cyan-400 text-black border-cyan-400 shadow-neo-sm font-bold'
                              : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                          }`}
                        >
                          {sub}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Jane Doe / HR Recruiter"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#080b11] border border-white/10 focus:border-cyan-400 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-2">
                        Your Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. jane@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#080b11] border border-white/10 focus:border-cyan-400 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Hi Sayantan, we reviewed your MERN projects and would love to discuss an opportunity..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#080b11] border border-white/10 focus:border-cyan-400 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-xl font-bold text-black bg-gradient-to-r from-cyan-400 via-sky-400 to-cyan-300 shadow-neo hover:shadow-glow-cyan hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 text-base transition-all duration-200"
                  >
                    <Send className="w-5 h-5" />
                    <span>Send Inquiry to Sayantan</span>
                  </button>

                  <div className="flex items-center justify-center gap-2 text-xs text-slate-400 font-mono">
                    <Clock className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Typical response time: within 12–24 hours</span>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
