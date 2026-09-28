import PageTransition from '../components/PageTransition'
import SectionHeading from '../components/SectionHeading'
import { motion } from 'framer-motion'
import { Brain, Eye, Sparkles, Code2, Mail, ArrowUpRight } from 'lucide-react'
import portrait from '../assets/developer.jpg'
import { useLang } from '../i18n/LanguageContext'
import Rich from '../i18n/Rich'

const links = [
  { label: 'email', href: 'mailto:pcmj.jayashriishankar@gmail.com', icon: Mail },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/jayashrii', icon: ArrowUpRight },
  { label: 'GitHub', href: 'https://github.com/jayashriiSH', icon: ArrowUpRight },
]

const strengths = [
  { icon: Brain },
  { icon: Eye },
  { icon: Sparkles },
  { icon: Code2 },
]

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
}

export default function Developer() {
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
          <span className="text-gold text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">{t('banner.developer.eyebrow')}</span>
          <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            {t('banner.developer.title')}
          </h1>
          <p className="text-white/60 text-sm sm:text-base section-description">
            {t('banner.developer.desc')}
          </p>
        </div>
      </div>

      {/* Story */}
      <section className="section-padding bg-warm-white">
        <div className="site-container">
          <div className="grid lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-10 lg:gap-16 items-center">
            <motion.div {...fadeUp} transition={{ duration: 0.7 }} className="w-full max-w-[400px] mx-auto lg:mx-0">
              <div className="rounded-2xl overflow-hidden shadow-xl ring-1 ring-border aspect-[4/5]">
                <img src={portrait} alt="Jayashrii SH" className="w-full h-full object-cover object-[50%_30%]" />
              </div>
            </motion.div>

            <motion.div {...fadeUp} transition={{ duration: 0.7, delay: 0.1 }}>
              <p className="text-gold-dark text-xs font-semibold tracking-[0.2em] uppercase mb-3">{t('developer.hello')}</p>
              <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-dark leading-tight mb-6">
                {t('developer.name')}
              </h2>

              <p className="font-playfair italic text-xl text-navy-dark mb-6">
                {t('developer.quote')}
              </p>

              <div className="space-y-4 text-text-muted leading-relaxed">
                {t('developer.paras').map((para, i) => <p key={i}><Rich text={para} /></p>)}
              </div>

              <div className="flex flex-wrap gap-2 mt-8">
                {links.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-navy/15 text-navy text-sm font-medium hover:border-navy hover:bg-navy/5 transition-colors"
                  >
                    {label === 'email' ? t('developer.email') : label} <Icon size={14} />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech strengths */}
      <section className="section-padding bg-cream">
        <div className="site-container">
          <SectionHeading
            eyebrow={t('developer.craftEyebrow')}
            title={t('developer.craftTitle')}
            subtitle={t('developer.craftSub')}
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {strengths.map((s, i) => ({ ...s, ...t('developer.strengths')[i] })).map((s, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-white rounded-2xl border border-border p-6 shadow-sm hover:shadow-lg transition-shadow text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-cream flex items-center justify-center mx-auto mb-4">
                  <s.icon className="w-6 h-6 text-gold-dark" />
                </div>
                <h3 className="font-playfair text-lg font-bold text-navy-dark mb-2">{s.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </PageTransition>
  )
}
