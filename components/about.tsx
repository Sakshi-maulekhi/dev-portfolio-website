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
                I&apos;m a <span className="text-foreground font-medium">B.Tech IT student</span> at ABES Engineering College, passionate about building modern web applications that solve real-world problems.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My journey in tech started with curiosity about how things work, and has evolved into a deep passion for <span className="text-foreground font-medium">full-stack development</span>, <span className="text-foreground font-medium">problem solving</span>, and <span className="text-foreground font-medium">modern UI engineering</span>.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I&apos;m particularly interested in building scalable applications, real-time systems, and AI-powered products that push the boundaries of what&apos;s possible on the web.
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
                description="B.Tech in Information Technology at ABES Engineering College"
              />
              <AboutCard
                icon={<Code className="w-5 h-5" />}
                title="Focus Areas"
                description="Full-Stack Development, Real-time Systems, Scalable Architecture"
              />
              <AboutCard
                icon={<Sparkles className="w-5 h-5" />}
                title="Interests"
                description="AI-powered Products, Modern UI/UX, Open Source"
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
      whileHover={{ scale: 1.02, x: 5 }}
      className="glass rounded-xl p-4 flex items-start gap-4"
    >
      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </motion.div>
  )
}
