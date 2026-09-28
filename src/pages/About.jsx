import PageTransition from '../components/PageTransition'
import SectionHeading from '../components/SectionHeading'
import Timeline from '../components/Timeline'
import SupportMission from '../components/SupportMission'
import { Target, Eye, Heart, Award, HelpingHand, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'
import bannerImg from '../assets/banner.jpg'
import { useLang } from '../i18n/LanguageContext'

const values = [
  { icon: Heart },
  { icon: Award },
  { icon: HelpingHand },
  { icon: Target },
]

export default function About() {
  const { t } = useLang()
  return (
    <PageTransition>
      {/* Header Banner */}
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
          <span className="text-gold text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">{t('banner.about.eyebrow')}</span>
          <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            {t('banner.about.title')}
          </h1>
          <p className="text-white/60 text-sm sm:text-base section-description">
            {t('banner.about.desc')}
          </p>
        </div>
      </div>

      {/* Main Info Section */}
      <section className="section-padding bg-warm-white">
        <div className="site-container">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

            {/* Image — Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-2/5 flex-shrink-0"
            >
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={bannerImg}
                  alt="Kaikoduppom Old Age Home"
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>

            {/* Text — Right Column */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full lg:w-3/5"
            >
              <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-navy-dark mb-6 leading-snug">
                {t('about.genesisTitle')}
              </h2>
              <div className="space-y-4 text-text-muted text-sm sm:text-base leading-relaxed">
                {t('about.genesis').map((para, i) => <p key={i}>{para}</p>)}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Mission & Vision & Dream */}
      <section className="section-padding bg-cream">
        <div className="site-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 sm:p-10 rounded-2xl border border-border shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-gold-dark" />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-navy-dark mb-4">{t('about.mission.title')}</h3>
              <p className="text-text-muted text-sm sm:text-base leading-relaxed">
                {t('about.mission.desc')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 sm:p-10 rounded-2xl border border-border shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-navy/10 flex items-center justify-center mb-6">
                <Eye className="w-6 h-6 text-navy" />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-navy-dark mb-4">{t('about.vision.title')}</h3>
              <p className="text-text-muted text-sm sm:text-base leading-relaxed">
                {t('about.vision.desc')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white p-8 sm:p-10 rounded-2xl border border-border shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6 text-gold-dark" />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-navy-dark mb-4">{t('about.dream.title')}</h3>
              <p className="text-text-muted text-sm sm:text-base leading-relaxed">
                {t('about.dream.desc')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-warm-white">
        <div className="site-container">
          <SectionHeading
            eyebrow={t('about.valuesEyebrow')}
            title={t('about.valuesTitle')}
            subtitle={t('about.valuesSub')}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => ({ ...v, ...t('about.values')[i] })).map((v, i) => (
              <div key={i} className="text-center p-6 bg-white border border-border rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <v.icon className="w-8 h-8 text-gold mx-auto mb-4" />
                <h4 className="font-bold text-navy-dark text-base mb-2 font-playfair">{v.name}</h4>
                <p className="text-text-muted text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History & Timeline */}
      <section className="section-padding bg-warm-white">
        <div className="site-container">
          <div className="max-w-5xl mx-auto">
            <SectionHeading
              eyebrow={t('about.journeyEyebrow')}
              title={t('about.journeyTitle')}
              subtitle={t('about.journeySub')}
            />
            <Timeline />
          </div>
        </div>
      </section>

      <SupportMission />
    </PageTransition>
  )
}