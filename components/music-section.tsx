"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Play, Pause, Music } from "lucide-react"

export default function MusicSection() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  const togglePlay = async () => {
    if (!audioRef.current || isLoading) return

    setIsLoading(true)

    try {
      if (isPlaying) {
        audioRef.current.pause()
        setIsPlaying(false)
      } else {
        // Wait for play() promise to resolve
        await audioRef.current.play()
        setIsPlaying(true)
      }
    } catch (error) {
      // Ignore AbortError and other playback interruptions
      if (error instanceof Error && error.name !== "AbortError") {
        console.error("Audio playback error:", error)
      }
      setIsPlaying(false)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="bg-romantic-pink px-4 py-20">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Card className="border-4 border-romantic-red bg-white p-8 shadow-2xl md:p-12">
            <div className="text-center">
              <motion.div
                animate={{ rotate: isPlaying ? 360 : 0 }}
                transition={{ duration: 3, repeat: isPlaying ? Number.POSITIVE_INFINITY : 0, ease: "linear" }}
                className="mb-6 inline-block"
              >
                <Music className="h-20 w-20 text-romantic-red" />
              </motion.div>

              <h2 className="elegant mb-4 text-4xl font-bold text-romantic-red md:text-5xl">Our Song</h2>
              <p className="cursive mb-8 text-2xl text-romantic-rose md:text-3xl">A melody for your special day 🎵</p>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={togglePlay}
                  disabled={isLoading}
                  size="lg"
                  className="h-20 w-20 rounded-full bg-romantic-red text-white shadow-lg hover:bg-romantic-rose disabled:opacity-50"
                >
                  {isPlaying ? <Pause className="h-10 w-10" /> : <Play className="h-10 w-10" />}
                </Button>
              </motion.div>

              <p className="mt-6 text-muted-foreground">
                {isPlaying ? "Now playing our special song..." : "Click to play a romantic melody"}
              </p>

              {/* Placeholder audio - replace with actual audio file */}
              <audio ref={audioRef} loop onEnded={() => setIsPlaying(false)}>
                <source src="/placeholder-audio.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
