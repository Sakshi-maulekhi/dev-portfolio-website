"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, ExternalLink, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid">
      {/* Animated gradient blobs - Pink and Lavender - Softer and larger */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            x: [0, 50, -50, 0],
            y: [0, -40, 40, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -left-48 w-full max-w-2xl h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-5"
        />
        <motion.div
          animate={{ 
            x: [0, -50, 50, 0],
            y: [0, 40, -40, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/3 -right-48 w-full max-w-2xl h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-5"
        />
        <motion.div
          animate={{ 
            x: [0, 40, -40, 0],
            y: [0, -30, 30, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute -bottom-32 left-1/3 w-full max-w-2xl h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-3"
        />
      </div>

      <div className="relative z-10">
        <div className="w-full max-w-3xl md:max-w-none mx-auto px-4 text-center">
          {/* Name - Premium Typography on single line */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-3 leading-tight md:whitespace-nowrap"
          >
            Hi, I&apos;m <span className="gradient-text hero-glow">Sakshi Maulekhi</span>
          </motion.h1>

          {/* Typewriter Role */}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 h-7 min-h-7"
          >
            AI Generalist | GenAI &amp; AI Automation
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-10 text-pretty leading-relaxed"
          >
            I build practical AI applications, automation workflows, and software projects using LLMs, RAG, AI agents, and modern development tools.
          </motion.p>

          {/* CTA Buttons - Premium Glassmorphism with pill shape */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 rounded-full font-medium text-foreground bg-pink-500/20 border border-pink-400/40 hover:border-pink-400/70 hover:bg-pink-500/30 transition-all backdrop-blur-md shadow-lg hover:shadow-pink-500/20"
            >
              <ExternalLink className="inline mr-2 h-4 w-4" />
              View Projects
            </motion.button>
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 rounded-full font-medium text-foreground bg-white/5 border border-white/20 hover:border-white/40 hover:bg-white/10 transition-all backdrop-blur-md"
            >
              <Mail className="inline mr-2 h-4 w-4" />
              Contact Me
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex justify-center gap-4"
          >
            <SocialLink href="https://github.com/Sakshi-maulekhi" icon={<Github size={20} />} label="GitHub" />
            <SocialLink href="https://www.linkedin.com/in/sakshi-maulekhi-9b369b306" icon={<Linkedin size={20} />} label="LinkedIn" />
            <SocialLink href="https://leetcode.com/u/sakshi_m23/" icon={<LeetCodeIcon />} label="LeetCode" />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  )
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 rounded-full glass flex items-center justify-center text-muted-foreground transition-all border border-white/10 hover:border-pink-400/40 hover:text-pink-300"
      whileHover={{ scale: 1.15, y: -5 }}
      whileTap={{ scale: 0.9 }}
      aria-label={label}
    >
      {icon}
    </motion.a>
  )
}

function LeetCodeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
    </svg>
  )
}
