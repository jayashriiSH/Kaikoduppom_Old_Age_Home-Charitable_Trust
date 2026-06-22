import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function SectionHeading({ eyebrow, title, subtitle, light = false, center = true }) {
  return (
    <div className={`${center ? 'section-heading' : ''} mb-10`}>
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`text-xs font-semibold tracking-[0.2em] uppercase mb-3 ${light ? 'text-gold' : 'text-gold-dark'}`}
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={`font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight ${light ? 'text-white' : 'text-navy-dark'}`}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`mt-6 text-base sm:text-lg ${center ? 'section-description' : 'max-w-[700px] leading-[1.7]'} ${light ? 'text-white/70' : 'text-text-muted'}`}
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className={`h-1 w-20 bg-gradient-to-r from-gold to-gold-light rounded-full mt-5 ${center ? 'mx-auto' : ''}`}
      />
    </div>
  )
}
