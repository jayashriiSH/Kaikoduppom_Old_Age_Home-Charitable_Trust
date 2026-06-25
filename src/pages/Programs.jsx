import PageTransition from '../components/PageTransition'
import SectionHeading from '../components/SectionHeading'
import SupportMission from '../components/SupportMission'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  UserCheck, Utensils, HeartPulse, Building2, Coffee,
  ShoppingBasket, Stethoscope, ChevronRight, Phone, Heart, Users
} from 'lucide-react'

const campaigns = [
  {
    icon: UserCheck,
    title: 'Break Fast',
    amount: '₹3,000/-',
    desc: 'Sponsor breakfast for all residents on a chosen day. A warm morning meal that sets the tone for every elder\'s day.',
  },
  {
    icon: Utensils,
    title: 'Lunch',
    amount: '₹4,500/-',
    desc: 'Provide a full nutritious lunch for all residents. Ideal for birthdays, family occasions, or memorial days to seek elders\' blessings.',
  },
  {
    icon: HeartPulse,
    title: 'Special Lunch',
    amount: '₹6,000/-',
    desc: 'A special festive meal for all residents. Perfect for celebrations, anniversaries, or auspicious occasions with the elders.',
  },
  {
    icon: Coffee,
    title: 'Dinner',
    amount: '₹3,000/-',
    desc: 'Sponsor a wholesome dinner for every resident. End their day with warmth, nourishment, and the knowledge that someone cares.',
  },
  {
    icon: Building2,
    title: 'One Day Total Expenditure',
    amount: '₹10,500/-',
    desc: 'Cover all meals and daily operational costs for one full day — breakfast, lunch, snacks, and dinner for all residents.',
  },
  {
    icon: Coffee,
    title: 'Snacks',
    amount: '₹2,000/-',
    desc: 'Sponsor afternoon tea and snacks for all residents. A small gesture that brings a moment of joy in the middle of every day.',
  },
  {
    icon: UserCheck,
    title: 'Milk — Per Month',
    amount: '₹7,500/- per month',
    desc: 'Ensure a daily supply of fresh milk for all residents. Vital for their health, bone strength, and daily nutrition.',
  },
  {
    icon: ShoppingBasket,
    title: 'Provision Expenses',
    amount: '₹30,000/- per month',
    desc: 'Covers all monthly grocery and kitchen provision needs — rice, dal, vegetables, oil, and cooking essentials for the home.',
  },
  {
    icon: Stethoscope,
    title: 'Medical Expenses',
    amount: '₹20,000/- per month',
    desc: 'Funds monthly medicines, doctor visits, and healthcare for residents — many of whom require ongoing medical attention.',
  },
  {
    icon: UserCheck,
    title: 'Clothes Expenses',
    amount: '₹25,000/- yearly',
    desc: 'Provides seasonal clothing for every resident each year, ensuring dignity, comfort, and warmth across all seasons.',
  },
  {
    icon: Building2,
    title: 'Old Age Home Rent',
    amount: '₹55,000/- per month',
    desc: 'Our most critical need. Covers the monthly rent for the home that shelters over 50 elderly residents. Your support keeps the doors open.',
    highlight: true,
  },
  {
    icon: Building2,
    title: 'Electricity Bill',
    amount: '₹15,000/- per two months',
    desc: 'Keeps the lights on, fans running, and medical equipment powered — essential for the safety and comfort of every resident.',
  },
  {
    icon: Heart,
    title: 'Funeral & Cremation Expenses',
    amount: '₹15,000/-',
    desc: 'We ensure every resident receives a dignified farewell. Your contribution covers funeral rites and cremation for destitute elders with no family.',
  },
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
            Every contribution — big or small — directly reaches our residents. Choose how you'd like to help.
          </p>
        </div>
      </div>

      {/* Sponsorship Grid */}
      <section className="section-padding bg-warm-white">
        <div className="site-container">
          <SectionHeading
            eyebrow="Special Nithya Annadhanam — Food Sponsorship"
            title="Sponsorship Details"
            subtitle="All amounts go directly to residents. Contact us to arrange your sponsorship and receive photos, receipts, and our elders' blessings."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
            {campaigns.map((camp, i) => (
              <motion.div
                key={camp.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className={`bg-white p-8 rounded-2xl border transition-all flex flex-col justify-between ${
                  camp.highlight
                    ? 'border-gold/50 shadow-lg ring-1 ring-gold/20'
                    : 'border-border hover:border-gold/30 hover:shadow-xl'
                }`}
              >
                {camp.highlight && (
                  <div className="mb-4">
                    <span className="text-[10px] font-bold tracking-widest uppercase bg-gold/10 text-gold-dark px-3 py-1 rounded-full">
                      Major Need
                    </span>
                  </div>
                )}
                <div>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-cream flex items-center justify-center flex-shrink-0">
                      <camp.icon className="w-6 h-6 text-gold-dark" />
                    </div>
                    <span className="font-playfair font-bold text-navy-dark text-lg sm:text-xl text-right">
                      {camp.amount}
                    </span>
                  </div>
                  <h3 className="font-playfair text-xl sm:text-2xl font-bold text-navy-dark mb-3">
                    {camp.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {camp.desc}
                  </p>
                </div>

                <Link
                  to="/contact#donate"
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

      {/* Participation & Celebrations */}
      <section className="section-padding bg-cream">
        <div className="site-container">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <span className="text-gold text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">You Are Always Welcome</span>
            <h2 className="font-playfair text-2xl sm:text-3xl lg:text-4xl font-bold text-navy-dark mb-4 leading-tight">
              Participation &amp; Celebrations
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              {/* Left — warm welcome text */}
              <div className="p-8 sm:p-10 flex flex-col justify-center border-b md:border-b-0 md:border-r border-border/50">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center mb-6">
                  <Users className="w-5 h-5 text-gold-dark" />
                </div>
                <p className="text-text-muted text-sm sm:text-base leading-relaxed mb-5">
                  We warmly invite you to celebrate your family functions, birthdays, marriage ceremonies, and festival occasions at our home in the gracious presence of our elders.
                </p>
                <p className="text-text-muted text-sm sm:text-base leading-relaxed mb-5">
                  We also welcome offices, colleges, and schools to organise programs at our premises, allowing participants to interact with and spend meaningful time with the elders.
                </p>
                <p className="text-text-muted text-sm sm:text-base leading-relaxed">
                  You may also choose to offer food to the elders on the occasion of your family elders' Memorial Day — a sacred and compassionate gesture — and in return receive their heartfelt blessings and goodwill.
                </p>
              </div>

              {/* Right — blessing message */}
              <div className="p-8 sm:p-10 bg-navy-dark flex flex-col justify-center">
                <blockquote className="font-playfair text-lg sm:text-xl text-white/90 leading-relaxed italic mb-6">
                  "We sincerely pray to the Almighty to bless you with a long, healthy, and prosperous life, and may the collective prayers and blessings of our elders remain with you and your family throughout your lifetime."
                </blockquote>
                <div className="h-px bg-white/10 mb-6" />
                <Link
                  to="/contact#donate"
                  className="group inline-flex items-center gap-2 text-gold font-semibold text-sm hover:text-gold/80 transition-colors"
                >
                  <Heart size={15} className="text-gold" />
                  Reach out to celebrate with us
                  <ChevronRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <SupportMission />
    </PageTransition>
  )
}