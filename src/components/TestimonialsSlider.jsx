import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Star } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { useLang } from '../i18n/LanguageContext'

const testimonials = [
  {
    name: 'Dillibabu R.',
    rating: 5,
  },
  {
    name: 'Akshaya A.M.',
    rating: 5,
  },
  {
    name: 'Raja Sekar',
    rating: 5,
  },
  {
    name: 'Daisy',
    rating: 5,
  },
]

export default function TestimonialsSlider({ showHeading = true }) {
  const { t } = useLang()
  return (
    <section className="section-padding bg-navy-dark relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 text-[200px] font-playfair text-white">"</div>
        <div className="absolute bottom-20 right-10 text-[200px] font-playfair text-white rotate-180">"</div>
      </div>

      <div className="site-container relative z-10">
        {showHeading && (
          <SectionHeading
            eyebrow={t('testimonialsSlider.eyebrow')}
            title={t('testimonialsSlider.title')}
            subtitle={t('testimonialsSlider.subtitle')}
            light
          />
        )}

        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch ${showHeading ? 'mt-16' : ''}`}>
          {testimonials.map((r, i) => ({ ...r, ...t('testimonialsSlider.reviews')[i] })).map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              whileHover={{ y: -3, transition: { duration: 0.3 } }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-lg hover:bg-white/10 transition-all duration-300 flex flex-col h-full min-h-[330px]"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: r.rating }).map((_, j) => (
                  <Star key={j} size={16} className="text-gold fill-gold" />
                ))}
              </div>

              <p className="text-white/80 text-sm leading-[1.8] mb-8 flex-1">{r.text}</p>

              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-gold-light flex items-center justify-center text-navy-dark font-bold text-sm">
                  {r.name[0]}
                </div>
                <div>
                  <p className="text-white font-medium text-sm">{r.name}</p>
                  <p className="text-white/40 text-xs">{r.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Google Rating Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex justify-center mt-16"
        >
          <div className="inline-flex items-center gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-8 py-4">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={20} className="text-gold fill-gold" />
              ))}
            </div>
            <div className="h-6 w-px bg-white/20" />
            <div>
              <p className="text-white font-bold text-lg">5.0</p>
            </div>
            <div>
              <p className="text-white/60 text-sm">{t('testimonialsSlider.googleReviews')}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
