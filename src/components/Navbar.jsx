import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
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
  'Registered Charitable Trust - Puducherry, India',
  'Open 24 Hours - Call: 094444 41140',
  '5.0 stars on Google - 521 Reviews',
  'State & Central Govt. Recognized NGO',
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
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

  return (
    <>
      {/* Top Marquee Strip */}
      <div className="bg-navy-dark py-1.5 overflow-hidden">
        <div
          className="flex gap-12 whitespace-nowrap"
          style={{
            width: 'max-content',
            animation: 'marquee 30s linear infinite',
          }}
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

      {/* Main Navbar */}
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
        <div className="site-container relative">
          <div className="h-[76px] flex items-center justify-center">

            {/* Logo - Fixed Left */}
            <Link
              to="/"
              className="absolute -left-10 top-1/2 -translate-y-1/2 flex items-center gap-3 group"
            >
              <motion.img
                src={logo}
                alt="Kaikoduppom Trust Logo"
                className="h-11 w-11 rounded-full object-cover border-2 border-gold/50 group-hover:border-gold transition-colors"
                whileHover={{ scale: 1.05, rotate: 5 }}
              />

              <div className="hidden xl:block">
                <p className="text-white font-semibold text-sm leading-tight">
                  Kaikoduppom Old Age Home
                </p>
                <p className="text-text-light text-xs">
                  &amp; Charitable Trust
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center justify-center gap-10 xl:gap-12">
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
                      transition={{
                        type: 'spring',
                        bounce: 0.25,
                        duration: 0.5,
                      }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Phone Button - Fixed Right */}
            <div className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2">
  <a
  href="tel:09444441140"
  className="flex items-center gap-3 px-7 py-2.5 bg-gold text-navy-dark font-bold rounded-[10px] border border-black/10 shadow-sm hover:shadow-md transition-all duration-300"
>
  <Phone size={17} />
  <span>094444 41140</span>
</a>
</div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="absolute right-0 lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-navy-dark/98 backdrop-blur-xl border-t border-white/10"
            >
              <div className="site-container py-4 space-y-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                        location.pathname === link.path
                          ? 'bg-gold/10 text-gold border-l-2 border-gold'
                          : 'text-white/80 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}

                <div className="pt-4">
                  <a
                    href="tel:09444441140"
                    className="flex items-center justify-center gap-2 bg-gold text-navy-dark py-3 rounded-xl text-sm font-bold"
                  >
                    <Phone size={16} />
                    094444 41140
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  )
}