import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Space from './space'

const services = [
  {
    icon: 'lucide:shirt',
    title: 'Apparel Manufacturing',
    desc: 'Premium casual wear, formal wear, sportswear, and workwear manufactured to your exact specifications with top-grade fabrics.',
    features: ['Custom Cuts & Fits', 'Private Labeling', 'Size Grading'],
  },
  {
    icon: 'lucide:layers',
    title: 'Textile Export',
    desc: 'High-quality greige, dyed, printed, and finished fabrics in cotton, polyester, blends, and specialty textiles.',
    features: ['Woven & Knitted', 'Custom Prints', 'Bulk Orders'],
  },
  {
    icon: 'lucide:wrench',
    title: 'Custom Manufacturing',
    desc: 'Turn your design concepts into reality. We handle sampling, prototyping, and full production runs with precision.',
    features: ['Design to Product', 'Sample Development', 'Scalable Production'],
  },
  {
    icon: 'lucide:truck',
    title: 'Logistics & Delivery',
    desc: 'End-to-end logistics management including customs documentation, freight forwarding, and door-to-door delivery.',
    features: ['FOB & CIF Terms', 'Customs Clearance', 'Global Shipping'],
  },
]

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
      className="py-24 md:py-32 relative"
    >
      <div className="absolute inset-0 grid-bg opacity-50"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10 ">
        <div className="text-center mb-16 ">
          <p className="text-gold-500 text-sm font-semibold tracking-[0.15em] uppercase mb-4">
            What We Offer
          </p>
          <h2 className="font-playfair text-3xl md:text-5xl font-bold mb-4">
            Our <span className="gold-gradient">Services</span>
          </h2>
          <p className="text-neutral-500 text-lg max-w-2xl mx-200  ">
            Comprehensive export solutions tailored for B2B partners worldwide.
          </p>
        </div>
        <Space/>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 h-50">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group bg-dark-400/50 border border-gold-500/10 rounded-2xl p-6 card-hover shimmer "
            >
              <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center mb-5 group-hover:bg-gold-500/20 transition-colors">
                <span className="iconify text-gold-500 flex justify-center " data-icon={s.icon} data-width="24"></span>
              </div>
              <h3 className="text-lg font-semibold mb-3">{s.title}</h3>
              <p className="text-neutral-500 text-sm leading-relaxed mb-4">{s.desc}</p>
              <div className="flex flex-wrap gap-2">
                {s.features.map((f, j) => (
                  <span
                    key={j}
                    className="text-xs text-gold-600 bg-gold-500/5 px-2.5 py-1 rounded-full"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        <Space/>
      </div>
    </motion.section>
  )
}