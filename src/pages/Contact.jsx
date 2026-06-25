import { useState } from 'react'
import PageTransition from '../components/PageTransition'
import SectionHeading from '../components/SectionHeading'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, ChevronDown, CreditCard, QrCode, FileText, X, ZoomIn } from 'lucide-react'

const faqs = [
  { q: 'Can I visit the old age home?', a: 'Yes. We encourage visitors to spend time with our residents. Standard visiting hours are from 9:00 AM to 12:00 PM and 4:00 PM to 6:30 PM daily.' },
  { q: 'Can I donate physical materials (rice, diapers, clothes)?', a: 'Absolutely. We regularly require quality raw rice, groceries, adult diapers, bed linen, cleaning supplies, and medicines. Please call ahead to confirm our current requirements.' },
  { q: 'How can I celebrate my special day with the elders?', a: 'You can sponsor a special meal (Annadhanam) on your special day. You are welcome to visit during meal hours to feed the elders, cut cake, and seek their blessings.' },
  { q: 'Is there any entry fee for abandoned senior citizens?', a: 'No. Kaikoduppom old age home is entirely free for homeless, destitute, and abandoned elderly people. We cover all shelter, clothing, medical, and final rites expenses through donations.' }
]

const bankAccounts = [
  {
    bank: 'Yes Bank',
    accountName: 'Kaikoduppom Charitable Trust',
    accountType: 'Savings Account (SB)',
    accountNumber: '10649460000014',
    ifsc: 'YESB0001064',
    branch: 'Madipakkam, Chennai – 600 091',
    upiId: 'MAB000044690066015@YESBANK',
    qrImage: '/src/assets/QR-1.jpg',
  },
  {
    bank: 'South Indian Bank',
    accountName: 'Kaikoduppom Charitable Trust',
    accountType: 'Savings Account',
    accountNumber: '068705300001581',
    ifsc: 'SIBL0000687',
    micr: '032605',
    branch: 'Medavakkam, Chennai – 600 100',
    upiId: 'bhqr.2569103A@sib',
    qrImage: '/src/assets/QR-2.jpg',
  },
]

