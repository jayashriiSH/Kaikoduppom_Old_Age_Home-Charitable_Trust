import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { HandHeart, Phone, ChevronRight } from 'lucide-react'

export default function SupportMission() {
  return (
    <section className="relative section-padding overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gold via-gold-light to-gold" />
      <div className="absolute inset-0 opacity-10">
        <div style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(26,58,107,0.4) 1px, transparent 0)`,
          backgroundSize: '30px 30px',
          width: '100%',
          height: '100%'
        }} />
      </div>

      <div className="relative z-10 site-container text-center">
        <div className="w-full max-w-[820px] mx-auto flex flex-col items-center gap-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, type: 'spring' }}
            className="w-16 h-16 rounded-2xl bg-white/25 backdrop-blur-sm flex items-center justify-center mx-auto shadow-sm"
          >
            <HandHeart size={32} className="text-navy-dark" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05, duration: 0.45 }}
            className="text-xs font-bold tracking-[0.2em] uppercase text-navy-dark/75"
          >
            Stand With Us
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-dark leading-tight"
          >
            Support Our Mission
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-navy-dark/75 text-base sm:text-lg section-description"
          >
            Your encouragement, volunteering, and spreading awareness help us continue serving abandoned elders with dignity,
            compassion, and reliable care across Puducherry.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-4 mt-2"
          >
            <Link
              to="/contact"
              id="support-contact-us"
              className="group inline-flex items-center justify-center gap-2 h-[54px] bg-navy-dark hover:bg-navy text-white font-semibold px-8 rounded-[14px] text-sm shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-[3px]"
            >
              Contact Us
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:09444441140"
              id="support-call-us"
              className="inline-flex items-center justify-center gap-2 h-[54px] bg-white/35 backdrop-blur-sm hover:bg-white/55 text-navy-dark font-semibold px-8 rounded-[14px] text-sm shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-[3px]"
            >
              <Phone size={16} />
              Call: 094444 41140
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
