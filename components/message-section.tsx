"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"

export default function MessageSection() {
  return (
    <section className="animated-gradient bg-gradient-to-br from-pink-200 via-rose-200 to-pink-300 px-4 py-20">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <Card className="glass-strong pulse-glow border-4 border-rose-300 bg-white/90 p-8 shadow-2xl backdrop-blur-xl md:p-12">
            <div className="mb-8 text-center">
              <motion.h2
                className="elegant text-glow-red mb-4 text-4xl font-bold text-rose-600 md:text-5xl"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                A Letter to You
              </motion.h2>
              <motion.div
                className="text-6xl drop-shadow-lg"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                💌
              </motion.div>
            </div>

            <div className="relative">
              <div className="absolute -left-4 top-0 text-3xl opacity-30">💕</div>
              <div className="absolute -right-4 top-0 text-3xl opacity-30">💕</div>
              <div className="absolute -left-4 bottom-0 text-3xl opacity-30">💖</div>
              <div className="absolute -right-4 bottom-0 text-3xl opacity-30">💖</div>

              <div className="space-y-6 text-lg leading-relaxed text-foreground md:text-xl">
                <p className="cursive text-2xl text-rose-500 md:text-3xl">My Dearest Love,</p>

                <p className="text-balance">
                  On this special day, as you turn 22, I want you to know how blessed I feel to have you in my life. You
                  are the sunshine that brightens my darkest days, the laughter that fills my heart with joy, and the
                  love that makes every moment worth living.
                </p>

                <p className="text-balance">
                  First of all, I like your killer smile. Literally jb b dekha hai uss smile pe hamesha unconciously
                  meri b smile hi ai pta nhi q. On This special day I want to confess my feelings for you that You make
                  me feel happiest person on earth when I'm with you
                </p>

                <p className="text-balance">
                  Beshak hum bht km time k liye hi milte lkn yar woh time priceless feel hota koi aur cheez se mujhe
                  itni khushi nhi hui aj tk jitna ap k sath reh k hoti mujhe
                </p>

                <p className="text-balance">
                  Thank you for filling my life with love, laughter, and endless happiness.You are my favorite person,
                  my safe place, and my greatest blessing, Crime partner. I hope this birthday brings you as much joy as
                  you've brought into my life.I love you endlessly — today, tomorrow, and always. 💞
                </p>

                <motion.p
                  className="cursive text-2xl text-rose-600 md:text-3xl"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  Happy Birthday, my beautiful angel. I love you more than words can express. 💖
                </motion.p>

                <p className="cursive text-right text-xl text-pink-600 md:text-2xl">
                  Forever yours,
                  <br />
                  Muffin
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
