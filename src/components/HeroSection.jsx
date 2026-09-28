import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowDown, ChevronRight } from 'lucide-react'
import logo from '../assets/images.png'
import photo4 from '../assets/photo4.png'
import photo5 from '../assets/photo5.png'
import photo6 from '../assets/photo6.png'
import { useLang } from '../i18n/LanguageContext'

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
  const { t } = useLang()
  return (
    <section className="relative bg-navy-dark overflow-hidden flex items-center min-h-[calc(100svh-106px)] lg:min-h-[calc(100svh-110px)] pt-10 pb-28 md:pb-32 lg:pt-8 lg:pb-24">
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
                className="mb-5 lg:mb-[2.5vh]"
              >
                <img
                  src={logo}
                  alt="Kaikoduppom Trust"
                  className="h-14 w-14 lg:h-[min(4rem,7vh)] lg:w-[min(4rem,7vh)] rounded-full border-2 border-gold/60 shadow-2xl shadow-gold/20 object-cover"
                />
              </motion.div>

              {/* Eyebrow */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="flex flex-wrap items-center gap-4 mb-6 lg:mb-[3vh]"
              >
                <div className="h-px w-8 bg-gold" />
                <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase leading-relaxed">
                  {t('hero.eyebrow1')}<br />
                  {t('hero.eyebrow2')}
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="hero-title font-playfair text-4xl sm:text-5xl lg:text-[clamp(2.75rem,6.5vh,4.25rem)] font-bold text-white leading-[1.08] mb-5 lg:mb-[3vh]"
              >
                
                {t('hero.title1')}{' '}
                <br />
                <span className="italic">
                  {t('hero.title2')}{' '}
                  <span className="gradient-text">{t('hero.title3')}</span>
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.7 }}
                className="hero-desc text-white/60 text-base sm:text-lg leading-relaxed max-w-[560px] mb-8 lg:mb-[4vh]"
              >
                {t('hero.desc')}
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
                  {t('hero.ctaSupport')}
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/about"
                  id="hero-about-cta"
                  className="inline-flex items-center justify-center gap-2 h-[54px] border border-white/20 text-white/90 hover:text-white hover:bg-white/5 hover:border-white/40 px-8 rounded-[14px] text-sm font-medium shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-[3px]"
                >
                  {t('hero.ctaAbout')}
                </Link>
              </motion.div>

              {/* Trust Badges */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="flex flex-wrap gap-3 mt-8 lg:mt-[4vh]"
              >
                {[
                  'bg-green-500/15 text-green-400 border-green-500/20',
                  'bg-gold/15 text-gold border-gold/20',
                  'bg-white/10 text-white/70 border-white/10',
                ].map((color, i) => ({ color, text: t('hero.badges')[i] })).map((badge) => (
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

          {/* ── Image Grid: one wide photo on top, two below ── */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="hidden lg:block"
          >
            <div
              className="grid grid-cols-2 grid-rows-[3fr_2fr] gap-4 w-full max-w-[560px] ml-auto"
              style={{ height: 'clamp(340px, calc(100svh - 300px), 520px)' }}
            >
              {[
                { src: photo4, alt: 'Our residents', className: 'col-span-2' },
                { src: photo5, alt: 'Elder care' },
                { src: photo6, alt: 'Community care' },
              ].map((img) => (
                <motion.div
                  key={img.alt}
                  className={`relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 ${img.className ?? ''}`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/40 to-transparent" />
                </motion.div>
              ))}
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
          <span className="text-xs tracking-wider uppercase">{t('hero.scroll')}</span>
          <ArrowDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  )
}