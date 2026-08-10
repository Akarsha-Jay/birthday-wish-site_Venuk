'use client'

import { useState, useRef, useEffect } from 'react'
import { Play, Pause, Music } from 'lucide-react'

export function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play().catch(e => console.error("Audio play failed:", e))
      }
      setIsPlaying(!isPlaying)
    }
  }

  // Sync state if audio ends or is paused externally
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const handlePause = () => setIsPlaying(false)
    const handlePlay = () => setIsPlaying(true)

    audio.addEventListener('pause', handlePause)
    audio.addEventListener('play', handlePlay)

    return () => {
      audio.removeEventListener('pause', handlePause)
      audio.removeEventListener('play', handlePlay)
    }
  }, [])

  return (
    <div className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50">
      <button 
        onClick={togglePlay}
        className="w-12 h-12 bg-[#2b222b] border border-[#4b4144] rounded-full flex items-center justify-center text-[var(--primary)] shadow-2xl transition-all duration-300 hover:scale-110 hover:border-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? <Pause size={20} /> : <Music size={20} />}
      </button>
      
      {/* 
        The audio source is currently pointing to /audio/song.mp3.
        Place your mp3 file in the "public/audio" folder and name it "song.mp3".
      */}
      <audio ref={audioRef} loop preload="auto">
        <source src="/audio/song.mp3" type="audio/mpeg" />
      </audio>
    </div>
  )
}
