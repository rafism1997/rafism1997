"use client"

import { useEffect, useState } from "react"

const codeLines = [
  "> Initializing AI Systems...",
  "> Loading Neural Networks...",
  "> Connecting to Vision AI Modules...",
  "> Deploying Cloud Infrastructure...",
  "> Activating Robotics Framework...",
  "> System Ready.",
]

export function IntroAnimation() {
  const [visible, setVisible] = useState(true)
  const [currentLine, setCurrentLine] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    if (!visible) return

    if (currentLine < codeLines.length) {
      if (charIndex < codeLines[currentLine].length) {
        const timeout = setTimeout(() => {
          setDisplayedText((prev) => prev + codeLines[currentLine][charIndex])
          setCharIndex(charIndex + 1)
        }, 30)
        return () => clearTimeout(timeout)
      } else {
        const timeout = setTimeout(() => {
          setCurrentLine(currentLine + 1)
          setDisplayedText("")
          setCharIndex(0)
        }, 200)
        return () => clearTimeout(timeout)
      }
    } else {
      const timeout = setTimeout(() => {
        setVisible(false)
      }, 500)
      return () => clearTimeout(timeout)
    }
  }, [currentLine, charIndex, visible])

  if (!visible) return null

  return (
    <div className="fixed inset-0 z-50 bg-background flex items-center justify-center">
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0a0a0a_1px,transparent_1px),linear-gradient(to_bottom,#0a0a0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Glowing orb */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] animate-pulse" />
      </div>

      <div className="relative z-10 max-w-2xl w-full px-6">
        {/* Terminal window */}
        <div className="border border-cyan-500/30 rounded-lg overflow-hidden shadow-[0_0_50px_rgba(6,182,212,0.3)]">
          {/* Terminal header */}
          <div className="bg-gray-900/80 border-b border-cyan-500/30 px-4 py-2 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-4 text-xs text-gray-400 font-mono">rafi@portfolio:~$</span>
          </div>

          {/* Terminal content */}
          <div className="bg-black/90 p-6 min-h-[300px] font-mono text-sm">
            {codeLines.slice(0, currentLine).map((line, i) => (
              <div key={i} className="text-cyan-400 mb-2 flex items-center gap-2">
                <span className="text-green-400">✓</span>
                {line}
              </div>
            ))}
            {currentLine < codeLines.length && (
              <div className="text-cyan-400 mb-2 flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
                {displayedText}
                <span className="inline-block w-2 h-4 bg-cyan-400 animate-pulse" />
              </div>
            )}
          </div>
        </div>

        {/* Loading bar */}
        <div className="mt-6 h-1 bg-gray-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-cyan-500 to-green-500 transition-all duration-300"
            style={{ width: `${(currentLine / codeLines.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  )
}
