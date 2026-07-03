import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import emailjs from '@emailjs/browser'
import Space from './space'

const EMAILJS_SERVICE_ID = 'service_4xb7bhh'
const EMAILJS_TEMPLATE_ID = 'template_trp9bzr'
const EMAILJS_PUBLIC_KEY = 'koXfjz7lLnikrwmem'

export default function Contact() {
  const formRef = useRef(null)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    product: '',
    message: '',
  })
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      )
      setStatus('success')
      setFormData({ name: '', email: '', company: '', product: '', message: '' })
      setTimeout(() => setStatus('idle'), 5000)
    } catch (err) {
      console.error('EmailJS Error:', err)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  return (
    <motion.section
      ref={sectionRef}
      id="contact"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="py-24 md:py-32 relative"
    >
      <div className="absolute top-0 left-0 right-0 h-px line-gold"></div>
           <Space/>
      <div className="max-w-7xl mx-auto px-6 ">
        <div className="grid p-4 md:grid-cols-2 gap-16  ">
          <div>
            <p className="text-gold-500 text-sm font-semibold tracking-[0.15em] uppercase mb-4">
              Get In Touch
            </p>
            <h2 className="font-playfair text-3xl md:text-5xl font-bold leading-tight mb-6">
              Ready to <span className="gold-gradient">Source</span> from Pakistan?
            </h2>
            <p className="text-neutral-400 text-lg leading-relaxed mb-10">
              Whether you need a catalog, custom quote, or just want to explore
              possibilities — we're here. MOQ starts at just 100 pieces.
            </p>
                 <Space/>
            <div className="space-y-8  ">
                 

                
              {[
                { icon: 'lucide:mail', label: 'Email', val: 'Yspremiumexports@gmail.com' },
           
                 
                { icon: 'lucide:map-pin', label: 'Location', val: 'Sialkot, Punjab, Pakistan' },
              ].map((c, i) => (
                     
                <div key={i} className="flex items-center gap-4">     
                  <div className="w-11 h-11 rounded-xl bg-gold-500/10 flex items-center justify-center flex-shrink-0">
                    <span className="iconify text-gold-500" data-icon={c.icon} data-width="20"></span>
                    
                  </div>
                  
                 
                       
                  <div>
                    <div className="text-neutral-500 text-xs uppercase tracking-wider">{c.label}</div>
                    <div className="font-medium">{c.val}</div>
                  </div>

                </div>
                
                    
              ))}
              
            </div>
<Space/>
          <div className="mt-10 flex flex-wrap gap-3"> 
  {[
    { name: 'instagram', href: 'https://www.instagram.com/yspremium.global?igsh=eWJtbWd6aTJzOWRs' },
    { name: 'facebook', href: 'https://facebook.com/yspremiumexports' },
    { name: 'linkedin', href: 'https://linkedin.com/company/yspremiumexports' },
    { name: 'whatsapp', href: 'https://wa.me/923006100553' },
  ].map((s) => (
    <a
      key={s.name}
      href={s.href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full border border-gold-500/20 flex items-center justify-center hover:bg-gold-500/10 hover:border-gold-500/40 transition-all group"
    >
      {s.name === 'instagram' && (
        <svg className="text-neutral-400 group-hover:text-gold-500 transition-colors" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
      )}
      {s.name === 'facebook' && (
        <svg className="text-neutral-400 group-hover:text-gold-500 transition-colors" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
      )}
      {s.name === 'linkedin' && (
        <svg className="text-neutral-400 group-hover:text-gold-500 transition-colors" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
      )}
      {s.name === 'whatsapp' && (
        <svg className="text-neutral-400 group-hover:text-gold-500 transition-colors" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
      )}
    </a>
    
  ))}
</div>
<Space/>
          </div>

          <div className="bg-dark-400/50 border border-gold-500/10 rounded-2xl p-8">
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
                    <span className="iconify text-green-500" data-icon="lucide:check-circle" data-width="32"></span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                  <p className="text-neutral-500">We'll get back to you within 24 hours.</p>
                </motion.div>
              ) : status === 'error' ? (
                <motion.div
                  key="error"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center mb-4">
                    <span className="iconify text-red-500" data-icon="lucide:alert-circle" data-width="32"></span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Failed to Send</h3>
                  <p className="text-neutral-500 mb-4">Something went wrong. Please try again.</p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="text-gold-500 text-sm font-medium underline underline-offset-4"
                  >
                    Try Again
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  ref={formRef}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <div className="grid sm:grid-cols-2 gap-5 ">
                    <div >
                      <label className="text-sm text-neutral-400 mb-1.5 block">Full Name *</label>
                      <input
                        required
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-dark-300 border border-gold-500/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold-500/40 transition-colors placeholder-neutral-600"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                        
                      <label className="text-sm text-neutral-400 mb-1.5 block">Email *</label>
                      
                      <input
                        required
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-dark-300 border border-gold-500/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold-500/40 transition-colors placeholder-neutral-600"
                        placeholder="john@company.com"
                      />
                    </div>

                  </div>
                 
                  <div>
                    <label className="text-sm text-neutral-400 mb-1.5 block">Company Name</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full bg-dark-300 border border-gold-500/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold-500/40 transition-colors placeholder-neutral-600"
                      placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-neutral-400 mb-1.5 block">Product Interest</label>
                    <select
                      name="product"
                      value={formData.product}
                      onChange={handleChange}
                      className="w-full bg-dark-300 border border-gold-500/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold-500/40 transition-colors text-neutral-400"
                    >
                      <option value="">Select a category</option>
                      <option value="Casual Wear">Casual Wear</option>
                      <option value="Formal Wear">Formal Wear</option>
                      <option value="Sportswear">Sportswear</option>
                      <option value="Workwear / Uniforms">Workwear / Uniforms</option>
                      <option value="Home Textiles">Home Textiles</option>
                      <option value="Leather Jackets">Leather Jackets</option>
                      <option value="Custom Manufacturing">Custom Manufacturing</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm text-neutral-400 mb-1.5 block">Message *</label>
                    <textarea
                      required
                      rows="4"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-dark-300 border border-gold-500/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold-500/40 transition-colors placeholder-neutral-600 resize-none"
                      placeholder="Tell us about your requirements, quantities, timeline..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full gold-gradient-bg text-dark-900 font-bold text-base py-4 rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200 shadow-lg flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === 'sending' ? (
                      <>
                        <span className="iconify animate-spin" data-icon="lucide:loader-2" data-width="18"></span>
                        Sending...
                      </>
                    ) : (
                      <>
                        <span className="iconify" data-icon="lucide:send" data-width="18"></span>
                        Send Inquiry
                      </>
                    )}
                  </button>
               
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
        <Space/>
      </div>
    </motion.section>
  )
}