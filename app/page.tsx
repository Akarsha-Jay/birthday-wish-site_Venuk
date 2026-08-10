import Image from 'next/image'
import BirthdayLetter from '@/components/birthday-letter'
import { LilyRain } from '@/components/lily-rain'
import { AudioPlayer } from '@/components/audio-player'

export default function Page() {
  return (
    <main className="birthday-page">
      <div className="grain" aria-hidden="true" />
      <LilyRain />
      <AudioPlayer />
      <header className="page-header">
        <span className="brand-mark">B / F</span>
        <span className="header-note">A small celebration of you</span>
      </header>

      <div className="birthday-content">
        <div className="eyebrow"><span /> August 11, 2026 <span /></div>
        <h1>Happy 22nd birthday,<br /><em>Venuk.</em></h1>
        <p className="intro">Some people make an entrance.<br />You make a difference.</p>
        <BirthdayLetter />

        <div className="mt-24 flex flex-wrap justify-center gap-6 sm:gap-8 pb-12 opacity-90">
          {[
            { src: '/pic1.jpg', alt: 'Memory 1', rotate: '-rotate-3' },
            { src: '/pic2.jpg', alt: 'Memory 2', rotate: 'rotate-2 translate-y-4' },
            { src: '/pic3.jpg', alt: 'Memory 3', rotate: '-rotate-2' },
          ].map((pic, i) => (
            <div 
              key={i} 
              className={`relative w-48 h-56 sm:w-56 sm:h-64 bg-[#e7ded4] p-2.5 pb-10 sm:p-3 sm:pb-12 shadow-2xl border border-[#37343a] transition-all duration-500 md:hover:scale-110 md:hover:z-10 md:hover:-translate-y-2 cursor-pointer ${pic.rotate}`}
            >
              <div className="relative w-full h-full bg-[#111116] overflow-hidden rounded-sm">
                <Image 
                  src={pic.src} 
                  alt={pic.alt} 
                  fill 
                  sizes="(max-width: 640px) 192px, 224px"
                  className="object-cover grayscale-0 md:grayscale md:hover:grayscale-0 transition-all duration-700" 
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer className="page-footer">
        <span>made with a full heart</span>
        <span className="footer-dot" aria-hidden="true" />
        <span>for my person</span>
      </footer>
    </main>
  )
}
