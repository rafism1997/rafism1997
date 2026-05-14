"use client"

import { useState, useEffect, useMemo } from "react"

type Domain = "pharma" | "robotics" | "retail"

interface Particle {
  id: number
  x: number
  y: number
  vx: number
  vy: number
  targetX: number
  targetY: number
}

const PARTICLE_COUNT = 60
const DOMAIN_DURATION = 4000 // 4 seconds per domain

// Define patterns for each domain
const getPattern = (domain: Domain, index: number, total: number): { x: number; y: number } => {
  const centerX = 50
  const centerY = 50

  if (domain === "pharma") {
    // Hexagonal molecular pattern
    const ringIndex = Math.floor(index / 6)
    const angleIndex = index % 6
    const radius = 15 + ringIndex * 12
    const angle = (angleIndex * 60 + ringIndex * 30) * (Math.PI / 180)
    return {
      x: centerX + Math.cos(angle) * radius,
      y: centerY + Math.sin(angle) * radius,
    }
  } else if (domain === "robotics") {
    // Circuit board pathway pattern
    const cols = 8
    const rows = Math.ceil(total / cols)
    const col = index % cols
    const row = Math.floor(index / cols)
    const spacingX = 80 / (cols - 1)
    const spacingY = 80 / (rows - 1)
    return {
      x: 10 + col * spacingX,
      y: 10 + row * spacingY,
    }
  } else {
    // Network grid pattern (retail)
    const gridSize = Math.ceil(Math.sqrt(total))
    const col = index % gridSize
    const row = Math.floor(index / gridSize)
    const spacing = 70 / (gridSize - 1)
    return {
      x: 15 + col * spacing,
      y: 15 + row * spacing,
    }
  }
}

export function HolographicAvatar() {
  const [currentDomain, setCurrentDomain] = useState<Domain>("pharma")
  const [particles, setParticles] = useState<Particle[]>([])

  // Initialize particles
  useEffect(() => {
    const initialParticles: Particle[] = Array.from({ length: PARTICLE_COUNT }, (_, i) => {
      const pattern = getPattern("pharma", i, PARTICLE_COUNT)
      return {
        id: i,
        x: pattern.x,
        y: pattern.y,
        vx: 0,
        vy: 0,
        targetX: pattern.x,
        targetY: pattern.y,
      }
    })
    setParticles(initialParticles)
  }, [])

  // Cycle through domains
  useEffect(() => {
    const domains: Domain[] = ["pharma", "robotics", "retail"]
    let currentIndex = 0

    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % domains.length
      setCurrentDomain(domains[currentIndex])
    }, DOMAIN_DURATION)

    return () => clearInterval(interval)
  }, [])

  // Update particle targets when domain changes
  useEffect(() => {
    setParticles((prev) =>
      prev.map((particle, i) => {
        const pattern = getPattern(currentDomain, i, PARTICLE_COUNT)
        return {
          ...particle,
          targetX: pattern.x,
          targetY: pattern.y,
        }
      }),
    )
  }, [currentDomain])

  // Animate particles toward targets
  useEffect(() => {
    const animate = () => {
      setParticles((prev) =>
        prev.map((particle) => {
          const dx = particle.targetX - particle.x
          const dy = particle.targetY - particle.y
          const ease = 0.05

          return {
            ...particle,
            x: particle.x + dx * ease,
            y: particle.y + dy * ease,
          }
        }),
      )
    }

    const interval = setInterval(animate, 30)
    return () => clearInterval(interval)
  }, [])

  const domainColors = {
    pharma: { main: "rgb(34, 211, 238)", glow: "rgba(34, 211, 238, 0.5)" },
    robotics: { main: "rgb(74, 222, 128)", glow: "rgba(74, 222, 128, 0.5)" },
    retail: { main: "rgb(168, 85, 247)", glow: "rgba(168, 85, 247, 0.5)" },
  }

  const currentColor = domainColors[currentDomain]

  // Draw connections between nearby particles
  const connections = useMemo(() => {
    const lines: { x1: number; y1: number; x2: number; y2: number }[] = []
    const maxDistance = 15

    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x
        const dy = particles[i].y - particles[j].y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < maxDistance) {
          lines.push({
            x1: particles[i].x,
            y1: particles[i].y,
            x2: particles[j].x,
            y2: particles[j].y,
          })
        }
      }
    }

    return lines
  }, [particles])

  return (
    <div className="relative w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center">
      {/* Background glow */}
      <div
        className="absolute inset-0 rounded-full blur-3xl opacity-30 transition-all duration-1000"
        style={{ backgroundColor: currentColor.glow }}
      />

      {/* Particle visualization */}
      <svg viewBox="0 0 100 100" className="w-full h-full relative z-10">
        {/* Connection lines */}
        {connections.map((line, index) => (
          <line
            key={`line-${index}`}
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            stroke={currentColor.main}
            strokeWidth="0.2"
            opacity="0.3"
            className="transition-all duration-300"
          />
        ))}

        {/* Particles */}
        {particles.map((particle) => (
          <g key={particle.id}>
            {/* Glow effect */}
            <circle
              cx={particle.x}
              cy={particle.y}
              r="1.5"
              fill={currentColor.glow}
              opacity="0.4"
              className="blur-sm"
            />

            {/* Particle core */}
            <circle
              cx={particle.x}
              cy={particle.y}
              r="0.8"
              fill={currentColor.main}
              className="transition-all duration-300"
            />
          </g>
        ))}

        {/* Central label */}
        <text
          x="50"
          y="52"
          textAnchor="middle"
          fill={currentColor.main}
          className="text-[8px] font-bold tracking-wider transition-all duration-500 uppercase"
        >
          {currentDomain}
        </text>
      </svg>

      {/* Rotating rings */}
      <div className="absolute inset-0 rounded-full border border-cyan-400/20 animate-spin-slow pointer-events-none" />
      <div
        className="absolute inset-4 rounded-full border border-green-400/20 animate-spin-reverse pointer-events-none"
        style={{ animationDuration: "15s" }}
      />

      {/* Corner accents */}
      <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-cyan-400/70" />
      <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-green-400/70" />
      <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-purple-400/70" />
      <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-cyan-400/70" />
    </div>
  )
}
