import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaStar, FaChevronRight, FaLayerGroup, FaExternalLinkAlt, FaExpandAlt } from "react-icons/fa";
import project1Image from "../assets/github-ai-logo.png";
import microIntegrationImage from "../assets/micro-integration.png";
import quickApplyImage from "../assets/quickaiply-logo.png";
import quickApplyFallback from "../assets/quickapply.png";
import medicalExamDbImage from "../assets/medical-exam-db.png";
import kubernetesImage from "../assets/kubernetes.png";

const featuredSpotlight = {
  title: "QuickAiply",
  subtitle: "AI-Powered Chrome Extension & Job Automation Platform",
  date: "Jan 2025 - Present",
  tag: "Featured Founder Platform",
  image: quickApplyImage || quickApplyFallback,
  stats: [
    { label: "Autofill Accuracy", value: "95%+" },
    { label: "Active Users", value: "30+" },
    { label: "Call-back Rate", value: "Top-Tier Tech" },
    { label: "Supported Platforms", value: "Lever, Workday, Greenhouse" },
  ],
  description: [
    "Created an AI-powered Chrome extension that autofills job applications, answers complex open-ended questions, and generates customizable AI cover letters.",
    "Architected full-stack backend using FastAPI (Python), Railway (PostgreSQL), and React (Vite) deployed on Vercel.",
    "Integrated multi-LLM support (OpenAI, Anthropic, DeepSeek) with privacy-first Bring-Your-Own-API-Key (BYOK) capability.",
    "Scaled platform to 30+ community job seekers, successfully landing interview call-backs at Google, Amazon, Stripe, xAI, and Coinbase."
  ],
  skills: ["React (Vite)", "FastAPI", "Python", "Railway", "TypeScript", "OpenAI", "Anthropic", "DeepSeek", "Chrome Extension"],
  link: "https://quickaiply.com",
};

const projectsList = [
  {
    title: "MCP Release Captain Server & Solace Agent Mesh",
    subtitle: "Enterprise Multi-Agent AI & Release Lifecycle Automation",
    date: "Sep 2023 - Present",
    tag: "Solace AI Framework",
    description: [
      "Built a custom MCP server exposing 30+ actions for release automation via GitHub, JIRA, Slack, Confluence, and cloud services.",
      "Authored standardized Agent Mesh Offline Evaluation tools allowing async LLM-as-a-Judge evaluations without impacting production.",
      "Reduced weekly micro-integration release cycle from 3 days to under 1 hour.",
    ],
    skills: ["Solace Agent Mesh", "MCP Server", "Python", "A2A Protocols", "JIRA API", "Slack API", "AWS"],
    image: microIntegrationImage,
  },
  {
    title: "AI PR Reviewer & Automated QA Generators",
    subtitle: "3x Internal Solace Hackathon Winner",
    date: "Mar 2024 - Present",
    tag: "Hackathon Winner",
    description: [
      "Won 3 consecutive internal hackathons at Solace by building production-grade AI engineering tools.",
      "Built GitHub Actions AI reviewer inspecting diffs, identifying security vulnerabilities, and generating complete PR documentation from JIRA tickets.",
      "Accelerated engineering velocity and standardized quality assurance plans across core teams.",
    ],
    skills: ["GitHub Actions", "OpenAI API", "Python", "Jira API", "Automation", "CI/CD"],
    image: project1Image,
  },
  {
    title: "End-to-End Performance Testing Framework",
    subtitle: "Solace Micro-Integrations Performance Pipeline",
    date: "Jun 2024 - Present",
    tag: "Performance & QA",
    description: [
      "Architected automated load testing pipelines for 15+ cloud micro-integrations using k6, Artillery, and cloud APIs.",
      "Automated AWS S3 historical metrics storage, Confluence trend graphing, and real-time Slack regression alerts with AI summaries.",
      "Reduced connector onboarding setup time by 4+ hours per micro-integration.",
    ],
    skills: ["k6", "Artillery", "AWS S3", "Datadog", "Confluence API", "Slack Webhooks", "Java"],
    image: microIntegrationImage,
  },
  {
    title: "Medical School Exam Database Platform",
    subtitle: "Secure Full-Stack Exam Management System",
    date: "Jan 2023 - Dec 2023",
    tag: "Full-Stack Web App",
    description: [
      "Developed a secure full-stack web application for generating, cataloging, and managing medical school examination papers.",
      "Implemented advanced query filtering, question tagging, automated test creation, and role-based access control.",
    ],
    skills: ["React", "Spring Boot", "PostgreSQL", "JUnit", "Cypress", "Java"],
    image: medicalExamDbImage,
  },
  {
    title: "One-Step Multi-Region Cluster Creation",
    subtitle: "Twitter Infrastructure Automation Tool",
    date: "May 2022 - Aug 2022",
    tag: "Twitter Infrastructure",
    description: [
      "Developed a one-step cluster provisioning tool using Bash, Kubernetes, and Kustomize.",
      "Reduced multi-region cluster setup time by 95% while integrating Prometheus CQL metrics monitoring and Splunk logging.",
    ],
    skills: ["Kubernetes", "Bash", "Prometheus", "Splunk", "CockroachDB", "Kustomize"],
    image: kubernetesImage,
  },
];

