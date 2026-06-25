import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, MapPin, ChevronRight, ArrowRight } from 'lucide-react'
import logo from '../assets/images.png'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Programs', path: '/programs' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Testimonials', path: '/testimonials' },
  { name: 'Volunteer', path: '/volunteer' },
  { name: 'Contact', path: '/contact' },
]

const stripItems = [
  'Registered Charitable Trust - Chennai , India',
  'Open 24 Hours - Call: 094444 41140',
  '5.0 stars on Google - 521 Reviews',
  'State & Central Govt. Recognized NGO',
]

/* ─── Stagger helpers ─── */
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } },
  exit:   { transition: { staggerChildren: 0.04, staggerDirection: -1 } },
}

const linkVariants = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] } },
  exit:   { opacity: 0, x: -16, transition: { duration: 0.2 } },
}

const overlayVariants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3, ease: 'easeOut' } },
  exit:    { opacity: 0, transition: { duration: 0.25, ease: 'easeIn' } },
}

const panelVariants = {
  hidden:  { y: '100%', opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
  exit:    { y: '100%', opacity: 0, transition: { duration: 0.35, ease: [0.55, 0, 1, 0.45] } },
}

export default function Navbar() {
  const [isScrolled, setIsScrolled]     = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileOpen(false)
  }, [location])

  /* Lock body scroll when menu is open */
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isMobileOpen])

  return (
    <>
      {/* ── Top Marquee Strip ── */}
      <div className="bg-navy-dark py-1.5 overflow-hidden">
        <div
          className="flex gap-12 whitespace-nowrap"
          style={{ width: 'max-content', animation: 'marquee 30s linear infinite' }}
        >
          {[0, 1].map((i) => (
            <div key={i} className="flex gap-12 text-xs text-text-light">
              {stripItems.map((item) => (
                <span key={item} className="inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── Main Navbar ── */}
      <motion.nav
        className={`sticky top-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-navy-dark/95 backdrop-blur-xl shadow-2xl shadow-navy-dark/20'
            : 'bg-navy'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="h-[76px] lg:h-[80px] flex items-center justify-between gap-4">

            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-3 group flex-shrink-0"
              aria-label="Kaikoduppom Old Age Home – Home"
            >
              <motion.img
                src={logo}
                alt="Kaikoduppom Trust Logo"
                className="h-11 w-11 lg:h-12 lg:w-12 rounded-full object-cover border-2 border-gold/50 group-hover:border-gold transition-colors"
                whileHover={{ scale: 1.05, rotate: 5 }}
              />
              <div className="hidden xl:block">
                <p className="text-white font-semibold text-sm leading-tight">
                   Kaikoduppom charitable Trust (Regd.,) 

                </p>
                <p className="text-text-light text-xs">&amp; Old age home for abandoned and destitute</p>
              </div>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center justify-center gap-8 xl:gap-10 flex-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-2 py-2 text-[13px] font-medium transition-colors rounded-lg whitespace-nowrap ${
                    location.pathname === link.path
                      ? 'text-gold'
                      : 'text-white/80 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-gold rounded-full"
                      transition={{ type: 'spring', bounce: 0.25, duration: 0.5 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Desktop Phone Button */}
            <div className="hidden lg:flex flex-shrink-0">
              <a
                href="tel:09444441140"
                className="flex items-center gap-2 px-5 py-2.5 bg-gold text-navy-dark font-bold rounded-[10px] border border-black/10 shadow-sm hover:shadow-md hover:bg-gold/90 transition-all duration-300 text-sm"
              >
                <Phone size={16} />
                <span>094444 41140</span>
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsMobileOpen(true)}
              className="lg:hidden flex items-center justify-center w-11 h-11 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors flex-shrink-0"
              aria-label="Open navigation menu"
              aria-expanded={isMobileOpen}
            >
              <Menu size={22} />
            </button>

          </div>
        </div>
      </motion.nav>

      {/* ── Full-Screen Mobile Menu Overlay ── */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm lg:hidden"
              onClick={() => setIsMobileOpen(false)}
              aria-hidden="true"
            />

            {/* Panel */}
            <motion.div
              key="panel"
              variants={panelVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-0 z-[70] lg:hidden flex flex-col"
              style={{
                background: 'linear-gradient(160deg, #0d1b2a 0%, #112240 55%, #0a1628 100%)',
              }}
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
            >

              {/* ── Menu Header ── */}
              <div className="flex items-center justify-between px-5 py-0 h-20 border-b border-white/10 flex-shrink-0">
                {/* Logo */}
                <Link
                  to="/"
                  className="flex items-center gap-3"
                  onClick={() => setIsMobileOpen(false)}
                  aria-label="Go to home page"
                >
                  <img
                    src={logo}
                    alt="Kaikoduppom Trust"
                    className="h-11 w-11 rounded-full object-cover border-2 border-gold/50"
                  />
                </Link>

                {/* Trust Name – centered */}
                <div className="flex-1 text-center px-3">
                  <p className="text-white font-semibold text-[13px] leading-tight">
Kaikoduppom Charitable Trust(Reg.,)</p>
                 
                </div>

                {/* Close */}
                <button
                  onClick={() => setIsMobileOpen(false)}
                  className="flex items-center justify-center w-11 h-11 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors flex-shrink-0"
                  aria-label="Close navigation menu"
                >
                  <X size={22} />
                </button>
              </div>

              {/* ── Scrollable Body ── */}
              <div className="flex-1 overflow-y-auto overscroll-contain px-5 py-6">

                {/* Section Label */}
                <p className="text-[11px] font-semibold tracking-[0.15em] text-gold/70 uppercase mb-4 pl-1">
                  Menu
                </p>

                {/* Nav Links */}
                <motion.nav
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="space-y-1"
                  aria-label="Mobile navigation"
                >
                  {navLinks.map((link) => {
                    const isActive = location.pathname === link.path
                    return (
                      <motion.div key={link.path} variants={linkVariants}>
                        <Link
                          to={link.path}
                          className={`flex items-center justify-between px-4 py-4 rounded-2xl text-[17px] font-semibold transition-all duration-200 ${
                            isActive
                              ? 'bg-gold/10 text-gold border-l-2 border-gold pl-[14px]'
                              : 'text-white/85 hover:bg-white/8 hover:text-white active:bg-white/12'
                          }`}
                          style={isActive ? { boxShadow: '0 0 24px rgba(212,175,55,0.08)' } : {}}
                          onClick={() => setIsMobileOpen(false)}
                        >
                          {link.name}
                          <ChevronRight
                            size={18}
                            className={`transition-colors ${isActive ? 'text-gold' : 'text-white/30'}`}
                          />
                        </Link>
                      </motion.div>
                    )
                  })}
                </motion.nav>

                {/* ── Quick Action Cards ── */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.55, duration: 0.4 }}
                  className="mt-8 grid grid-cols-2 gap-3"
                >
                  {/* Call Card */}
                  <a
                    href="tel:09444441140"
                    className="flex flex-col gap-2 p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 active:scale-95 transition-all duration-200"
                    style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)' }}
                  >
                  
                  </a>

                 
                </motion.div>

                {/* ── Donation CTA ── */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.65, duration: 0.4 }}
                  className="mt-4"
                >
                  <Link
                    to="/contact"
                    onClick={() => setIsMobileOpen(false)}
                    className="flex items-center justify-center gap-3 w-full h-14 rounded-2xl bg-gold text-navy-dark font-bold text-base hover:bg-gold/90 active:scale-[0.98] transition-all duration-200 shadow-lg shadow-gold/20"
                  >
                    Support Our Mission
                    <ArrowRight size={18} />
                  </Link>
                </motion.div>

              </div>

              {/* ── Menu Footer ── */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.4 }}
                className="px-5 py-5 border-t border-white/10 flex-shrink-0 text-center space-y-0.5"
              >
                <p className="text-white/40 text-[11px] font-medium tracking-wide">
                  Govt. Recognized NGO
                </p>
                <p className="text-white/30 text-[11px]">
                  Registered Charitable Trust · Puducherry, India
                </p>
              </motion.div>

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}