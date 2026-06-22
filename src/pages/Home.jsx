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
    title: 'Govt. Recognized NGO',
    desc: 'Fully registered with State and Central governments, operating under strict compliance and transparency.'
  },
  {
    icon: CheckCircle2,
    title: '100% Direct Impact',
    desc: 'Every form of support goes directly to food, medicine, shelter, and end-of-life care for abandoned elders.'
  },
  {
    icon: HeartHandshake,
    title: 'Open to All',
    desc: 'We accept abandoned and destitute elders free of charge, regardless of caste, religion, or background.'
  },
  {
    icon: Award,
    title: '5-Star Trusted Care',
    desc: 'Consistently rated 5.0 on Google with over 521+ reviews from volunteers, families, and visitors.'
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
                className="bg-white p-6 sm:p-8 rounded-2xl border border-border shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col items-center text-center h-full min-h-[250px]"
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
