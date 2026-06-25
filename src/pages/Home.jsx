import PageTransition from '../components/PageTransition'
import HeroSection from '../components/HeroSection'
import StatsSection from '../components/StatsSection'
import AboutSection from '../components/AboutSection'
import ServicesGrid from '../components/ServicesGrid'
import TestimonialsSlider from '../components/TestimonialsSlider'
import SupportMission from '../components/SupportMission'
import SectionHeading from '../components/SectionHeading'
import { CheckCircle2, ShieldCheck, HeartHandshake, Award } from 'lucide-react'
import { motion } from 'framer-motion'

const trustCards = [
  {
    icon: ShieldCheck,
    title: 'Government Recognized',
    desc: 'Fully recognized by the State and Central Government authorities, operating with transparency, accountability, and compliance with applicable regulations.'
  },
  {
    icon: HeartHandshake,
    title: 'Every Contribution Matters',
    desc: 'Every act of kindness directly supports abandoned and destitute elders by providing nutritious meals, safe shelter, medical care, and essential daily needs.'
  },
  {
    icon: CheckCircle2,
    title: 'Compassionate Admissions',
    desc: 'We provide free care and shelter for abandoned and destitute elders, including those referred through Police Station Memos and authorized channels. Every elder is welcomed with dignity, respect, and compassion.'
  },
  {
    icon: Award,
    title: 'Trusted Care',
    desc: 'Committed to delivering compassionate, high-quality care in a safe and supportive environment, earning the trust of residents, families, volunteers, and well-wishers.'
  }
]

export default function Home() {
  return (
    <PageTransition>
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <ServicesGrid />

      {/* Why Trust Us Section */}
      <section className="section-padding bg-warm-white relative overflow-hidden">
        <div className="site-container">
          <SectionHeading
            eyebrow="Why Trust Us"
            title="Built on Transparency &amp; Care"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustCards.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -3, transition: { duration: 0.3 } }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
               className="bg-white p-6 rounded-2xl border border-border shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col items-center text-center h-full min-h-[320px]"
              >
                <div className="w-12 h-12 rounded-xl bg-cream flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6 text-gold-dark" />
                </div>
                <h3 className="text-base font-bold text-navy-dark mb-2 font-playfair">{item.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed flex-1">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSlider />
      <SupportMission />
    </PageTransition>
  )
}
