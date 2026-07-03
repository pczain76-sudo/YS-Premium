import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Space from './space'

const steps = [
  { num: '01', title: 'Inquiry & Consultation', desc: 'Share your requirements — product type, specs, quantities, and timeline. We\'ll respond within 24 hours.', icon: 'lucide:message-square' },
  { num: '02', title: 'Sampling & Quotation', desc: 'We develop samples for your approval and provide a detailed quotation with transparent pricing.', icon: 'lucide:scissors' },
  { num: '03', title: 'Production & QC', desc: 'Full-scale production with in-line and final quality inspections meeting international AQL standards.', icon: 'lucide:clipboard-check' },
  { num: '04', title: 'Shipping & Delivery', desc: 'Professional packing, documentation, and logistics — delivered to your doorstep, anywhere in the world.', icon: 'lucide:ship' },
]

export default function Process() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.section
      ref={ref}
      id="process"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="py-24 md:py-32 relative"
    >
        <Space/>
      <div className="max-w-7xl mx-auto px-6 ">
        <div className="text-center mb-16 ">
          <p className="text-gold-500 text-sm font-semibold tracking-[0.15em] uppercase mb-4">
            How It Works
          </p>
          <h2 className="font-playfair text-3xl md:text-5xl font-bold mb-4">
            Simple <span className="gold-gradient">4-Step</span> Process
          </h2>
          <p className="text-neutral-500 text-lg max-w-2xl mx-auto    ">
            From your first message to final delivery — we make international sourcing effortless.
          </p>
        </div>
        <Space/>
        <div className="grid md:grid-cols-4 gap-8 relative">
          <div className="hidden md:block absolute top-16 left-[12%] right-[12%] h-px bg-gradient-to-r from-gold-500/30 via-gold-500/20 to-gold-500/30"></div>
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="text-center relative"
            >
              <div className="w-14 h-14 rounded-full gold-gradient-bg flex items-center justify-center mx-auto mb-6 relative z-10 shadow-lg">
                <span className="iconify text-dark-900" data-icon={s.icon} data-width="22"></span>
              </div>
              <div className="text-gold-500/40 text-5xl font-bold absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 font-playfair select-none">
                {s.num}
              </div>
              <h3 className="text-lg font-semibold mb-2 mt-2">{s.title}</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
        <Space/>
         <Space/>
      </div>
    </motion.section>
  )
}