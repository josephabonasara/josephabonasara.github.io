import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaArrowRight } from 'react-icons/fa';
import profileImage from '../assets/profilepic.png';

function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen pt-32 pb-20 flex items-center justify-center relative overflow-hidden bg-[#1A191C]"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10 bg-grid-pattern opacity-40">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[140px] animate-pulse"></div>
        <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-indigo-500/10 rounded-full blur-[130px] animate-blob"></div>
        <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px] animate-blob"></div>
      </div>

      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, cubicBezier: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Location & Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold tracking-wide mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
              <span>Software Engineer, AI @ Solace • Ontario, Canada (Open to Relocation)</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold text-[#F5F5F7] tracking-tight mb-6 leading-[1.18] overflow-visible">
              Architecting <br />
              <span className="text-gradient inline-block pb-1.5 overflow-visible">Multi-Agent AI</span> & Cloud Systems
            </h1>

            <p className="text-[#A1A1AA] text-base sm:text-lg mb-8 max-w-xl leading-relaxed font-medium">
              Software Engineer at <span className="text-amber-400 font-semibold">Solace</span> building enterprise AI frameworks, standardized A2A protocols, and custom MCP servers. Creator of <span className="text-cyan-400 font-semibold">QuickAiply</span>.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="#career"
                className="px-7 py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl transition-all shadow-md shadow-amber-500/20 hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2.5 text-sm"
              >
                <span>Explore Experience</span>
                <FaArrowRight className="text-xs text-slate-950" />
              </a>

              <a
                href={`${process.env.PUBLIC_URL}/Joseph_Abonasara.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                download="Joseph_Abonasara.pdf"
                className="px-7 py-3.5 bg-[#232227] hover:bg-[#2A2930] text-[#F5F5F7] font-semibold border border-[#36353F] hover:border-amber-500/40 rounded-xl transition-all flex items-center gap-2.5 text-sm shadow-sm cursor-pointer"
              >
                <FaDownload className="text-amber-400" />
                <span>Resume PDF</span>
              </a>
            </div>

            {/* Core Focus High-Impact Pillars */}
            <div className="flex flex-nowrap items-center gap-2 text-xs font-mono text-[#A1A1AA] overflow-x-auto max-w-full py-1">
              <span className="text-[#71717A] font-sans font-semibold shrink-0">Core Focus:</span>
              <span className="px-2.5 py-1 rounded-xl bg-[#232227] border border-[#36353F] text-[#F5F5F7] font-sans font-semibold shadow-xs shrink-0 whitespace-nowrap">AI & Agentic Systems</span>
              <span className="px-2.5 py-1 rounded-xl bg-[#232227] border border-[#36353F] text-[#F5F5F7] font-sans font-semibold shadow-xs shrink-0 whitespace-nowrap">Automation</span>
              <span className="px-2.5 py-1 rounded-xl bg-[#232227] border border-[#36353F] text-[#F5F5F7] font-sans font-semibold shadow-xs shrink-0 whitespace-nowrap">Performance Testing</span>
              <span className="px-2.5 py-1 rounded-xl bg-[#232227] border border-[#36353F] text-[#F5F5F7] font-sans font-semibold shadow-xs shrink-0 whitespace-nowrap">Distributed Systems</span>
            </div>
          </motion.div>

          {/* Right Column Profile Picture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, cubicBezier: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex justify-center"
          >
            <div className="relative w-full max-w-sm aspect-square">
              {/* Outer Glowing Rings */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-amber-500 via-indigo-500 to-cyan-500 blur-2xl opacity-25 animate-pulse"></div>
              
              <div className="relative w-full h-full rounded-3xl p-1.5 bg-[#232227] border border-[#36353F] shadow-2xl overflow-hidden group">
                <img
                  src={profileImage}
                  alt="Joseph Abonasara"
                  className="w-full h-full object-cover rounded-[20px] filter brightness-[1.01] contrast-[1.02] transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://via.placeholder.com/400x400?text=Joseph+Abonasara";
                  }}
                />
                
                {/* Floating Badge overlay */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-[#1A191C]/90 backdrop-blur-md border border-[#36353F] flex items-center gap-3 shadow-lg">
                  <div className="w-3 h-3 rounded-full bg-emerald-400 shadow-[0_0_8px_#34D399]"></div>
                  <div>
                    <p className="text-xs font-bold text-[#F5F5F7]">Software Engineer, AI</p>
                    <p className="text-[10px] text-[#A1A1AA]">Solace</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;