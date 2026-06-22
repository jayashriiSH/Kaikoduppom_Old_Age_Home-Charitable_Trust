import PageTransition from '../components/PageTransition'
import SectionHeading from '../components/SectionHeading'
import SupportMission from '../components/SupportMission'
import { Home, Utensils, Stethoscope, HeartPulse, Ribbon, BedDouble, Check, Phone } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const detailedServices = [
  {
    icon: Home,
    title: 'Residential Care',
    description: 'Providing a safe, clean, and comfortable living environment for elderly citizens who have been abandoned by their families or have no surviving relatives.',
    features: [
      'Clean bed, pillow, and personal locker space',
      'Daily laundry and housekeeping services',
      'Safe environment with 24/7 security monitoring',
      'Recreational area for socialization and reading'
    ],
    color: 'border-blue-200 bg-blue-50/50',
    iconBg: 'bg-blue-500 text-white'
  },
  {
    icon: Utensils,
    title: 'Food &amp; Nutrition',
    description: 'Serving hot, hygienic, and balanced meals tailored to the digestive health of elderly citizens.',
    features: [
      'Three healthy meals (Breakfast, Lunch, Dinner) daily',
      'Tea, milk, and nutritious snacks served twice a day',
      'Special soft foods (porridge, soup) for bedridden patients',
      'Festival special feasts sponsored by well-wishers'
    ],
    color: 'border-orange-200 bg-orange-50/50',
    iconBg: 'bg-orange-500 text-white'
  },
  {
    icon: Stethoscope,
    title: 'Medical Support',
    description: 'Providing access to healthcare, physical therapy, and emergency care for all residents.',
    features: [
      'Weekly checkups by visiting general physicians',
      'Round-the-clock administration of prescribed medicines',
      'Tie-up with local hospitals for emergency admissions',
      'Basic physiotherapy sessions for mobility-impaired elders'
    ],
    color: 'border-green-200 bg-green-50/50',
    iconBg: 'bg-green-500 text-white'
  },
  {
    icon: HeartPulse,
    title: 'Hospice Care',
    description: 'Offering comfort and pain-management for terminally ill patients, ensuring they are surrounded by warmth.',
    features: [
      'Compassionate palliative nursing support',
      'Emotional guidance and peaceful environment',
      'Family counselling and bereavement support',
      'Dignified last rites in accordance with their religious faiths'
    ],
    color: 'border-rose-200 bg-rose-50/50',
    iconBg: 'bg-rose-500 text-white'
  },
  {
    icon: Ribbon,
    title: 'Cancer Hospice',
    description: 'Specialized comfort care for elderly cancer patients who need round-the-clock nursing assistance.',
    features: [
      'Pain relief and medication management',
      'Specially trained nursing staff for oncology needs',
      'Comfort-first bedding and feeding equipment',
      'Daily spiritual and mental support activities'
    ],
    color: 'border-purple-200 bg-purple-50/50',
    iconBg: 'bg-purple-500 text-white'
  },
  {
    icon: BedDouble,
    title: 'Bedridden Care',
    description: 'Providing constant attention to elders who are completely bedridden due to paralysis, fractures, or extreme old age.',
    features: [
      'Assist with feeding, bathing, and personal grooming',
      'Regular changing of clothes and bed linens',
      'Careful monitoring for bed sores and vital signs',
      'Kind and encouraging care workers assigned 24/7'
    ],
    color: 'border-teal-200 bg-teal-50/50',
    iconBg: 'bg-teal-500 text-white'
  }
]

const mealPackages = [
  { name: 'Breakfast Sponsorship', desc: 'Feeds all residents a warm morning breakfast for the day.' },
  { name: 'Lunch Sponsorship',     desc: 'Provides full traditional afternoon lunch with vegetables.' },
  { name: 'Dinner Sponsorship',    desc: 'Serves digestible and nutritious night dinner for all.' },
  { name: 'Full Day Meal Sponsor', desc: 'Covers tea, milk, breakfast, lunch, and dinner for the day.' }
]

export default function Services() {
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
          <span className="text-gold text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">What We Offer</span>
          <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Our Services &amp; Facilities
          </h1>
          <p className="text-white/60 text-sm sm:text-base section-description">
            From medical attention to comfortable beds and end-of-life care, we ensure our residents lack nothing in their twilight years.
          </p>
        </div>
      </div>

      {/* Detailed Services Grid */}
      <section className="section-padding bg-warm-white">
        <div className="site-container">
          <SectionHeading
            eyebrow="Care in Detail"
            title="Comprehensive Palliative &amp; Residential Care"
            subtitle="Explore how we deliver support across our specialized facilities."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {detailedServices.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                className={`border rounded-2xl p-8 hover:shadow-xl transition-all flex flex-col ${service.color} hover:border-gold/30`}
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl ${service.iconBg} flex items-center justify-center mb-6`}>
                    <service.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-playfair text-xl font-bold text-navy-dark mb-3">
                    {service.title}
                  </h3>
                  <p
                    className="text-text-muted text-sm leading-relaxed mb-6"
                    dangerouslySetInnerHTML={{ __html: service.description }}
                  />
                </div>

                <div className="pt-6 border-t border-border mt-auto">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-navy mb-4">Included in service:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-text-muted">
                        <Check className="w-3.5 h-3.5 text-gold mt-0.5 flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Annadhanam — Meal Sponsorship (informational, no payment) */}
      <section className="section-padding bg-cream">
        <div className="site-container">
          <SectionHeading
            eyebrow="Meal Sponsorship"
            title="Annadhanam: Sponsor a Meal"
            subtitle="Celebrate your birthday, wedding anniversary, or pay respects in memory of a departed soul by feeding the elders in our home. Contact us to arrange sponsorship."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {mealPackages.map((pkg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-border shadow-sm flex flex-col hover:shadow-md transition-shadow"
              >
                <h3 className="font-bold text-navy-dark text-sm tracking-wider uppercase mb-3">{pkg.name}</h3>
                <p className="text-text-muted text-sm leading-relaxed flex-1">{pkg.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Contact CTA instead of payment */}
          <div className="text-center">
            <Link
              to="/contact"
              id="services-contact-cta"
              className="inline-flex items-center gap-2 bg-navy hover:bg-navy-dark text-white font-semibold px-8 py-3.5 rounded-full text-sm transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              <Phone size={15} />
              Contact Us to Arrange Sponsorship
            </Link>
          </div>
        </div>
      </section>

      <SupportMission />
    </PageTransition>
  )
}
