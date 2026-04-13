import { Link } from 'react-router-dom'
import { Truck, Phone, Mail, MapPin, Globe, Share2, Link as LinkIcon, Play } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link to="/" className="flex items-center gap-2 no-underline mb-4">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <Truck className="w-6 h-6 text-primary-dark" />
              </div>
              <span className="text-xl font-bold text-white">TransitPro</span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              Your trusted transport partner. Moving goods across the city — safely, swiftly, and reliably since 2014.
            </p>
            <div className="flex gap-3 mt-5">
              {[Globe, Share2, LinkIcon, Play].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary-dark transition-colors text-gray-400">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-3 list-none p-0 m-0">
              {[['/', 'Home'], ['/about', 'About Us'], ['/services', 'Services'], ['/blog', 'Blog'], ['/contact', 'Contact'], ['/faqs', 'FAQs']].map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="text-sm text-gray-400 hover:text-accent no-underline transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Services</h3>
            <ul className="space-y-3 list-none p-0 m-0">
              {['Personal Removals', 'Commercial Freight', 'Last-Mile Delivery', 'Office Relocation', 'Specialised Cargo'].map(s => (
                <li key={s}>
                  <Link to="/services" className="text-sm text-gray-400 hover:text-accent no-underline transition-colors">{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-sm text-gray-400">123 Transport Ave, Logistics Hub, Melbourne VIC 3000</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <a href="tel:+1234567890" className="text-sm text-gray-400 no-underline hover:text-accent">+1 234 567 890</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <a href="mailto:info@transitpro.com" className="text-sm text-gray-400 no-underline hover:text-accent">info@transitpro.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} TransitPro. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-gray-500 no-underline hover:text-gray-300">Privacy Policy</a>
            <a href="#" className="text-sm text-gray-500 no-underline hover:text-gray-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
