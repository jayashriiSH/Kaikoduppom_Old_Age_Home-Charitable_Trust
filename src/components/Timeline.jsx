import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const timelineEvents = [
  { year: 'Foundation', title: 'A Vision is Born',        description: 'Mr. Jagadeesan Sellamuthu, driven by compassion after witnessing elder abandonment, establishes the trust.' },
  { year: 'Growth',     title: 'Building a Home',          description: 'The trust acquires a permanent facility in Puducherry to house and care for abandoned elders.' },
  { year: 'Recognition',title: 'Government Registration',  description: 'Kaikoduppom Trust receives official recognition from both State and Central Government of India.' },
  { year: 'Expansion',  title: 'Services Grow',            description: 'Introduction of hospice care, cancer hospice, and bedridden care services for the most vulnerable.' },
  { year: 'Impact',     title: 'Community Outreach',       description: 'Launch of community food drives and volunteer programs reaching elders beyond the home.' },
  { year: 'Present',    title: '5-Star Legacy',            description: 'With 521+ reviews and a perfect 5.0 rating, the trust continues to serve with excellence and love.' },
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
                {/* Left slot */}
                <div className={`flex justify-end ${isEven ? '' : 'invisible'}`}>
                  {isEven && <TimelineCard event={event} align="right" />}
                </div>
                {/* Right slot */}
                <div className={`flex justify-start ${isEven ? 'invisible' : ''}`}>
                  {!isEven && <TimelineCard event={event} align="left" />}
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
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
      <span className="inline-block text-xs font-bold tracking-widest uppercase text-gold mb-2 bg-gold/10 px-3 py-1 rounded-full">
        {event.year}
      </span>
      <h4 className="font-playfair text-lg font-bold text-navy-dark mb-1.5 leading-snug">
        {event.title}
      </h4>
      <p className="text-text-muted text-sm leading-relaxed">{event.description}</p>
    </div>
  )
}
