import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const stats = [
  { icon: 'lucide:globe', val: '25+', label: 'Countries Served' },
  { icon: 'lucide:package-check', val: '500K+', label: 'Units Exported' },
  { icon: 'lucide:users', val: '80+', label: 'B2B Partners' },
  { icon: 'lucide:star', val: '99%', label: 'Quality Rate' },
]

export default function Stats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7 }}
      className="py-20 relative"
    >
      <div className="max-w-7xl mx-auto px-6 ">
        <div className="gold-gradient-bg rounded-3xl p-10 md:p-14 relative overflow-hidden">
          <div className="absolute inset-0 bg-dark-900/20"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <span className="iconify text-dark-900/70 mb-3 mx-auto block" data-icon={s.icon} data-width="28"></span>
                <div className="text-3xl md:text-4xl font-bold text-dark-900">{s.val}</div>
                <div className="text-dark-900/70 text-sm mt-1 font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  )
}