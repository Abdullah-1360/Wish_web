"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import Image from "next/image"

const photos = [
  { id: 1, src: "/images/image_1.jpg" },
  { id: 2, src: "/images/image_2.jpg" },
  { id: 3, src: "/images/image_3.jpg" },
  { id: 4, src: "/images/image_4.jpg" },
  { id: 5, src: "/images/image_5.jpg" },
  { id: 6, src: "/images/image_6.jpg" },
  { id: 7, src: "/images/image_7.jpg" },
  { id: 8, src: "/images/image_8.jpg" },
]

export default function GallerySection() {
  return (
    <section className="animated-gradient bg-gradient-to-b from-pink-50 via-rose-50 to-pink-100 px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <div className="glass-strong glow-pink mx-auto inline-block rounded-3xl px-8 py-6">
            <h2 className="elegant text-glow-red mb-4 text-4xl font-bold text-rose-600 md:text-5xl">
              Our Beautiful Memories
            </h2>
            <p className="cursive text-2xl text-pink-500 md:text-3xl">Every moment with you is a treasure 📸</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotate: 2, y: -10 }}
              className="group"
            >
              <Card className="glow-pink overflow-hidden rounded-2xl border-4 border-pink-300 bg-white shadow-2xl transition-all duration-300 group-hover:border-rose-400 group-hover:shadow-pink-300/50">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={photo.src}
                    alt={`Memory ${photo.id}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    priority={index < 3}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pink-500/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="text-4xl drop-shadow-lg">💕</span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
