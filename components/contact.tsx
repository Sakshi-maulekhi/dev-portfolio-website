"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Send, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitting(false)
  }

  return (
    <section id="contact" className="py-24 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />

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
              Get In Touch
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-4xl font-bold mt-2 gradient-text"
            >
              Let&apos;s Work Together
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
              className="text-muted-foreground mt-4 max-w-md mx-auto"
            >
              Have a project in mind or just want to chat? Feel free to reach out!
            </motion.p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              <form onSubmit={handleSubmit} className="glass-pink rounded-2xl p-8 space-y-5 border border-pink-400/20">
                <div>
                  <label htmlFor="name" className="text-sm font-semibold text-foreground mb-2 block">
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    className="bg-pink-400/5 border-pink-400/20 focus:border-pink-400/50 focus:bg-pink-400/10 text-foreground placeholder:text-muted-foreground"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-semibold text-foreground mb-2 block">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="bg-pink-400/5 border-pink-400/20 focus:border-pink-400/50 focus:bg-pink-400/10 text-foreground placeholder:text-muted-foreground"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="text-sm font-semibold text-foreground mb-2 block">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your message..."
                    rows={4}
                    className="bg-pink-400/5 border-pink-400/20 focus:border-pink-400/50 focus:bg-pink-400/10 text-foreground placeholder:text-muted-foreground resize-none"
                    required
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full glass-pink px-6 py-3 rounded-lg font-semibold text-foreground border border-pink-400/40 hover:border-pink-400/70 transition-all"
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                      className="w-5 h-5 border-2 border-pink-400/30 border-t-pink-400 rounded-full inline-block"
                    />
                  ) : (
                    <>
                      <Send className="inline mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="flex flex-col justify-center"
            >
              <div className="glass-pink rounded-2xl p-8 space-y-6 border border-pink-400/20">
                <div>
                  <h3 className="text-xl font-serif font-bold text-foreground mb-4 text-pink-100">Connect With Me</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                  </p>
                </div>

                <div className="space-y-4">
  <ContactLink
    href="mailto:sakshimaulekhi84@gmail.com"
    icon={<Mail className="w-5 h-5" />}
    label="sakshimaulekhi84@gmail.com"
  />

  <ContactLink
    href="https://github.com/Sakshi-maulekhi"
    icon={<Github className="w-5 h-5" />}
    label="GitHub"
  />

  <ContactLink
    href="https://www.linkedin.com/in/sakshi-maulekhi-9b369b306"
    icon={<Linkedin className="w-5 h-5" />}
    label="LinkedIn"
  />
</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function ContactLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ x: 8 }}
      className="flex items-center gap-3 text-muted-foreground hover:text-pink-200 transition-colors group"
    >
      <div className="w-10 h-10 rounded-lg bg-pink-400/15 flex items-center justify-center text-pink-300 group-hover:bg-pink-400/25 transition-colors">
        {icon}
      </div>
      <span className="text-sm group-hover:text-foreground transition-colors">{label}</span>
    </motion.a>
  )
}
