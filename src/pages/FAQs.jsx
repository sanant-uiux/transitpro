import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Search, Grid3X3, DollarSign, Calendar, Shield, MapPin, Truck, Package,
  ChevronDown, Phone, Mail, ArrowRight, HelpCircle
} from 'lucide-react'
import SectionLabel from '../components/SectionLabel'
import AnimatedSection from '../components/AnimatedSection'

const categories = [
  { icon: Grid3X3, label: 'All FAQs', key: 'all' },
  { icon: DollarSign, label: 'Pricing & Quotes', key: 'pricing' },
  { icon: Calendar, label: 'Booking & Scheduling', key: 'booking' },
  { icon: Shield, label: 'Insurance & Safety', key: 'insurance' },
  { icon: MapPin, label: 'Coverage Areas', key: 'coverage' },
  { icon: Truck, label: 'Services & Fleet', key: 'fleet' },
]

const faqData = [
  {
    category: 'pricing',
    title: 'Pricing & Quotes',
    icon: DollarSign,
    items: [
      { q: 'How much does your transport service cost?', a: 'Pricing varies based on cargo type, distance, vehicle size, and any special handling requirements. We offer free, no-obligation quotes — simply fill out our contact form or call us and we\'ll provide a transparent, itemised estimate.' },
      { q: 'Are there any hidden fees I should know about?', a: 'Never. We believe in complete pricing transparency. What we quote is what you pay. The only time an additional cost may arise is if requirements change significantly after booking — and we\'ll always tell you upfront before proceeding.' },
      { q: 'Do you offer discounts for regular or contract clients?', a: 'Yes. Clients who use our services regularly or sign ongoing logistics contracts receive preferential rates and priority scheduling. Contact us to discuss a tailored arrangement.' },
      { q: 'Do you charge extra for weekend or after-hours pickups?', a: 'A small surcharge may apply for after-hours, weekend, or public holiday pickups. This will be clearly stated in your quote before you confirm.' },
      { q: 'Can I get a quote online without calling?', a: 'Absolutely. Use our online enquiry form on the Contact page. Fill in your details and we\'ll email or call back with a full quote within 1 business hour.' },
    ]
  },
  {
    category: 'booking',
    title: 'Booking & Scheduling',
    icon: Calendar,
    items: [
      { q: 'How far in advance do I need to book?', a: 'For standard jobs, we recommend booking 2–3 days in advance. For large commercial freight or specialised transport, a week or more is preferred. For urgent last-minute bookings, call us — we do our best to accommodate.' },
      { q: 'Can I reschedule or cancel my booking?', a: 'Yes. We understand plans change. Cancel or reschedule at least 24 hours before your pickup time and there\'s no fee. Cancellations made less than 24 hours prior may incur a small administration fee.' },
      { q: 'Do I need to be present at pickup and delivery?', a: 'Not necessarily. We can coordinate with a nominated representative, property manager, or key holder at either end. Just include their contact details in your booking notes.' },
      { q: 'Can I book recurring or scheduled deliveries?', a: 'Yes — this is one of our most popular options for commercial clients. We set up a recurring schedule and assign a dedicated driver or team to your account for consistency.' },
      { q: 'What happens if my pickup or delivery runs late?', a: 'Our operations team monitors all jobs in real time. If a delay is anticipated, we will notify you proactively with an updated ETA. Our on-time rate is 98%.' },
    ]
  },
  {
    category: 'insurance',
    title: 'Insurance & Safety',
    icon: Shield,
    items: [
      { q: 'Is my cargo insured during transport?', a: 'Yes. All consignments are covered under our comprehensive transport insurance policy. This covers damage or loss in transit. We can provide policy documentation upon request.' },
      { q: 'What if something is damaged during the move?', a: 'While damage is extremely rare, we have a clear claims process. Notify us within 48 hours of delivery, document the damage with photos, and we\'ll manage the insurance claim on your behalf.' },
      { q: 'How do you ensure cargo is secured in transit?', a: 'All vehicles are equipped with professional load restraints, blankets, padding, and strapping systems. Our drivers are trained in proper load securing techniques for different cargo types.' },
      { q: 'Are your drivers background-checked?', a: 'Yes. Every driver in our team undergoes a thorough background check, professional licensing verification, and regular safety training before they handle any client cargo.' },
      { q: 'What safety standards do you comply with?', a: 'We comply with all national and state transport regulations, including chain of responsibility laws, OH&S standards, and vehicle maintenance requirements.' },
    ]
  },
  {
    category: 'coverage',
    title: 'Coverage Areas',
    icon: MapPin,
    items: [
      { q: 'What areas do you service?', a: 'We cover Melbourne and the surrounding metropolitan area, regional towns within 100km, and interstate freight corridors. See our full coverage map on the Contact page.' },
      { q: 'Do you do interstate deliveries?', a: 'Yes. Interstate freight services are available for scheduled runs. Prices depend on distance, volume, and frequency. Contact us to set up a route quote.' },
      { q: 'Can you pick up from a business and deliver to a residence?', a: 'Absolutely. We handle all combinations — business-to-business, home-to-home, business-to-home, and hub-to-retail. Just specify in your booking.' },
    ]
  },
  {
    category: 'fleet',
    title: 'Services & Fleet',
    icon: Truck,
    items: [
      { q: 'What types of vehicles do you have?', a: 'Our fleet includes small vans, medium cargo vans, large pantech trucks, and flatbed vehicles for oversized or heavy cargo. We match the right vehicle to your job.' },
      { q: 'Can you handle very large or heavy items?', a: 'Yes. We have specialised vehicles and equipment for oversized, heavy, or unusual loads — including machinery, industrial equipment, and bulky furniture.' },
      { q: 'Do you provide packing materials or assistance?', a: 'On request, we can provide packing materials (boxes, bubble wrap, tape, blankets) and packing assistance for removals. This can be added to your booking.' },
      { q: 'Can I track my delivery in real time?', a: 'Yes. For standard and commercial deliveries, we provide real-time tracking updates via SMS or email. Enterprise clients can access our logistics dashboard for live visibility.' },
    ]
  },
]

