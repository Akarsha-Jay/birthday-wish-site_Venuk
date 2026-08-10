'use client'

import { useEffect, useState } from 'react'

export function LilyRain() {
  const [lilies, setLilies] = useState<Array<{ id: number, left: number, animationDuration: number, animationDelay: number, size: number, rotate: number }>>([])

  useEffect(() => {
    // Generate 15 delicate lily petals
    const count = 15
    const newLilies = Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: Math.random() * 100, // random left position 0-100vw
      animationDuration: 12 + Math.random() * 18, // 12s to 30s to fall
      animationDelay: Math.random() * -20, // Start at different times so they don't fall all at once
      size: 15 + Math.random() * 15, // 15px to 30px
      rotate: Math.random() * 360,
    }))
    setLilies(newLilies)
  }, [])

  if (lilies.length === 0) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {lilies.map((lily) => (
        <div
          key={lily.id}
          className="absolute top-[-10%]"
          style={{
            left: `${lily.left}%`,
            animation: `fall ${lily.animationDuration}s linear infinite`,
            animationDelay: `${lily.animationDelay}s`,
            width: `${lily.size}px`,
            height: `${lily.size}px`,
          }}
        >
          <svg 
            viewBox="0 0 24 24" 
            style={{
              color: 'var(--primary)',
              opacity: 0.15,
              transform: `rotate(${lily.rotate}deg)`,
              width: '100%',
              height: '100%',
              filter: 'drop-shadow(0px 4px 6px rgba(0,0,0,0.3))'
            }}
          >
            <path 
              d="M12 22C12 22 20 16 20 10C20 4.5 12 2 12 2C12 2 4 4.5 4 10C4 16 12 22 12 22Z" 
              fill="currentColor" 
            />
          </svg>
        </div>
      ))}
    </div>
  )
}
