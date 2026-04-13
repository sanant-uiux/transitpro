import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowRight, Truck, Shield, Clock, Star, MapPin, Timer, ShieldCheck,
  Headphones, BadgeCheck, Package, Boxes, Navigation, ClipboardList,
  CalendarCheck, CheckCircle, Phone, Mail, Bookmark, Play, Users
} from 'lucide-react'
import SectionLabel from '../components/SectionLabel'
import AnimatedSection from '../components/AnimatedSection'
import CountUp from '../components/CountUp'

const stagger = { visible: { transition: { staggerChildren: 0.15 } } }
const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }

const whyCards = [
  { icon: Timer, title: 'On-Time Delivery', desc: 'We understand that time is money. Our optimised routing ensures your shipment reaches its destination exactly when expected — no excuses, no delays.' },
  { icon: ShieldCheck, title: 'Fully Insured & Secure', desc: 'Every consignment is covered under our comprehensive transport insurance. Your goods are in safe hands from pickup to drop-off.' },
  { icon: Headphones, title: '24/7 Customer Support', desc: 'Our dedicated support team is available around the clock to answer queries, provide tracking updates, and resolve issues in real time.' },
  { icon: Truck, title: 'Modern Fleet', desc: 'From light vans to heavy freight vehicles, our well-maintained fleet is equipped to handle loads of all sizes with utmost care.' },
  { icon: MapPin, title: 'Wide Coverage Area', desc: 'We operate across the city and beyond — connecting residential neighbourhoods, business districts, and interstate corridors seamlessly.' },
  { icon: BadgeCheck, title: 'Experienced & Licensed', desc: 'All our drivers are professionally trained, licensed, and background-verified to ensure safety and professionalism on every trip.' },
]

