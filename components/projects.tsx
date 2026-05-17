"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ExternalLink, Github, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "PropertyHub",
    description: "A full-stack real estate platform with authentication, CRUD operations, advanced property search/filtering, saved properties, and real-time chat using Socket.io.",
    tech: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Prisma", "Socket.io"],
    github: "https://github.com/Sakshi-maulekhi/Real-Estate",
    demo: "https://real-estate-neon-psi.vercel.app/",
    image: "/projects/propertyhub.jpg",
  },
  {
    title: "CodeSync",
    description: "A real-time collaborative coding platform with room-based coding sessions, live code sharing, coding dashboard, and integrated browser IDE.",
    tech: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Socket.io"],
    github: "https://github.com/Sakshi-maulekhi/CodeSync-Live",
    demo: "https://code-sync-live-jrnx.vercel.app/",
    image: "/projects/codesync.jpg",
  },
]

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

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

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} isInView={isInView} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index, isInView }: { 
  project: typeof projects[0]; 
  index: number; 
  isInView: boolean 
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
          rotateX: isHovered ? 5 : 0,
          rotateY: isHovered ? -5 : 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="glass rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-colors"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Image placeholder with gradient */}
        <div className="relative h-48 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-30" />
          <motion.div
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <span className="text-4xl font-bold gradient-text opacity-30">{project.title[0]}</span>
          </motion.div>
          
          {/* Overlay on hover */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center gap-4"
          >
            <Button size="sm" className="glow" asChild>
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </a>
            </Button>
            <Button size="sm" variant="outline" className="glass" asChild>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
          </div>
          <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs rounded-md bg-secondary text-secondary-foreground"
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
