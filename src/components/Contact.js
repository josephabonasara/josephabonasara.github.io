import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaPaperPlane, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Send email directly to abojos23@gmail.com via FormSubmit AJAX API
      const response = await fetch("https://formsubmit.co/ajax/abojos23@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Portfolio Message from ${formData.name}`
        })
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        // Fallback to pre-filled mailto link if request fails
        window.location.href = `mailto:abojos23@gmail.com?subject=${encodeURIComponent("Portfolio Message from " + formData.name)}&body=${encodeURIComponent("Name: " + formData.name + "\nEmail: " + formData.email + "\n\nMessage:\n" + formData.message)}`;
        setSubmitted(true);
      }
    } catch (error) {
      // Fallback to pre-filled mailto link on network failure
      window.location.href = `mailto:abojos23@gmail.com?subject=${encodeURIComponent("Portfolio Message from " + formData.name)}&body=${encodeURIComponent("Name: " + formData.name + "\nEmail: " + formData.email + "\n\nMessage:\n" + formData.message)}`;
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-28 bg-[#1A191C] relative overflow-hidden">
      {/* Background Decorative Mesh & Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[160px] pointer-events-none -z-10"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none -z-10"></div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-4">
            <FaEnvelope className="text-xs" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F5F5F7] tracking-tight mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-[#A1A1AA] max-w-xl mx-auto text-base">
            Interested in AI systems architecture, multi-agent frameworks, or production engineering? Reach out directly!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-8 items-start">
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-5 space-y-6"
          >
            <div className="glass-card p-6 sm:p-8 space-y-6 bg-[#232227] border-[#36353F]">
              <h3 className="text-xl font-bold text-[#F5F5F7] tracking-tight">Contact Information</h3>
              <p className="text-[#A1A1AA] text-xs sm:text-sm leading-relaxed">
                Based in Ontario, Canada and open to remote or relocation opportunities worldwide.
              </p>

              <div className="space-y-4 pt-2">
                <a
                  href="mailto:abojos23@gmail.com"
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-[#1A191C] hover:bg-[#2A2930] border border-[#36353F] hover:border-amber-500/40 text-[#F5F5F7] hover:text-amber-400 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform flex-shrink-0">
                    <FaEnvelope />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-[10px] text-[#71717A] font-mono">Email Direct</p>
                    <p className="text-xs sm:text-sm font-semibold text-[#F5F5F7] truncate">abojos23@gmail.com</p>
                  </div>
                </a>

                <a
                  href="https://linkedin.com/in/josephsa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-[#1A191C] hover:bg-[#2A2930] border border-[#36353F] hover:border-amber-500/40 text-[#F5F5F7] hover:text-amber-400 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform flex-shrink-0">
                    <FaLinkedin />
                  </div>
                  <div>
                    <p className="text-[10px] text-[#71717A] font-mono">LinkedIn Profile</p>
                    <p className="text-xs sm:text-sm font-semibold text-[#F5F5F7]">linkedin.com/in/josephsa</p>
                  </div>
                </a>

                <a
                  href="https://github.com/josephabonasara"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-[#1A191C] hover:bg-[#2A2930] border border-[#36353F] hover:border-amber-500/40 text-[#F5F5F7] hover:text-amber-400 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform flex-shrink-0">
                    <FaGithub />
                  </div>
                  <div>
                    <p className="text-[10px] text-[#71717A] font-mono">GitHub Profile</p>
                    <p className="text-xs sm:text-sm font-semibold text-[#F5F5F7]">github.com/josephabonasara</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-3.5 rounded-xl bg-[#1A191C] border border-[#36353F] text-[#F5F5F7]">
                  <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 flex-shrink-0">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <p className="text-[10px] text-[#71717A] font-mono">Location</p>
                    <p className="text-xs sm:text-sm font-semibold text-[#F5F5F7]">Ontario, Canada • Open to Relocation</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Box */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-7"
          >
            <div className="glass-card p-6 sm:p-8 relative bg-[#232227] border-[#36353F]">
              <h3 className="text-xl font-bold text-[#F5F5F7] tracking-tight mb-2">Send a Message</h3>
              <p className="text-[#A1A1AA] text-xs sm:text-sm mb-6">
                Fill out the form below to initiate contact directly.
              </p>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-center space-y-3 py-12">
                  <FaCheckCircle className="text-amber-400 text-4xl mx-auto animate-bounce" />
                  <h4 className="text-lg font-bold text-[#F5F5F7]">Message Sent!</h4>
                  <p className="text-xs text-[#A1A1AA] max-w-sm mx-auto">
                    Thank you for reaching out. Joseph will reply to your email as soon as possible.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-xs font-mono text-amber-400 hover:underline font-bold"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-[#A1A1AA] mb-1.5 font-mono">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Sarah Connor"
                      className="w-full bg-[#1A191C] border border-[#36353F] rounded-xl px-4 py-3 text-xs text-[#F5F5F7] placeholder-[#71717A] focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-[#A1A1AA] mb-1.5 font-mono">
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. sarah@example.com"
                      className="w-full bg-[#1A191C] border border-[#36353F] rounded-xl px-4 py-3 text-xs text-[#F5F5F7] placeholder-[#71717A] focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-[#A1A1AA] mb-1.5 font-mono">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows="4"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hi Joseph, I'd like to discuss an engineering opportunity..."
                      className="w-full bg-[#1A191C] border border-[#36353F] rounded-xl px-4 py-3 text-xs text-[#F5F5F7] placeholder-[#71717A] focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 bg-amber-500 hover:bg-amber-400 disabled:opacity-50 text-slate-950 font-bold rounded-xl transition-all shadow-md shadow-amber-500/20 flex items-center justify-center gap-2 text-xs uppercase tracking-wider cursor-pointer font-sans"
                  >
                    <span>{loading ? "Sending..." : "Send Message"}</span>
                    <FaPaperPlane className="text-xs" />
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
