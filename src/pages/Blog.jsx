import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Bookmark, Home, Boxes, Navigation, Settings, DollarSign, Shield,
  Package, Truck, Clock, MapPin, ArrowRight, Send, Search, Grid3X3
} from 'lucide-react'
import SectionLabel from '../components/SectionLabel'
import AnimatedSection from '../components/AnimatedSection'

const categories = [
  { icon: Grid3X3, label: 'All Posts', key: 'all' },
  { icon: Home, label: 'Home Removals', key: 'home' },
  { icon: Boxes, label: 'Commercial Freight', key: 'freight' },
  { icon: Navigation, label: 'Last-Mile Delivery', key: 'lastmile' },
  { icon: Settings, label: 'Logistics Planning', key: 'logistics' },
  { icon: DollarSign, label: 'Cost & Pricing', key: 'cost' },
  { icon: Shield, label: 'Safety & Compliance', key: 'safety' },
]

const posts = [
  { icon: Package, title: 'How to Pack Fragile Items for Safe Transport', category: 'home', catLabel: 'Home Removals', time: '5 min', excerpt: "Bubble wrap isn't enough. Here's a professional guide to packing breakables so they arrive in perfect condition, every time.", img: 'https://images.unsplash.com/photo-1607166452427-7e4477c0838e?w=600&q=80' },
  { icon: Truck, title: 'What to Look for in a Commercial Freight Partner', category: 'freight', catLabel: 'Commercial Freight', time: '7 min', excerpt: 'Choosing the wrong freight partner costs more than money — it costs clients. Here\'s how to evaluate logistics companies before signing a contract.', img: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&q=80' },
  { icon: Clock, title: 'Same-Day vs Next-Day Delivery: Which One Is Right for Your Business?', category: 'lastmile', catLabel: 'Last-Mile Delivery', time: '4 min', excerpt: "Speed vs cost — it's a balance every e-commerce business faces. We break down both options.", img: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=600&q=80' },
  { icon: MapPin, title: 'Route Optimisation: Why It Matters More Than You Think', category: 'logistics', catLabel: 'Logistics Planning', time: '6 min', excerpt: 'Smarter routes mean faster deliveries, lower fuel costs, and happier clients.', img: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&q=80' },
  { icon: DollarSign, title: 'Hidden Costs of Cheap Freight: What You\'re Not Being Told', category: 'cost', catLabel: 'Cost & Pricing', time: '5 min', excerpt: 'Low quotes are tempting. But they often come with compromises that cost far more in the long run.', img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80' },
  { icon: Shield, title: 'Transport Insurance Explained: Are Your Goods Really Covered?', category: 'safety', catLabel: 'Safety & Compliance', time: '8 min', excerpt: 'Many clients assume all transport is insured. The reality is more complicated.', img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80' },
]

const tags = ['#HomeRemovals', '#FreightLogistics', '#LastMileDelivery', '#OfficeRelocation', '#TransportTips', '#PackingGuide', '#BusinessLogistics', '#FreightInsurance', '#SameDayDelivery', '#SupplyChain']

export default function Blog() {
  const [active, setActive] = useState('all')
  const filtered = active === 'all' ? posts : posts.filter(p => p.category === active)

  return (
    <div>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-primary-dark to-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1920&q=80')] bg-cover bg-center opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 to-primary/70" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
              Transport Insights.{' '}
              <span className="text-accent">Straight from the Experts.</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Guides, tips, and industry news to help you make smarter logistics decisions — whether you're a business owner, home mover, or supply chain professional.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <motion.div whileHover={{ scale: 1.01 }} className="bg-surface rounded-2xl overflow-hidden shadow-lg cursor-pointer">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="h-64 md:h-auto min-h-[300px] overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80" alt="House removal preparation" className="w-full h-full object-cover" />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-4">
                    <Bookmark className="w-4 h-4 text-accent" />
                    <span className="text-xs font-bold uppercase tracking-wider text-accent">Editor's Pick</span>
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full flex items-center gap-1">
                      <Home className="w-3 h-3" /> Personal Transport
                    </span>
                    <span className="text-xs text-gray-500">6 min read</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-primary-dark mb-4">
                    10 Things to Do Before Your House Removal Day
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Moving day doesn't have to be chaotic. With the right preparation, you can make your house removal smooth, stress-free, and even enjoyable.
                  </p>
                  <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm hover:text-accent transition-colors">
                    Read Article <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* Categories & Posts */}
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <SectionLabel>Browse By Topic</SectionLabel>
          </div>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map(c => (
              <button
                key={c.key}
                onClick={() => setActive(c.key)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all cursor-pointer border-none ${
                  active === c.key
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-50'
                }`}
              >
                <c.icon className="w-4 h-4" />
                {c.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((p, i) => (
              <AnimatedSection key={p.title} delay={i * 0.1}>
                <div className="bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
                  <div className="h-44 overflow-hidden">
                    <img src={p.img} alt={p.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">{p.catLabel}</span>
                      <span className="text-xs text-gray-500">{p.time} read</span>
                    </div>
                    <h3 className="font-bold text-primary-dark mb-3 flex-1">{p.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{p.excerpt}</p>
                    <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm hover:text-accent transition-colors cursor-pointer">
                      Read More <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionLabel>Stay In The Loop</SectionLabel>
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
              Get Transport Tips Delivered to Your Inbox.
            </h2>
            <p className="text-gray-600 mb-8">
              No spam — just practical insights, industry updates, and exclusive offers, once a month.
            </p>
            <form onSubmit={e => e.preventDefault()} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-5 py-3.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"
              />
              <button type="submit" className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-light text-primary-dark font-semibold px-6 py-3.5 rounded-xl text-sm transition-colors cursor-pointer border-none">
                Subscribe Free <Send className="w-4 h-4" />
              </button>
            </form>
            <p className="text-xs text-gray-400 mt-3">We respect your privacy. Unsubscribe anytime.</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Tags */}
      <section className="py-12 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionLabel>Popular Tags</SectionLabel>
          <div className="flex flex-wrap justify-center gap-3 mt-4">
            {tags.map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="text-sm text-primary bg-white px-4 py-2 rounded-full border border-gray-100 hover:border-accent hover:text-accent transition-colors cursor-pointer"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-r from-primary-dark to-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-5">
              Need Transport Now? Stop Reading — Start Moving.
            </h2>
            <p className="text-gray-300 text-lg mb-10">
              Our team is ready. Get your free quote in minutes.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-primary-dark font-bold px-8 py-4 rounded-xl text-lg no-underline transition-all hover:scale-105">
                Get a Free Quote <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/services" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl text-lg no-underline transition-all border border-white/20">
                Browse Services <Truck className="w-5 h-5" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
