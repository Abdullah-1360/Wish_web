import HeroSection from "@/components/hero-section"
import CountdownTimer from "@/components/countdown-timer"
import GallerySection from "@/components/gallery-section"
import MessageSection from "@/components/message-section"
import TimelineSection from "@/components/timeline-section"
import MusicSection from "@/components/music-section"
import EndingSection from "@/components/ending-section"
import FloatingHearts from "@/components/floating-hearts"

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <FloatingHearts />
      <HeroSection />
      <CountdownTimer />
      <GallerySection />
      <MessageSection />
      <TimelineSection />
      <MusicSection />
      <EndingSection />
    </main>
  )
}
