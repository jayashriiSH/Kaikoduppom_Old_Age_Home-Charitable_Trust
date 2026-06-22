import PageTransition from '../components/PageTransition'
import SectionHeading from '../components/SectionHeading'
import SupportMission from '../components/SupportMission'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  UserCheck, Utensils, HeartPulse, Building2,
  ChevronRight, HelpCircle, ShieldCheck, Camera, Phone
} from 'lucide-react'

const campaigns = [
  {
    icon: UserCheck,
    title: 'Sponsor an Elder',
    desc: 'Covers basic necessities including comfortable shelter, daily nutritious meals, toiletries, clothing, and basic medical support for one elder per month.',
  },
  {
    icon: Utensils,
    title: 'Annadhanam (Meal Sponsorship)',
    desc: 'Provide food for all home residents (breakfast, lunch, tea/snacks, and dinner). Ideal for celebrating special family occasions, birthdays, or memorials.',
  },
  {
    icon: HeartPulse,
    title: 'Palliative &amp; Cancer Care',
    desc: 'Finances specialized nursing, pain-relief medications, palliative medical visits, soft-food diet, and comfort tools for bedridden or terminally ill cancer patients.',
  },
  {
    icon: Building2,
    title: 'Infrastructure &amp; Home Maintenance',
    desc: 'Supports structural repairs, clean drinking water filtration systems, generator power backup, cleaning supplies, and building maintenance for resident security.',
  }
]

const howItWorks = [
  {
    icon: HelpCircle,
    step: 'Step 1',
    title: 'Reach Out to Us',
    desc: 'Call or email us to discuss how you would like to support. Our team will guide you through the process personally.'
  },
  {
    icon: ShieldCheck,
    step: 'Step 2',
    title: 'Funds Allocation',
    desc: '100% of your sponsored amount is allocated to purchase groceries, medicine, or direct maintenance for the elders.'
  },
  {
    icon: Camera,
    step: 'Step 3',
    title: 'Feedback &amp; Photos',
    desc: 'For sponsored meals or dedicated sponsorships, we send you photographs, food distribution logs, and official receipts.'
  }
]

export default function Programs() {
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
          <span className="text-gold text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">Our Initiatives</span>
          <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Support Programs
          </h1>
          <p className="text-white/60 text-sm sm:text-base section-description">
            Explore how you can make a lasting difference in the lives of our residents. Contact us to get involved.
          </p>
        </div>
      </div>

      {/* Programs Grid */}
      <section className="section-padding bg-warm-white">
        <div className="site-container">
          <SectionHeading
            eyebrow="Ways to Help"
            title="Support Options"
            subtitle="Each program directly benefits residents. Reach out to us to learn how you can participate."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
            {campaigns.map((camp, i) => (
              <motion.div
                key={camp.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-border hover:border-gold/30 hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-cream flex items-center justify-center mb-6">
                    <camp.icon className="w-6 h-6 text-gold-dark" />
                  </div>
                  <h3
                    className="font-playfair text-xl sm:text-2xl font-bold text-navy-dark mb-3"
                    dangerouslySetInnerHTML={{ __html: camp.title }}
                  />
                  <p
                    className="text-text-muted text-sm leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: camp.desc }}
                  />
                </div>

                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center gap-2 bg-navy hover:bg-navy-dark text-white font-semibold py-3 rounded-full text-sm transition-all mt-8"
                >
                  Get Involved
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-cream">
        <div className="site-container">
          <SectionHeading
            eyebrow="Transparency Promise"
            title="How Your Support Works"
            subtitle="We maintain full transparency with all supporters. Here is what happens when you choose to help."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {howItWorks.map((s, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="bg-white p-8 pt-12 rounded-2xl border border-border shadow-sm text-center relative group"
              >
                <div className="absolute top-4 right-6 text-xs text-gold font-bold tracking-wider uppercase bg-gold/10 px-2 py-0.5 rounded">
                  {s.step}
                </div>
                <div className="w-12 h-12 rounded-full bg-cream flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform">
                  <s.icon className="w-6 h-6 text-gold-dark" />
                </div>
                <h3
                  className="font-playfair text-lg font-bold text-navy-dark mb-2"
                  dangerouslySetInnerHTML={{ __html: s.title }}
                />
                <p
                  className="text-text-muted text-sm leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: s.desc }}
                />
              </motion.div>
            ))}
          </div>

          {/* Direct contact CTA */}
          <div className="text-center">
            <a
              href="tel:09444441140"
              id="programs-call-cta"
              className="inline-flex items-center gap-2 bg-navy hover:bg-navy-dark text-white font-semibold px-8 py-3.5 rounded-full text-sm transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              <Phone size={15} />
              Call Us to Get Started
            </a>
          </div>
        </div>
      </section>

      <SupportMission />
    </PageTransition>
  )
}
