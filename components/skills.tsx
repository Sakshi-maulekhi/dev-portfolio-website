"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const skillCategories = [
  {
    title: "AI & GenAI",
    skills: ["RAG", "AI Agents", "Prompt Engineering", "LLM Integration", "Ollama", "LangChain"],
  },
  {
    title: "AI Automation",
    skills: ["n8n", "Workflow Automation", "API Integration", "Google Sheets"],
  },
  {
    title: "Development",
    skills: ["Python", "JavaScript", "Java", "FastAPI", "React.js", "Node.js", "REST APIs", "MongoDB"],
  },
  {
    title: "Tools",
    skills: ["ChatGPT", "Cursor", "GitHub Copilot", "Pinecone", "Qdrant", "Git", "GitHub", "Docker", "Postman"],
  },
]

export function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-24 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-4 relative">
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
              My Skills
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-4xl font-bold mt-2 gradient-text"
            >
              Technical Expertise
            </motion.h2>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + categoryIndex * 0.1 }}
                whileHover={{ y: -8 }}
                className="glass-pink rounded-2xl p-6 group border border-pink-400/20 hover:border-pink-400/40 transition-all duration-300"
              >
                <h3 className="text-lg font-serif font-bold mb-4 text-foreground group-hover:text-pink-300 transition-colors">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.3 + categoryIndex * 0.1 + skillIndex * 0.05 }}
                      whileHover={{ scale: 1.08, boxShadow: "0 0 10px rgba(255, 111, 181, 0.3)" }}
                      className="px-3 py-1.5 text-sm rounded-lg bg-pink-400/10 text-pink-200 border border-pink-400/30 hover:border-pink-400/60 transition-all cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
