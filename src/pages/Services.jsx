import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Home, Boxes, Navigation, Building2, CheckCircle, Calendar, ArrowRight,
  Zap, MessageCircle, Phone, HelpCircle
} from 'lucide-react'
import SectionLabel from '../components/SectionLabel'
import AnimatedSection from '../components/AnimatedSection'

const services = [
  {
    id: 'removals',
    icon: Home,
    title: 'Personal Removals & Home Transport',
    desc: "Moving is stressful enough without worrying about how your belongings will survive the journey. Our removals team takes that burden off your shoulders entirely. From studio apartment moves to multi-bedroom house relocations, we provide a careful, coordinated service that treats every item — furniture, fragile goods, electronics — with maximum care.",
    features: ['Packing & wrapping assistance (on request)', 'Careful loading and securing of items', 'Safe transit in padded, clean vehicles', 'Unloading and placement at destination', 'Fully insured throughout the process'],
    ideal: 'Home movers, students, renters, small office relocations',
    cta: 'Book a Removal',
    ctaIcon: Calendar,
    img: 'https://images.unsplash.com/photo-1600518464441-9154a4dea21b?w=800&q=80',
  },
  {
    id: 'freight',
    icon: Boxes,
    title: 'Commercial Freight & B2B Logistics',
    desc: "Your business depends on reliable supply chains. Ours is built to support them. We offer scheduled freight transport, bulk cargo movement, and B2B logistics solutions designed around your operational hours, volume needs, and industry requirements. Whether you're a manufacturer, wholesaler, retailer, or distributor — we become a seamless extension of your supply chain.",
    features: ['Regular scheduled freight runs', 'Bulk cargo handling with appropriate vehicles', 'Supply chain coordination and reporting', 'Flexible contract or one-off arrangements', 'Dedicated account management'],
    ideal: 'Manufacturers, retailers, wholesalers, distributors, industrial clients',
    cta: 'Get a Freight Quote',
    ctaIcon: ArrowRight,
    img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
  },
  {
    id: 'last-mile',
    icon: Navigation,
    title: 'Last-Mile Delivery Services',
    desc: "The final leg of any shipment is the most critical — it's where customer satisfaction is won or lost. Our last-mile delivery service is built for speed, accuracy, and a positive customer experience. We handle the handoff so you can focus on running your business, not chasing deliveries.",
    features: ['Same-day and next-day delivery options', 'Real-time tracking and ETA updates', 'Proof of delivery (digital signature / photo)', 'Failed delivery management and re-scheduling', 'Batch delivery route optimisation'],
    ideal: 'E-commerce businesses, online retailers, subscription box brands, local stores',
    cta: 'Start Last-Mile Deliveries',
    ctaIcon: Zap,
    img: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800&q=80',
  },
  {
    id: 'office-relocation',
    icon: Building2,
    title: 'Office & Commercial Relocations',
    desc: "Moving an office involves more than just boxes — it requires coordination, discretion, and minimising downtime. We specialise in planned commercial relocations that keep disruption to a minimum and have your team back at their desks as quickly as possible.",
    features: ['IT equipment packing and safe transport', 'Furniture disassembly, transport, and reassembly', 'Weekend and after-hours scheduling', 'Floor protection and building access coordination', 'Disposal and recycling of old furniture (on request)'],
    ideal: 'SMEs, corporates, co-working spaces, government offices',
    cta: 'Plan Your Office Move',
    ctaIcon: Calendar,
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
  },
  {
    id: 'specialised',
    icon: Boxes,
    title: 'Specialised & Oversized Cargo Transport',
    desc: "Some loads don't fit a standard delivery van — and that's exactly what we're equipped for. We handle oversized, fragile, and high-value cargo that requires specialised vehicles, custom securing, and experienced handling.",
    features: ['Heavy machinery and industrial equipment transport', 'Fragile and high-value item handling', 'Flatbed and low-loader vehicle options', 'Permit and route planning for oversized loads', 'Specialised securing and load restraints'],
    ideal: 'Construction firms, manufacturers, art galleries, equipment suppliers',
    cta: 'Enquire About Specialised Transport',
    ctaIcon: MessageCircle,
    img: 'https://images.unsplash.com/photo-1504309092620-4d0ec726efa4?w=800&q=80',
  },
]

