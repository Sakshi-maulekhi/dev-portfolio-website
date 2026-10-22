"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ExternalLink, Github, ChevronRight } from "lucide-react"
type ProjectCategory = "AI / GenAI / AI Automation" | "Full Stack"

type Project = {
  title: string
  description: string
  highlight: string
  tech: string[]
  github: string
  demo?: string
  category: ProjectCategory
  featured?: boolean
}

const projects: Project[] = [
  {
    title: "Customer Support AI Agent",
    description: "AI support agent that classifies customer emails, retrieves relevant knowledge, and generates automated replies.",
    highlight: "Pinecone-based RAG · Ollama · n8n · AI Agents",
    tech: ["n8n", "AI Agents", "RAG", "Pinecone", "Ollama", "Gmail"],
    github: "https://github.com/Sakshi-maulekhi/ai-automation-workflows",
    demo: "https://drive.google.com/file/d/17w1Y1TqYpGZySi3oMGRBrwlhWXiWk9BO/view?usp=sharing",
    category: "AI / GenAI / AI Automation",
    featured: true,
  },
  {
    title: "Social Media Post Agent",
    description: "AI workflow that transforms user topics into social media content and generated images.",
    highlight: "AI Agents · Prompt Engineering · Image Generation · n8n",
    tech: ["n8n", "AI Agents", "Prompt Engineering", "Image Generation"],
    github: "https://github.com/Sakshi-maulekhi/ai-automation-workflows",
    demo: "https://drive.google.com/file/d/1LTZYECP0a50FTqWinNRktWzHUWMc8u9M/view?usp=sharing",
    category: "AI / GenAI / AI Automation",
  },
  {
    title: "Invoice Parser",
    description: "Automated document-processing workflow that extracts structured information from invoice PDFs.",
    highlight: "LLM Information Extraction · PDF Processing · Google Sheets",
    tech: ["n8n", "LLMs", "PDF Processing", "Google Drive", "Google Sheets"],
    github: "https://github.com/Sakshi-maulekhi/ai-automation-workflows",
    demo: "https://drive.google.com/file/d/1jMIakcSJ6bRunjV8x6K6Jp3CqJVm2UQW/view?usp=sharing",
    category: "AI / GenAI / AI Automation",
  },
  {
    title: "RAG Chatbot",
    description: "Document-grounded chatbot that retrieves relevant information from a knowledge base to answer user queries.",
    highlight: "RAG · Embeddings · Vector Search · Ollama",
    tech: ["n8n", "RAG", "Ollama", "Vector Database", "Embeddings"],
    github: "https://github.com/Sakshi-maulekhi/ai-automation-workflows",
    demo: "https://drive.google.com/file/d/1Krq9UfmPiabNSK4Mp4qw9buk-r2CtBrB/view?usp=sharing",
    category: "AI / GenAI / AI Automation",
  },
  {
    title: "DocQuery AI – Production RAG PDF Assistant",
    description: "Production-style RAG PDF assistant for uploading documents and asking natural-language questions.",
    highlight: "LangChain · Qdrant · Ollama · FastAPI",
    tech: ["Python", "FastAPI", "React.js", "LangChain", "Qdrant", "Ollama"],
    github: "https://github.com/Sakshi-maulekhi/DocQuery-AI",
    category: "AI / GenAI / AI Automation",
    featured: true,
  },
  {
    title: "CodeSync – Real-Time Collaborative Coding Platform",
    description: "Real-time collaborative coding platform with room-based code sharing and an interactive Monaco editor.",
    highlight: "Real-Time Collaboration · Socket.io · Monaco Editor",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io"],
    github: "https://github.com/Sakshi-maulekhi/CodeSync-Live",
    demo: "https://code-sync-live-jrnx.vercel.app/",
    category: "Full Stack",
    featured: true,
  },
  {
    title: "PropertyHub – Full-Stack Real Estate Platform",
    description: "Full-stack real estate platform with authentication, property search, saved properties, and real-time communication.",
    highlight: "REST APIs · Authentication · Real-Time Chat · MongoDB",
    tech: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Prisma", "Socket.IO"],
    github: "https://github.com/Sakshi-maulekhi/Real-Estate",
    demo: "https://real-estate-neon-psi.vercel.app/",
    category: "Full Stack",
  },
  {
    title: "JobPortal – AI-Powered Microservices Recruitment Platform",
    description: "Microservices-based recruitment platform with authentication, event-driven communication, and AI-powered recruitment features.",
    highlight: "Microservices · Apache Kafka · Redis · AI-Powered Recruitment",
    tech: ["Node.js", "Express.js", "TypeScript", "PostgreSQL", "Redis", "Apache Kafka", "Docker"],
    github: "https://github.com/Sakshi-maulekhi/AI-powered-job-portal-with-microservices",
    category: "Full Stack",
  },
]

