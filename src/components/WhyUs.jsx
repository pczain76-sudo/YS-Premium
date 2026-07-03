import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Space from './space'

const reasons = [
  { icon: 'lucide:shield-check', title: 'Quality Guaranteed', desc: 'Rigorous QC at every stage — from raw material to finished product. AQL 2.5 standard inspections.' },
  { icon: 'lucide:badge-dollar-sign', title: 'Competitive Pricing', desc: 'Direct factory access in Pakistan means you get premium quality at unbeatable prices.' },
  { icon: 'lucide:clock', title: 'On-Time Delivery', desc: '98% on-time delivery rate. We understand that deadlines are non-negotiable.' },
  { icon: 'lucide:palette', title: 'Full Customization', desc: 'Your brand, your design, your specs. Complete private label and custom manufacturing.' },
  { icon: 'lucide:headphones', title: 'Dedicated Support', desc: 'Personal account manager for every client. 24/7 communication via WhatsApp, email, or call.' },
  { icon: 'lucide:file-check', title: 'Compliance Ready', desc: 'SECP registered, compliant with international trade regulations and documentation.' },
]

export default function WhyUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="py-24 md:py-32 relative"
    >
      <div className="absolute inset-0 grid-bg opacity-30"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10 ">
        <div className="text-center mb-16 ">
          <p className="text-gold-500 text-sm font-semibold tracking-[0.15em] uppercase mb-4">
            Why YS Premium
          </p>
          <h2 className="font-playfair text-3xl md:text-5xl font-bold mb-4">
            Why Partners <span className="gold-gradient">Trust Us</span>
          </h2>
        </div>
         
         <Space/>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="flex gap-4 p-5 rounded-xl border border-gold-500/5 hover:border-gold-500/20 transition-colors duration-300 bg-dark-400/30"
            >
              <div className="w-10 h-10 rounded-lg bg-gold-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="iconify text-gold-500" data-icon={r.icon} data-width="20"></span>
              </div>
              <div>
                <h3 className="font-semibold mb-1">{r.title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">{r.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
             <Space/>
                  <Space/>
      </div>
    </motion.section>
  )
}