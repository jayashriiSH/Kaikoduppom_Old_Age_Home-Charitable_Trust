// Renders a translated string, turning **text** into <strong> so bold phrases
// can sit anywhere in the sentence regardless of each language's word order.
export default function Rich({ text, strongClassName = 'text-navy-dark' }) {
  return String(text).split(/\*\*(.+?)\*\*/g).map((part, i) =>
    i % 2 === 1 ? <strong key={i} className={strongClassName}>{part}</strong> : part
  )
}
