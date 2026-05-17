"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Trophy, Code, Users, Award } from "lucide-react"

const achievements = [
  {
    icon: <Code className="w-6 h-6" />,
    stat: "350+",
    label: "LeetCode Problems",
    description: "Solved across various difficulty levels",
  },
  {
    icon: <Trophy className="w-6 h-6" />,
    stat: "1600+",
    label: "LeetCode Rating",
    description: "Competitive programming rating",
  },
  {
    icon: <Users className="w-6 h-6" />,
    stat: "GSSoC '24",
    label: "Open Source",
    description: "Contributor at GirlScript Summer of Code",
  },
  {
    icon: <Award className="w-6 h-6" />,
    stat: "Flipkart GRiD 7.0",
    
    description: "Shortlisted in flagship engineering campus challenge",
  },
]

export function Achievements() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="achievements" className="py-24 relative">
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
              Achievements
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-4xl font-bold mt-2 gradient-text"
            >
              Milestones & Recognition
            </motion.h2>
          </div>

          {/* Achievements Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass rounded-2xl p-6 text-center group glow hover:glow"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4"
                >
                  {achievement.icon}
                </motion.div>
                <motion.span
                  initial={{ scale: 0.5 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 0.4 + index * 0.1, type: "spring" }}
                  className="text-3xl font-bold gradient-text block mb-2"
                >
                  {achievement.stat}
                </motion.span>
                <h3 className="font-semibold text-foreground mb-1">{achievement.label}</h3>
                <p className="text-sm text-muted-foreground">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
