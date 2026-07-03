import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Space from './space'

const cats = [
  { title: 'Casual Wear', src: 'casual.jpg', desc: 'T-shirts, hoodies, joggers & more' },
  { title: 'Formal Wear', src: 'formal.jpg', desc: 'Shirts, trousers, blazers' },
  { title: 'Sportswear', src: 'sportswear.jpg', desc: 'Performance fabrics, athletic fit' },
  { title: 'Workwear / Uniforms', src: 'workwear.jpg', desc: 'Industrial & corporate uniforms' },
  { title: 'Home Textiles', src: 'custom-shirt.jpg', desc: 'Bedding, curtains, towels' },
  { title: 'Leather Jackets', src: 'jacket.jpg', desc: 'Leather, brand, Jacket' },
]

export default function Products() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.section
      ref={ref}
      id="products"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="py-24 md:py-32 relative"
    >
      <div className="absolute top-0 left-0 right-0 h-px line-gold"></div>
      <div className="max-w-7xl mx-auto px-6 ">
        <div className="text-center mb-16">
             <Space/>
          <p className="text-gold-500 text-sm font-semibold tracking-[0.15em] uppercase mb-4">
            Product Range
          </p>
         
          <h2 className="font-playfair text-3xl md:text-5xl font-bold mb-4">
            What We <span className="gold-gradient">Export</span>
          </h2>
          
          <p className="text-neutral-500 text-lg max-w-2xl mx-auto">
            Diverse product categories to meet every market need. MOQ starts at just 100 pieces.
          </p>
        </div>
        <Space/>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cats.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group relative rounded-2xl overflow-hidden border border-gold-500/10 card-hover cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={c.src}
                  alt={c.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-lg font-semibold mb-1">{c.title}</h3>
                <p className="text-neutral-400 text-sm">{c.desc}</p>
              </div>
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gold-500/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="iconify text-gold-500" data-icon="lucide:arrow-up-right" data-width="18"></span>
              </div>
            </motion.div>
          ))}
        </div>
         <Space/>
      </div>
    </motion.section>
  )
}