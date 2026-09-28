import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Home, Utensils, Stethoscope, Accessibility, Users, BookOpen, Siren, Heart, ChevronRight } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { useLang } from '../i18n/LanguageContext'

const services = [
  {
    icon: Home,
    color: 'from-blue-500/10 to-blue-600/5',
    iconColor: 'text-blue-600',
  },
  {
    icon: Utensils,
    color: 'from-orange-500/10 to-orange-600/5',
    iconColor: 'text-orange-600',
  },
  {
    icon: Stethoscope,
    color: 'from-green-500/10 to-green-600/5',
    iconColor: 'text-green-600',
  },
  {
    icon: Accessibility,
    color: 'from-purple-500/10 to-purple-600/5',
    iconColor: 'text-purple-600',
  },
  {
    icon: Users,
    color: 'from-rose-500/10 to-rose-600/5',
    iconColor: 'text-rose-600',
  },
  {
    icon: BookOpen,
    color: 'from-amber-500/10 to-amber-600/5',
    iconColor: 'text-amber-600',
  },
  {
    icon: Siren,
    color: 'from-red-500/10 to-red-600/5',
    iconColor: 'text-red-600',
  },
  {
    icon: Heart,
    color: 'from-teal-500/10 to-teal-600/5',
    iconColor: 'text-teal-600',
  },
]

export default function ServicesGrid() {
  const { t } = useLang()
  return (
    <section className="section-padding bg-cream">
      <div className="site-container">
        <SectionHeading
          eyebrow={t('servicesGrid.eyebrow')}
          title={t('servicesGrid.title')}
          subtitle={t('servicesGrid.subtitle')}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {services.map((s, i) => ({ ...s, ...t('servicesList')[i] })).map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -3, transition: { duration: 0.3 } }}
              className="group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg border border-border hover:border-gold/30 transition-all duration-300 cursor-default overflow-hidden flex flex-col"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold to-gold-light scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />

              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform flex-shrink-0`}>
                <service.icon className={`w-6 h-6 ${service.iconColor}`} />
              </div>

              <h3 className="text-base font-bold text-navy-dark mb-2 group-hover:text-navy transition-colors leading-snug">
                {service.title}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed flex-1">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center mt-12"
        >
          <Link
            to="/services"
            className="group inline-flex items-center justify-center gap-2 h-[54px] bg-navy hover:bg-navy-dark text-white px-8 rounded-[14px] text-sm font-semibold transition-all duration-300 hover:-translate-y-[3px] hover:shadow-lg"
          >
            {t('servicesGrid.viewAll')}
            <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}