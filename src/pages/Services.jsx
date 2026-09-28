import PageTransition from '../components/PageTransition'
import SectionHeading from '../components/SectionHeading'
import SupportMission from '../components/SupportMission'
import { Home, Utensils, Stethoscope, Accessibility, Users, BookOpen, Siren, Heart, Check } from 'lucide-react'
import { motion } from 'framer-motion'
import { useLang } from '../i18n/LanguageContext'

const detailedServices = [
  {
    icon: Home,
    color: 'border-blue-200 bg-blue-50/50',
    iconBg: 'bg-blue-500 text-white',
  },
  {
    icon: Utensils,
    color: 'border-orange-200 bg-orange-50/50',
    iconBg: 'bg-orange-500 text-white',
  },
  {
    icon: Stethoscope,
    color: 'border-green-200 bg-green-50/50',
    iconBg: 'bg-green-500 text-white',
  },
  {
    icon: Accessibility,
    color: 'border-purple-200 bg-purple-50/50',
    iconBg: 'bg-purple-500 text-white',
  },
  {
    icon: Users,
    color: 'border-rose-200 bg-rose-50/50',
    iconBg: 'bg-rose-500 text-white',
  },
  {
    icon: BookOpen,
    color: 'border-amber-200 bg-amber-50/50',
    iconBg: 'bg-amber-500 text-white',
  },
  {
    icon: Siren,
    color: 'border-red-200 bg-red-50/50',
    iconBg: 'bg-red-500 text-white',
  },
  {
    icon: Heart,
    color: 'border-teal-200 bg-teal-50/50',
    iconBg: 'bg-teal-500 text-white',
  },
]

export default function Services() {
  const { t } = useLang()
  return (
    <PageTransition>
      {/* ── Banner Header ── */}
      <div className="relative bg-navy-dark min-h-[50vh] flex flex-col justify-center items-center overflow-hidden text-center py-16">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: '30px 30px',
          }} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy to-navy-dark/95" />
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-warm-white to-transparent" />

        <div className="relative z-10 site-container w-full">
          <span className="text-gold text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">{t('banner.services.eyebrow')}</span>
          <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            {t('banner.services.title')}
          </h1>
          <p className="text-white/60 text-sm sm:text-base section-description">
            {t('banner.services.desc')}
          </p>
        </div>
      </div>

      {/* ── Detailed Services Grid ── */}
      <section className="section-padding bg-warm-white">
        <div className="site-container">
          <SectionHeading
            eyebrow={t('servicesPage.eyebrow')}
            title={t('servicesPage.title')}
            subtitle={t('servicesPage.subtitle')}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
            {detailedServices.map((s, i) => ({ ...s, ...t('servicesList')[i] })).map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                className={`border rounded-2xl p-9 hover:shadow-xl transition-all flex flex-col ${service.color} hover:border-gold/30`}
              >
                <div className={`w-13 h-13 rounded-xl ${service.iconBg} flex items-center justify-center mb-6 flex-shrink-0`}
                  style={{ width: '52px', height: '52px' }}>
                  <service.icon className="w-6 h-6" />
                </div>

                <h3 className="font-playfair text-xl font-bold text-navy-dark mb-4 leading-snug">
                  {service.title}
                </h3>

                <p className="text-text-muted text-sm leading-relaxed mb-8">
                  {service.description}
                </p>

                {idx < 3 && (
                  <div className="pt-6 border-t border-border/60 mt-auto">
                    <h4 className="text-[11px] font-bold uppercase tracking-widest text-navy mb-4">
                      {t('servicesPage.included')}
                    </h4>
                    <ul className="space-y-3">
                      {service.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-text-muted">
                          <Check className="w-3.5 h-3.5 text-gold mt-0.5 flex-shrink-0" />
                          <span className="leading-relaxed">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SupportMission />
    </PageTransition>
  )
}