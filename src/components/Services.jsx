import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Space from './space'

const services = [
  {
    icon: 'shirt',
    title: 'Apparel Manufacturing',
    desc: 'Premium casual wear, formal wear, sportswear, and workwear manufactured to your exact specifications with top-grade fabrics.',
    features: ['Custom Cuts & Fits', 'Private Labeling', 'Size Grading'],
  },
  {
    icon: 'layers',
    title: 'Textile Export',
    desc: 'High-quality greige, dyed, printed, and finished fabrics in cotton, polyester, blends, and specialty textiles.',
    features: ['Woven & Knitted', 'Custom Prints', 'Bulk Orders'],
  },
  {
    icon: 'wrench',
    title: 'Custom Manufacturing',
    desc: 'Turn your design concepts into reality. We handle sampling, prototyping, and full production runs with precision.',
    features: ['Design to Product', 'Sample Development', 'Scalable Production'],
  },
  {
    icon: 'truck',
    title: 'Logistics & Delivery',
    desc: 'End-to-end logistics management including customs documentation, freight forwarding, and door-to-door delivery.',
    features: ['FOB & CIF Terms', 'Customs Clearance', 'Global Shipping'],
  },
]

function ServiceIcon({ name }) {
  const icons = {
    shirt: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"/></svg>
    ),
    layers: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
    ),
    wrench: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
    ),
    truck: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
    ),
  }
  return icons[name] || null
}

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.section
      ref={ref}
      id="services"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="py-16 md:py-28 relative"
    >
      <div className="absolute inset-0 grid-bg opacity-50"></div>
      <div className="max-w-7xl mx-auto px-5 md:px-6 relative z-10">
        
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-gold-500 text-xs md:text-sm font-semibold tracking-[0.15em] uppercase mb-3">
            What We Offer
          </p>
          <h2 className="font-playfair text-2xl md:text-5xl font-bold mb-3">
            Our <span className="gold-gradient">Services</span>
          </h2>
          <p className="text-neutral-500 text-sm md:text-lg max-w-xl mx-auto">
            Comprehensive export solutions tailored for B2B partners worldwide.
          </p>
        </div>
         <Space/>

        {/* Cards Grid — mobile 1 col, tablet 2 col, desktop 4 col */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group bg-dark-400/50 border border-gold-500/10 rounded-2xl p-5 md:p-6 card-hover shimmer"
            >
              {/* Icon */}
              <div className="w-11 h-11 md:w-12 md:h-12 rounded-xl bg-gold-500/10 flex items-center justify-center mb-4 md:mb-5 group-hover:bg-gold-500/20 transition-colors">
                <span className="text-gold-500">
                  <ServiceIcon name={s.icon} />
                </span>
              </div>

              {/* Title */}
              <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-3">{s.title}</h3>

              {/* Description */}
              <p className="text-neutral-500 text-xs md:text-sm leading-relaxed mb-3 md:mb-4">{s.desc}</p>

              {/* Feature Tags */}
              <div className="flex flex-wrap gap-1.5 md:gap-2">
                {s.features.map((f, j) => (
                  <span
                    key={j}
                    className="text-[10px] md:text-xs text-gold-600 bg-gold-500/5 px-2 md:px-2.5 py-0.5 md:py-1 rounded-full"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}