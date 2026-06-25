import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const timelineEvents = [
  {
    year: 'The Beginning',
    title: 'A Vision is Born',
    description: 'Founded through the vision and compassion of Founder Dr. Jagadeesan Sellamuthu, Kaikoduppom was born from a simple belief that every elderly person deserves care, dignity, and a place to call home.',
  },
  {
    year: 'A Humble Start',
    title: 'Building from the Heart',
    description: 'With his own personal savings, the founder began by providing shelter, food, and daily care to abandoned elders, laying the foundation for a mission driven by kindness and selfless service.',
  },
  {
    year: 'Growing with Purpose',
    title: 'Expanding the Mission',
    description: 'As the need grew, the trust expanded its services and strengthened its commitment to supporting destitute and abandoned senior citizens with compassion and respect.',
  },
  {
    year: 'Serving Through Challenges',
    title: 'Unwavering Commitment',
    description: 'Through every challenge, the focus remained unchanged — ensuring uninterrupted care, safety, and support for every resident, no matter the circumstances.',
  },
  {
    year: 'Expanding Care',
    title: 'Deeper, Dedicated Care',
    description: 'The home introduced enhanced medical assistance and dedicated care for bedridden residents, providing comfort and dignity to those with greater needs.',
  },
  {
    year: 'Today',
    title: 'A Family That Endures',
    description: 'Kaikoduppom remains committed to offering shelter, nutritious meals, medical support, and loving care to abandoned and destitute elders — creating a family where they can live with dignity and hope.',
  },
]

export default function Timeline({ events = timelineEvents }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '0px' })

  return (
    <div ref={ref} className="relative pt-4 md:max-w-5xl md:mx-auto">
      {/* Central vertical line */}
      <div
        className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold via-navy/40 to-gold"
        style={{ transform: 'translateX(-50%)' }}
      />

      <div className="space-y-10 md:space-y-8">
        {events.map((event, i) => {
          const isEven = i % 2 === 0

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.55 }}
              className="relative flex items-start md:items-stretch"
            >
              {/* Timeline dot */}
              <div
                className="absolute left-5 md:left-1/2 w-4 h-4 rounded-full bg-gold border-[3px] border-white shadow-md z-10 flex-shrink-0"
                style={{ transform: 'translate(-50%, 4px)' }}
              />

              {/* Mobile layout — single column */}
              <div className="ml-14 md:hidden w-full pr-4">
                <TimelineCard event={event} />
              </div>

              {/* Desktop layout — alternate left/right */}
              <div className="hidden md:grid md:grid-cols-2 w-full gap-x-20">
                <div className={`flex justify-end ${isEven ? '' : 'invisible'}`}>
                  {isEven && <TimelineCard event={event} align="right" />}
                </div>
                <div className={`flex justify-start ${isEven ? 'invisible' : ''}`}>
                  {!isEven && <TimelineCard event={event} align="left" />}
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Footer quote card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: timelineEvents.length * 0.12 + 0.2, duration: 0.6 }}
        className="mt-14 border border-gold/30 bg-white rounded-2xl p-8 sm:p-10 text-center shadow-sm"
      >
        <p className="font-playfair text-lg sm:text-xl font-bold text-navy-dark leading-snug mb-3">
          What began with one act of kindness continues as a movement of care,
          dignity, and hope for those who need it most.
        </p>
        <div className="flex items-center justify-center gap-2 mt-4">
          <div className="h-px w-10 bg-gold/50" />
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 text-gold">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
          <div className="h-px w-10 bg-gold/50" />
        </div>
        <p className="text-gold-dark text-xs font-bold tracking-[0.18em] uppercase mt-3">
          Together, We Can Continue This Journey.
        </p>
      </motion.div>
    </div>
  )
}

function TimelineCard({ event, align = 'left' }) {
  return (
    <div
      className={`bg-white border border-border rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow w-full md:w-[360px] md:min-h-[168px] flex flex-col justify-center ${
        align === 'right' ? 'text-right' : 'text-left'
      }`}
    >
      <span className={`inline-block text-xs font-bold tracking-widest uppercase text-gold mb-2 bg-gold/10 px-3 py-1 rounded-full ${
        align === 'right' ? 'self-end' : 'self-start'
      }`}>
        {event.year}
      </span>
      <h4 className="font-playfair text-lg font-bold text-navy-dark mb-1.5 leading-snug">
        {event.title}
      </h4>
      <p className="text-text-muted text-sm leading-relaxed">{event.description}</p>
    </div>
  )
}