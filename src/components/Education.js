import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaAward, FaCalendarAlt, FaCheckCircle } from 'react-icons/fa';
import francoCiteLogo from '../assets/franco-cite-logo.png';
import uottawaLogo from '../assets/uottawa-logo.png';

function Education() {
  const educationDetails = [
    {
      institution: "University of Ottawa",
      logo: uottawaLogo,
      degree: "Bachelor's, Software Engineering",
      honors: "Summa Cum Laude",
      gpa: "GPA: 9.57 / 10.0",
      date: "September 2019 - December 2023",
      location: "Ontario, Canada",
      description: [
        "Graduated Summa Cum Laude with a top 9.57 / 10.0 GPA across the Software Engineering program.",
        "Served as Teaching Assistant & Lab Instructor for CSI3505 (Algorithms), SEG3503 (Software Quality Assurance Testing), and CSI3131 (Operating Systems).",
        "Specialized in distributed systems architecture, event-driven systems, quality assurance pipelines, and artificial intelligence integration."
      ],
      highlights: ["Summa Cum Laude", "Algorithms TA", "Operating Systems TA", "Quality Assurance TA"]
    },
    {
      institution: "École secondaire catholique Franco-Cité",
      logo: francoCiteLogo,
      degree: "High School Diploma",
      honors: "Honor Roll (96% Average)",
      date: "2013 - 2019",
      location: "Ontario, Canada",
      description: [
        "Graduated with a 96% academic average.",
        "Active member of Futsal, Soccer, Computer Science Club, and Java Programming Teams."
      ],
      highlights: ["96% Average", "Computer Club", "Futsal & Soccer"]
    }
  ];

  return (
    <section id="education" className="py-28 bg-[#1A191C] relative overflow-hidden">
      {/* Subtle Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none -z-10"></div>
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[150px] pointer-events-none -z-10"></div>

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-4">
            <FaGraduationCap className="text-xs" />
            <span>Education</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F5F5F7] tracking-tight mb-4">
            Academic <span className="text-gradient">Background</span>
          </h2>
          <p className="text-[#A1A1AA] max-w-xl mx-auto text-base">
            Formal education, academic honors, and teaching assistantships.
          </p>
        </motion.div>

        <div className="space-y-8">
          {educationDetails.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="glass-card p-6 sm:p-8 relative group hover:border-amber-500/40 transition-all bg-[#232227] border-[#36353F]"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-[#36353F]">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#1A191C] p-2.5 flex items-center justify-center border border-[#36353F] group-hover:border-amber-500/40 transition-colors shadow-xs flex-shrink-0">
                    <img
                      src={edu.logo}
                      alt={edu.institution}
                      className="w-full h-full object-contain rounded-lg"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://via.placeholder.com/56?text=" + edu.institution.charAt(0);
                      }}
                    />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#F5F5F7] group-hover:text-amber-400 transition-colors">
                      {edu.degree}
                    </h3>
                    <p className="text-amber-400 font-semibold text-sm">{edu.institution}</p>
                  </div>
                </div>

                <div className="flex flex-col sm:items-end gap-1 font-mono text-xs text-[#A1A1AA]">
                  <span className="flex items-center gap-1.5 text-amber-400 font-medium">
                    <FaCalendarAlt className="text-[10px]" />
                    {edu.date}
                  </span>
                  <span>{edu.location}</span>
                </div>
              </div>

              {/* Badges / GPA Highlights */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                {edu.honors && (
                  <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 font-bold text-xs flex items-center gap-1.5 shadow-xs">
                    <FaAward className="text-amber-400" />
                    {edu.honors}
                  </span>
                )}
                {edu.gpa && (
                  <span className="px-3 py-1 rounded-full bg-[#1A191C] text-[#F5F5F7] border border-[#36353F] text-xs font-mono font-bold">
                    {edu.gpa}
                  </span>
                )}
              </div>

              {/* Description Bullets */}
              <ul className="space-y-3 mb-6">
                {edu.description.map((point, i) => (
                  <li key={i} className="text-[#A1A1AA] text-sm flex items-start gap-2.5 leading-relaxed">
                    <FaCheckCircle className="text-amber-400 text-xs mt-1 flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Highlight Pill Badges */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-[#36353F]">
                {edu.highlights.map((h, i) => (
                  <span key={i} className="px-2.5 py-1 rounded-md bg-[#1A191C] border border-[#36353F] text-[#F5F5F7] text-xs font-mono">
                    {h}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
