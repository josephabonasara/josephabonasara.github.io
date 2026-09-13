import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaCommentDots, FaTimes, FaExpandAlt } from 'react-icons/fa';

function Recommendations() {
  const [selectedRec, setSelectedRec] = useState(null);

  useEffect(() => {
    if (selectedRec) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedRec]);

  const recommendations = [
    {
      name: "Rostam Shirani",
      role: "Software Engineering Manager",
      company: "Twitter",
      content: (
        <div className="space-y-4 text-[#E2E8F0] text-sm sm:text-base leading-relaxed font-normal">
          <p>
            I am writing to highly recommend Joseph Abonasara as a software engineer. I was directly managing Joseph at Twitter’s NewSQL team during his internship in Summer 2022, and I had the opportunity to observe his progress over the course of the internship.
          </p>
          <p>
            Joseph was able to quickly learn and apply new concepts. His contributions to the development of our cluster provisioning tool and onboarding our services to rich metrics were crucial. During his internships, he learnt about Kubernetes, CockroachDB, Scala, and Observability of database systems. I was consistently impressed by their performance over the course of the internship.
          </p>
          <p>
            In addition to their technical abilities, Joseph was a pleasure to work with. They were reliable, enthusiastic, and always willing to go the extra mile to ensure that our projects were completed to the highest standards. He consistently received strong supportive feedback from other team members.
          </p>
          <p>
            I would strongly recommend them for any opportunity, and I believe they would be a valuable asset to any team.
          </p>
        </div>
      ),
      image: "https://ui-avatars.com/api/?name=Rostam+Shirani&background=4F46E5&color=FFFFFF"
    },
    {
      name: "Sheng Chang",
      role: "Sr. Software Engineer",
      company: "Twitter",
      content: (
        <div className="space-y-4 text-[#E2E8F0] text-sm sm:text-base leading-relaxed font-normal">
          <p>
            It is my great pleasure to recommend Joseph Abonasara for employment with your organization for the position of Software Engineer. I have known Joseph and worked with him as a mentor (Sr. Software Engineer) during his internship in the Real Time Storage team at Twitter, during which Joseph consistently exceeded expectations in all aspects of his job performance.
          </p>
          <p>
            As Joseph’s mentor, I witnessed his outstanding ability to quickly ramp up on a new project. E.g. During the Cluster Auto Creation project, he stayed organized and learned things (K8s, kustomize, and crdb deployment) in a structured way and exercised great judgment on production operations and changes and keep high engineering standard.
          </p>
          <p>
            Moreover, he showed strong ownership by constantly driving the projects forward and by taking the initiative to improve the overall system stability.
          </p>
          <p>
            Thus, I confidently recommend you to consider Joseph for the Software Engineer position.
          </p>
        </div>
      ),
      image: "https://ui-avatars.com/api/?name=Sheng+Chang&background=0284C7&color=FFFFFF"
    }
  ];

  return (
    <section id="recommendations" className="py-28 bg-[#1A191C] relative overflow-hidden">
      {/* Background Dots */}
      <div className="absolute inset-0 bg-dots-pattern opacity-40 pointer-events-none -z-10"></div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-4">
            <FaCommentDots className="text-xs" />
            <span>Endorsements</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F5F5F7] tracking-tight mb-4">
            Letters of <span className="text-gradient">Recommendation</span>
          </h2>
          <p className="text-[#A1A1AA] max-w-xl mx-auto text-base">
            Professional recommendations and feedback from my previous engineering managers & mentors. Click any letter to expand.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {recommendations.map((rec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              onClick={() => setSelectedRec(rec)}
              className="glass-card p-6 sm:p-8 relative flex flex-col hover:border-amber-500/50 bg-[#232227] border border-[#36353F] cursor-pointer group transition-all shadow-md"
            >
              <div className="flex items-center gap-4 mb-6 border-b border-[#36353F] pb-5">
                <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-amber-500/40 shrink-0 shadow-xs">
                  <img src={rec.image} alt={rec.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#F5F5F7] tracking-tight group-hover:text-amber-400 transition-colors flex items-center gap-2">
                    <span>{rec.name}</span>
                    <FaExpandAlt className="text-xs text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h4>
                  <p className="text-amber-400 text-xs font-semibold">{rec.role} @ {rec.company}</p>
                </div>
                <FaQuoteLeft className="text-amber-500/20 text-3xl ml-auto flex-shrink-0" />
              </div>

              <div className="relative z-10 flex-grow max-h-[300px] overflow-y-auto pr-2 custom-scrollbar text-[#E2E8F0]">
                {rec.content}
              </div>

              <div className="mt-4 pt-3 border-t border-[#36353F]/60 flex items-center justify-between text-xs font-mono text-amber-400/90 font-medium">
                <span>Click to view full recommendation</span>
                <FaExpandAlt className="text-xs group-hover:scale-110 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* EXPANDED MODAL VIEW - Fully Opaque & Locked Body Scroll */}
        <AnimatePresence>
          {selectedRec && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-[#121114]/95 backdrop-blur-xl z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
              onClick={() => setSelectedRec(null)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                className="bg-[#232227] opacity-100 border border-[#36353F] w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-3xl p-6 sm:p-10 relative shadow-2xl custom-scrollbar"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute top-5 right-5 text-[#A1A1AA] hover:text-[#F5F5F7] p-2 rounded-full hover:bg-[#1A191C] transition-colors z-10"
                  onClick={() => setSelectedRec(null)}
                >
                  <FaTimes size={20} />
                </button>

                <div className="flex items-center gap-5 mb-8 border-b border-[#36353F] pb-6">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-amber-500/40 shrink-0 shadow-md">
                    <img src={selectedRec.image} alt={selectedRec.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F5F5F7]">{selectedRec.name}</h3>
                    <p className="text-amber-400 text-sm font-semibold">{selectedRec.role} @ {selectedRec.company}</p>
                  </div>
                  <FaQuoteLeft className="text-amber-500/30 text-4xl ml-auto flex-shrink-0" />
                </div>

                <div className="text-[#F5F5F7] text-base sm:text-lg leading-relaxed space-y-5">
                  {selectedRec.content}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Recommendations;
