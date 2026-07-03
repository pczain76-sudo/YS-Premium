import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = ['About', 'Services', 'Process', 'Products', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', h)
    return () => window.removeEventListener('scroll', h)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 h-16 flex items-center transition-all duration-300 ${
        scrolled
          ? 'bg-dark-600/95 backdrop-blur-md border-b border-gold-500/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto w-full px-6 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <img
            src="https://z-cdn-media.chatglm.cn/files/206d1505-2a08-4327-8141-2e4475fe612d.png?auth_key=1882992508-4868cf64c60a47f5b7415f56ae375703-0-dafc4fc4e0792d674d74ae61e1aa65a2"
            alt="YS Logo"
            className="h-10 w-auto"
          />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-sm text-neutral-400 hover:text-gold-500 transition-colors duration-200 font-medium"
            >
              {l}
            </a>
          ))}
          <a
            href="#contact"
            className="gold-gradient-bg text-dark-900 text-sm font-semibold px-6 py-2.5 rounded-full hover:scale-105 transition-transform duration-200 shadow-lg"
          >
            Get Catalog
          </a>
        </div>

        {/* Mobile Hamburger Button — = ya X */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-gold-500 w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gold-500/10 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            /* X icon */
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            /* = icon (hamburger) */
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-16 left-0 right-0 bg-dark-600/98 backdrop-blur-md border-b border-gold-500/10 md:hidden overflow-hidden"
          >
            <div className="flex flex-col px-6 py-6 gap-1">
              {links.map((l, i) => (
                <motion.a
                  key={l}
                  href={`#${l.toLowerCase()}`}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="text-neutral-300 hover:text-gold-500 hover:bg-gold-500/5 transition-all py-3 px-4 rounded-xl font-medium"
                >
                  {l}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: links.length * 0.05 }}
                className="gold-gradient-bg text-dark-900 text-center font-semibold px-6 py-3 rounded-full mt-4"
              >
                Get Catalog
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}