import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Phone, Mail, Clock, Send, Lock, MapPin, MessageCircle, Users,
  DollarSign, Star, ShieldCheck, BadgeCheck, Map, HelpCircle,
  Globe, Share2, Link as LinkIcon, Play, ArrowRight
} from 'lucide-react'
import SectionLabel from '../components/SectionLabel'
import AnimatedSection from '../components/AnimatedSection'

const contactCards = [
  { icon: Phone, title: 'Phone Support', desc: 'Speak directly with our dispatch team for urgent bookings or time-sensitive enquiries.', info: '+1 234 567 890', sub: 'Available: Mon–Sat, 7am–7pm' },
  { icon: Mail, title: 'Email Support', desc: 'Send us your full brief and we\'ll come back with a detailed quote.', info: 'info@transitpro.com', sub: 'Response within 1–2 hours (business hours)' },
  { icon: MessageCircle, title: 'WhatsApp / Live Chat', desc: 'Prefer to message? Chat with us directly for quick questions and fast responses.', info: 'Chat Now', sub: 'Instant replies during business hours' },
  { icon: Users, title: 'Account Clients', desc: 'Existing contract clients have a dedicated account manager.', info: 'Call your direct line', sub: 'Or email your named contact' },
]

const whyUs = [
  { icon: Clock, text: 'Responses within 1 hour during business hours' },
  { icon: DollarSign, text: 'Transparent, no-hidden-fee quotes' },
  { icon: Star, text: 'Over 5,000 successfully completed jobs' },
  { icon: ShieldCheck, text: 'Fully insured and licensed operations' },
  { icon: BadgeCheck, text: 'Flexible bookings — last minute welcome' },
]

const zones = [
  { label: 'Metro Zone', desc: 'City Centre + Suburbs within 25km — Same-day available' },
  { label: 'Regional Zone', desc: 'Towns within 100km — Next-day available' },
  { label: 'Interstate Runs', desc: 'Scheduled freight available on request' },
]

const faqs = [
  { q: 'How quickly can you arrange a pickup?', a: 'For local jobs, we often arrange same-day pickup depending on vehicle availability. Call us before noon for the best chance at same-day service.' },
  { q: 'Do I need to be present at pickup and delivery?', a: 'Not always. We can work with a key holder or building manager at either end. Just let us know in your booking details.' },
  { q: 'What if my dates change?', a: "Life happens. We're flexible — just notify us at least 24 hours in advance and we'll reschedule at no extra charge." },
]

