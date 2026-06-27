import { useState } from 'react'
import PageTransition from '../components/PageTransition'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, Eye } from 'lucide-react'

// Existing imports
import photo2 from '../assets/photo2.jpg'
import photo3 from '../assets/photo3.jpg'
import photo4 from '../assets/photo4.png'
import photo5 from '../assets/photo5.png'
import photo7 from '../assets/photo7.png'
import photo8 from '../assets/photo8.png'
import photo9 from '../assets/photo9.png'
import hero1 from '../assets/hero1.avif'

// New imports
import banner from '../assets/banner.jpg'
import certOfReg from '../assets/cert_of_reg.jpg'
import certOfReg2 from '../assets/cert_of_reg2.jpg'
import certOfReg3 from '../assets/cert_of_reg3.jpg'
import doc1 from '../assets/doc1.jpg'
import doc2 from '../assets/doc2.jpg'
import doc3 from '../assets/doc3.jpg'
import doc4 from '../assets/doc4.jpg'
import doc5 from '../assets/doc5.jpg'
import doc6 from '../assets/doc6.jpg'
import doc7 from '../assets/doc7.jpg'
import formd from '../assets/formd.jpg'
import founder from '../assets/founder.jpg'
import heroPng from '../assets/hero.png'
import photo10 from '../assets/photo10.jpg'
import qr1 from '../assets/QR-1.jpg'
import qr2 from '../assets/QR-2.jpg'
import qr3 from '../assets/QR-3.jpg'
import sponsorship from '../assets/Sponsorship_detials.jpg'

// Remove hero import, remove photo6 import, keep all others
// DELETE this line: import heroPng from '../assets/hero.png'

const galleryItems = [
  // Residents
  { src: photo2, category: 'residents', title: 'Group Photo with Visitors', desc: 'Elders and staff welcomed with warmth and dignity' },
  { src: photo9, category: 'residents', title: 'Street Outreach Program', desc: 'Reaching out to elders and families in the community' },
  { src: photo10, category: 'residents', title: 'Donor Visit & Support', desc: 'A kind donor sharing love and essentials with our elders' },

  // Activities
  { src: photo4, category: 'activities', title: 'Award Ceremony', desc: 'Kaikoduppom Trust honoured at Global Achievers Council' },
  { src: photo5, category: 'activities', title: 'Cultural Programme', desc: 'Elders participating in a traditional stage celebration' },
  { src: photo7, category: 'activities', title: 'Medical Camp', desc: 'Free health check-up camp organised for our residents' },
  { src: photo8, category: 'activities', title: 'Community Outreach Event', desc: 'Trust volunteers engaged in a public welfare drive' },

  // Festivals
  { src: photo3, category: 'festivals', title: 'Our Journey Timeline', desc: 'Milestones of compassion since Kaikoduppom was founded' },
  { src: hero1, category: 'festivals', title: 'Trust Identity & Mission', desc: 'Visual representation of our values and community purpose' },

  // Outreach
  { src: banner, category: 'outreach', title: 'Kaikoduppom Trust Banner', desc: 'Official banner recognised by State & Central Government' },
  { src: founder, category: 'festivals', title: 'Our Founder', desc: 'The visionary behind Kaikoduppom Charitable Trust' },
  { src: sponsorship, category: 'outreach', title: 'Bank Details – South Indian Bank', desc: 'Sponsorship and donation account details of the trust' },
  { src: qr1, category: 'outreach', title: 'Donation QR – Yes Bank', desc: 'Scan to donate directly via Yes Bank UPI / BHIM' },
  { src: qr2, category: 'outreach', title: 'Donation QR – Kaikoduppom Trust', desc: 'Quick payment via UPI, GPay, PhonePe & more' },
  { src: qr3, category: 'outreach', title: 'Donation QR – South Indian Bank', desc: 'Scan to contribute via South Indian Bank UPI' },

  // Documents
  { src: certOfReg, category: 'documents', title: 'Certificate of Registration – I', desc: 'Official trust registration under the Charitable Trusts Act' },
  { src: certOfReg2, category: 'documents', title: 'Certificate of Registration – II', desc: 'Continuation of the trust deed registration records' },
  { src: certOfReg3, category: 'documents', title: 'Certificate of Registration – III', desc: 'Final page of the registered trust certification' },
  { src: doc1, category: 'documents', title: 'Government Order – Tamil Nadu', desc: 'State government recognition letter for the trust' },
  { src: doc2, category: 'documents', title: 'Official Correspondence', desc: 'Formal document related to trust operations and approval' },
  { src: doc3, category: 'documents', title: 'Appreciation Certificate', desc: 'Recognition awarded to Kaikoduppom Charitable Trust' },
  { src: doc4, category: 'documents', title: 'Merit Certificate', desc: 'Certificate of merit conferred upon the trust' },
  { src: doc5, category: 'documents', title: 'Legal Trust Document', desc: 'Key legal paperwork establishing trust operations' },
  { src: doc6, category: 'documents', title: 'Certificate of Excellence', desc: 'Award certificate recognising outstanding service' },
  { src: doc7, category: 'documents', title: 'Trust Brochure / Notice', desc: 'Public notice and service details of Kaikoduppom Trust' },
  { src: formd, category: 'documents', title: 'Form D – Trust Registration', desc: 'Registered Form D document under the Charitable Trusts Act' },
]

