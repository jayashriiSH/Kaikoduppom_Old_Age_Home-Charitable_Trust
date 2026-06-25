import PageTransition from '../components/PageTransition'
import SectionHeading from '../components/SectionHeading'
import Timeline from '../components/Timeline'
import SupportMission from '../components/SupportMission'
import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { Link } from 'react-router-dom'
import founderImg from '../assets/founder.jpg'

const founderMilestones = [
  {
    year: '2013',
    title: 'The Beginning',
    description: 'Founded through the vision and compassion of Founder Dr. Jagadeesan Sellamuthu, Kaikoduppom was born from a simple belief that every elderly person deserves care, dignity, and a place to call home.',
  },
  {
    year: '2014',
    title: 'A Humble Start',
    description: 'With his own personal savings, the founder began by providing shelter, food, and daily care to abandoned elders, laying the foundation for a mission driven by kindness and selfless service.',
  },
  {
    year: '2017',
    title: 'Growing with Purpose',
    description: 'As the need grew, the trust expanded its services and strengthened its commitment to supporting destitute and abandoned senior citizens with compassion and respect.',
  },
  {
    year: '2020',
    title: 'Serving Through Challenges',
    description: 'Through every challenge, the focus remained unchanged — ensuring uninterrupted care, safety, and support for every resident.',
  },
  {
    year: '2022',
    title: 'Expanding Care',
    description: 'The home introduced enhanced medical assistance and dedicated care for bedridden residents, providing comfort and dignity to those with greater needs.',
  },
  {
    year: 'Today',
    title: 'Today',
    description: 'Kaikoduppom remains committed to offering shelter, nutritious meals, medical support, and loving care to abandoned and destitute elders, creating a family where they can live with dignity and hope.',
  },
]

export default function FounderStory() {
  return (
    <PageTransition>
      {/* ── Banner Header ── */}
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
          <span className="text-gold text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">
            The Heart Behind the Trust
          </span>
          <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Founder's Journey
          </h1>
          <p className="text-white/60 text-sm sm:text-base section-description">
            Every meaningful mission begins with a purpose — and for Dr. Jagadeesan Sellamuthu, that purpose has always been to serve humanity with compassion, dignity, and selfless commitment.
          </p>
        </div>
      </div>

      {/* ── Biographical Content ── */}
      <section className="section-padding bg-warm-white">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-start gap-8 lg:gap-10">

            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 relative flex justify-center"
            >
              <div className="relative w-full max-w-sm lg:max-w-full">
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-border bg-white" style={{ aspectRatio: '4/5', maxHeight: '540px' }}>
                  <img
                    src={founderImg}
                    alt="Dr. Jagadeesan Sellamuthu – Founder of Kaikoduppom Trust"
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                {/* Quote card */}
                <div className="absolute -bottom-6 -right-4 bg-gold p-5 rounded-2xl text-navy-dark shadow-xl max-w-[220px] hidden sm:block">
                  <Quote className="w-6 h-6 opacity-40 mb-2" />
                  <p className="font-playfair text-xs italic font-bold leading-relaxed">
                    "Genuine service can transform lives and build a society rooted in kindness."
                  </p>
                  <p className="text-[10px] uppercase font-bold tracking-wider mt-2 text-navy-dark/70">
                    — Dr. Jagadeesan Sellamuthu
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Narrative */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-7 lg:pt-2"
            >
              <span className="text-xs font-bold tracking-widest text-gold-dark uppercase mb-3 block">Biography</span>
              <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-navy-dark mb-6 leading-snug">
                From a Humble Encounter to a Beacon of Hope
              </h2>

              <div className="space-y-4 text-text-muted text-sm sm:text-base leading-relaxed">
                <p>
                  Born into an agricultural family in Salem district, <strong className="text-navy-dark">Dr. Jagadeesan Sellamuthu</strong> developed
                  a deep interest in public service at the age of 19. His journey started with blood donation drives and gradually expanded
                  to eye donation awareness, organ donation initiatives, and support for people facing poverty and hardship. He also actively
                  participated in social service campaigns and awareness programs, contributing both his time and personal resources to help
                  those in need.
                </p>
                <p>
                  Driven by the belief that service should be a lifelong commitment rather than an occasional act, he dedicated himself fully
                  to humanitarian work. He worked alongside charitable organizations, supporting abandoned elders, persons with disabilities,
                  underprivileged students, and vulnerable communities.
                </p>
                <p>
                  In 2013, he founded <strong className="text-navy-dark">Kaikoduppom Charitable Trust</strong> with a vision of creating a safe
                  and caring environment for those who had been neglected or left without support. Since then, the trust has continued to
                  provide shelter, food, medical care, and compassionate assistance to abandoned and destitute elderly people, as well as
                  support for visually and physically challenged individuals.
                </p>
                <p>
                  Despite many challenges along the way, Dr. Jagadeesan Sellamuthu has remained steadfast in his mission, guided by integrity,
                  discipline, and the belief that genuine service can transform lives. His journey reflects a simple but powerful principle:
                  to help every suffering person to the best of one's ability and to build a society rooted in kindness and humanity.
                </p>
                <p>
                  Today, his vision continues to inspire volunteers, donors, and well-wishers to join hands in creating a future where every
                  individual is treated with respect, care, and compassion.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 mt-8">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 bg-navy hover:bg-navy-dark text-white px-6 py-3 rounded-full text-sm font-semibold transition-all hover:-translate-y-0.5"
                >
                  Support the Mission
                </Link>
                <Link
                  to="/volunteer"
                  className="inline-flex items-center gap-2 border-2 border-navy/20 hover:border-navy text-navy px-6 py-3 rounded-full text-sm font-semibold transition-all"
                >
                  Join as a Volunteer
                </Link>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Milestones Timeline ── */}
      <section className="section-padding bg-cream">
        <div className="site-container">
          <div className="max-w-4xl mx-auto">
            <SectionHeading
              eyebrow="Our Journey"
              title="Milestones of Compassion"
              subtitle="From a single act of kindness to a trusted home of care — the story of how Kaikoduppom grew into what it is today."
            />
            <Timeline events={founderMilestones} />
          </div>
        </div>
      </section>

      <SupportMission />
    </PageTransition>
  )
}