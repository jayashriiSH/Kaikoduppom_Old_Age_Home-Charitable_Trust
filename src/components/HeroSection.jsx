import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowDown, ChevronRight } from 'lucide-react'
import logo from '../assets/images.png'
import photo4 from '../assets/photo4.png'
import photo5 from '../assets/photo5.png'
import photo6 from '../assets/photo6.png'

const PARTICLES = [
  { w: 6, h: 4, l: 12, t: 20, dur: 18, delay: 0 },
  { w: 3, h: 3, l: 28, t: 65, dur: 14, delay: 2 },
  { w: 7, h: 7, l: 45, t: 10, dur: 20, delay: 5 },
  { w: 4, h: 4, l: 60, t: 80, dur: 16, delay: 1 },
  { w: 5, h: 3, l: 75, t: 35, dur: 12, delay: 7 },
  { w: 3, h: 5, l: 88, t: 55, dur: 19, delay: 3 },
  { w: 6, h: 6, l: 5,  t: 50, dur: 15, delay: 9 },
  { w: 4, h: 4, l: 92, t: 15, dur: 13, delay: 4 },
]

function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {PARTICLES.map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-gold/20"
          style={{
            width: `${p.w}px`,
            height: `${p.h}px`,
            left: `${p.l}%`,
            top: `${p.t}%`,
            animation: `float ${p.dur}s linear infinite`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  )
}

export default function HeroSection() {
  return (
    <section className="relative bg-navy-dark overflow-hidden flex items-center min-h-[620px] sm:min-h-[660px] pt-20 pb-32 md:pt-24 md:pb-40 lg:min-h-[820px] lg:pt-20 lg:pb-[170px]">
      {/* Background dot pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy to-navy-dark/90" />
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-warm-white to-transparent pointer-events-none" />

      <FloatingParticles />

      <div className="relative z-10 site-container w-full">
        <div className="grid lg:grid-cols-[minmax(0,1.02fr)_minmax(440px,0.98fr)] gap-12 xl:gap-20 items-center">

          {/* ── Text Content ── */}
          <div className="max-w-[640px] lg:pr-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Logo */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
                className="mb-8"
              >
                <img
                  src={logo}
                  alt="Kaikoduppom Trust"
                  className="h-20 w-22 rounded-full border-2 border-gold/60 shadow-2xl shadow-gold/20 object-cover"
                />
              </motion.div>

              {/* Eyebrow */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="flex flex-wrap items-center gap-4 mb-10"
              >
                <div className="h-px w-8 bg-gold" />
                <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase leading-relaxed">
                  Kaikoduppom Charitable Trust (Regd.,)<br />
                  Old age home for abandoned and destitute
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="font-playfair text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.08] mb-8"
              >
                
                No Elder Should{' '}
                <br />
                <span className="italic">
                  Face Old Age{' '}
                  <span className="gradient-text">Alone</span>
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.7 }}
                className="text-white/60 text-base sm:text-lg leading-relaxed max-w-[560px] mb-10"
              >
                As a State and Central Government recognised charitable trust, we strive to restore dignity, hope, and a sense of belonging by caring for every resident with love, respect, and dedication.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="flex flex-col sm:flex-row sm:flex-wrap gap-4"
              >
                <Link
                  to="/contact"
                  id="hero-contact-cta"
                  className="group inline-flex items-center justify-center gap-2 h-[54px] bg-gold hover:bg-gold-light text-navy-dark font-bold px-8 rounded-[14px] text-sm shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-[3px]"
                >
                  Support Our Mission
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/about"
                  id="hero-about-cta"
                  className="inline-flex items-center justify-center gap-2 h-[54px] border border-white/20 text-white/90 hover:text-white hover:bg-white/5 hover:border-white/40 px-8 rounded-[14px] text-sm font-medium shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-[3px]"
                >
                  Learn About Us
                </Link>
              </motion.div>

              {/* Trust Badges */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="flex flex-wrap gap-3 mt-12"
              >
                {[
                  { text: 'Govt. Registered',    color: 'bg-green-500/15 text-green-400 border-green-500/20' },
                  { text: '★ 5.0 · 521 Reviews', color: 'bg-gold/15 text-gold border-gold/20' },
                  { text: 'Open 24 Hours',        color: 'bg-white/10 text-white/70 border-white/10' },
                ].map((badge) => (
                  <span
                    key={badge.text}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium border ${badge.color}`}
                  >
                    {badge.text}
                  </span>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* ── Image Collage (absolute-positioned, matches screenshot) ── */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="hidden lg:block"
          >
            {/*
              Layout (mirroring the screenshot):
              ┌─────────────────────────────────────┐
              │          [  photo4 – large top-right ]│
              │  [photo5 – mid-left]                  │
              │               [ photo6 – sm bot-right]│
              └─────────────────────────────────────┘
            */}
            <div className="relative w-full max-w-[560px] mx-auto" style={{ height: '520px' }}>

              {/* Decorative corner borders */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-gold/20 rounded-2xl pointer-events-none z-0" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-gold/10 rounded-3xl pointer-events-none z-0" />

              {/* Ambient pulse */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gold/10 z-0 pointer-events-none"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              {/* photo4 — large, top-right */}
              <motion.div
                className="absolute rounded-2xl overflow-hidden shadow-2xl"
                style={{ top: '0%', right: '0%', width: '62%', height: '52%' }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img src={photo4} alt="Our residents" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/40 to-transparent" />
              </motion.div>

              {/* photo5 — medium, centre-left, overlaps downward */}
              <motion.div
                className="absolute rounded-2xl overflow-hidden shadow-2xl"
                style={{ top: '34%', left: '0%', width: '55%', height: '48%' }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img src={photo5} alt="Elder care" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/40 to-transparent" />
              </motion.div>

              {/* photo6 — small, bottom-right */}
              <motion.div
                className="absolute rounded-2xl overflow-hidden shadow-2xl"
                style={{ bottom: '0%', right: '0%', width: '40%', height: '36%' }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img src={photo6} alt="Community care" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/40 to-transparent" />
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-white/40"
        >
          <span className="text-xs tracking-wider uppercase">Scroll</span>
          <ArrowDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  )
}