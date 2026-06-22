import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import SectionHeading from './SectionHeading'
import logoImg from '../assets/images.png'

export default function AboutSection() {
  return (
    <section className="section-padding bg-warm-white pt-[calc(var(--section-padding-y)+64px)]">
      <div className="site-container">
        <SectionHeading
          eyebrow="About Us"
          title="A Shelter of Love &amp; Dignity"
          subtitle="Founded with compassion and run with dedication, Kaikoduppom Trust stands as a beacon of hope for abandoned elders."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16 xl:gap-20 mt-16">
          {/* Left - Image Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            <div className="relative w-full max-w-[480px] mx-auto">
              <div className="rounded-[28px] overflow-hidden shadow-xl border border-border bg-white w-full aspect-square flex items-center justify-center p-8 sm:p-10">
                <img
                  src={logoImg}
                  alt="Kaikoduppom Trust - caring for elders"
                  className="w-full h-full object-contain"
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
            className="max-w-[620px] mx-auto lg:mx-0"
          >
            <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-navy-dark mb-5 leading-snug">
              The Name Means{' '}
              <span className="text-gold italic">"Let Us Hold Hands"</span>
            </h3>

            <div className="space-y-4 text-text-muted text-sm sm:text-base leading-[1.85] mb-6">
              <p>
                <strong className="text-navy-dark">Kaikoduppom Old Age Home &amp; Charitable Trust</strong> was
                founded by <strong className="text-navy-dark">Mr. Jagadeesan Sellamuthu</strong> â€” one individual
                guided by hope, compassion, and a deep concern for the suffering of the poor and abandoned elderly.
              </p>
              <p>
                What started as a humble effort soon became a shelter of love, care, and genuine humanity.
                The trust is <strong className="text-navy-dark">officially registered</strong> and recognized
                by both the State and Central Government of India.
              </p>
              <p>
                Today it provides residential care, nutritious food, medical support, hospice services,
                and community outreach to destitute elders across Puducherry.
              </p>
            </div>

            {/* Quote */}
            <div className="bg-gradient-to-r from-cream to-cream-dark border-l-4 border-gold rounded-r-xl p-5 sm:p-6 mb-8">
              <p className="text-navy-dark italic font-medium text-sm leading-[1.75]">
                "What started as a humble effort by one man became a shelter of love, care, and dignity â€”
                a true reflection of humanity at its best."
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/about"
                id="about-read-more"
                className="group inline-flex items-center justify-center gap-2 h-[54px] bg-navy hover:bg-navy-dark text-white px-8 rounded-[14px] text-sm font-semibold shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-[3px]"
              >
                Read Full Story
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/founder-story"
                id="about-founder-link"
                className="inline-flex items-center justify-center gap-2 h-[54px] border-2 border-navy/20 hover:border-navy text-navy px-8 rounded-[14px] text-sm font-semibold shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-[3px]"
              >
                Founder's Journey
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
