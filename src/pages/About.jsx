import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Target, Eye, Heart, ShieldCheck, Award, BadgeCheck, Truck, Star,
  ArrowRight
} from 'lucide-react'
import SectionLabel from '../components/SectionLabel'
import AnimatedSection from '../components/AnimatedSection'

const stagger = { visible: { transition: { staggerChildren: 0.15 } } }
const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }

const values = [
  { icon: Target, title: 'Our Mission', desc: 'To deliver every consignment with the same care and commitment we would give to our own — on time, every time, with complete transparency.' },
  { icon: Eye, title: 'Our Vision', desc: 'To become the most trusted transport and logistics brand in the region, known not just for speed but for integrity, safety, and genuine customer care.' },
  { icon: Heart, title: 'Our Values', desc: 'Reliability — we keep our word. Safety — people and goods, always protected. Accountability — we own every outcome. Innovation — smarter routes, better service.' },
]

const differentiators = [
  'Dedicated Point of Contact — You always have a real person to call, not a call centre.',
  'Real-Time Updates — We proactively communicate ETAs and any changes.',
  'Trained & Vetted Drivers — Every driver undergoes safety training, background checks, and regular performance reviews.',
  'Clean, Maintained Vehicles — Our fleet is serviced regularly to prevent breakdowns and ensure reliability.',
  'Flexible Scheduling — We work around your timeline, not the other way around.',
  'Transparent Pricing — No hidden fees. What we quote is what you pay.',
]

const team = [
  { name: 'James Mitchell', role: 'Founder & CEO', bio: 'Passionate about logistics since day one, James built this company from the ground up with a vision of making transport stress-free for every client.', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80' },
  { name: 'Sarah Chen', role: 'Head of Operations', bio: 'Overseeing dispatch, fleet management, and client scheduling, Sarah keeps the engine running — quite literally.', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80' },
  { name: 'Mike Torres', role: 'Senior Driver & Fleet Supervisor', bio: 'With 15 years on the road, Mike leads our driver team with professionalism, safety awareness, and a perfect delivery record.', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80' },
  { name: 'Anita Kapoor', role: 'Customer Experience Lead', bio: 'The voice you\'ll hear on the phone, Anita ensures every client query is resolved quickly, clearly, and with a smile.', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80' },
]

const certs = [
  { icon: ShieldCheck, text: 'Fully Insured — All Loads Covered' },
  { icon: Award, text: 'National Transport Authority Licensed' },
  { icon: BadgeCheck, text: 'Occupational Health & Safety Compliant' },
  { icon: Truck, text: 'Fleet Regularly Inspected & Certified' },
  { icon: Star, text: '5-Star Rated on Google' },
]

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-primary-dark to-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1920&q=80')] bg-cover bg-center opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 to-primary/70" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
              Built on Trust.{' '}
              <span className="text-accent">Driven by Purpose.</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              We are more than a transport company — we are your logistics partner, committed to moving what matters most to you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80" alt="Fleet of transport trucks at logistics hub" className="w-full h-80 lg:h-[500px] object-cover" />
              </div>
            </AnimatedSection>
            <div>
            <SectionLabel>Our Story</SectionLabel>
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-8">
                From Humble Beginnings to a Trusted Name
              </h2>
              <div className="space-y-5 text-gray-600 leading-relaxed">
                <p>Every great journey starts with a single step — ours started with a single truck and an unshakeable belief in doing things right.</p>
                <p>Founded over a decade ago by James Mitchell, our company was born out of a simple observation: businesses and individuals deserved a transport partner they could genuinely rely on. No missed pickups, no damaged goods, no vague ETAs — just honest, professional service.</p>
                <p>What began as a small local delivery operation has since grown into a full-service transport and logistics company, covering the entire city and extending to interstate corridors. Today, we operate a modern fleet, a skilled team of over 30 drivers, and a dispatch system built around efficiency and transparency.</p>
                <p className="text-primary font-semibold italic">Our roots keep us grounded. Our ambition keeps us moving forward.</p>
              </div>
            </AnimatedSection>
          </div>
          </div>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="py-20 md:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <SectionLabel>What Drives Us</SectionLabel>
          </div>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v) => (
              <motion.div key={v.title} variants={fadeUp} className="bg-white p-8 rounded-2xl shadow-md text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <v.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary-dark mb-4">{v.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <SectionLabel>Our Difference</SectionLabel>
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-8">
                We Don't Just Transport — We Take Responsibility.
              </h2>
              <p className="text-gray-600 mb-8">Most transport companies hand you a tracking link and disappear. We do things differently:</p>
              <div className="space-y-4">
                {differentiators.map((d, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-surface"
                  >
                    <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center shrink-0">
                      <span className="text-accent font-bold text-sm">{i + 1}</span>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">{d}</p>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 md:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <SectionLabel>The People Behind the Wheel</SectionLabel>
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-dark">
                A Team That Cares About Every Delivery
              </h2>
            </AnimatedSection>
          </div>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((t) => (
              <motion.div key={t.name} variants={fadeUp} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="h-56 overflow-hidden">
                  <img src={t.img} alt={t.name} className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-primary-dark">{t.name}</h3>
                  <p className="text-accent text-sm font-semibold mb-3">{t.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{t.bio}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <SectionLabel>Licensed, Insured & Certified</SectionLabel>
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-dark">
                You're in Safe, Certified Hands.
              </h2>
            </AnimatedSection>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {certs.map((c, i) => (
              <AnimatedSection key={c.text} delay={i * 0.1}>
                <div className="flex items-center gap-3 bg-surface px-6 py-4 rounded-xl">
                  <c.icon className="w-6 h-6 text-accent shrink-0" />
                  <span className="text-sm font-medium text-primary-dark">{c.text}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Marquee */}
      <section className="py-16 bg-surface overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
          <SectionLabel>Trusted by Businesses Across the Region</SectionLabel>
          <h2 className="text-2xl font-bold text-primary-dark">Proud Partners of Growing Brands</h2>
        </div>
        <div className="flex gap-12 animate-[marquee_20s_linear_infinite]">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="w-32 h-16 bg-white rounded-xl flex items-center justify-center shrink-0 shadow-sm">
              <span className="text-gray-400 font-bold text-sm">Partner {(i % 6) + 1}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-r from-primary-dark to-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1494412574643-ff11b0a5eb19?w=1920&q=80')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/80 to-primary/60" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-5">
              Ready to Work With a Team You Can Trust?
            </h2>
            <p className="text-gray-300 text-lg mb-10">
              Reach out today for a no-obligation quote and discover why clients stay with us for years.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-primary-dark font-bold px-8 py-4 rounded-xl text-lg no-underline transition-all hover:scale-105">
                Get a Free Quote <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/services" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl text-lg no-underline transition-all border border-white/20">
                See Our Services <Truck className="w-5 h-5" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
