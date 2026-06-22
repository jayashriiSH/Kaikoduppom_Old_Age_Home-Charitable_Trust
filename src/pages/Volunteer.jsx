import PageTransition from '../components/PageTransition'
import SectionHeading from '../components/SectionHeading'
import { motion } from 'framer-motion'
import { Heart, Clock, Phone, Users, Activity, Palette, CheckCircle2 } from 'lucide-react'

const roles = [
  {
    icon: Users,
    title: 'Elder Companionship',
    desc: 'Spend quality hours conversing, listening to stories, playing light board games, and walking with residents who feel lonely.'
  },
  {
    icon: Activity,
    title: 'Medical &amp; Therapy Care',
    desc: 'Doctors, nursing graduates, pharmacists, or physiotherapists helping administer healthcare and mobility therapy to bedridden elders.'
  },
  {
    icon: Palette,
    title: 'Recreation &amp; Music',
    desc: 'Organize festival songs, devotional bhajan sessions, art workshops, or help coordinate birthdays and festival celebration events.'
  },
  {
    icon: Heart,
    title: 'Daily Help &amp; Kitchen Care',
    desc: 'Assist in kitchen operations, clean vegetables, help distribute food packages, and organize clothes and bedding wardrobes.'
  }
]

const whyVolunteer = [
  {
    title: 'Reduce Loneliness',
    desc: 'Many resident elders feel isolated due to abandonment. Conversing with volunteers offers a vital emotional outlet.'
  },
  {
    title: 'Support Care Workers',
    desc: 'Our dedicated staff work around the clock. Your support helps ease kitchen, administration, and clean-up duties.'
  },
  {
    title: 'Flexible Schedules',
    desc: 'Whether you have 2 hours on Sunday or a day during weekdays, you are welcome to schedule visits in advance.'
  }
]

export default function Volunteer() {
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
          <span className="text-gold text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">Give Your Time</span>
          <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Join Our Volunteer Family
          </h1>
          <p className="text-white/60 text-sm sm:text-base section-description">
            Your presence can brighten an elder's day. Use your skills, time, or companionship to support our residents.
          </p>
        </div>
      </div>

      {/* Volunteer Roles */}
      <section className="section-padding bg-warm-white">
        <div className="site-container">
          <SectionHeading
            eyebrow="Opportunities"
            title="How You Can Assist"
            subtitle="Choose a channel that matches your schedule and skillset. Every effort counts."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {roles.map((r, i) => (
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
                <p
                  className="text-text-muted text-sm leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: r.desc }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Volunteer + Volunteer With Us CTA */}
      <section className="section-padding bg-cream">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* Left — Why Volunteer */}
            <div>
              <span className="text-xs font-bold tracking-widest text-gold-dark uppercase mb-3 block">Make a Connection</span>
              <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-navy-dark mb-6 leading-snug">
                Why Volunteer at Kaikoduppom?
              </h2>

              <ul className="space-y-5 mb-8">
                {whyVolunteer.map((item, idx) => (
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
                  Visiting hours for volunteers are daily between{' '}
                  <strong className="text-navy-dark">9:00 AM to 12:00 PM</strong> and{' '}
                  <strong className="text-navy-dark">4:00 PM to 6:30 PM</strong>.
                </p>
              </div>
            </div>

            {/* Right — Volunteer With Us CTA */}
            <div className="bg-white border border-border p-8 sm:p-10 rounded-2xl shadow-sm flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-gold-dark" />
              </div>

              <h3 className="font-playfair text-2xl font-bold text-navy-dark mb-4 leading-snug">
                Volunteer With Us
              </h3>
              <p className="text-text-muted text-sm leading-relaxed max-w-sm mb-8">
                If you would like to support our mission, please contact us directly using the
                phone number or email provided below.
              </p>

              <a
                id="volunteer-call-btn"
                href="tel:09444441140"
                className="inline-flex items-center justify-center gap-2 bg-navy hover:bg-navy-dark text-white font-semibold px-8 py-3.5 rounded-full text-sm transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-navy/25 w-full sm:w-auto"
              >
                <Phone className="w-4 h-4" />
                Call Us: 094444 41140
              </a>

              <p className="text-xs text-text-muted mt-4">
                or email us at{' '}
                <a
                  href="mailto:kaikoduppomtrust@gmail.com"
                  className="text-navy-dark font-medium hover:text-gold transition-colors"
                >
                  kaikoduppomtrust@gmail.com
                </a>
              </p>
            </div>

          </div>
        </div>
      </section>
    </PageTransition>
  )
}
