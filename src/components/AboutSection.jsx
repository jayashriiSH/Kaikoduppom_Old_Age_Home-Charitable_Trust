import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import SectionHeading from './SectionHeading'
import logoImg from '../assets/images.png'
import bannerImg from '../assets/banner.jpg'
import { useLang } from '../i18n/LanguageContext'
import Rich from '../i18n/Rich'

export default function AboutSection() {
  const { t } = useLang()
  return (
    <section className="section-padding bg-warm-white pt-[calc(var(--section-padding-y)+64px)]">
      <div className="site-container">
        <SectionHeading
          eyebrow={t('aboutSection.eyebrow')}
          title={t('aboutSection.title')}
          subtitle={t('aboutSection.subtitle')}
        />

        {/* Increased mt from mt-16 to mt-20/24 for breathing room below heading */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-14 lg:gap-18 xl:gap-24 mt-20 lg:mt-24">

          {/* Left - Image / Logo Card */}
          <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="relative flex justify-center"
>
  <div className="relative w-full max-w-[500px] mx-auto">
    <div className="rounded-[32px] overflow-hidden shadow-2xl border border-border bg-white p-3">
      <img
        src={bannerImg}
        alt="Kaikoduppom Trust"
        className="w-full h-auto rounded-[24px] object-cover"
      />
    </div>
  </div>
</motion.div>

          {/* Right - Text Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-[640px] mx-auto lg:mx-0 lg:py-4"
          >
            {/* Heading: bumped to text-3xl/4xl, tightened leading for visual weight */}
            <h3 className="font-playfair text-3xl sm:text-4xl font-bold text-navy-dark mb-8 leading-tight tracking-tight">
              {t('aboutSection.nameMeans')}{' '}
              <span className="text-gold italic">{t('aboutSection.nameQuote')}</span>
            </h3>

            {/* Paragraphs: increased gap, slightly larger line-height */}
            <div className="space-y-6 text-text-muted text-sm sm:text-[0.9375rem] leading-[2] mb-10">
              {t('aboutSection.paras').map((para, i) => (
                <p key={i}><Rich text={para} /></p>
              ))}
            </div>

            {/* CTA Buttons: mt-10 → mt-12 for more breathing room above */}
            <div className="flex flex-wrap gap-3 mt-12">
              <Link
                to="/about"
                id="about-read-more"
                className="group inline-flex items-center justify-center gap-2 h-[54px] bg-navy hover:bg-navy-dark text-white px-8 rounded-[14px] text-sm font-semibold shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-[3px]"
              >
                {t('aboutSection.readMore')}
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/founder-story"
                id="about-founder-link"
                className="inline-flex items-center justify-center gap-2 h-[54px] border-2 border-navy/20 hover:border-navy text-navy px-8 rounded-[14px] text-sm font-semibold shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-[3px]"
              >
                {t('aboutSection.founderJourney')}
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}