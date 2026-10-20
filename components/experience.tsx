"use client"

import { motion, useInView } from "framer-motion"
import { Cloud, Database, Layers, Workflow } from "lucide-react"
import { useRef } from "react"

const responsibilities = [
  { icon: Cloud, label: "Cloudflare Workers" },
  { icon: Database, label: "D1" },
  { icon: Layers, label: "Queues" },
  { icon: Workflow, label: "Serverless workflows" },
  { icon: Workflow, label: "Form processing" },
]

export function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-10">
            <span className="text-primary text-sm font-medium tracking-wider uppercase">Experience</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 gradient-text">AI Engineering Intern</h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="glass-pink rounded-2xl border border-pink-400/20 p-6 md:p-8"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-6">
              <div>
                <h3 className="text-2xl font-serif font-bold text-pink-100">AI Engineering Intern</h3>
                <p className="text-muted-foreground mt-1">RadialBrain</p>
              </div>
              <span className="text-sm text-pink-200/80">Serverless engineering</span>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Worked on serverless workflows and form processing using Cloudflare Workers, D1, and Queues.
            </p>
            <div className="flex flex-wrap gap-3">
              {responsibilities.map(({ icon: Icon, label }) => (
                <span key={label} className="inline-flex items-center gap-2 rounded-lg bg-pink-400/10 border border-pink-400/20 px-3 py-2 text-sm text-pink-100">
                  <Icon className="h-4 w-4 text-pink-300" />
                  {label}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
