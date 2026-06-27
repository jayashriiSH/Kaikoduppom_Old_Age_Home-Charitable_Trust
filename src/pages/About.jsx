import PageTransition from '../components/PageTransition'
import SectionHeading from '../components/SectionHeading'
import Timeline from '../components/Timeline'
import SupportMission from '../components/SupportMission'
import { Target, Eye, Heart, Award, HelpingHand, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'
import bannerImg from '../assets/banner.jpg'

const values = [
  { icon: Heart,       name: 'Unconditional Love', desc: 'Treating residents as our own parents, showering them with warmth and affection.' },
  { icon: Award,       name: 'Dignity',             desc: 'Ensuring every elder lives and leaves this world with respect and proper care.' },
  { icon: HelpingHand, name: 'Selfless Service',    desc: 'Working day and night to keep the home functional and clean without selfish motives.' },
  { icon: Target,      name: 'Transparency',        desc: '100% transparency in funds. Registered under Section 80G for taxpayer ease.' },
]

export default function About() {
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
          <span className="text-gold text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">Who We Are</span>
          <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            A Shelter of Love &amp; Dignity
          </h1>
          <br/>
          <p className="text-white/60 text-sm sm:text-base section-description">
            A registered charitable trust committed to providing compassionate care, dignity, and support for abandoned and destitute elders.
          </p>
        </div>
      </div>

      {/* Main Info Section */}
      <section className="section-padding bg-warm-white">
        <div className="site-container">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

            {/* Image — Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-2/5 flex-shrink-0"
            >
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={bannerImg}
                  alt="Kaikoduppom Old Age Home"
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>

            {/* Text — Right Column */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full lg:w-3/5"
            >
              <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-navy-dark mb-6 leading-snug">
                Our Genesis &amp; Mission
              </h2>
              <div className="space-y-4 text-text-muted text-sm sm:text-base leading-relaxed">
                <p>
                  Kaikoduppom Old Age Home is a place of compassion, dignity, and hope for abandoned and destitute elderly people who have nowhere else to turn. Our mission is to provide a safe, loving, and completely free home where every resident is treated with respect, care, and kindness.
                </p>
                <p>
                  We admit many elders through referrals and official police station memos, ensuring that vulnerable individuals receive immediate shelter, food, medical attention, and emotional support. While some residents have been successfully reunited with their families, many continue to live with us as part of our extended family, receiving dedicated care throughout their lives.
                </p>
                <p>
                  Beyond elder care, we also support physically challenged individuals by providing monthly assistance such as rice bags, medical aid, and other essential needs. Our commitment is to stand beside those who are most in need and help them live with dignity.
                </p>
                <p>
                  At Kaikoduppom Old Age Home, our care does not end with daily support. We remain with our residents through every stage of life, offering compassionate service and ensuring that even their final journey is handled with respect and humanity.
                </p>
                <p>
                  Driven by love and selfless service, we continue to work toward a future where no elderly person is left abandoned and every vulnerable individual has the opportunity to live with safety, comfort, and hope.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Mission & Vision & Dream */}
      <section className="section-padding bg-cream">
        <div className="site-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 sm:p-10 rounded-2xl border border-border shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-gold-dark" />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-navy-dark mb-4">Our Mission</h3>
              <p className="text-text-muted text-sm sm:text-base leading-relaxed">
                To serve abandoned and destitute elders with free care, shelter, food, medical assistance, and compassion—restoring dignity and hope to every life we touch.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 sm:p-10 rounded-2xl border border-border shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-navy/10 flex items-center justify-center mb-6">
                <Eye className="w-6 h-6 text-navy" />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-navy-dark mb-4">Our Vision</h3>
              <p className="text-text-muted text-sm sm:text-base leading-relaxed">
                To create a future where every elderly person is valued, protected, and cared for with love, ensuring that no one is left behind or forgotten.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white p-8 sm:p-10 rounded-2xl border border-border shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6 text-gold-dark" />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-navy-dark mb-4">Our Dream</h3>
              <p className="text-text-muted text-sm sm:text-base leading-relaxed">
                We envision creating a permanent care home capable of accommodating nearly 500 people, offering quality healthcare, nutritious meals, safe shelter, and compassionate support so that no elder in need is left without a home.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-warm-white">
        <div className="site-container">
          <SectionHeading
            eyebrow="Our Pillars"
            title="Values That Guide Us"
            subtitle="At the heart of Kaikoduppom lies a set of unwavering values that dictate how we run our home."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={i} className="text-center p-6 bg-white border border-border rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <v.icon className="w-8 h-8 text-gold mx-auto mb-4" />
                <h4 className="font-bold text-navy-dark text-base mb-2 font-playfair">{v.name}</h4>
                <p className="text-text-muted text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History & Timeline */}
      <section className="section-padding bg-warm-white">
        <div className="site-container">
          <div className="max-w-5xl mx-auto">
            <SectionHeading
              eyebrow="Our Journey"
              title="Milestones of Hope"
              subtitle="Tracing the history of Kaikoduppom Trust and how it grew from a humble dream into a lifeline for hundreds."
            />
            <Timeline />
          </div>
        </div>
      </section>

      <SupportMission />
    </PageTransition>
  )
}