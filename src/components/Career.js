import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaCalendarAlt, FaChevronRight, FaBriefcase } from 'react-icons/fa';
import solaceLogo from '../assets/solace-logo.png';
import uottawaLogo from '../assets/uottawa-logo.png';
import nokiaLogo from '../assets/nokia-logo.png';
import twitterLogo from '../assets/twitter-logo.png';
import craLogo from '../assets/cra-logo.png';
import quickApplyLogo from "../assets/quickaiply-logo.png";
import quickApplyFallback from "../assets/quickapply.png";

function Career() {
  const jobs = [
    {
      company: "Solace",
      logo: solaceLogo,
      title: "Software Engineer, AI",
      location: "Ontario, Canada (Open to Relocation)",
      date: "Sep 2023 - Present",
      type: "Full-Time",
      highlight: "AI Systems & Automation Architect",
      skills: ["Solace Agent Mesh", "Go (Golang)", "Python", "A2A Protocols", "MCP Server", "k6", "Artillery", "AWS S3", "Slack API", "Java"],
      description: [
        "Helped develop Solace Agent Mesh, an enterprise-grade framework leveraging event-driven architecture to orchestrate multi-agent AI systems via standardized A2A protocols.",
        "Architected the Agent Mesh Offline Evaluations tool, empowering customers to evaluate live AI agents asynchronously across varying LLM models, prompts, and custom LLM-as-a-Judge evaluators without modifying production environments.",
        "Architected end-to-end performance automation frameworks for Micro-integrations and Solace Agent Mesh using k6, Artillery, and cloud APIs. Automated S3 data storage and Confluence graphing to track historical trends, while integrating AI summaries and real-time Slack notifications for rapid regression detection.",
        "Designed a spec-driven automation framework streamlining onboarding for 15+ cloud micro-integrations (GCP, AWS SQS, AWS SNS, Azure ServiceBus, IBM MQ, TIBCO, and JMS), reducing setup time by 4+ hours per connector.",
        "Built a custom MCP server orchestrating AI agents to automate the full micro-integration release lifecycle, reducing weekly release time from 3 days to <1 hour."
      ],
    },
    {
      company: "QuickAiply",
      logo: quickApplyLogo || quickApplyFallback,
      title: "Founder / Full-Stack Engineer",
      location: "Ontario, Canada / Remote",
      date: "Jan 2025 - Present",
      type: "Founder Project",
      highlight: "AI Job Automation Platform",
      skills: ["React (Vite)", "FastAPI", "Railway", "TypeScript", "OpenAI", "Anthropic", "DeepSeek", "Chrome Extension"],
      description: [
        "Created an AI-powered Chrome extension that autofills job applications, answers open-ended questions, and generates customizable, tailored AI cover letters directly on job pages like Lever, Workday, and Greenhouse.",
        "Built the full-stack platform using React (Vite), FastAPI (Python), Railway, and TypeScript, deployed on Vercel, with features like 95%+ form autofill accuracy, custom AI prompt support, and intelligent resume selection.",
        "Designed an in-extension UI for live preview, editing, and downloading of AI-generated cover letters. Integrated OpenAI, Anthropic, and DeepSeek with an optional bring-your-own-API-key setup for privacy and cost flexibility.",
        "Scaled the free-to-use platform to 30+ community users, generating optimized applications that successfully secured interview call-backs from top-tier companies including Google, Amazon, Stripe, xAI, and Coinbase."
      ],
    },
    {
      company: "Nokia",
      logo: nokiaLogo,
      title: "Software Developer Intern",
      location: "Ontario, Canada",
      date: "May 2023 - Sep 2023",
      type: "Internship",
      highlight: "+80% Test Coverage Boost",
      skills: ["Java", "Cucumber", "JUnit", "REST APIs", "Kubernetes", "Postman", "CI/CD"],
      description: [
        "Designed and implemented automated REST API integration testing pipelines from scratch using Java, Cucumber, and JUnit within a Kubernetes environment, increasing test coverage by 80%."
      ],
    },
    {
      company: "Twitter",
      logo: twitterLogo,
      title: "Software Engineering Intern",
      location: "San Francisco, CA, USA",
      date: "May 2022 - Aug 2022",
      type: "Internship",
      highlight: "95% Provisioning Time Reduction",
      skills: ["Kubernetes", "Bash", "Python", "Prometheus", "CockroachDB", "Splunk", "CQL"],
      description: [
        "Developed a one-step automation tool for cluster creation using Bash and Kubernetes, reducing provisioning time by 95%.",
        "Utilized Python and Prometheus to enhance cluster monitoring by writing custom CQL commands, updating cluster dashboards with comprehensive metrics, and integrating performance tracking capabilities.",
        "Integrated Splunk logging into CockroachDB clusters, enabling centralized and advanced logging capabilities for effective debugging and performance analysis."
      ],
    },
    {
      company: "University of Ottawa",
      logo: uottawaLogo,
      title: "Teaching Assistant",
      location: "Ontario, Canada",
      date: "Jan 2023 - Dec 2023",
      type: "Academic",
      highlight: "Algorithms & Systems Instruction",
      skills: ["Design & Analysis of Algorithms (CSI3505)", "QA Testing (SEG3503)", "Operating Systems (CSI3131)"],
      description: [
        "TA and lab instructor for Design and Analysis of Algorithms (CSI3505), Quality Assurance Testing (SEG 3503), and Operating Systems (CSI 3131)."
      ],
    },
    {
      company: "Canada Revenue Agency",
      logo: craLogo,
      title: "IT Developer",
      location: "Ontario, Canada",
      date: "May 2020 - Aug 2021",
      type: "Co-op",
      highlight: "Enterprise Automation",
      skills: ["Java", "SQL", "DB2", "XML", "COBOL", "Mainframe", "Quality Assurance"],
      description: [
        "Developed Java automation tools improving processing efficiency for the Amendments team across distributed and mainframe environments."
      ],
    },
  ];

  return (
    <section id="career" className="py-28 bg-[#1A191C] relative overflow-hidden">
      {/* Background Subtle Gradient Lines */}
      <div className="absolute inset-0 bg-dots-pattern opacity-40 pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-4 shadow-sm">
            <FaBriefcase className="text-xs text-amber-400" />
            <span>Career Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F5F5F7] tracking-tight mb-4">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-[#A1A1AA] max-w-xl mx-auto text-base font-medium">
            Track record of designing multi-agent AI frameworks, cloud infrastructure tools, and full-stack software applications.
          </p>
        </motion.div>

        {/* Clean Vertical Stack Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-[#36353F] space-y-10">
          {jobs.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Glowing Node Marker on Left Line */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-6 w-4 h-4 rounded-full bg-[#1A191C] border-2 border-amber-400 z-20 shadow-md group-hover:scale-125 transition-transform flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-400"></div>
              </div>

              {/* Full Width High-Readability Card */}
              <div className="glass-card p-6 sm:p-8 bg-[#232227] border-[#36353F] hover:border-amber-500/40 transition-all rounded-2xl shadow-md">
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 pb-4 border-b border-[#36353F]">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-[#1A191C] p-2.5 flex items-center justify-center border border-[#36353F] group-hover:border-amber-500/40 transition-colors shadow-sm flex-shrink-0">
                      <img
                        src={job.logo}
                        alt={`${job.company} logo`}
                        className="w-full h-full object-contain rounded-lg"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "https://via.placeholder.com/56?text=" + job.company.charAt(0);
                        }}
                      />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-[#F5F5F7] tracking-tight">
                        {job.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-amber-400 font-extrabold text-base">{job.company}</span>
                        <span className="text-xs text-[#71717A]">•</span>
                        <span className="text-xs px-2.5 py-0.5 rounded bg-[#1A191C] text-[#A1A1AA] border border-[#36353F] font-mono font-medium">
                          {job.type}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Date & Location */}
                  <div className="flex flex-col sm:items-end gap-1 text-xs font-mono text-[#A1A1AA]">
                    <span className="flex items-center gap-1.5 text-amber-400 font-bold text-sm">
                      <FaCalendarAlt className="text-xs" />
                      {job.date}
                    </span>
                    <span className="flex items-center gap-1.5 text-[#A1A1AA]">
                      <FaMapMarkerAlt className="text-xs text-cyan-400" />
                      {job.location}
                    </span>
                  </div>
                </div>

                {/* Highlight Impact Badge */}
                {job.highlight && (
                  <div className="mb-4">
                    <span className="inline-block text-xs font-extrabold text-amber-300 bg-amber-500/15 px-3 py-1 rounded-full border border-amber-500/30 shadow-xs">
                      ⚡ Key Impact: {job.highlight}
                    </span>
                  </div>
                )}

                {/* Bullet Points with High Contrast Readable Text */}
                <ul className="space-y-3 mb-6">
                  {job.description.map((point, i) => (
                    <li key={i} className="text-[#E2E8F0] text-sm sm:text-base flex items-start gap-3 leading-relaxed font-normal">
                      <FaChevronRight className="text-amber-400 text-xs mt-1.5 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-[#36353F]">
                  {job.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-lg bg-[#1A191C] text-[#F5F5F7] text-xs font-mono font-medium border border-[#36353F]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Career;