export default function FAQs() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [openItem, setOpenItem] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')

  const filteredSections = activeCategory === 'all'
    ? faqData
    : faqData.filter(s => s.category === activeCategory)

  const searchFiltered = searchTerm
    ? filteredSections.map(s => ({
        ...s,
        items: s.items.filter(item =>
          item.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.a.toLowerCase().includes(searchTerm.toLowerCase())
        )
      })).filter(s => s.items.length > 0)
    : filteredSections

  return (
    <div>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-primary-dark to-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521791055366-0d553872125f?w=1920&q=80')] bg-cover bg-center opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 to-primary/70" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
              Got Questions?{' '}
              <span className="text-accent">We've Got Answers.</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Browse the most common questions our clients ask. If you can't find what you're looking for, our team is just one call away.
            </p>
            <div className="relative max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                placeholder="Search FAQs..."
                className="w-full pl-12 pr-4 py-3.5 rounded-xl border-none text-sm focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-8 bg-white border-b border-gray-100 sticky top-16 md:top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map(c => (
              <button
                key={c.key}
                onClick={() => { setActiveCategory(c.key); setOpenItem(null) }}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all cursor-pointer border-none ${
                  activeCategory === c.key
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-surface text-gray-600 hover:bg-gray-100'
                }`}
              >
                <c.icon className="w-4 h-4" />
                {c.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 md:py-28 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {searchFiltered.length === 0 ? (
            <div className="text-center py-12">
              <HelpCircle className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">No matching FAQs found. Try a different search term or category.</p>
            </div>
          ) : (
            searchFiltered.map((section) => (
              <div key={section.category} className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <section.icon className="w-6 h-6 text-accent" />
                  <h2 className="text-2xl font-bold text-primary-dark">{section.title}</h2>
                </div>
                <div className="space-y-3">
                  {section.items.map((item, i) => {
                    const key = `${section.category}-${i}`
                    return (
                      <AnimatedSection key={key} delay={i * 0.05}>
                        <div className="bg-white rounded-xl overflow-hidden shadow-sm">
                          <button
                            onClick={() => setOpenItem(openItem === key ? null : key)}
                            className="w-full flex items-center justify-between p-5 text-left bg-transparent border-none cursor-pointer group"
                          >
                            <span className="font-semibold text-primary-dark text-sm pr-4 group-hover:text-primary transition-colors">{item.q}</span>
                            <motion.div animate={{ rotate: openItem === key ? 180 : 0 }}>
                              <ChevronDown className={`w-5 h-5 shrink-0 transition-colors ${openItem === key ? 'text-accent' : 'text-gray-400'}`} />
                            </motion.div>
                          </button>
                          <AnimatePresence>
                            {openItem === key && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                              >
                                <p className="px-5 pb-5 text-gray-600 text-sm leading-relaxed">{item.a}</p>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </AnimatedSection>
                    )
                  })}
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-r from-primary-dark to-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-5">
              Still Can't Find Your Answer?
            </h2>
            <p className="text-gray-300 text-lg mb-10">
              Our team is available Mon–Sat, 7am–7pm, and we're happy to answer any question — no matter how big or small.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-gray-300 mb-10">
              <a href="tel:+1234567890" className="flex items-center gap-2 no-underline text-gray-300 hover:text-accent transition-colors">
                <Phone className="w-5 h-5" /> +1 234 567 890
              </a>
              <a href="mailto:info@transitpro.com" className="flex items-center gap-2 no-underline text-gray-300 hover:text-accent transition-colors">
                <Mail className="w-5 h-5" /> info@transitpro.com
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-primary-dark font-bold px-8 py-4 rounded-xl text-lg no-underline transition-all hover:scale-105">
                Contact Our Team <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl text-lg no-underline transition-all border border-white/20">
                Get a Free Quote <Truck className="w-5 h-5" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
