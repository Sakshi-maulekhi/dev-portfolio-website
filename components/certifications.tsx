"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { BadgeCheck, ExternalLink } from "lucide-react"

const certifications = [
  {
    title: "Problem Solving Intermediate",
    issuer: "HackerRank",
    link: "#",
  },
  {
    title: "Prompt Engineering with GitHub Copilot",
    issuer: "GitHub",
    link: "#",
  },
  {
    title: "AWS Foundations: Cloud Essentials",
    issuer: "Amazon Web Services",
    link: "#",
  },
]

export function Certifications() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="certifications" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Title */}
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="text-primary text-sm font-medium tracking-wider uppercase"
            >
              Certifications
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-4xl font-bold mt-2 gradient-text"
            >
              Professional Credentials
            </motion.h2>
          </div>

          {/* Certifications List */}
          <div className="max-w-2xl mx-auto space-y-4">
            {certifications.map((cert, index) => (
              <motion.a
                key={cert.title}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ x: 5, scale: 1.01 }}
                className="glass rounded-xl p-5 flex items-center gap-4 group hover:border-primary/50 transition-colors block"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <BadgeCheck className="w-6 h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                </div>
                <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
