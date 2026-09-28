import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Languages, Check, ChevronDown } from 'lucide-react'
import { LANGUAGES, useLang } from '../i18n/LanguageContext'

/* Compact dropdown for the navbar */
export function LanguageDropdown() {
  const { lang, setLang, t } = useLang()
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const current = LANGUAGES.find((l) => l.code === lang)

  useEffect(() => {
    if (!open) return
    const close = (e) => { if (!ref.current?.contains(e.target)) setOpen(false) }
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('mousedown', close)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', close)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <div ref={ref} className="relative flex-shrink-0">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-1.5 h-11 px-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-semibold transition-colors"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t('nav.language')}
      >
        <Languages size={17} />
        <span className="min-w-[1.25rem] text-center">{current.short}</span>
        <ChevronDown size={14} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.15 }}
            role="listbox"
            className="absolute right-0 top-full mt-2 w-44 rounded-xl bg-white shadow-xl ring-1 ring-black/5 p-1.5 z-[80]"
          >
            {LANGUAGES.map((l) => (
              <li key={l.code}>
                <button
                  type="button"
                  role="option"
                  aria-selected={l.code === lang}
                  lang={l.code}
                  onClick={() => { setLang(l.code); setOpen(false) }}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm transition-colors ${
                    l.code === lang ? 'bg-gold/15 text-navy-dark font-semibold' : 'text-navy-dark hover:bg-cream'
                  }`}
                >
                  {l.label}
                  {l.code === lang && <Check size={15} className="text-gold-dark" />}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  )
}

/* Full-width segmented picker for the mobile menu */
export function LanguageGrid() {
  const { lang, setLang, t } = useLang()
  return (
    <div>
      <p className="text-[11px] font-semibold tracking-[0.15em] text-gold/70 uppercase mb-3 pl-1">{t('nav.language')}</p>
      <div className="grid grid-cols-4 gap-2">
        {LANGUAGES.map((l) => (
          <button
            key={l.code}
            type="button"
            lang={l.code}
            onClick={() => setLang(l.code)}
            aria-pressed={l.code === lang}
            className={`py-3 rounded-xl text-sm font-semibold border transition-colors ${
              l.code === lang
                ? 'bg-gold text-navy-dark border-gold'
                : 'bg-white/5 text-white/80 border-white/10 hover:bg-white/10'
            }`}
          >
            {l.label}
          </button>
        ))}
      </div>
    </div>
  )
}
