import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Space from './space'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.section
      ref={ref}
      id="about"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="py-24 md:py-32 relative"
    >
      <div className="absolute top-0 left-0 right-0 h-px line-gold"></div>
      <div className="max-w-7xl mx-auto px-6  ">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-gold-500 text-sm font-semibold tracking-[0.15em] uppercase mb-4">
              About YS Premium
            </p>
            <h2 className="font-playfair text-3xl md:text-5xl font-bold leading-tight mb-6">
              Rooted in <span className="gold-gradient">Pakistan</span>,<br />
              Built for the <span className="gold-gradient">World</span>
            </h2>
            <p className="text-neutral-400 text-lg leading-relaxed mb-6">
              YS Premium Exports is a Pakistan-based export house specializing in
              premium apparel, textiles, and custom manufacturing solutions. We
              bridge the gap between world-class Pakistani craftsmanship and global
              market demands.
            </p>
            <p className="text-neutral-500 leading-relaxed mb-8">
              With deep roots in Sialkot and Lahore's manufacturing hubs, we offer
              end-to-end sourcing — from fabric selection to final delivery —
              ensuring every piece meets international quality standards.
            </p>
            <Space/>
            <div className="flex flex-wrap gap-3 flex-row items-center "> 
              {['Quality Assured', 'On-Time Delivery', 'Competitive Pricing', 'Custom Solutions'].map(
                (t, i) => (
                  <span
                    key={i}
                    className="border border-gold-500/20 text-gold-500 text-sm px-7 py-4 rounded-full bg-gold-500/5"
                  >
                    {t}
                  </span>
                )
              )}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gold-500/5 rounded-3xl blur-2xl"></div>
            <div className="relative grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden gold-border border">
                  <img
                    src="custom-shirt.jpg"
                    alt="Textile"
                    className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="rounded-2xl  overflow-hidden gold-border border">
                  <img
                    src="factory.jpg"
                    alt="Factory"
                    className="w-full  h-32 md:h-40 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden gold-border border">
                  <img
                    src="leather.jpg"
                    alt="Apparel"
                    className="w-full h-32 md:h-40 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden gold-border border">
                  <img
                    src="shipping.jpg"
                    alt="Shipping"
                    className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}