"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [isBirthday, setIsBirthday] = useState(false)

  useEffect(() => {
    const calculateTimeLeft = () => {
      const birthday = new Date("2025-10-16T00:00:00")
      const now = new Date()
      const difference = birthday.getTime() - now.getTime()

      if (difference <= 0) {
        setIsBirthday(true)
        return { days: 0, hours: 0, minutes: 0, seconds: 0 }
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    }

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    setTimeLeft(calculateTimeLeft())

    return () => clearInterval(timer)
  }, [])

  return (
    <section id="countdown" className="bg-romantic-cream px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="elegant mb-4 text-4xl font-bold text-romantic-red md:text-5xl">
            {isBirthday ? "It's Your Special Day! 🎉" : "Counting Down to Your Special Day"}
          </h2>
          <p className="cursive mb-12 text-2xl text-romantic-rose md:text-3xl">
            {isBirthday ? "Happy 22nd Birthday, Beautiful!" : "Time until you turn 22..."}
          </p>

          {!isBirthday && (
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
              {Object.entries(timeLeft).map(([unit, value], index) => (
                <motion.div
                  key={unit}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="border-2 border-romantic-pink bg-white p-6 shadow-lg transition-transform hover:scale-105">
                    <div className="elegant text-5xl font-bold text-romantic-red md:text-6xl">
                      {value.toString().padStart(2, "0")}
                    </div>
                    <div className="mt-2 text-lg font-semibold uppercase tracking-wide text-muted-foreground">
                      {unit}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}

          {isBirthday && (
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="text-8xl"
            >
              🎂🎉🎈
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
