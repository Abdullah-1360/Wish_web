"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function FloatingHearts() {
  const [hearts, setHearts] = useState<Array<{ id: number; left: string; delay: number; duration: number }>>([])

  useEffect(() => {
    const heartArray = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 5,
      duration: 8 + Math.random() * 4,
    }))
    setHearts(heartArray)
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute text-4xl drop-shadow-lg"
          style={{ left: heart.left }}
          initial={{ y: "100vh", opacity: 0, scale: 0 }}
          animate={{
            y: "-100vh",
            opacity: [0, 1, 1, 0],
            scale: [0, 1, 1, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          {["💖", "💕", "💗", "💓", "💝"][heart.id % 5]}
        </motion.div>
      ))}

      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={`petal-${i}`}
          className="absolute text-3xl"
          style={{
            left: `${Math.random() * 100}%`,
          }}
          initial={{ y: "-10vh", opacity: 0, rotate: 0 }}
          animate={{
            y: "110vh",
            opacity: [0, 1, 1, 0],
            rotate: 720,
            x: [0, 50, -50, 0],
          }}
          transition={{
            duration: 10 + Math.random() * 5,
            delay: Math.random() * 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          🌸
        </motion.div>
      ))}

      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={`sparkle-${i}`}
          className="absolute text-2xl"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 2 + Math.random(),
            delay: Math.random() * 3,
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay: Math.random() * 2,
          }}
        >
          {["✨", "⭐", "🌟", "💫"][i % 4]}
        </motion.div>
      ))}
    </div>
  )
}