const comparison = [
  { feature: 'Same-Day Available', vals: [true, true, true, false, false] },
  { feature: 'Insurance Included', vals: [true, true, true, true, true] },
  { feature: 'Scheduled/Contract', vals: [false, true, true, false, false] },
  { feature: 'After-Hours Service', vals: [true, true, true, true, 'On Request'] },
  { feature: 'Account Manager', vals: [false, true, true, true, true] },
]

const colHeaders = ['Personal Removals', 'Commercial Freight', 'Last-Mile', 'Office Relocation', 'Specialised']

export default function Services() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-primary-dark to-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1616432043562-3671ea2e5242?w=1920&q=80')] bg-cover bg-center opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 to-primary/70" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
              Comprehensive Transport Services.{' '}
              <span className="text-accent">One Reliable Partner.</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Whether you need to move a sofa or ship a full pallet load across the state, we have the vehicle, the team, and the expertise to get it there safely.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      {services.map((s, i) => (
        <section
          key={s.id}
          id={s.id}
          className={`py-20 md:py-28 ${i % 2 === 0 ? 'bg-white' : 'bg-surface'}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <AnimatedSection delay={0}>
                <div className={`${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                    <s.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-5">{s.title}</h2>
                  <p className="text-gray-600 leading-relaxed mb-8">{s.desc}</p>
                  <div className="space-y-3 mb-8">
                    {s.features.map((f) => (
                      <div key={f} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{f}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-gray-500 mb-6">
                    <span className="font-semibold text-primary-dark">Ideal For:</span> {s.ideal}
                  </p>
                  <Link to="/contact" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-light text-white font-semibold px-6 py-3 rounded-xl no-underline transition-colors">
                    {s.cta} <s.ctaIcon className="w-5 h-5" />
                  </Link>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                <div className={`h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl ${i % 2 !== 0 ? 'lg:order-1' : ''}`}>
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      ))}

      {/* Comparison Table */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <SectionLabel>Find Your Fit</SectionLabel>
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-dark">
                Which Service Is Right for You?
              </h2>
            </AnimatedSection>
          </div>
          <AnimatedSection>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="p-4 text-left text-sm font-semibold text-gray-600 bg-surface rounded-tl-xl">Feature</th>
                    {colHeaders.map((h, i) => (
                      <th key={h} className={`p-4 text-center text-sm font-semibold text-primary-dark bg-surface ${i === colHeaders.length - 1 ? 'rounded-tr-xl' : ''}`}>
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, i) => (
                    <motion.tr
                      key={row.feature}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="border-b border-gray-100"
                    >
                      <td className="p-4 text-sm font-medium text-gray-700">{row.feature}</td>
                      {row.vals.map((v, j) => (
                        <td key={j} className="p-4 text-center">
                          {v === true ? (
                            <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                          ) : v === false ? (
                            <span className="text-gray-300">—</span>
                          ) : (
                            <span className="text-xs text-gray-500">{v}</span>
                          )}
                        </td>
                      ))}
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-r from-primary-dark to-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-5">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-gray-300 text-lg mb-10">
              Speak with our logistics team today — we'll recommend the right solution based on your cargo, schedule, and budget.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-primary-dark font-bold px-8 py-4 rounded-xl text-lg no-underline transition-all hover:scale-105">
                Talk to an Expert <Phone className="w-5 h-5" />
              </Link>
              <Link to="/faqs" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl text-lg no-underline transition-all border border-white/20">
                View FAQs <HelpCircle className="w-5 h-5" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
