import PageTransition from '../components/PageTransition'
import SectionHeading from '../components/SectionHeading'
import Timeline from '../components/Timeline'
import SupportMission from '../components/SupportMission'
import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { Link } from 'react-router-dom'
import founderImg from '../assets/founder.jpg'
import { useLang } from '../i18n/LanguageContext'
import Rich from '../i18n/Rich'

export default function FounderStory() {
  const { t } = useLang()
  return (
    <PageTransition>
      {/* ── Banner Header ── */}
      <div className="relative bg-navy-dark min-h-[50vh] flex flex-col justify-center items-center overflow-hidden text-center py-16">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: '30px 30px'
          }} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy to-navy-dark/95" />
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-warm-white to-transparent" />

        <div className="relative z-10 site-container w-full">
          <span className="text-gold text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">{t('banner.founder.eyebrow')}</span>
          <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            {t('banner.founder.title')}
          </h1>
          <p className="text-white/60 text-sm sm:text-base section-description">
            {t('banner.founder.desc')}
          </p>
        </div>
      </div>

      {/* ── Biographical Content ── */}
      <section className="section-padding bg-warm-white">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-start gap-8 lg:gap-10">

            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 relative flex justify-center"
            >
              <div className="relative w-full max-w-sm lg:max-w-full">
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-border bg-white" style={{ aspectRatio: '4/5', maxHeight: '540px' }}>
                  <img
                    src={founderImg}
                    alt="Dr. Jagadeesan Sellamuthu – Founder of Kaikoduppom Trust"
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                {/* Quote card */}
                <div className="absolute -bottom-6 -right-4 bg-gold p-5 rounded-2xl text-navy-dark shadow-xl max-w-[220px] hidden sm:block">
                  <Quote className="w-6 h-6 opacity-40 mb-2" />
                  <p className="font-playfair text-xs italic font-bold leading-relaxed">
                    {t('founder.quote')}
                  </p>
                  <p className="text-[10px] uppercase font-bold tracking-wider mt-2 text-navy-dark/70">
                    {t('founder.quoteBy')}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Narrative */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-7 lg:pt-2"
            >
              <span className="text-xs font-bold tracking-widest text-gold-dark uppercase mb-3 block">{t('founder.bioEyebrow')}</span>
              <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-navy-dark mb-6 leading-snug">
                {t('founder.bioTitle')}
              </h2>

              <div className="space-y-4 text-text-muted text-sm sm:text-base leading-relaxed">
                {t('founder.bio').map((para, i) => <p key={i}><Rich text={para} /></p>)}
              </div>

              <div className="flex flex-wrap gap-3 mt-8">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 bg-navy hover:bg-navy-dark text-white px-6 py-3 rounded-full text-sm font-semibold transition-all hover:-translate-y-0.5"
                >
                  {t('founder.supportMission')}
                </Link>
                <Link
                  to="/volunteer"
                  className="inline-flex items-center gap-2 border-2 border-navy/20 hover:border-navy text-navy px-6 py-3 rounded-full text-sm font-semibold transition-all"
                >
                  {t('founder.joinVolunteer')}
                </Link>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Milestones Timeline ── */}
      <section className="section-padding bg-cream">
        <div className="site-container">
          <div className="max-w-4xl mx-auto">
            <SectionHeading
              eyebrow={t('founder.journeyEyebrow')}
              title={t('founder.journeyTitle')}
              subtitle={t('founder.journeySub')}
            />
            <Timeline events={t('founder.milestones')} />
          </div>
        </div>
      </section>

      <SupportMission />
    </PageTransition>
  )
}