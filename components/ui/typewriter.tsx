"use client"

import { useEffect, useRef, useState } from "react"
import { useInView } from "framer-motion"

type TypewriterProps = {
  text?: string
  speed?: number // ms per character
  className?: string
  startDelay?: number // ms before typing starts
  onComplete?: () => void
  startOnView?: boolean // start only when visible in viewport
}

export default function Typewriter({
  text,
  speed = 35,
  className,
  startDelay = 0,
  onComplete,
  startOnView = true,
}: TypewriterProps) {
  const [displayed, setDisplayed] = useState("")
  const indexRef = useRef(0)
  const timerRef = useRef<number | null>(null)
  const startTimeoutRef = useRef<number | null>(null)
  const safeText = typeof text === "string" ? text : ""
  const spanRef = useRef<HTMLSpanElement | null>(null)
  const isInView = useInView(spanRef, { amount: 0.3 })

  useEffect(() => {
    const clearAll = () => {
      if (timerRef.current) {
        window.clearTimeout(timerRef.current)
        timerRef.current = null
      }
      if (startTimeoutRef.current) {
        window.clearTimeout(startTimeoutRef.current)
        startTimeoutRef.current = null
      }
    }

    const startTyping = () => {
      clearAll()
      setDisplayed("")
      indexRef.current = 0
      startTimeoutRef.current = window.setTimeout(() => {
        const tick = () => {
          if (indexRef.current > safeText.length) {
            if (onComplete) onComplete()
            return
          }
          setDisplayed(safeText.slice(0, indexRef.current))
          indexRef.current += 1
          timerRef.current = window.setTimeout(tick, speed)
        }
        tick()
      }, startDelay)
    }

    // Behavior:
    // - If startOnView is true: hide when out of view, restart typing on enter.
    // - If startOnView is false: always type from start on mount and keep text visible.
    if (startOnView) {
      if (isInView) {
        startTyping()
      } else {
        clearAll()
        setDisplayed("")
        indexRef.current = 0
      }
    } else {
      // Start immediately and do not clear on out-of-view
      startTyping()
    }

    return () => {
      clearAll()
    }
  }, [safeText, speed, startDelay, onComplete, isInView, startOnView])

  return (
    <span ref={spanRef} className={className} style={{ whiteSpace: "pre-line" }}>
      {displayed}
    </span>
  )
}