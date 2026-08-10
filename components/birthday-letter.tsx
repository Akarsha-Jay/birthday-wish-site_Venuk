'use client'

import { useState } from 'react'
import { ArrowDown, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react'

export function BirthdayLetter() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section className="letter-stage" aria-label="Birthday letter">
      <button
        type="button"
        className={`letter-card ${isOpen ? 'is-open' : ''}`}
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-controls="birthday-message"
      >
        <div className="letter-cover">
          <div className="letter-cover-top" />
          <div className="letter-seal" aria-hidden="true"><Sparkles size={15} strokeWidth={1.5} /></div>
          <span className="cover-kicker">A little something for you</span>
          <span className="cover-title">Open when<br />you&apos;re ready</span>
          <span className="cover-hint"><ArrowDown size={14} /> {isOpen ? 'Close letter' : 'Tap to open'}</span>
        </div>
        <div id="birthday-message" className="letter-inside">
          <div className="inside-header">
            <span>August 11, 2026</span>
          </div>
          <div className="inside-copy">
            <p className="inside-greeting">Happy 22nd Birthday! 🎉</p>
            <p>
              I honestly have so much to say, but first, thank you for everything you do for me. You’re way more than just a best friend—you’re like a brother to me, and words can’t really explain how much you mean to me.
            </p>
            <p>
              It sucks that we&apos;re far apart and I can&apos;t give you a proper gift or celebrate with you today, but I wanted to send you this message from the bottom of my heart.
            </p>
            <p>
              If I can leave you with one piece of advice: never give up, and stop doubting yourself. Don&apos;t compare yourself to me or anyone else, because the talent you have is on another level. You’re truly one of a kind.
            </p>
            <p className="inside-signoff">Hope you have an awesome 22nd birthday and a great day ahead!<br /><br /><span>Your best friend</span></p>
          </div>
        </div>
      </button>
      <div className="letter-controls" aria-hidden={!isOpen}>
        <ChevronLeft size={14} /><span>{isOpen ? 'A note, just for you' : 'There&apos;s a note inside'}</span><ChevronRight size={14} />
      </div>
    </section>
  )
}

export default BirthdayLetter

/* keep the imported directional icons available for the compact control */
void ChevronLeft
void ChevronRight
