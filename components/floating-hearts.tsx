"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function FloatingHearts() {
  const [hearts, setHearts] = useState<Array<{ id: number; left: string; delay: number; duration: number }>>([])
  const [petals, setPetals] = useState<Array<{ id: number; left: string; delay: number; duration: number }>>([])
  const [sparkles, setSparkles] = useState<Array<{ id: number; left: string; top: string; delay: number; duration: number; repeatDelay: number }>>([])

  useEffect(() => {
    const heartArray = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 12,
      duration: 10 + Math.random() * 6,
    }))
    setHearts(heartArray)

    const petalArray = Array.from({ length: 6 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 10,
      duration: 12 + Math.random() * 6,
    }))
    setPetals(petalArray)

    const sparkleArray = Array.from({ length: 10 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: 2.5 + Math.random() * 1.5,
      delay: Math.random() * 8,
      repeatDelay: 2 + Math.random() * 4,
    }))
    setSparkles(sparkleArray)
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

      {petals.map((petal) => (
        <motion.div
          key={`petal-${petal.id}`}
          className="absolute text-3xl"
          style={{ left: petal.left }}
          initial={{ y: "-10vh", opacity: 0, rotate: 0 }}
          animate={{
            y: "110vh",
            opacity: [0, 1, 1, 0],
            rotate: 720,
            x: [0, 50, -50, 0],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          🌸
        </motion.div>
      ))}

      {sparkles.map((sparkle) => (
        <motion.div
          key={`sparkle-${sparkle.id}`}
          className="absolute text-2xl"
          style={{ left: sparkle.left, top: sparkle.top }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: sparkle.duration,
            delay: sparkle.delay,
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay: sparkle.repeatDelay,
          }}
        >
          {["✨", "⭐", "🌟", "💫"][sparkle.id % 4]}
        </motion.div>
      ))}
    </div>
  )
}