const services = [
  { icon: Package, title: 'Personal Transport & Removals', desc: 'Moving home or relocating your office? Our removal specialists handle your belongings with care. We provide packing assistance, secure loading, and safe delivery to your new address.', link: '/services#removals', img: 'https://images.unsplash.com/photo-1600518464441-9154a4dea21b?w=600&q=80' },
  { icon: Boxes, title: 'Commercial Freight & Logistics', desc: 'We partner with businesses of all sizes to manage regular freight movement — scheduled pickups, bulk delivery, and supply chain support to keep your operations running.', link: '/services#freight', img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80' },
  { icon: Navigation, title: 'Last-Mile Delivery', desc: 'Speed and accuracy define our last-mile delivery service. Ideal for e-commerce businesses and retail clients who need reliable same-day or next-day delivery.', link: '/services#last-mile', img: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600&q=80' },
]

const steps = [
  { icon: ClipboardList, title: 'Request a Quote', desc: "Fill out our quick online form with your pickup/drop location, cargo details, and preferred date. We'll respond within the hour." },
  { icon: CalendarCheck, title: 'Book Your Slot', desc: 'Once you confirm the quote, we schedule your transport slot and assign a dedicated driver or logistics team to your job.' },
  { icon: Truck, title: 'We Pick Up', desc: 'Our team arrives on time, handles your cargo with care, and loads it safely for transit.' },
  { icon: CheckCircle, title: 'Delivered to Your Door', desc: "We complete the delivery on schedule and send you a confirmation. It's that simple." },
]

const testimonials = [
  { quote: "We've been using their freight service for our retail chain for over 2 years. Deliveries are always on time and the team is incredibly professional.", name: 'Rajesh Mehta', role: 'Retail Chain Owner', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80' },
  { quote: 'The home removal service was stress-free. The crew was careful with our furniture and they even helped reassemble things.', name: 'Priya Sharma', role: 'Homeowner', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80' },
  { quote: 'Our e-commerce store relies on their last-mile delivery. Our customers love the speed and we love the reliability. Highly recommended!', name: 'Amandeep Singh', role: 'E-Commerce Entrepreneur', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80' },
  { quote: 'Got three quotes before choosing them. Best price, best attitude. My cargo arrived safely and ahead of schedule.', name: "Linda O'Brien", role: 'SME Business Owner', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80' },
]

const stats = [
  { value: 5000, suffix: '+', label: 'Deliveries Completed' },
  { value: 200, suffix: '+', label: 'Happy Clients' },
  { value: 10, suffix: '+', label: 'Years in Business' },
  { value: 15, suffix: '+', label: 'Cities Covered' },
  { value: 98, suffix: '%', label: 'On-Time Rate' },
]

const blogPosts = [
  { title: '10 Things to Do Before Your House Removal Day', category: 'Home Removals', time: '6 min', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80' },
  { title: 'What to Look for in a Commercial Freight Partner', category: 'Commercial Freight', time: '7 min', img: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&q=80' },
  { title: 'Same-Day vs Next-Day Delivery: Which One Is Right?', category: 'Last-Mile', time: '4 min', img: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=600&q=80' },
]

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen overflow-hidden bg-[#f0f4f8]">
        {/* Grain / noise texture overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")' }} />

        {/* Decorative blobs */}
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-accent/8 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 md:pt-36 pb-10 md:pb-16">

          {/* Top bar - breadcrumb style */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-between mb-10 md:mb-14"
          >
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-gray-500">Available for bookings now</span>
            </div>
            <div className="hidden md:flex items-center gap-2 text-sm text-gray-400">
              <MapPin className="w-4 h-4" />
              <span>Serving 15+ cities across Australia</span>
            </div>
          </motion.div>

          {/* Main hero grid - Bento style */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6">

            {/* LEFT - Main content block (7 cols) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7 bg-white rounded-[2rem] p-8 md:p-12 shadow-sm relative overflow-hidden"
            >
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-accent/10 to-transparent rounded-bl-[4rem]" />

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center gap-2 bg-primary-dark/5 text-primary-dark font-semibold text-xs uppercase tracking-widest px-4 py-2 rounded-full mb-8"
              >
                <Truck className="w-4 h-4 text-accent" />
                Transport & Logistics
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-primary-dark leading-[1.08] mb-6 tracking-tight">
                Delivering Trust,{' '}
                <br className="hidden md:block" />
                One Mile at a{' '}
                <span className="relative inline-block">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-amber-500">Time.</span>
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1, duration: 0.6 }}
                    className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-accent to-amber-500 rounded-full origin-left"
                  />
                </span>
              </h1>

              <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-10 max-w-xl">
                From single parcels to full fleet loads — we move your cargo with military-grade precision. Professional transport built for people who don't have time for delays.
              </p>

              {/* CTA row */}
              <div className="flex flex-wrap items-center gap-4 mb-10">
                <Link to="/contact" className="group relative inline-flex items-center gap-3 bg-primary-dark text-white font-bold px-8 py-4 rounded-2xl text-base no-underline overflow-hidden transition-all hover:shadow-2xl hover:shadow-primary/20">
                  <span className="relative z-10 flex items-center gap-3">
                    Get a Free Quote
                    <span className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center group-hover:rotate-[-30deg] transition-transform duration-300">
                      <ArrowRight className="w-4 h-4 text-primary-dark" />
                    </span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-light translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
                </Link>
                <Link to="/services" className="inline-flex items-center gap-2 text-primary-dark font-semibold text-base no-underline hover:text-accent transition-colors group">
                  Our Services
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Client avatars + rating */}
              <div className="flex items-center gap-5 pt-8 border-t border-gray-100">
                <div className="flex -space-x-3">
                  {[
                    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80',
                    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80',
                    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&q=80',
                    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=80',
                  ].map((src, i) => (
                    <motion.img
                      key={i}
                      src={src}
                      alt=""
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + i * 0.1, type: 'spring' }}
                      className="w-10 h-10 rounded-full border-[3px] border-white object-cover"
                    />
                  ))}
                </div>
                <div className="h-8 w-px bg-gray-200" />
                <div>
                  <div className="flex items-center gap-1 mb-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 text-accent fill-accent" />
                    ))}
                    <span className="text-sm font-bold text-primary-dark ml-1">4.9</span>
                  </div>
                  <p className="text-xs text-gray-400">Trusted by 200+ businesses</p>
                </div>
              </div>
            </motion.div>

            {/* RIGHT column (5 cols) - stacked bento */}
            <div className="lg:col-span-5 grid grid-rows-[1fr_auto] gap-5 lg:gap-6">

              {/* Hero Image Card */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative rounded-[2rem] overflow-hidden shadow-sm group min-h-[280px] md:min-h-[340px]"
              >
                <img
                  src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=900&q=80"
                  alt="Modern truck fleet on open highway at golden hour"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                {/* Floating glass card on image */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="absolute bottom-5 left-5 right-5 bg-white/15 backdrop-blur-xl rounded-2xl p-4 border border-white/20"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center">
                        <Truck className="w-5 h-5 text-primary-dark" />
                      </div>
                      <div>
                        <p className="text-white font-bold text-sm">Live Tracking</p>
                        <p className="text-white/60 text-xs">Melbourne → Sydney</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-accent font-bold text-sm">On Route</p>
                      <p className="text-white/60 text-xs">ETA 2h 15m</p>
                    </div>
                  </div>
                  {/* Progress bar */}
                  <div className="mt-3 h-1.5 bg-white/20 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '65%' }}
                      transition={{ delay: 1.3, duration: 1.5, ease: 'easeOut' }}
                      className="h-full bg-accent rounded-full"
                    />
                  </div>
                </motion.div>
              </motion.div>

              {/* Bottom row - 2 small stat cards */}
              <div className="grid grid-cols-2 gap-5 lg:gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="bg-primary-dark rounded-[1.5rem] p-6 text-center relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-accent/10 rounded-full blur-2xl" />
                  <div className="relative">
                    <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mx-auto mb-3">
                      <CheckCircle className="w-6 h-6 text-accent" />
                    </div>
                    <p className="text-3xl md:text-4xl font-extrabold text-white leading-none mb-1">
                      <CountUp end={98} suffix="%" />
                    </p>
                    <p className="text-xs text-gray-400 font-medium">On-Time Delivery</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="bg-white rounded-[1.5rem] p-6 text-center shadow-sm relative overflow-hidden"
                >
                  <div className="absolute bottom-0 left-0 w-20 h-20 bg-primary/5 rounded-full blur-2xl" />
                  <div className="relative">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      <Package className="w-6 h-6 text-primary" />
                    </div>
                    <p className="text-3xl md:text-4xl font-extrabold text-primary-dark leading-none mb-1">
                      <CountUp end={5000} suffix="+" />
                    </p>
                    <p className="text-xs text-gray-500 font-medium">Deliveries Done</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Bottom marquee-style trust strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-10 md:mt-14 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 py-6 border-t border-gray-200/60"
          >
            {[
              [Shield, 'Fully Insured'],
              [Clock, 'On-Time Guarantee'],
              [Star, '5-Star Rated'],
              [MapPin, '15+ Cities'],
              [BadgeCheck, 'Licensed Drivers'],
              [Headphones, '24/7 Support'],
            ].map(([Icon, label], i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 + i * 0.08 }}
                className="flex items-center gap-2 text-gray-400 hover:text-primary-dark transition-colors cursor-default"
              >
                <Icon className="w-4 h-4" />
                <span className="text-sm font-medium">{label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <SectionLabel>Why Clients Trust Us</SectionLabel>
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-dark">
                Transport Done Right. Every Single Time.
              </h2>
            </AnimatedSection>
          </div>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {whyCards.map((card) => (
              <motion.div
                key={card.title}
                variants={fadeUp}
                className="group p-8 rounded-2xl border border-gray-100 hover:border-accent/30 hover:shadow-xl transition-all duration-300 bg-white"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                  <card.icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-primary-dark mb-3">{card.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 md:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <SectionLabel>What We Offer</SectionLabel>
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
                Transport Solutions for Every Need
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                From personal moves to bulk freight, we provide end-to-end transport solutions designed around your schedule, budget, and cargo type.
              </p>
            </AnimatedSection>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <AnimatedSection key={s.title} delay={i * 0.15}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow h-full flex flex-col">
                  <div className="h-48 overflow-hidden">
                    <img src={s.img} alt={s.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-8 flex flex-col flex-1">
                    <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                      <s.icon className="w-7 h-7 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold text-primary-dark mb-3">{s.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed flex-1">{s.desc}</p>
                    <Link to={s.link} className="inline-flex items-center gap-1 text-primary font-semibold text-sm mt-5 no-underline hover:text-accent transition-colors">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services" className="inline-flex items-center gap-2 text-primary font-bold text-lg no-underline hover:text-accent transition-colors">
              View All Services <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 md:py-24 bg-primary-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1494412574643-ff11b0a5eb19?w=1920&q=80')] bg-cover bg-center opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <SectionLabel>Our Track Record</SectionLabel>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-4xl md:text-5xl font-extrabold text-accent mb-2">
                  <CountUp end={s.value} suffix={s.suffix} />
                </div>
                <p className="text-gray-400 text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <SectionLabel>How It Works</SectionLabel>
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-dark">
                Simple Process. Zero Hassle.
              </h2>
            </AnimatedSection>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <AnimatedSection key={s.title} delay={i * 0.15}>
                <div className="text-center relative">
                  <div className="w-16 h-16 rounded-2xl bg-primary text-white flex items-center justify-center mx-auto mb-5 text-xl font-bold relative z-10">
                    <s.icon className="w-8 h-8" />
                  </div>
                  {i < steps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gray-200" />
                  )}
                  <div className="text-xs font-bold text-accent mb-2">STEP {i + 1}</div>
                  <h3 className="text-lg font-bold text-primary-dark mb-3">{s.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <SectionLabel>What Our Clients Say</SectionLabel>
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-dark">
                Trusted by Hundreds. Loved by All.
              </h2>
            </AnimatedSection>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <AnimatedSection key={t.name} delay={i * 0.1}>
                <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-5 h-5 text-accent fill-accent" />
                    ))}
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6 italic">"{t.quote}"</p>
                  <div className="flex items-center gap-3">
                    <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                    <div>
                      <p className="font-semibold text-primary-dark text-sm">{t.name}</p>
                      <p className="text-gray-500 text-xs">{t.role}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 md:py-28 bg-gradient-to-r from-primary-dark to-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=1920&q=80')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/80 to-primary/60" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-5">
              Ready to Move? Let's Get Started.
            </h2>
            <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
              Whether it's a single delivery or an ongoing logistics contract — we have a solution that fits you perfectly.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-primary-dark font-bold px-8 py-4 rounded-xl text-lg no-underline transition-all hover:scale-105">
                Book a Transport <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-8 text-gray-300">
              <a href="tel:+1234567890" className="flex items-center gap-2 no-underline text-gray-300 hover:text-accent transition-colors">
                <Phone className="w-5 h-5" /> +1 234 567 890
              </a>
              <a href="mailto:info@transitpro.com" className="flex items-center gap-2 no-underline text-gray-300 hover:text-accent transition-colors">
                <Mail className="w-5 h-5" /> info@transitpro.com
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Blog Teaser */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <SectionLabel>From Our Blog</SectionLabel>
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-dark">
                Transport Tips & Industry Insights
              </h2>
            </AnimatedSection>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((p, i) => (
              <AnimatedSection key={p.title} delay={i * 0.15}>
                <div className="bg-surface rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-48 overflow-hidden">
                    <img src={p.img} alt={p.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">{p.category}</span>
                      <span className="text-xs text-gray-500">{p.time} read</span>
                    </div>
                    <h3 className="font-bold text-primary-dark mb-3">{p.title}</h3>
                    <Link to="/blog" className="text-sm text-primary font-semibold no-underline hover:text-accent transition-colors inline-flex items-center gap-1">
                      Read More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/blog" className="inline-flex items-center gap-2 text-primary font-bold text-lg no-underline hover:text-accent transition-colors">
              View All Articles <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
