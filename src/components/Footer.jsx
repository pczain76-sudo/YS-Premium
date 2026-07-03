import Space from "./space";

export default function Footer() {
  return (
    
    <footer className="border-t border-gold-500/10 py-16">
        <Space/>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-2">
            <img
              src="https://z-cdn-media.chatglm.cn/files/206d1505-2a08-4327-8141-2e4475fe612d.png?auth_key=1882992508-4868cf64c60a47f5b7415f56ae375703-0-dafc4fc4e0792d674d74ae61e1aa65a2"
              alt="YS Logo"
              className="h-14 w-auto mb-4"
            />
            <p className="text-neutral-500 leading-relaxed max-w-sm mb-4">
              Exporting premium quality apparel, textiles, and custom manufacturing
              solutions from Pakistan to the world.
            </p>
            <p className="text-gold-500/60 text-sm font-medium tracking-wider">
              GLOBAL SOURCING. TRUSTED DELIVERY.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-3">
              {['About', 'Services', 'Products', 'Process', 'Contact'].map((l) => (
                <a
                  key={l}
                  href={`#${l.toLowerCase()}`}
                  className="block text-neutral-500 hover:text-gold-500 transition-colors text-sm"
                >
                  {l}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Product Categories</h4>
            <div className="space-y-3">
              {[
                'Casual Wear',
                'Formal Wear',
                'Sportswear',
                'Workwear',
                'Home Textiles',
                'Leather Jackets',
              ].map((l) => (
                <a
                  key={l}
                  href="#products"
                  className="block text-neutral-500 hover:text-gold-500 transition-colors text-sm"
                >
                  {l}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-gold-500/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-neutral-600 text-sm">
            © {new Date().getFullYear()}  Ali Zain . All rights reserved.
          </p>
         
        </div>
        <Space/>
      </div>
    </footer>
  )
}