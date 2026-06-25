import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock, ChevronRight } from 'lucide-react'
import logo from '../assets/images.png'

const quickLinks = [
  { name: 'About Us',     path: '/about' },
  { name: 'Our Services', path: '/services' },
  { name: 'Programs',     path: '/programs' },
  { name: 'Gallery',      path: '/gallery' },
  { name: 'Testimonials', path: '/testimonials' },
]

const supportLinks = [
  { name: 'Volunteer',    path: '/volunteer' },
  { name: 'Contact Us',   path: '/contact' },
  { name: 'Founder Story', path: '/founder-story' },
]

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white relative overflow-hidden">
      {/* Decorative top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold via-gold-light to-gold" />

      {/* Main Footer Grid */}
      <div className="site-container pt-20 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.25fr_0.8fr_0.8fr_1.15fr] gap-10 lg:gap-14 items-start">

          {/* Column 1 — Brand */}
          <div className="max-w-sm">
            <Link to="/" className="flex items-center gap-3 mb-5">
              <img
                src={logo}
                alt="Kaikoduppom Logo"
                className="h-14 w-14 rounded-full border-2 border-gold/40 object-cover flex-shrink-0"
              />
              <div className="min-w-0">
                <p className="font-semibold text-base leading-tight">Kaikoduppom</p>
                <p className="text-text-light text-xs">Old Age Home &amp; Charitable  Trust</p>
              </div>
            </Link>
            <p className="text-text-light text-sm leading-relaxed mb-5">
              A government-recognized shelter of love, care, and dignity for abandoned
              and destitute elders.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Facebook', 'Instagram', 'YouTube'].map((name) => (
                <a
                  key={name}
                  href="#"
                  aria-label={name}
                  className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-text-light hover:bg-gold hover:text-navy-dark hover:border-gold transition-all text-xs"
                >
                  {name}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div className="lg:pt-1">
            <h4 className="text-gold text-xs font-semibold tracking-widest uppercase mb-5 pb-3 border-b border-white/10">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map(link => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="flex items-center gap-2 text-text-light hover:text-white text-sm py-1 transition-colors group"
                  >
                    <ChevronRight size={14} className="text-gold/50 group-hover:text-gold transition-colors flex-shrink-0" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Support / Get Involved */}
          <div className="lg:pt-1">
            <h4 className="text-gold text-xs font-semibold tracking-widest uppercase mb-5 pb-3 border-b border-white/10">
              Get Involved
            </h4>
            <ul className="space-y-2">
              {supportLinks.map(link => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="flex items-center gap-2 text-text-light hover:text-white text-sm py-1 transition-colors group"
                  >
                    <ChevronRight size={14} className="text-gold/50 group-hover:text-gold transition-colors flex-shrink-0" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact Information */}
          <div className="lg:pt-1">
            <h4 className="text-gold text-xs font-semibold tracking-widest uppercase mb-5 pb-3 border-b border-white/10">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone size={15} className="text-gold mt-0.5 flex-shrink-0" />
                <div className="min-w-0">
                  <p className="text-xs text-text-light uppercase tracking-wider mb-0.5">Phone</p>
                  <a
                    href="tel:09444441140"
                    className="text-white font-medium text-sm hover:text-gold transition-colors"
                  >
                    094444 41140
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={15} className="text-gold mt-0.5 flex-shrink-0" />
                <div className="min-w-0">
                  <p className="text-xs text-text-light uppercase tracking-wider mb-0.5">Email</p>
                  <a
                    href="mailto:kaikoduppomtrust@gmail.com"
                    className="text-white font-medium text-sm hover:text-gold transition-colors break-all"
                  >
                    kaikoduppomjagadeesan@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-gold mt-0.5 flex-shrink-0" />
                <div className="min-w-0">
                  <p className="text-xs text-text-light uppercase tracking-wider mb-0.5">Location</p>
                  <p className="text-white text-sm">Chennai , Tamil Nadu , India</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={15} className="text-gold mt-0.5 flex-shrink-0" />
                <div className="min-w-0">
                  <p className="text-xs text-text-light uppercase tracking-wider mb-0.5">Hours</p>
                  <p className="text-white text-sm">Open 24 Hours</p>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="site-container py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-text-light">
          <p>© {new Date().getFullYear()} Kaikoduppom Old Age Home &amp; Charitable Trust. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-2">
            <span className="px-2 py-1 bg-success/20 text-green-400 rounded text-[10px] font-medium">Govt. Registered NGO</span>
            <span className="px-2 py-1 bg-gold/20 text-gold rounded text-[10px] font-medium">★ 5.0 Rating</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
