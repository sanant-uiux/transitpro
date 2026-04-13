import { motion } from 'framer-motion'

export default function SectionLabel({ children }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-accent bg-accent/10 px-4 py-1.5 rounded-full mb-4"
    >
      {children}
    </motion.span>
  )
}
