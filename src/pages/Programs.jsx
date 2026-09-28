import PageTransition from '../components/PageTransition'
import SectionHeading from '../components/SectionHeading'
import SupportMission from '../components/SupportMission'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  UserCheck, Utensils, HeartPulse, Building2, Coffee,
  ShoppingBasket, Stethoscope, ChevronRight, Phone, Heart, Users
} from 'lucide-react'
import { useLang } from '../i18n/LanguageContext'

const campaigns = [
  { icon: UserCheck },
  { icon: Utensils },
  { icon: HeartPulse },
  { icon: Coffee },
  { icon: Building2 },
  { icon: Coffee },
  { icon: UserCheck },
  { icon: ShoppingBasket },
  { icon: Stethoscope },
  { icon: UserCheck },
  { icon: Building2, highlight: true },
  { icon: Building2 },
  { icon: Heart },
]

export default function Programs() {
  const { t } = useLang()
  return (
    <PageTransition>
      {/* Banner Header */}
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
          <span className="text-gold text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">{t('banner.programs.eyebrow')}</span>
          <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            {t('banner.programs.title')}
          </h1>
          <p className="text-white/60 text-sm sm:text-base section-description">
            {t('banner.programs.desc')}
          </p>
        </div>
      </div>

      {/* Sponsorship Grid */}
      <section className="section-padding bg-warm-white">
        <div className="site-container">
          <SectionHeading
            eyebrow={t('programs.eyebrow')}
            title={t('programs.title')}
            subtitle={t('programs.subtitle')}
          />
          

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12">
            {campaigns.map((c, i) => ({ ...c, ...t('programs.campaigns')[i] })).map((camp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className={`bg-white p-8 rounded-2xl border transition-all flex flex-col justify-between ${
                  camp.highlight
                    ? 'border-gold/50 shadow-lg ring-1 ring-gold/20'
                    : 'border-border hover:border-gold/30 hover:shadow-xl'
                }`}
              >
                {camp.highlight && (
                  <div className="mb-4">
                    <span className="text-[10px] font-bold tracking-widest uppercase bg-gold/10 text-gold-dark px-3 py-1 rounded-full">
                      {t('programs.majorNeed')}
                    </span>
                  </div>
                )}
                <div>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-cream flex items-center justify-center flex-shrink-0">
                      <camp.icon className="w-6 h-6 text-gold-dark" />
                    </div>
                    <span className="font-playfair font-bold text-navy-dark text-lg sm:text-xl text-right">
                      {camp.amount}
                    </span>
                  </div>
                  <h3 className="font-playfair text-xl sm:text-2xl font-bold text-navy-dark mb-3">
                    {camp.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {camp.desc}
                  </p>
                </div>

                <Link
                  to="/contact#donate"
                  className="group inline-flex items-center justify-center gap-2 bg-navy hover:bg-navy-dark text-white font-semibold py-3 rounded-full text-sm transition-all mt-8"
                >
                  {t('programs.getInvolved')}
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Participation & Celebrations */}
      <section className="section-padding bg-cream">
        <div className="site-container">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <span className="text-gold text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">{t('programs.welcomeEyebrow')}</span>
            <h2 className="font-playfair text-2xl sm:text-3xl lg:text-4xl font-bold text-navy-dark mb-4 leading-tight">
              {t('programs.participationTitle')}
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              {/* Left — warm welcome text */}
              <div className="p-8 sm:p-12 flex flex-col justify-center border-b md:border-b-0 md:border-r border-border/50">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center mb-6">
                  <Users className="w-5 h-5 text-gold-dark" />
                </div>
                {t('programs.participation').map((para, i, all) => (
                  <p key={i} className={`text-text-muted text-sm sm:text-base leading-relaxed ${i < all.length - 1 ? 'mb-5' : ''}`}>
                    {para}
                  </p>
                ))}
              </div>

              {/* Right — blessing message */}
              <div className="p-8 sm:p-10 bg-navy-dark flex flex-col justify-center">
                <blockquote className="font-playfair text-lg sm:text-xl text-white/90 leading-relaxed italic mb-6">
                  {t('programs.blessing')}
                </blockquote>
                <div className="h-px bg-white/10 mb-6" />
                <Link
                  to="/contact#donate"
                  className="group inline-flex items-center gap-2 text-gold font-semibold text-sm hover:text-gold/80 transition-colors"
                >
                  <Heart size={15} className="text-gold" />
                  {t('programs.reachOut')}
                  <ChevronRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <SupportMission />
    </PageTransition>
  )
}