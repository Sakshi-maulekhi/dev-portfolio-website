"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap, Code, Sparkles } from "lucide-react"

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Title */}
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="text-primary text-sm font-medium tracking-wider uppercase"
            >
              About Me
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-4xl font-bold mt-2 gradient-text"
            >
              Get to Know Me
            </motion.h2>
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left - Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="space-y-4"
            >
              <p className="text-muted-foreground leading-relaxed">
                I&apos;m a <span className="text-foreground font-medium">B.Tech IT student</span> passionate about building practical AI applications, GenAI solutions, and automation workflows that solve real-world problems.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {"My work combines "}<span className="text-foreground font-medium">LLMs, RAG, AI agents, prompt engineering, and workflow automation</span>{" with software development. I&apos;ve built AI-powered customer support, document processing, social media automation, and RAG applications."}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I also enjoy building complete software products, including real-time collaborative applications, which gives me a strong foundation for turning AI ideas into working products.
              </p>
            </motion.div>

            {/* Right - Cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="space-y-4"
            >
              <AboutCard
                icon={<GraduationCap className="w-5 h-5" />}
                title="Education"
                description="B.Tech in Information Technology · ABES Engineering College"
              />
              <AboutCard
                icon={<Code className="w-5 h-5" />}
                title="Focus Areas"
                description="GenAI, AI Automation, RAG, AI Agents"
              />
              <AboutCard
                icon={<Sparkles className="w-5 h-5" />}
                title="Interests"
                description="AI Products, Workflow Automation, LLM Applications"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function AboutCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      className="glass-pink rounded-xl p-6 flex items-start gap-4 border border-pink-400/20 hover:border-pink-400/40 transition-all"
    >
      <div className="w-12 h-12 rounded-lg bg-pink-400/15 flex items-center justify-center text-pink-300 shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="font-serif font-bold text-foreground text-pink-100">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </motion.div>
  )
}