const categories = [
  { id: 'all', label: 'All' },
  { id: 'residents', label: 'Residents & Visits' },
  { id: 'activities', label: 'Events & Programmes' },
  { id: 'festivals', label: 'Our Story' },
  { id: 'outreach', label: 'Donate & Support' },
  { id: 'documents', label: 'Certificates & Records' },
]
export default function Gallery() {
  const [selectedFilter, setSelectedFilter] = useState('all')
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const filteredItems = selectedFilter === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedFilter)

  const openLightbox = (index) => {
    const clickedItem = filteredItems[index]
    const globalIdx = galleryItems.indexOf(clickedItem)
    setLightboxIndex(globalIdx)
  }

  const closeLightbox = () => setLightboxIndex(null)

  const handlePrev = (e) => {
    e.stopPropagation()
    setLightboxIndex(prev => (prev === 0 ? galleryItems.length - 1 : prev - 1))
  }

  const handleNext = (e) => {
    e.stopPropagation()
    setLightboxIndex(prev => (prev === galleryItems.length - 1 ? 0 : prev + 1))
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
          <span className="text-gold text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">Visual Journey</span>
          <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">Moments of Joy & Care</h1>
          <p className="text-white/60 text-sm sm:text-base section-description">
            Take a look into the daily lives, celebrations, and medical services at Kaikoduppom Old Age Home.
          </p>
        </div>
      </div>

      {/* Filter Tabs & Gallery Grid */}
      <section className="section-padding bg-warm-white">
        <div className="site-container">
          {/* Category Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedFilter(cat.id)}
                className={`px-4 sm:px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all ${
                  selectedFilter === cat.id
                    ? 'bg-gold text-navy-dark shadow-md shadow-gold/20'
                    : 'bg-cream text-text-muted hover:bg-cream-dark hover:text-navy-dark'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid Layout */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, idx) => (
                <motion.div
                  key={item.src}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => openLightbox(idx)}
                  className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl cursor-pointer aspect-[4/3] bg-white border border-border"
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-navy-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <span className="text-[10px] text-gold font-semibold tracking-widest uppercase mb-1">{item.category}</span>
                    <h3 className="text-white font-playfair font-bold text-lg mb-1">{item.title}</h3>
                    <p className="text-white/60 text-xs leading-relaxed">{item.desc}</p>
                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-xs p-2 rounded-full text-white">
                      <Eye size={16} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-[100] bg-navy-dark/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white/70 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <X size={24} />
            </button>

            <button
              onClick={handlePrev}
              className="absolute left-2 sm:left-6 text-white/70 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <ChevronLeft size={24} />
            </button>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl w-full flex flex-col items-center gap-4"
            >
              <img
                src={galleryItems[lightboxIndex].src}
                alt={galleryItems[lightboxIndex].title}
                className="max-h-[70vh] max-w-full rounded-2xl shadow-2xl border border-white/10 object-contain"
              />
              <div className="text-center text-white max-w-xl">
                <span className="text-xs text-gold uppercase tracking-wider font-semibold mb-1 block">
                  {galleryItems[lightboxIndex].category}
                </span>
                <h2 className="font-playfair text-xl font-bold mb-1">
                  {galleryItems[lightboxIndex].title}
                </h2>
                <p className="text-white/60 text-xs sm:text-sm">
                  {galleryItems[lightboxIndex].desc}
                </p>
              </div>
            </motion.div>

            <button
              onClick={handleNext}
              className="absolute right-2 sm:right-6 text-white/70 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </PageTransition>
  )
}