function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activeProject]);

  return (
    <section id="projects" className="py-28 bg-[#1A191C] relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-10 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[160px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[150px] pointer-events-none -z-10"></div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-4 shadow-sm">
            <FaLayerGroup className="text-xs text-amber-400" />
            <span>Portfolio Highlights</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F5F5F7] tracking-tight mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-[#A1A1AA] max-w-2xl mx-auto text-base font-medium">
            Production AI platforms, multi-agent frameworks, and distributed cloud infrastructure. Select any project to explore full system designs.
          </p>
        </motion.div>

        {/* SPOTLIGHT BANNER: QuickAiply */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16 rounded-3xl p-[1px] bg-gradient-to-r from-amber-500 via-indigo-500 to-cyan-500 shadow-2xl group"
        >
          <div className="bg-[#232227] text-[#F5F5F7] border border-[#36353F] rounded-[23px] p-6 sm:p-10 backdrop-blur-2xl grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 font-bold text-xs tracking-wider uppercase flex items-center gap-1.5 shadow-sm">
                    <FaStar className="text-[10px] text-amber-400" />
                    {featuredSpotlight.tag}
                  </span>
                  <span className="text-xs font-mono text-cyan-400 font-semibold">{featuredSpotlight.date}</span>
                </div>
                <a
                  href={featuredSpotlight.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-all shadow-md shadow-amber-500/20 hover:scale-105"
                >
                  <span>quickaiply.com</span>
                  <FaExternalLinkAlt className="text-[10px]" />
                </a>
              </div>

              <div>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-[#F5F5F7] tracking-tight">
                  {featuredSpotlight.title}
                </h3>
                <p className="text-[#A1A1AA] text-sm font-medium mt-1">
                  {featuredSpotlight.subtitle}
                </p>
              </div>

              {/* Stats Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-3 border-y border-[#36353F]">
                {featuredSpotlight.stats.map((stat, i) => (
                  <div key={i} className="bg-[#1A191C] p-2.5 rounded-xl border border-[#36353F] text-center">
                    <p className="text-base sm:text-lg font-black text-amber-400">{stat.value}</p>
                    <p className="text-[10px] text-[#A1A1AA] font-medium">{stat.label}</p>
                  </div>
                ))}
              </div>

              <ul className="space-y-2">
                {featuredSpotlight.description.map((pt, i) => (
                  <li key={i} className="text-[#A1A1AA] text-xs sm:text-sm flex items-start gap-2.5">
                    <FaChevronRight className="text-amber-400 text-xs mt-1 flex-shrink-0" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <div className="flex flex-wrap gap-1.5">
                  {featuredSpotlight.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-lg bg-[#1A191C] text-[#F5F5F7] border border-[#36353F] text-xs font-mono font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Spotlight Image Card */}
            <div className="lg:col-span-5 relative flex justify-center">
              <a
                href={featuredSpotlight.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-full aspect-video rounded-2xl overflow-hidden border border-[#36353F] shadow-2xl group-hover:border-amber-500/50 transition-colors bg-[#1A191C] block"
              >
                <img
                  src={featuredSpotlight.image}
                  alt={featuredSpotlight.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://via.placeholder.com/600x400?text=QuickAiply+AI+Platform";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A191C] via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-[#F5F5F7] font-medium">
                  <span>Vercel + FastAPI + Railway</span>
                  <span className="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 font-bold">Live Platform</span>
                </div>
              </a>
            </div>
          </div>
        </motion.div>

        {/* REGULAR PROJECTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsList.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card overflow-hidden group cursor-pointer h-full flex flex-col bg-[#232227] border border-[#36353F] hover:border-amber-500/40 shadow-sm"
              onClick={() => setActiveProject(project)}
            >
              <div className="relative h-48 overflow-hidden bg-[#1A191C]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://via.placeholder.com/400x250?text=" + encodeURIComponent(project.title);
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A191C] via-transparent to-transparent"></div>
                <div className="absolute top-3 left-3 flex items-center justify-between right-3">
                  <span className="px-2.5 py-1 rounded-full bg-[#1A191C]/90 text-amber-300 border border-amber-500/30 text-[10px] font-bold tracking-wide shadow-sm backdrop-blur-md">
                    {project.tag}
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-[#1A191C]/90 text-zinc-300 border border-[#36353F] text-[10px] font-medium tracking-wide shadow-sm backdrop-blur-md flex items-center gap-1 group-hover:text-amber-400 group-hover:border-amber-500/40 transition-colors">
                    <FaExpandAlt className="text-[9px]" /> Click to expand
                  </span>
                </div>
              </div>

              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-[#F5F5F7] mb-1 group-hover:text-amber-400 transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs text-amber-400 font-mono font-semibold mb-3">{project.date}</p>
                  <p className="text-xs text-[#A1A1AA] line-clamp-3 mb-4 leading-relaxed font-normal">
                    {project.description[0]}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-[#36353F]">
                  {project.skills.slice(0, 3).map((skill, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#1A191C] text-[#F5F5F7] border border-[#36353F] font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                  {project.skills.length > 3 && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/15 text-amber-300 border border-amber-500/30 font-bold">
                      +{project.skills.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* MODAL DETAILED VIEW */}
        <AnimatePresence>
          {activeProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-[#121114]/95 backdrop-blur-xl z-50 flex items-center justify-center p-4"
              onClick={() => setActiveProject(null)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                className="bg-[#232227] opacity-100 border border-[#36353F] w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl p-6 sm:p-8 relative shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute top-5 right-5 text-[#A1A1AA] hover:text-[#F5F5F7] p-2 rounded-full hover:bg-[#1A191C] transition-colors z-10"
                  onClick={() => setActiveProject(null)}
                >
                  <FaTimes size={20} />
                </button>

                <div className="space-y-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/30 text-xs font-semibold">
                      {activeProject.tag}
                    </span>
                    <span className="text-xs font-mono text-[#A1A1AA] font-semibold">{activeProject.date}</span>
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F5F5F7]">{activeProject.title}</h3>
                    <p className="text-amber-400 text-sm font-semibold mt-1">{activeProject.subtitle}</p>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-[#71717A] uppercase tracking-wider mb-3 font-mono">
                      Key Highlights & Architecture
                    </h4>
                    <ul className="space-y-2.5">
                      {activeProject.description.map((pt, i) => (
                        <li key={i} className="text-[#A1A1AA] text-sm flex items-start gap-2.5 leading-relaxed font-normal">
                          <FaChevronRight className="text-amber-400 text-xs mt-1 flex-shrink-0" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-[#71717A] uppercase tracking-wider mb-3 font-mono">
                      Technologies & Tools
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {activeProject.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-lg bg-[#1A191C] border border-[#36353F] text-[#F5F5F7] text-xs font-mono font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Projects;