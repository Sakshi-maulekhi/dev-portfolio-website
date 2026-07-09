"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

interface TrailParticle {
  x: number
  y: number
  createdAt: number
  vx: number
  vy: number
}

export function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const trailParticlesRef = useRef<TrailParticle[]>([])
  const lastMousePosRef = useRef({ x: 0, y: 0 })
  const isMouseMovingRef = useRef(false)
  const animationFrameIdRef = useRef<number>(0)
  const isMobileRef = useRef(false)

  useEffect(() => {
    // Detect mobile
    isMobileRef.current = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
  }, [])

  // Stars and cursor trail animation
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Generate random stars
    const starCount = 80
    const stars = Array.from({ length: starCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.5,
      opacity: Math.random() * 0.5 + 0.3,
      twinkleDuration: Math.random() * 3000 + 2000,
      twinkleOffset: Math.random() * 10000,
    }))

    const TRAIL_LIFETIME = 550 // ms
    const TRAIL_WIDTH = 3

    const animate = () => {
      ctx.fillStyle = "rgba(5, 5, 16, 1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const currentTime = Date.now()

      // Draw twinkling stars
      stars.forEach((star) => {
        const twinklePhase =
          ((currentTime + star.twinkleOffset) % star.twinkleDuration) /
          star.twinkleDuration
        const twinkleOpacity =
          0.3 +
          Math.abs(Math.cos(twinklePhase * Math.PI * 2)) * 0.5

        ctx.fillStyle = `rgba(250, 250, 250, ${twinkleOpacity})`
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fill()
      })

      // Draw and update cursor trail particles
      if (!isMobileRef.current) {
        const particles = trailParticlesRef.current

        for (let i = particles.length - 1; i >= 0; i--) {
          const particle = particles[i]
          const age = currentTime - particle.createdAt
          const progress = age / TRAIL_LIFETIME

          if (progress >= 1) {
            particles.splice(i, 1)
            continue
          }

          // Easing: cubic-bezier(0.25, 0.46, 0.45, 0.94) - smooth deceleration
          const easeProgress =
            3 * (1 - progress) * (1 - progress) * progress +
            (1 - progress) * (1 - progress) * (1 - progress)

          const opacity = (1 - progress) * 0.6

          // Draw main trail with pink
          const mainAlpha = opacity * easeProgress
          ctx.strokeStyle = `rgba(255, 111, 181, ${mainAlpha})`
          ctx.lineWidth = TRAIL_WIDTH
          ctx.lineCap = "round"
          ctx.lineJoin = "round"

          // Draw a small segment from particle position with velocity
          const nextX = particle.x + particle.vx * 0.5
          const nextY = particle.y + particle.vy * 0.5

          ctx.beginPath()
          ctx.moveTo(particle.x, particle.y)
          ctx.lineTo(nextX, nextY)
          ctx.stroke()

          // Draw lavender highlight (inner glow)
          ctx.strokeStyle = `rgba(192, 132, 252, ${mainAlpha * 0.4})`
          ctx.lineWidth = TRAIL_WIDTH * 0.6
          ctx.beginPath()
          ctx.moveTo(particle.x, particle.y)
          ctx.lineTo(nextX, nextY)
          ctx.stroke()
        }
      }

      animationFrameIdRef.current = requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    return () => {
      cancelAnimationFrame(animationFrameIdRef.current)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  // Mouse tracking for cursor trail
  useEffect(() => {
    if (isMobileRef.current) return

    const handleMouseMove = (e: MouseEvent) => {
      const currentPos = { x: e.clientX, y: e.clientY }
      const lastPos = lastMousePosRef.current

      // Calculate velocity
      const vx = currentPos.x - lastPos.x
      const vy = currentPos.y - lastPos.y
      const distance = Math.sqrt(vx * vx + vy * vy)

      // Only create trail if mouse is moving (distance > 2px)
      if (distance > 2) {
        isMouseMovingRef.current = true

        // Create multiple trail particles between last position and current position
        const steps = Math.ceil(distance / 8)
        for (let i = 0; i < steps; i++) {
          const t = i / steps
          const particle: TrailParticle = {
            x: lastPos.x + vx * t,
            y: lastPos.y + vy * t,
            createdAt: Date.now(),
            vx: vx * 0.3,
            vy: vy * 0.3,
          }
          trailParticlesRef.current.push(particle)
        }
      } else {
        isMouseMovingRef.current = false
      }

      lastMousePosRef.current = currentPos
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <>
      {/* Canvas for stars and cursor trail */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0"
      />

      {/* Floating particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 60 + 20,
              height: Math.random() * 60 + 20,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
              opacity: [0.05, 0.2, 0.05],
            }}
            transition={{
              duration: Math.random() * 15 + 20,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
            className={`
              ${
                i % 3 === 0
                  ? "bg-pink-400"
                  : i % 3 === 1
                    ? "bg-purple-400"
                    : "bg-white"
              }
              blur-3xl
            `}
          />
        ))}
      </div>
    </>
  )
}
