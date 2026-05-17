"use client"

import { motion } from "framer-motion"
import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Built with <Heart className="w-4 h-4 text-primary" /> using React & Tailwind CSS
          </p>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Sakshi Maulekhi. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
