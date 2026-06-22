import { useState } from 'react'
import PageTransition from '../components/PageTransition'
import SectionHeading from '../components/SectionHeading'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, ChevronDown } from 'lucide-react'

const contactInfo = [
  { icon: Phone, label: 'Call Us', val: '094444 41140', detail: 'Available 24/7 for emergencies', href: 'tel:09444441140' },
  { icon: Mail, label: 'Email Us', val: 'kaikoduppomtrust@gmail.com', detail: 'For donations, receipts, and queries', href: 'mailto:kaikoduppomtrust@gmail.com' },
  { icon: MapPin, label: 'Our Address', val: 'Puducherry, India', detail: 'Visit us in person', href: '#' },
  { icon: Clock, label: 'Hours', val: 'Open 24 Hours', detail: 'Trust operates round the clock', href: '#' }
]

const faqs = [
  { q: 'Can I visit the old age home?', a: 'Yes. We encourage visitors to spend time with our residents. Standard visiting hours are from 9:00 AM to 12:00 PM and 4:00 PM to 6:30 PM daily.' },
  { q: 'Can I donate physical materials (rice, diapers, clothes)?', a: 'Absolutely. We regularly require quality raw rice, groceries, adult diapers, bed linen, cleaning supplies, and medicines. Please call ahead to confirm our current requirements.' },
  { q: 'How can I celebrate my birthday with the elders?', a: 'You can sponsor a special meal (Annadhanam) on your birthday. You are welcome to visit during meal hours to feed the elders, cut cake, and seek their blessings.' },
  { q: 'Is there any entry fee for abandoned senior citizens?', a: 'No. Kaikoduppom old age home is entirely free for homeless, destitute, and abandoned elderly people. We cover all shelter, clothing, medical, and final rites expenses through donations.' }
]

export default function Contact() {
  const [openFaqIdx, setOpenFaqIdx] = useState(null)

  const toggleFaq = (idx) => {
    setOpenFaqIdx(openFaqIdx === idx ? null : idx)
  }

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
          <span className="text-gold text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">Get in Touch</span>
          <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">Contact Our Team</h1>
          <p className="text-white/60 text-sm sm:text-base section-description">
            Have questions about donating, volunteering, or admitting an elder? Reach out to us. We are here to help.
          </p>
        </div>
      </div>

      {/* Contact Cards */}
      <section className="section-padding bg-warm-white">
        <div className="site-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, idx) => (
              <a
                key={idx}
                href={info.href}
                className="bg-white border border-border p-6 rounded-2xl shadow-xs hover:shadow-md transition-shadow flex flex-col items-center text-center group"
              >
                <div className="w-12 h-12 rounded-xl bg-cream flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <info.icon className="w-6 h-6 text-gold-dark" />
                </div>
                <h4 className="text-[10px] text-text-muted uppercase tracking-wider font-bold mb-1">{info.label}</h4>
                <p className="text-navy-dark font-extrabold text-sm sm:text-base mb-1 font-playfair">{info.val}</p>
                <p className="text-[10px] text-text-muted leading-tight">{info.detail}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-cream">
        <div className="site-container">
          <SectionHeading
            eyebrow="Visit Us"
            title="Find Our Location"
            subtitle="Kaikoduppom Old Age Home & Charitable Trust, Puducherry, India. Walk-ins are always welcome."
          />

          <div className="rounded-2xl overflow-hidden shadow-sm border border-border relative bg-white min-h-[400px] mt-8">
            <iframe
              title="Kaikoduppom Old Age Home Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.7703349848734!2d80.08759237507556!3d12.922477387388462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525e8201397fd9%3A0xa763e73edb713086!2sKaikoduppom%20Old%20Age%20Home%20%26%20Charitable%20Trust%20(Regd.%2C)!5e0!3m2!1sen!2sin!4v1782048666906!5m2!1sen!2sin"
              className="w-full h-[400px] border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="section-padding bg-warm-white">
        <div className="site-container">
          <div className="max-w-4xl mx-auto">
            <SectionHeading
              eyebrow="Common Inquiries"
              title="Frequently Asked Questions"
              subtitle="Quick answers regarding admission criteria, visit timings, and donation processing."
            />

            <div className="space-y-4 mt-8">
              {faqs.map((faq, idx) => {
                const isOpen = openFaqIdx === idx
                return (
                  <div
                    key={idx}
                    className="bg-white border border-border rounded-xl overflow-hidden transition-all shadow-xs"
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full p-5 flex items-center justify-between text-left focus:outline-none"
                    >
                      <span className="font-bold text-navy-dark text-sm sm:text-base font-playfair">{faq.q}</span>
                      <ChevronDown
                        size={18}
                        className={`text-gold-dark transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="px-5 pb-5 pt-1 border-t border-border/40 text-xs sm:text-sm text-text-muted leading-relaxed">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}