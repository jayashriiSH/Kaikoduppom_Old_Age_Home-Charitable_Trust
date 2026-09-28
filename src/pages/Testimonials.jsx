import PageTransition from '../components/PageTransition'
import SectionHeading from '../components/SectionHeading'
import TestimonialsSlider from '../components/TestimonialsSlider'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext'

const staticReviews = [
  {
    name: 'Dillibabu R.',
    rating: 5
  },
  {
    name: 'Akshaya A.M.',
    rating: 5
  },
  {
    name: 'Raja Sekar',
    rating: 5
  },
  {
    name: 'Daisy',
    rating: 5
  },
  {
    name: 'Sivagurunathan K.',
    rating: 5
  },
  {
    name: 'Meenakshi Sundaram',
    rating: 5
  },
  {
    name: 'Vaishnavi Venkatesan',
    rating: 5
  }
]

export default function Testimonials() {
  const { t } = useLang()
  return (
    <PageTransition>
      {/* Banner Header */}
      <div className="relative bg-navy-dark min-h-[40vh] flex flex-col justify-center items-center overflow-hidden text-center py-16">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: '30px 30px'
          }} />
        </div>
        {/* Fades into the dark reviews section below instead of white */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy to-navy-dark" />

        <div className="relative z-10 site-container w-full">
          <span className="text-gold text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">{t('banner.testimonials.eyebrow')}</span>
          <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            {t('banner.testimonials.title')}
          </h1>
          <p className="text-white/60 text-sm sm:text-base section-description">
            {t('banner.testimonials.desc')}
          </p>
        </div>
      </div>

      {/* Testimonials Slider */}
      <TestimonialsSlider showHeading={false} />

      {/* Static Visitor Testimonials Grid */}
      <section className="section-padding bg-warm-white">
        <div className="site-container">
          <SectionHeading
            eyebrow={t('testimonialsPage.eyebrow')}
            title={t('testimonialsPage.title')}
            subtitle={t('testimonialsPage.subtitle')}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {staticReviews.map((r, i) => ({ ...r, ...t('testimonialsPage.reviews')[i] })).map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="relative bg-white border border-border rounded-2xl shadow-sm hover:shadow-lg transition-shadow flex flex-col p-7 overflow-hidden"
              >
                {/* Opening quote mark */}
                <div
                  className="absolute top-4 left-5 font-playfair text-gold/20 select-none pointer-events-none"
                  style={{ fontSize: '80px', lineHeight: 1 }}
                  aria-hidden="true"
                >
                  &ldquo;
                </div>

                {/* Avatar + Name row */}
                <div className="flex items-center gap-3 mb-5 relative z-10">
                  <div className="w-11 h-11 rounded-full bg-navy-dark text-gold font-bold text-base flex items-center justify-center flex-shrink-0 border-2 border-gold/30">
                    {r.name[0]}
                  </div>
                  <div>
                    <p className="font-bold text-navy-dark text-sm leading-tight">{r.name}</p>
                    <p className="text-xs text-text-muted mt-0.5">{r.date}</p>
                  </div>
                </div>

                {/* Review text */}
                <p className="text-text-primary text-sm leading-relaxed flex-1 relative z-10">
                  {r.text}
                </p>

                {/* Divider */}
                <div className="w-12 h-px bg-gold/40 my-5" />

                {/* Stars */}
                <div className="flex gap-1 relative z-10">
                  {Array.from({ length: r.rating }).map((_, idx) => (
                    <Star key={idx} size={14} className="text-gold fill-gold" />
                  ))}
                </div>

                {/* Closing quote mark */}
                <div
                  className="absolute bottom-4 right-5 font-playfair text-gold/20 select-none pointer-events-none"
                  style={{ fontSize: '80px', lineHeight: 1 }}
                  aria-hidden="true"
                >
                  &rdquo;
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  )
}