const filters = ["All", "AI / GenAI / AI Automation", "Full Stack"] as const

type Filter = (typeof filters)[number]

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeFilter, setActiveFilter] = useState<Filter>("All")

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter((project) => project.category === activeFilter)

  const featuredProjects = filteredProjects.filter((project) => project.featured)
  const remainingProjects = filteredProjects.filter((project) => !project.featured)

  return (
    <section id="projects" className="py-24 relative">
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
              Featured Work
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-4xl font-bold mt-2 gradient-text"
            >
              My Projects
            </motion.h2>
          </div>

          {/* Project Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-10" role="tablist" aria-label="Project categories">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                role="tab"
                aria-selected={activeFilter === filter}
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full border px-4 py-2 text-sm transition-all ${
                  activeFilter === filter
                    ? "border-pink-400/70 bg-pink-400/15 text-pink-100 shadow-[0_0_20px_rgba(255,111,181,0.16)]"
                    : "border-white/10 bg-white/[0.03] text-muted-foreground hover:border-pink-400/40 hover:text-foreground"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Featured Projects */}
          {featuredProjects.length > 0 && (
            <div className="mb-8">
              <p className="mb-4 text-center text-xs font-medium uppercase tracking-[0.2em] text-pink-200/70">Featured projects</p>
              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {featuredProjects.map((project, index) => (
                  <ProjectCard key={project.title} project={project} index={index} isInView={isInView} featured />
                ))}
              </div>
            </div>
          )}

          {/* Projects Grid */}
          <motion.div layout className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {remainingProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} isInView={isInView} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index, isInView, featured = false }: {
  project: Project
  index: number
  isInView: boolean
  featured?: boolean
}) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.3 + index * 0.15 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      <motion.div
        animate={{ 
          rotateX: isHovered ? 3 : 0,
          rotateY: isHovered ? -3 : 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className={`glass rounded-2xl overflow-hidden border transition-all duration-300 ${
          featured
            ? "border-pink-400/40 shadow-[0_0_28px_rgba(255,111,181,0.12)]"
            : "border-pink-400/20 hover:border-pink-400/40"
        }`}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Image placeholder with gradient */}
        <div className="relative h-48 bg-gradient-to-br from-pink-500/15 via-purple-500/10 to-transparent overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-30" />
          <motion.div
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <span className="text-4xl font-bold gradient-text opacity-30">{project.title[0]}</span>
          </motion.div>
          
          {/* Overlay on hover for project actions */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            className="absolute inset-0 bg-background/70 backdrop-blur-lg flex items-center justify-center gap-4"
          >
            {project.demo && project.title !== "DocQuery AI – Production RAG PDF Assistant" && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open(project.demo, '_blank')}
                className="glass-pink px-4 py-2 rounded-lg font-medium text-sm text-foreground border border-pink-400/40 hover:border-pink-400/70"
              >
                <ExternalLink className="inline mr-2 h-3 w-3" />
                {project.category === "AI / GenAI / AI Automation" ? "Watch Demo" : "Live Demo"}
              </motion.button>
            )}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open(project.github, '_blank')}
              className="glass px-4 py-2 rounded-lg font-medium text-sm border border-white/10 hover:border-pink-400/40"
            >
              <Github className="inline mr-2 h-3 w-3" />
              GitHub
            </motion.button>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xl font-serif font-bold text-foreground group-hover:text-pink-300 transition-colors">
              {project.title}
            </h3>
            <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-pink-300 group-hover:translate-x-1 transition-all" />
          </div>
          <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
            {project.description}
          </p>
          <p className="text-xs font-medium text-pink-200/90 mb-4">{project.highlight}</p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs rounded-md bg-pink-400/10 text-pink-200 border border-pink-400/20"
              >
                {tech}
              </span>
            ))}
          </div>

        </div>
      </motion.div>
    </motion.div>
  )
}
