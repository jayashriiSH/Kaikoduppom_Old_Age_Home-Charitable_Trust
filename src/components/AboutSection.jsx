import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import SectionHeading from './SectionHeading'
import logoImg from '../assets/images.png'
import bannerImg from '../assets/banner.jpg'

export default function AboutSection() {
  return (
    <section className="section-padding bg-warm-white pt-[calc(var(--section-padding-y)+64px)]">
      <div className="site-container">
        <SectionHeading
          eyebrow="About Us"
          title="A Shelter of Love &amp; Dignity"
          subtitle="Founded with compassion and run with dedication, Kaikoduppom Trust stands as a beacon of hope for abandoned elders."
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
              The Name Means{' '}
              <span className="text-gold italic">"Let Us Hold Hands"</span>
            </h3>

            {/* Paragraphs: increased gap, slightly larger line-height */}
            <div className="space-y-6 text-text-muted text-sm sm:text-[0.9375rem] leading-[2] mb-10">
              <p>
                <strong className="text-navy-dark">
                  Kaikoduppom Old Age Home & Charitable Trust
                </strong>{' '}
                was founded by{' '}
                <strong className="text-navy-dark">
                  Lion Dr. Jagadeesan Sellamuthu, Founder & Managing Trustee
                </strong>,
                whose vision is rooted in compassion, service, and humanity.
              </p>

              <p>
                What began as a heartfelt effort to help a neglected elder in need soon
                grew into a lifelong mission to care for poor, abandoned, and destitute
                senior citizens. Guided by kindness and a deep sense of responsibility,
                he established a place where every elder is treated with love, respect,
                and dignity.
              </p>

              <p>
                The trust is officially registered and recognized by both the State and
                Central Government of India, reflecting its commitment to transparent and
                dedicated service.
              </p>

              <p>
                Today, the trust offers a safe and loving home for abandoned and
                destitute elders by providing free accommodation, nutritious food,
                medical care, daily essentials, and compassionate support—restoring
                dignity, hope, and happiness to every life it touches.
              </p>
            </div>

            {/* CTA Buttons: mt-10 → mt-12 for more breathing room above */}
            <div className="flex flex-wrap gap-3 mt-12">
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