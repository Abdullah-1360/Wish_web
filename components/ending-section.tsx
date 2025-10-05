"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function EndingSection() {
  const [showConfetti, setShowConfetti] = useState(false)

  useEffect(() => {
    setShowConfetti(true)
  }, [])

  return (
    <section className="animated-gradient relative min-h-screen bg-gradient-to-br from-rose-400 via-pink-500 to-rose-500 px-4 py-20">
      {showConfetti && (
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {Array.from({ length: 60 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-3xl drop-shadow-lg"
              style={{
                left: `${Math.random() * 100}%`,
                top: "-10%",
              }}
              initial={{ y: -100, opacity: 1, rotate: 0, scale: 0 }}
              animate={{
                y: "110vh",
                opacity: [0, 1, 1, 0],
                rotate: Math.random() * 720,
                scale: [0, 1, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                delay: Math.random() * 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatDelay: Math.random() * 3,
              }}
            >
              {["🎉", "🎊", "🎈", "💖", "✨", "🌟", "💕", "🎂", "🌸", "💝"][Math.floor(Math.random() * 10)]}
            </motion.div>
          ))}
        </div>
      )}

      <div className="relative z-10 flex min-h-[80vh] flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="glass-strong glow-pink rounded-3xl p-12"
        >
          <motion.h2
            className="elegant text-glow-red mb-8 text-5xl font-bold text-white drop-shadow-lg md:text-7xl"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            I Love You Forever
          </motion.h2>

          <motion.div
            className="mb-8 text-8xl drop-shadow-2xl md:text-9xl"
            animate={{
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            💖
          </motion.div>

          <motion.p
            className="cursive mb-6 text-3xl text-white drop-shadow-lg md:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Happy 22nd Birthday, Beautiful!
          </motion.p>

          <motion.p
            className="elegant max-w-2xl text-xl text-white drop-shadow-md md:text-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            May this year bring you endless joy, incredible adventures, and all the happiness your heart can hold. You
            deserve the world and so much more. Here's to celebrating you today and always! 🎂✨
          </motion.p>

          <motion.div
            className="mt-12 flex flex-wrap justify-center gap-6 text-6xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <motion.span
              className="drop-shadow-lg"
              animate={{ y: [0, -15, 0], scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, delay: 0 }}
            >
              🎉
            </motion.span>
            <motion.span
              className="drop-shadow-lg"
              animate={{ y: [0, -15, 0], scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, delay: 0.2 }}
            >
              🎊
            </motion.span>
            <motion.span
              className="drop-shadow-lg"
              animate={{ y: [0, -15, 0], scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, delay: 0.4 }}
            >
              🎈
            </motion.span>
            <motion.span
              className="drop-shadow-lg"
              animate={{ y: [0, -15, 0], scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, delay: 0.6 }}
            >
              🎂
            </motion.span>
            <motion.span
              className="drop-shadow-lg"
              animate={{ y: [0, -15, 0], scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, delay: 0.8 }}
            >
              🎁
            </motion.span>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <p className="cursive text-3xl text-white drop-shadow-lg">With all my love, today and always 💕</p>
        </motion.div>
      </div>
    </section>
  )
}
