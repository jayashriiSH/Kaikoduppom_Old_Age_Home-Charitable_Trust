import PageTransition from '../components/PageTransition'
import SectionHeading from '../components/SectionHeading'
import TestimonialsSlider from '../components/TestimonialsSlider'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const staticReviews = [
  {
    name: 'Dillibabu R.',
    date: '4 months ago',
    text: 'No one should be alone, helpless, or hungry — this organisation lives that mission every single day. The importance given to elder welfare under the leadership of Jagadeesan Sir is highly appreciable.',
    rating: 5
  },
  {
    name: 'Akshaya A.M.',
    date: '4 months ago',
    text: 'Properly registered, well-managed, and officially recognized. This trust was founded with integrity and is run with such dedication. A remarkable organization that reflects humanity at its best.',
    rating: 5
  },
  {
    name: 'Raja Sekar',
    date: '4 months ago',
    text: 'The staff treat everyone with kindness and respect — healthy food, medical care, and genuine support. They also help poor and abandoned elders outside the home.',
    rating: 5
  },
  {
    name: 'Daisy',
    date: '4 months ago',
    text: 'The old age home is well maintained, clean, and peaceful. You can see the care taken to provide a comfortable environment for the elders.',
    rating: 5
  },
  {
    name: 'Sivagurunathan K.',
    date: '6 months ago',
    text: 'Visiting this home was an eye-opener. The elders are kept clean and active. They are served nutritious food and medical help immediately. Great initiative in Puducherry.',
    rating: 5
  },
  {
    name: 'Meenakshi Sundaram',
    date: '8 months ago',
    text: "We sponsored a full day of meals for my daughter's birthday. The team sent photos of the elders eating. It was transparent, emotional, and satisfying.",
    rating: 5
  },
  {
    name: 'Vaishnavi Venkatesan',
    date: '10 months ago',
    text: "I'm so glad to share that I visited there twice and today I celebrated Baby shower. The service and the care takers are very kind and gentle. The people from the home is very patience. It's my lifetime memorable moment. Thank you very much for the day and the service you are being provided to the needy.",
    rating: 5
  }
]

export default function Testimonials() {
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
          <span className="text-gold text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">
            Testimonials
          </span>
          <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Words of Encouragement
          </h1>
          <p className="text-white/60 text-sm sm:text-base section-description">
            Discover what volunteers, visitor families, and well-wishers have to say about the care standards at Kaikoduppom Trust.
          </p>
        </div>
      </div>

      {/* Testimonials Slider */}
      <TestimonialsSlider />

      {/* Static Visitor Testimonials Grid */}
      <section className="section-padding bg-warm-white">
        <div className="site-container">
          <SectionHeading
            eyebrow="Visitor Testimonials"
            title="Reviews &amp; Ratings"
            subtitle="We are grateful for all kind words. They motivate our team to serve better every day."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {staticReviews.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="relative bg-white border border-border rounded-2xl shadow-sm hover:shadow-lg transition-shadow flex flex-col p-7 overflow-hidden"
              >
                {/* Opening quote mark */}
                <div
                  className="absolute top-4 left-5 font-playfair text-gold/20 select-none pointer-events-none"
                  style={{ fontSize: '80px', lineHeight: 1 }}
                  aria-hidden="true"
                >
                  &ldquo;
                </div>

                {/* Avatar + Name row */}
                <div className="flex items-center gap-3 mb-5 relative z-10">
                  <div className="w-11 h-11 rounded-full bg-navy-dark text-gold font-bold text-base flex items-center justify-center flex-shrink-0 border-2 border-gold/30">
                    {r.name[0]}
                  </div>
                  <div>
                    <p className="font-bold text-navy-dark text-sm leading-tight">{r.name}</p>
                    <p className="text-xs text-text-muted mt-0.5">{r.date}</p>
                  </div>
                </div>

                {/* Review text */}
                <p className="text-text-primary text-sm leading-relaxed flex-1 relative z-10">
                  {r.text}
                </p>

                {/* Divider */}
                <div className="w-12 h-px bg-gold/40 my-5" />

                {/* Stars */}
                <div className="flex gap-1 relative z-10">
                  {Array.from({ length: r.rating }).map((_, idx) => (
                    <Star key={idx} size={14} className="text-gold fill-gold" />
                  ))}
                </div>

                {/* Closing quote mark */}
                <div
                  className="absolute bottom-4 right-5 font-playfair text-gold/20 select-none pointer-events-none"
                  style={{ fontSize: '80px', lineHeight: 1 }}
                  aria-hidden="true"
                >
                  &rdquo;
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  )
}