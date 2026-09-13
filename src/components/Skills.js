import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaRobot, FaNetworkWired, FaSearch, FaSlidersH, FaTerminal, FaCloud, FaDatabase, FaCode, FaCogs, FaProjectDiagram } from 'react-icons/fa';
import 'devicon/devicon.min.css';

import cockroachLogo from '../assets/cockroachdb-logo.png';
import openaiLogo from '../assets/openai-logo.png';
import machineLearningLogo from '../assets/machine-learning-logo.png';

// Custom SVG icon for Claude / Anthropic
const ClaudeIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-amber-400 group-hover:text-amber-300 transition-colors" {...props}>
    <path d="M17.472 4.5H13.72l5.76 15h3.752l-5.76-15zm-10.944 0L.768 19.5h3.752l1.152-3h6.144l1.152 3h3.752L10.944 4.5H6.528zm.96 3.6 2.064 5.4H5.424l2.064-5.4z"/>
  </svg>
);

function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const skillCategories = [
    {
      category: "Languages",
      icon: FaCode,
      skills: [
        { name: "Python", iconClass: "devicon-python-plain colored" },
        { name: "Java", iconClass: "devicon-java-plain colored" },
        { name: "Go (Golang)", iconClass: "devicon-go-plain colored" },
        { name: "TypeScript", iconClass: "devicon-typescript-plain colored" },
        { name: "JavaScript", iconClass: "devicon-javascript-plain colored" },
        { name: "SQL", iconClass: "devicon-azuresqldatabase-plain colored" },
        { name: "Kotlin", iconClass: "devicon-kotlin-plain colored" },
        { name: "Bash", iconClass: "devicon-bash-plain" },
        { name: "HTML5", iconClass: "devicon-html5-plain colored" },
        { name: "CSS3", iconClass: "devicon-css3-plain colored" },
      ]
    },
    {
      category: "Frameworks",
      icon: FaCogs,
      skills: [
        { name: "FastAPI", iconClass: "devicon-fastapi-plain colored" },
        { name: "Spring Boot", iconClass: "devicon-spring-plain colored" },
        { name: "Flask", iconClass: "devicon-flask-original colored" },
        { name: "React.js", iconClass: "devicon-react-original colored" },
        { name: "Node.js", iconClass: "devicon-nodejs-plain colored" },
        { name: "AngularJS", iconClass: "devicon-angularjs-plain colored" },
        { name: "JUnit", iconClass: "devicon-java-plain colored" },
        { name: "Cucumber", iconClass: "devicon-cucumber-plain colored" },
        { name: "Selenium", iconClass: "devicon-selenium-original colored" },
      ]
    },
    {
      category: "Cloud & DevOps",
      icon: FaCloud,
      skills: [
        { name: "Kubernetes", iconClass: "devicon-kubernetes-plain colored" },
        { name: "Docker", iconClass: "devicon-docker-plain colored" },
        { name: "AWS", customIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
        { name: "GCP", iconClass: "devicon-googlecloud-plain colored" },
        { name: "Azure", iconClass: "devicon-azure-plain colored" },
        { name: "Railway", iconClass: "devicon-railway-plain colored" },
        { name: "Vercel", iconClass: "devicon-vercel-original colored" },
        { name: "GitHub Actions", iconClass: "devicon-githubactions-plain colored" },
        { name: "Jenkins", iconClass: "devicon-jenkins-plain colored" },
        { name: "Artillery", reactIcon: FaCogs },
        { name: "JMeter", reactIcon: FaCogs },
        { name: "HashiCorp Vault", iconClass: "devicon-vault-plain colored" },
        { name: "AWS S3", iconClass: "devicon-amazonwebservices-plain colored" },
      ]
    },
    {
      category: "AI & Automation",
      icon: FaRobot,
      skills: [
        { name: "Claude & Claude Code", reactIcon: ClaudeIcon },
        { name: "OpenAI", customIcon: openaiLogo },
        { name: "Prompt Engineering", reactIcon: FaRobot },
        { name: "AI Agents", customIcon: machineLearningLogo },
        { name: "MCP Protocol", reactIcon: FaNetworkWired },
        { name: "Solace Agent Mesh", reactIcon: FaProjectDiagram },
        { name: "Codex & Cursor", reactIcon: FaCode },
      ]
    },
    {
      category: "Databases",
      icon: FaDatabase,
      skills: [
        { name: "PostgreSQL", iconClass: "devicon-postgresql-plain colored" },
        { name: "DynamoDB", iconClass: "devicon-dynamodb-plain colored" },
        { name: "CockroachDB", customIcon: cockroachLogo },
        { name: "Redis", iconClass: "devicon-redis-plain colored" },
        { name: "Elasticsearch", iconClass: "devicon-elasticsearch-plain colored" },
        { name: "MongoDB", iconClass: "devicon-mongodb-plain colored" },
      ]
    },
    {
      category: "Tools & Observability",
      icon: FaTerminal,
      skills: [
        { name: "Linux", iconClass: "devicon-linux-plain" },
        { name: "Prometheus", iconClass: "devicon-prometheus-plain colored" },
        { name: "Splunk", iconClass: "devicon-splunk-plain-wordmark colored" },
        { name: "Datadog", reactIcon: FaCogs },
        { name: "Git", iconClass: "devicon-git-plain colored" },
        { name: "REST APIs", reactIcon: FaNetworkWired },
      ]
    },
  ];

  const categories = ["All", ...skillCategories.map(c => c.category)];

  // Filter skills based on tab selection & search query
  const filteredSkills = skillCategories
    .filter(c => activeCategory === "All" || c.category === activeCategory)
    .flatMap(c => c.skills.map(s => ({ ...s, category: c.category })))
    .filter(s => s.name.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <section id="skills" className="py-28 bg-[#1A191C] relative overflow-hidden">
      {/* Background Decorative Mesh & Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/5 rounded-full blur-[160px] pointer-events-none -z-10"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none -z-10"></div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-4 shadow-sm">
            <FaSlidersH className="text-xs text-amber-400" />
            <span>Skills & Toolkit</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F5F5F7] tracking-tight mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-[#A1A1AA] max-w-2xl mx-auto text-base font-medium">
            Technologies, frameworks, and tools I work with daily across AI systems, cloud infrastructure, and software engineering.
          </p>
        </motion.div>

        {/* Filter Controls & Search Input */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Tabs - Single horizontal row aligned with overflow scroll for small screens */}
          <div className="flex items-center gap-1 overflow-x-auto no-scrollbar bg-[#232227] p-1.5 rounded-2xl border border-[#36353F] w-full lg:w-auto shadow-sm">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  activeCategory === cat
                    ? 'bg-amber-500 text-slate-950 shadow-md font-bold'
                    : 'text-[#A1A1AA] hover:text-[#F5F5F7] hover:bg-[#2A2930]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full lg:w-72 flex-shrink-0">
            <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#71717A] text-xs" />
            <input
              type="text"
              placeholder="Search skill (e.g. MCP, React)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 bg-[#232227] border border-[#36353F] rounded-xl text-xs text-[#F5F5F7] placeholder-[#71717A] focus:outline-none focus:border-amber-500 transition-colors shadow-sm font-medium"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#71717A] hover:text-[#F5F5F7]"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Skill Card Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {filteredSkills.map((skill, i) => (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.15 }}
              key={`${activeCategory}-${skill.name}-${i}`}
              className="glass-card p-5 flex flex-col items-center justify-center gap-3 group cursor-pointer hover:border-amber-500/40 bg-[#232227] border border-[#36353F] shadow-sm relative overflow-hidden"
            >
              {/* Subtle Hover Accent Overlay */}
              <div className="absolute inset-0 bg-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="text-4xl transition-transform duration-300 group-hover:scale-110 flex items-center justify-center h-12 w-12 text-[#F5F5F7]">
                {skill.reactIcon ? (
                  <skill.reactIcon className="text-3xl text-amber-400 group-hover:text-amber-300 transition-colors" />
                ) : skill.iconClass ? (
                  <i className={skill.iconClass}></i>
                ) : (
                  <img
                    src={skill.customIcon}
                    alt={skill.name}
                    className="w-10 h-10 object-contain filter drop-shadow-sm"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://via.placeholder.com/40?text=" + skill.name.charAt(0);
                    }}
                  />
                )}
              </div>

              <div className="text-center relative z-10">
                <p className="text-[#F5F5F7] font-bold text-xs group-hover:text-amber-400 transition-colors">
                  {skill.name}
                </p>
                {activeCategory === "All" && (
                  <span className="text-[10px] text-[#A1A1AA] font-mono mt-0.5 block font-medium">
                    {skill.category}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-16 text-[#71717A]">
            <p className="text-sm font-medium">No skills match "{searchQuery}"</p>
            <button
              onClick={() => { setSearchQuery(""); setActiveCategory("All"); }}
              className="mt-3 text-xs text-amber-400 hover:underline font-bold"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Skills;