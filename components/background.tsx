"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

export function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const cursorRef = useRef({ x: 0, y: 0 })
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // Twinkling stars animation
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

    let animationFrameId: number

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

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  // Mouse tracking for cursor glow
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorRef.current = { x: e.clientX, y: e.clientY }
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <>
      {/* Stars canvas */}
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

      {/* Subtle cursor glow */}
      <motion.div
        className="fixed w-32 h-32 rounded-full pointer-events-none z-0"
        style={{
          x: mousePosition.x - 64,
          y: mousePosition.y - 64,
          background: "radial-gradient(circle, rgba(255, 111, 181, 0.15) 0%, rgba(255, 111, 181, 0) 70%)",
          filter: "blur(40px)",
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
          mass: 0.5,
        }}
      />
    </>
  )
}