export default function Contact() {
  const [openFaqIdx, setOpenFaqIdx] = useState(null)
  const [lightboxImg, setLightboxImg] = useState(null)
  const toggleFaq = (idx) => setOpenFaqIdx(openFaqIdx === idx ? null : idx)

  return (
    <PageTransition>
      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightboxImg(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative bg-white rounded-2xl shadow-2xl p-4 max-w-sm w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setLightboxImg(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-navy-dark/10 hover:bg-navy-dark/20 flex items-center justify-center transition-colors"
              >
                <X size={16} className="text-navy-dark" />
              </button>
              <img
                src={lightboxImg.src}
                alt={lightboxImg.alt}
                className="w-full rounded-xl object-contain"
              />
              <p className="text-center text-xs text-text-muted mt-3">{lightboxImg.label}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
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
          <span className="text-gold text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">Get in Touch</span>
          <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">Contact Our Team</h1>
          <p className="text-white/60 text-sm sm:text-base section-description">
            Have questions about donating, volunteering, or admitting an elder? Reach out to us. We are here to help.
          </p>
        </div>
      </div>

      {/* ── Contact Cards ── */}
      <section className="section-padding bg-warm-white">
        <div className="site-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            {/* Phone */}
            <div className="bg-white border border-border rounded-2xl shadow-xs hover:shadow-md transition-shadow p-5">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 rounded-lg bg-cream flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-gold-dark" />
                </div>
                <span className="text-[10px] text-text-muted uppercase tracking-wider font-bold">Contact Numbers</span>
              </div>
              <div className="space-y-2 mb-3">
                <a href="tel:+919444441140" className="flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-dark flex-shrink-0" />
                  <span className="text-navy-dark font-extrabold text-base sm:text-lg font-playfair group-hover:text-gold-dark transition-colors">
                    +91 94444 41140
                  </span>
                  <span className="text-[10px] text-text-muted ml-1 hidden sm:inline">Primary</span>
                </a>
                <a href="tel:+919943788188" className="flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-border flex-shrink-0" />
                  <span className="text-navy-dark font-semibold text-sm sm:text-base font-playfair group-hover:text-gold-dark transition-colors">
                    +91 99437 88188
                  </span>
                </a>
                <a href="tel:04422680140" className="flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-border flex-shrink-0" />
                  <span className="text-navy-dark font-semibold text-sm sm:text-base font-playfair group-hover:text-gold-dark transition-colors">
                    044 2268 0140
                  </span>
                </a>
              </div>
              <p className="text-[11px] text-text-muted">Available 24/7 for support and enquiries</p>
            </div>

            {/* Email */}
            <div className="bg-white border border-border rounded-2xl shadow-xs hover:shadow-md transition-shadow p-5">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 rounded-lg bg-cream flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-gold-dark" />
                </div>
                <span className="text-[10px] text-text-muted uppercase tracking-wider font-bold">Email Us</span>
              </div>
              <div className="space-y-2 mb-3">
                <a href="mailto:kaikoduppomjagadeesan@gmail.com" className="flex items-start gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-dark flex-shrink-0 mt-1.5" />
                  <span className="text-navy-dark font-semibold text-sm font-playfair group-hover:text-gold-dark transition-colors break-all leading-snug">
                    kaikoduppomjagadeesan@gmail.com
                  </span>
                </a>
                <a href="mailto:kaikoduppomtrust@yahoo.com" className="flex items-start gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-border flex-shrink-0 mt-1.5" />
                  <span className="text-navy-dark font-semibold text-sm font-playfair group-hover:text-gold-dark transition-colors break-all leading-snug">
                    kaikoduppomtrust@yahoo.com
                  </span>
                </a>
              </div>
              <p className="text-[11px] text-text-muted">Donations, admissions and general enquiries</p>
            </div>

            {/* Address */}
            <div className="bg-white border border-border rounded-2xl shadow-xs hover:shadow-md transition-shadow p-5">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 rounded-lg bg-cream flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-gold-dark" />
                </div>
                <span className="text-[10px] text-text-muted uppercase tracking-wider font-bold">Our Address</span>
              </div>
              <address className="not-italic mb-3 space-y-0.5">
                <p className="text-navy-dark font-bold text-sm font-playfair">Plot No. 40, 1st Street</p>
                <p className="text-navy-dark font-bold text-sm font-playfair">Bharathi Nagar, Veeralakshmi Nagar</p>
                <p className="text-navy-dark font-bold text-sm font-playfair">Old Perungalathur</p>
                <p className="text-navy-dark font-semibold text-sm font-playfair text-text-muted">
                  Tambaram (TK), Chengalpattu (DT) – 600063
                </p>
              </address>
              <p className="text-[11px] text-text-muted">Visitors are always welcome</p>
            </div>

            {/* Hours */}
            <div className="bg-white border border-border rounded-2xl shadow-xs hover:shadow-md transition-shadow p-5">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 rounded-lg bg-cream flex items-center justify-center flex-shrink-0">
                  <Clock className="w-4 h-4 text-gold-dark" />
                </div>
                <span className="text-[10px] text-text-muted uppercase tracking-wider font-bold">Hours</span>
              </div>
              <p className="text-navy-dark font-extrabold text-xl sm:text-2xl font-playfair mb-1">Open 24 Hours</p>
              <p className="text-text-muted text-sm mb-3">Every day of the year</p>
              <p className="text-[11px] text-text-muted">Trust operates round the clock</p>
            </div>

          </div>
        </div>
      </section>

      {/* ── Map Section ── */}
      <section className="section-padding bg-cream">
        <div className="site-container">
          <SectionHeading
            eyebrow="Visit Us"
            title="Find Our Location"
            subtitle="Plot No. 40, 1st Street, Bharathi Nagar, Veeralakshmi Nagar, Old Perungalathur, Tambaram (TK), Chengalpattu (DT) – 600063. Visitors are always welcome."
          />
          <div className="rounded-2xl overflow-hidden shadow-sm border border-border bg-white mt-8">
            <iframe
              title="Kaikoduppom Old Age Home Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.7703349848734!2d80.08759237507556!3d12.922477387388462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525e8201397fd9%3A0xa763e73edb713086!2sKaikoduppom%20Old%20Age%20Home%20%26%20Charitable%20Trust%20(Regd.%2C)!5e0!3m2!1sen!2sin!4v1782048666906!5m2!1sen!2sin"
              className="w-full h-[400px] border-0 block"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* ── Donate / Bank Details Section ── */}
      <section id="donate" className="section-padding bg-warm-white scroll-mt-20">
        <div className="site-container">
          <SectionHeading
            eyebrow="Make a Donation"
            title="Bank & Payment Details"
            subtitle="Donations are eligible for tax exemption under Section 80G of the Income Tax Act, 1961. All donations go directly to residents."
          />

          {/* 80G notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-start gap-3 bg-gold/10 border border-gold/30 rounded-xl p-4 mb-10 mt-8"
          >
            <FileText className="w-5 h-5 text-gold-dark flex-shrink-0 mt-0.5" />
            <p className="text-sm text-navy-dark leading-relaxed">
              <span className="font-bold">Tax Benefit:</span> Under Section 80G of the Income Tax Act 1961, you get exemption from paying tax on donations made to <span className="font-bold">Kaikoduppom Charitable Trust</span>. All cheques/DDs should be drawn in favour of <span className="font-bold">"Kaikoduppom Charitable Trust"</span>.
            </p>
          </motion.div>

          {/* Bank account cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {bankAccounts.map((acc, i) => (
              <motion.div
                key={acc.bank}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden"
              >
                {/* Card header */}
                <div className="bg-navy-dark px-6 py-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                    <CreditCard className="w-4 h-4 text-gold" />
                  </div>
                  <div>
                    <p className="text-[10px] text-white/50 uppercase tracking-wider font-bold">Bank Account</p>
                    <p className="text-white font-playfair font-bold text-base">{acc.bank}</p>
                  </div>
                </div>

                <div className="p-6 flex flex-col sm:flex-row gap-6">
                  {/* Details */}
                  <div className="flex-1 space-y-3">
                    <div>
                      <p className="text-[10px] text-text-muted uppercase tracking-wider font-bold mb-0.5">Account Name</p>
                      <p className="text-navy-dark font-bold text-sm font-playfair">{acc.accountName}</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-text-muted uppercase tracking-wider font-bold mb-0.5">Account Type</p>
                      <p className="text-navy-dark font-semibold text-sm">{acc.accountType}</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-text-muted uppercase tracking-wider font-bold mb-0.5">Account Number</p>
                      <p className="text-navy-dark font-bold text-sm font-mono tracking-wider">{acc.accountNumber}</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-text-muted uppercase tracking-wider font-bold mb-0.5">IFSC Code</p>
                      <p className="text-navy-dark font-bold text-sm font-mono">{acc.ifsc}</p>
                    </div>
                    {acc.micr && (
                      <div>
                        <p className="text-[10px] text-text-muted uppercase tracking-wider font-bold mb-0.5">MICR Code</p>
                        <p className="text-navy-dark font-semibold text-sm font-mono">{acc.micr}</p>
                      </div>
                    )}
                    <div>
                      <p className="text-[10px] text-text-muted uppercase tracking-wider font-bold mb-0.5">Branch</p>
                      <p className="text-navy-dark font-semibold text-sm">{acc.branch}</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-text-muted uppercase tracking-wider font-bold mb-0.5">UPI ID</p>
                      <p className="text-navy-dark font-bold text-sm font-mono break-all">{acc.upiId}</p>
                    </div>
                  </div>

                  {/* QR Code */}
                  <div className="flex flex-col items-center justify-center sm:border-l border-border/50 sm:pl-6 flex-shrink-0">
                    <div className="w-8 h-8 rounded-lg bg-cream flex items-center justify-center mb-3">
                      <QrCode className="w-4 h-4 text-gold-dark" />
                    </div>
                    <div
                      className="relative cursor-zoom-in group"
                      onClick={() => setLightboxImg({ src: acc.qrImage, alt: `${acc.bank} UPI QR`, label: `${acc.bank} — Scan to pay via UPI` })}
                    >
                      <img
                        src={acc.qrImage}
                        alt={`${acc.bank} QR code for Kaikoduppom Charitable Trust`}
                        className="w-32 h-32 object-contain rounded-xl border border-border group-hover:border-gold/40 transition-all"
                      />
                      <div className="absolute inset-0 rounded-xl bg-black/0 group-hover:bg-black/10 transition-all flex items-center justify-center">
                        <ZoomIn size={20} className="text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow" />
                      </div>
                    </div>
                    <p className="text-[10px] text-text-muted mt-2 text-center">Tap to enlarge · Scan to pay</p>
                    <p className="text-[10px] text-text-muted text-center">Paytm · PhonePe · GPay</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Third UPI QR */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 bg-white rounded-2xl border border-border shadow-sm p-6 flex flex-col sm:flex-row items-center gap-6"
          >
            <div className="flex-1">
              <p className="text-[10px] text-text-muted uppercase tracking-wider font-bold mb-1">UPI Payment</p>
              <p className="font-playfair font-bold text-navy-dark text-lg mb-2">Pay via UPI — All Apps Accepted</p>
              <p className="text-sm text-text-muted leading-relaxed">
                Scan this QR code using any UPI app — Paytm, PhonePe, Google Pay, or your bank app — to make a direct donation to Kaikoduppom Charitable Trust.
              </p>
            </div>
            <div className="flex-shrink-0 flex flex-col items-center">
              <div
                className="relative cursor-zoom-in group"
                onClick={() => setLightboxImg({ src: '/src/assets/QR-3.jpg', alt: 'UPI QR code', label: 'Kaikoduppom Charitable Trust — UPI Payment' })}
              >
                <img
                  src="/src/assets/QR-3.jpg"
                  alt="UPI QR code for Kaikoduppom Charitable Trust"
                  className="w-36 h-36 object-contain rounded-xl border border-border group-hover:border-gold/40 transition-all"
                />
                <div className="absolute inset-0 rounded-xl bg-black/0 group-hover:bg-black/10 transition-all flex items-center justify-center">
                  <ZoomIn size={20} className="text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow" />
                </div>
              </div>
              <p className="text-[10px] text-text-muted mt-2 text-center">Tap to enlarge · Paytm · PhonePe · GPay</p>
            </div>
          </motion.div>

          {/* Call CTA */}
          <div className="text-center mt-10">
            <a
              href="tel:09444441140"
              className="inline-flex items-center gap-2 bg-navy hover:bg-navy-dark text-white font-semibold px-8 py-3.5 rounded-full text-sm transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              <Phone size={15} />
              Call Us to Donate or Get Started
            </a>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="section-padding bg-cream">
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
                  <div key={idx} className="bg-white border border-border rounded-xl overflow-hidden shadow-xs">
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full p-5 flex items-center justify-between text-left focus:outline-none"
                    >
                      <span className="font-bold text-navy-dark text-sm sm:text-base font-playfair pr-4">{faq.q}</span>
                      <ChevronDown
                        size={18}
                        className={`text-gold-dark transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}
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