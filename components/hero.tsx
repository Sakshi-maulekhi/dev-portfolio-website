"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, ExternalLink, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid pt-20">
      {/* Animated gradient blobs - Pink and Lavender */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            x: [0, 30, -30, 0],
            y: [0, -30, 30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 -left-32 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-15 glow-circle"
        />
        <motion.div
          animate={{ 
            x: [0, -30, 30, 0],
            y: [0, 30, -30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className="absolute top-1/3 -right-32 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-15 glow-circle"
        />
        <motion.div
          animate={{ 
            x: [0, 20, -20, 0],
            y: [0, -20, 20, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, delay: 2 }}
          className="absolute -bottom-32 left-1/3 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 glow-circle"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Name - Premium Typography */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-balance leading-tight"
          >
            Hi, I&apos;m <span className="gradient-text glow-text">Saumya Singh</span>
          </motion.h1>

          {/* Description with rich text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground text-base md:text-lg max-w-3xl mx-auto mb-8 space-y-4 text-pretty leading-relaxed"
          >
            <p>
              A girl who codes with <span className="font-bold text-foreground">curiosity</span>, designs with <span className="font-bold text-foreground">heart</span>, and builds with <span className="font-bold text-foreground">purpose</span>.
            </p>
            <p>
              I blend <span className="font-bold text-foreground">logic</span>, <span className="font-bold text-foreground">creativity</span>, and ✨<span className="font-bold text-pink-300">just the right amount of pink</span>✨ to bring ideas to life — from sleek UI to scalable backend systems.
            </p>
            <p>
              With expertise in the <span className="font-bold text-foreground">MERN stack</span> and a love for <span className="font-bold text-foreground">problem-solving in C++</span>, I&apos;ve tackled over <span className="font-bold text-foreground">500+ LeetCode problems</span> and enjoy turning concepts into clean, efficient code.
            </p>
            <p>
              The journey has just begun — learning every day, building with love, and I can&apos;t wait to see where code takes me. ✨
            </p>
            <p className="italic text-pink-300 mt-6">
              "Building with logic, designing with love." 💖
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-8"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 rounded-full font-semibold bg-pink-600 hover:bg-pink-700 text-white transition-all"
            >
              View My Work
            </motion.button>
          </motion.div>

          {/* Scroll text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-muted-foreground text-sm mb-4"
          >
            Scroll
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
