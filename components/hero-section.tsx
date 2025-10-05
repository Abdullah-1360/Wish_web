"use client"

import { motion } from "framer-motion"

export default function HeroSection() {
  return (
    <section className="animated-gradient relative flex min-h-screen items-center justify-center bg-gradient-to-br from-pink-50 via-rose-100 to-pink-200 px-4">
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-pink-200/30 to-rose-300/40 opacity-60" />

      <div className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.h1
            className="elegant text-glow-red mb-4 text-6xl font-bold text-rose-600 md:text-8xl"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
          >
            Happy Birthday Rida
          </motion.h1>
          <motion.h2
            className="cursive text-glow-pink mb-8 text-5xl text-pink-500 md:text-7xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            My Love! 💕
          </motion.h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="glass-strong glow-pink mx-auto mt-8 max-w-2xl rounded-3xl p-8"
        >
          <p className="elegant text-2xl text-rose-700 md:text-3xl">Celebrating 22 wonderful years of you</p>
          <p className="cursive mt-4 text-xl text-pink-600 md:text-2xl">October 16, 2025</p>
        </motion.div>

        <motion.div
          className="mt-12"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <motion.a
            href="#countdown"
            className="inline-block text-5xl drop-shadow-lg"
            whileHover={{ scale: 1.2 }}
            aria-label="Scroll down"
          >
            💝
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
