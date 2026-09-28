import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import en from './locales/en'
import ta from './locales/ta'
import hi from './locales/hi'
import te from './locales/te'

export const LANGUAGES = [
  { code: 'en', label: 'English', short: 'EN' },
  { code: 'ta', label: 'தமிழ்', short: 'த' },
  { code: 'hi', label: 'हिन्दी', short: 'हि' },
  { code: 'te', label: 'తెలుగు', short: 'తె' },
]

const dictionaries = { en, ta, hi, te }
const STORAGE_KEY = 'kaikoduppom-lang'

function readStoredLang() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored && dictionaries[stored] ? stored : 'en'
  } catch {
    return 'en'
  }
}

function lookup(dict, path) {
  return path.split('.').reduce((node, key) => (node == null ? undefined : node[key]), dict)
}

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(readStoredLang)

  const setLang = useCallback((code) => {
    if (!dictionaries[code]) return
    setLangState(code)
    try { localStorage.setItem(STORAGE_KEY, code) } catch { /* storage unavailable */ }
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  // t('hero.title') → string / array / object from the active language, falling back to English
  const t = useCallback((path) => {
    const value = lookup(dictionaries[lang], path)
    return value === undefined ? lookup(en, path) : value
  }, [lang])

  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t])
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLang() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLang must be used inside <LanguageProvider>')
  return ctx
}
