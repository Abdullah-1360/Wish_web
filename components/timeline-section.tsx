"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"

const milestones = [
  {
    title: "When We First Talked",
    date: "24 June, 2023",
    description:
      "The moment you accepted the request, I knew my life would never be the same. You walked into my world and filled it with light.",
    emoji: "✨",
  },
  {
    title: "When We Met",
    date: "7 Sept, 2023",
    description: "A Magical Evening, Nervous butterflies, endless conversation, and the realization that I never wanted the time to end.",
    emoji: "🌹",
  },
  {
    title: "Our First  Date",
    date: "15 Sept,2023",
    description: "From a spontaneous road trip to quiet moments at Pizza Crunch, every moment with you is my favorite.Woh Road blocks na hote to shyd first impression acha jata 😂",
    emoji: "🗺️",
  },
  {
    title: "Jinnah Park Date",
    date: "6 Oct,2023",
    description: "Those hours made me feel really happy. Aj b yaad woh time kitni jldi guzar gya tha😂. Aur woh special Walk first time hi kisi lrki k sath chla tha aise park me 🙃",
    emoji: "😂",
  },
  {
    title: "Heart Made using Hands",
    date: "24 Oct,2023",
    description:
      "Cheezious me bnaya hua Heart bht bezzat krwaya tha uss ne ghr walo se😂.But I must Say felt really special ",
    emoji: "💑",
  },
  {
    title: "Purposal",
    date: "15 Nov,2023",
    description: "First time purpose kea tha mene kisi lrki ko. Phir b Flower wapis kr dea ap ne iss k liye kabhi maaf nhi kru ga 😭 ",
    emoji: "🎁",
  },
  {
    title: "Faisal Mosque Trip",
    date: "17 Nov,2023",
    description: "Best Day Ever spent with you. First time itna time dea gya tha. Aur woh hath pkrna yaad to bht ata pka gira deta me 😂 itna awkward tareeka tha mera😭",
    emoji: "💕",
  },
  {
    title: "Chae Khana Trip",
    date: "1 Oct,2025",
    description: "Very Long Break but Really worth it. Roz special Days hon toh aam lgne lg jate lkn ap k sath hr din special hi raha breaks k baad aur b special ho jata.Aik cheez jis ka gila raha Pic to bna leni chahiye thi hume sath😂",
    emoji: "💕",
  },
  {
    title: "Today & Forever",
    date: "Our Future",
    description: "Here's to your 22nd birthday and to all the beautiful moments yet to come. The best is yet to be.",
    emoji: "💖",
  },
]

export default function TimelineSection() {
  return (
    <section className="bg-gradient-to-b from-romantic-blush to-romantic-cream px-4 py-20">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="elegant mb-4 text-4xl font-bold text-romantic-red md:text-5xl">Our Love Story</h2>
          <p className="cursive text-2xl text-romantic-rose md:text-3xl">
            A timeline of our beautiful journey together 💕
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 h-full w-1 bg-romantic-pink md:left-1/2" />

          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative mb-12 flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-romantic-red text-xl shadow-lg md:left-1/2">
                {milestone.emoji}
              </div>

              {/* Content card */}
              <div className="ml-20 w-full md:ml-0 md:w-5/12">
                <Card className="border-2 border-romantic-pink bg-white p-6 shadow-lg transition-all hover:scale-105 hover:shadow-xl">
                  <h3 className="elegant mb-2 text-2xl font-bold text-romantic-red">{milestone.title}</h3>
                  <p className="cursive mb-3 text-lg text-romantic-rose">{milestone.date}</p>
                  <p className="text-balance leading-relaxed text-muted-foreground">{milestone.description}</p>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
