import { motion, useScroll, useTransform } from 'framer-motion'

export default function Hero() {
  const { scrollY } = useScroll()
  const bgY = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div style={{ y: bgY }} className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-600 to-dark-900"></div>
        <div className="absolute inset-0 grid-bg"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gold-500/5 rounded-full blur-3xl"></div>
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 inline-block"
        >
          <img
            src="https://z-cdn-media.chatglm.cn/files/206d1505-2a08-4327-8141-2e4475fe612d.png?auth_key=1882992508-4868cf64c60a47f5b7415f56ae375703-0-dafc4fc4e0792d674d74ae61e1aa65a2"
            alt="YS Premium Exports"
            className="h-28 md:h-36 w-auto mx-auto drop-shadow-2xl"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-gold-500 text-sm md:text-base font-semibold tracking-[0.2em] uppercase mb-6"
        >
          Exporting Quality from Pakistan to the World
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6"
        >
          Premium <span className="gold-gradient">Apparel</span> &<br />
          Textile <span className="gold-gradient">Solutions</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Your trusted B2B partner for high-quality apparel, textiles, and custom
          manufacturing — delivered worldwide.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="gold-gradient-bg text-dark-900 font-bold text-base px-10 py-4 rounded-full hover:scale-105 transition-all duration-200 shadow-lg gold-glow-strong flex items-center gap-2"
          >
            <span className="iconify" data-icon="lucide:package" data-width="18"></span>
            Request Catalog
          </a>
          <a
            href="#services"
            className="border border-gold-500/30 text-gold-500 font-semibold text-base px-10 py-4 rounded-full hover:bg-gold-500/10 hover:border-gold-500/50 transition-all duration-200 flex items-center gap-2"
          >
            <span className="iconify" data-icon="lucide:play-circle" data-width="18"></span>
            Explore Services
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-16 flex items-center justify-center gap-8 md:gap-12 text-center"
        >
          {[
            { val: '500+', label: 'Orders Shipped' },
            { val: '25+', label: 'Countries' },
            { val: '100', label: 'MOQ' },
          ].map((s, i) => (
            <div key={i}>
              <div className="text-2xl md:text-3xl font-bold gold-gradient">{s.val}</div>
              <div className="text-neutral-500 text-xs md:text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <span className="iconify text-gold-500/50" data-icon="lucide:chevron-down" data-width="28"></span>
      </motion.div>
    </section>
  )
}