export default function Contact() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <div>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-primary-dark to-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80')] bg-cover bg-center opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 to-primary/70" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
              Let's Talk{' '}
              <span className="text-accent">Transport.</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Whether you have a question, need a quote, or want to discuss a long-term logistics contract — our team is here and ready to help.
            </p>
            <div className="flex flex-wrap gap-6 text-sm text-gray-300">
              <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-accent" /> +1 234 567 890</div>
              <div className="flex items-center gap-2"><Mail className="w-4 h-4 text-accent" /> info@transitpro.com</div>
              <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-accent" /> Mon–Sat, 7am–7pm</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <SectionLabel>Send Us a Message</SectionLabel>
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-dark">
                Get Your Free Quote in Minutes.
              </h2>
            </AnimatedSection>
          </div>
          <AnimatedSection>
            <form onSubmit={e => e.preventDefault()} className="bg-surface p-8 md:p-12 rounded-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input type="text" placeholder="John Smith" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent bg-white" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input type="email" placeholder="your@email.com" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent bg-white" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input type="tel" placeholder="+1 234 567 890" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent bg-white" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service Type</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent bg-white text-gray-600">
                    <option>Select a Service...</option>
                    <option>Personal Removals</option>
                    <option>Commercial Freight</option>
                    <option>Last-Mile Delivery</option>
                    <option>Office Relocation</option>
                    <option>Specialised Transport</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Pickup Location</label>
                  <input type="text" placeholder="Street address or suburb" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent bg-white" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Delivery Location</label>
                  <input type="text" placeholder="Street address or suburb" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent bg-white" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date</label>
                  <input type="date" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent bg-white" />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Message / Details</label>
                <textarea rows={4} placeholder="Tell us about your cargo, volume, any special requirements..." className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent bg-white resize-none" />
              </div>
              <button type="submit" className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-light text-primary-dark font-bold px-8 py-4 rounded-xl text-sm transition-colors cursor-pointer border-none">
                <Send className="w-5 h-5" /> Send My Enquiry
              </button>
              <div className="flex flex-wrap gap-6 mt-6 text-xs text-gray-500">
                <div className="flex items-center gap-1"><Lock className="w-3 h-3" /> Your information is secure and will never be shared.</div>
                <div className="flex items-center gap-1"><Clock className="w-3 h-3" /> We typically respond within 1 business hour.</div>
              </div>
            </form>
          </AnimatedSection>
        </div>
      </section>

      {/* Map */}
      <section className="py-20 md:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <SectionLabel>Find Us</SectionLabel>
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-dark">Visit Our Office</h2>
            </AnimatedSection>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <AnimatedSection>
              <div className="h-80 md:h-full min-h-[320px] bg-gray-200 rounded-2xl overflow-hidden">
                <iframe
                  title="Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509198!2d144.95373531531672!3d-37.81627977975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2s!4v1600000000000!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="bg-white p-8 rounded-2xl shadow-md h-full">
                <h3 className="text-xl font-bold text-primary-dark mb-6">Contact Details</h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-accent shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-primary-dark text-sm">Address</p>
                      <p className="text-gray-600 text-sm">123 Transport Ave, Logistics Hub, Melbourne VIC 3000</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="w-5 h-5 text-accent shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-primary-dark text-sm">Phone</p>
                      <p className="text-gray-600 text-sm">+1 234 567 890</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="w-5 h-5 text-accent shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-primary-dark text-sm">Email</p>
                      <p className="text-gray-600 text-sm">info@transitpro.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="w-5 h-5 text-accent shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-primary-dark text-sm">Operating Hours</p>
                      <div className="text-gray-600 text-sm space-y-1">
                        <p>Mon – Fri: 7:00 AM – 7:00 PM</p>
                        <p>Saturday: 8:00 AM – 4:00 PM</p>
                        <p>Sunday: Emergency bookings only</p>
                        <p>Public Holidays: Limited service</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <SectionLabel>Other Ways to Reach Us</SectionLabel>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactCards.map((c, i) => (
              <AnimatedSection key={c.title} delay={i * 0.1}>
                <div className="bg-surface p-6 rounded-2xl h-full">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <c.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-primary-dark mb-2">{c.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{c.desc}</p>
                  <p className="text-primary font-semibold text-sm">{c.info}</p>
                  <p className="text-gray-500 text-xs mt-1">{c.sub}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 md:py-28 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <SectionLabel>Why Enquire With Us?</SectionLabel>
          </div>
          <div className="space-y-4">
            {whyUs.map((item, i) => (
              <AnimatedSection key={item.text} delay={i * 0.1}>
                <div className="flex items-center gap-4 bg-white p-5 rounded-xl">
                  <item.icon className="w-6 h-6 text-accent shrink-0" />
                  <p className="text-gray-700 font-medium text-sm">{item.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <SectionLabel>Where We Operate</SectionLabel>
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-dark">We Cover Your Area.</h2>
            </AnimatedSection>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {zones.map((z, i) => (
              <AnimatedSection key={z.label} delay={i * 0.1}>
                <div className="bg-surface p-6 rounded-2xl text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', delay: i * 0.15 }}
                  >
                    <MapPin className="w-8 h-8 text-accent mx-auto mb-4" />
                  </motion.div>
                  <h3 className="font-bold text-primary-dark mb-2">{z.label}</h3>
                  <p className="text-gray-600 text-sm">{z.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm mt-8">
            Not sure if we cover your area? Call us or drop your postcode in the message box — we'll let you know within minutes.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <SectionLabel>Quick Answers</SectionLabel>
          </div>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <AnimatedSection key={f.q} delay={i * 0.1}>
                <div className="bg-white rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left bg-transparent border-none cursor-pointer"
                  >
                    <span className="font-semibold text-primary-dark text-sm pr-4">{f.q}</span>
                    <HelpCircle className={`w-5 h-5 shrink-0 transition-colors ${openFaq === i ? 'text-accent' : 'text-gray-400'}`} />
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: openFaq === i ? 'auto' : 0, opacity: openFaq === i ? 1 : 0 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-gray-600 text-sm leading-relaxed">{f.a}</p>
                  </motion.div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link to="/faqs" className="text-primary font-semibold text-sm no-underline hover:text-accent inline-flex items-center gap-1">
              See all FAQs <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Social */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionLabel>Stay Connected</SectionLabel>
          <p className="text-gray-600 mb-6">Follow us for transport tips, client stories, and company updates.</p>
          <div className="flex justify-center gap-4">
            {[
              [Globe, 'Facebook'],
              [Share2, 'Instagram'],
              [LinkIcon, 'LinkedIn'],
              [Play, 'YouTube'],
            ].map(([Icon, label]) => (
              <motion.a
                key={label}
                href="#"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring' }}
                className="w-12 h-12 rounded-xl bg-surface flex items-center justify-center text-gray-500 hover:bg-accent hover:text-primary-dark transition-colors no-underline"
                title={label}
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
