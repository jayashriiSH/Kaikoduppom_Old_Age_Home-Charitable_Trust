import PageTransition from '../components/PageTransition'
import SectionHeading from '../components/SectionHeading'
import { motion } from 'framer-motion'
import { Heart, Clock, Phone, Palette, CheckCircle2, Utensils, Stethoscope, HandHeart } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext'
import Rich from '../i18n/Rich'

const roles = [
  {
    icon: Heart,
    title: 'Reduce Loneliness',
    desc: 'Spend meaningful time with abandoned and destitute elders by talking, listening to their stories, and offering companionship. Even a simple conversation can bring comfort and joy.'
  },
  {
    icon: HandHeart,
    title: 'Support Our Care Team',
    desc: 'Assist our dedicated staff with daily activities such as meal service, organizing supplies, administrative tasks, and maintaining a clean and welcoming environment.'
  },
  {
    icon: Clock,
    title: 'Flexible Volunteering',
    desc: 'Whether you can spare a few hours or volunteer regularly, your time and support make a real difference. Visits can be scheduled in advance at your convenience.'
  },
  {
    icon: Palette,
    title: 'Share Your Skills',
    desc: 'Lead music sessions, cultural activities, art programs, celebrations, or wellness initiatives that enrich the lives of our residents and create happy memories.'
  },
  {
    icon: Stethoscope,
    title: 'Medical & Therapy Support',
    desc: 'Doctors, nurses, pharmacists, physiotherapists, and healthcare professionals can volunteer their expertise to provide medical care, rehabilitation, and health guidance.'
  },
  {
    icon: Utensils,
    title: 'Kitchen & Daily Care',
    desc: 'Help prepare and serve meals, organize essential supplies, distribute clothing, and support the daily needs of our elderly residents.'
  }
]

export default function Volunteer() {
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
          <span className="text-gold text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">{t('banner.volunteer.eyebrow')}</span>
          <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            {t('banner.volunteer.title')}
          </h1>
          <p className="text-white/60 text-sm sm:text-base section-description">
            {t('banner.volunteer.desc')}
          </p>
        </div>
      </div>

      {/* Volunteer Roles */}
      <section className="section-padding bg-warm-white">
        <div className="site-container">
          <SectionHeading
            eyebrow={t('volunteer.eyebrow')}
            title={t('volunteer.title')}
            subtitle={t('volunteer.subtitle')}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {roles.map((r, i) => ({ ...r, ...t('volunteer.roles')[i] })).map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-6 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow group text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-cream flex items-center justify-center mb-5 mx-auto group-hover:scale-105 transition-transform">
                  <r.icon className="w-6 h-6 text-gold-dark" />
                </div>
                <h3 className="font-bold text-navy-dark text-base mb-2 font-playfair">{r.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Volunteer + Volunteer With Us CTA */}
      <section className="section-padding bg-cream">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

            {/* Left — Why Volunteer */}
            <div>
              <span className="text-xs font-bold tracking-widest text-gold-dark uppercase mb-3 block">{t('volunteer.connectEyebrow')}</span>
              <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-navy-dark mb-6 leading-snug">
                {t('volunteer.whyTitle')}
              </h2>

              <ul className="space-y-5 mb-8">
                {t('volunteer.why').map((item, idx) => (
                  <li key={idx} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-gold/15 flex items-center justify-center text-gold-dark flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-navy-dark text-sm sm:text-base">{item.title}</h4>
                      <p className="text-text-muted text-sm mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Visiting hours info */}
              <div className="bg-white border border-border p-5 rounded-xl flex items-start gap-3">
                <Clock className="w-5 h-5 text-gold-dark flex-shrink-0 mt-0.5" />
                <p className="text-sm text-text-muted leading-relaxed">
                  <Rich text={t('volunteer.visitingHours')} />
                </p>
              </div>
            </div>
{/* Right — Volunteer With Us CTA */}
<div className="bg-white border border-border p-8 sm:p-10 rounded-2xl shadow-sm flex flex-col items-center text-center">
  <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mb-6">
    <Heart className="w-8 h-8 text-gold-dark" />
  </div>

  <h3 className="font-playfair text-2xl font-bold text-navy-dark mb-4 leading-snug">
    {t('volunteer.ctaTitle')}
  </h3>

  <p className="text-text-muted text-sm leading-relaxed max-w-sm mb-8">
    {t('volunteer.ctaDesc')}
  </p>

  {/* Phone Numbers */}
  <div className="w-full space-y-3 mb-6">
    <a
      href="tel:+919444441140"
      className="inline-flex items-center justify-center gap-2 bg-navy hover:bg-navy-dark text-white font-semibold px-8 py-3.5 rounded-full text-sm transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-navy/25 w-full"
    >
      <Phone className="w-4 h-4" />
      +91 94444 41140
    </a>

    <a
      href="tel:+919943788188"
      className="inline-flex items-center justify-center gap-2 bg-navy hover:bg-navy-dark text-white font-semibold px-8 py-3.5 rounded-full text-sm transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-navy/25 w-full"
    >
      <Phone className="w-4 h-4" />
      +91 99437 88188
    </a>

    <a
      href="tel:04422680140"
      className="inline-flex items-center justify-center gap-2 bg-navy hover:bg-navy-dark text-white font-semibold px-8 py-3.5 rounded-full text-sm transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-navy/25 w-full"
    >
      <Phone className="w-4 h-4" />
      044-2268 0140
    </a>
  </div>

  <p className="text-xs text-text-muted">
    {t('volunteer.orEmail')}{" "}
    <a
      href="mailto:kaikoduppomjagadeesan@gmail.com"
      className="text-navy-dark font-medium hover:text-gold transition-colors"
    >
      kaikoduppomjagadeesan@gmail.com
    </a>
  </p>

  <div className="mt-6 pt-6 border-t border-border w-full flex items-start gap-3">
    <Clock className="w-4 h-4 text-gold-dark flex-shrink-0 mt-0.5" />
    <p className="text-xs text-text-muted leading-relaxed text-left">
      <strong className="text-navy-dark">
        {t('volunteer.hoursLabel')}
      </strong>{" "}
      {t('volunteer.hoursValue')}
    </p>
  </div>
</div>
</div> </div>
      </section>
    </PageTransition>
  )
}