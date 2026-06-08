import { useState, useEffect } from 'react';
import {
  Smartphone,
  Menu,
  X,
  Star,
  MapPin,
  Phone,
  Mail,
  Clock,
  Shield,
  Wrench,
  ShoppingBag,
  Battery,
  Wifi,
  ChevronRight,
  CheckCircle,
  Facebook,
  Instagram,
  MessageCircle,
} from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

const SERVICES = [
  {
    icon: ShoppingBag,
    title: 'Mobile Sales',
    description:
      'Latest smartphones from Samsung, Apple, Xiaomi, Oppo, Vivo, Tecno and more — all at competitive prices.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: Wrench,
    title: 'Mobile Repair',
    description:
      'Expert repair services for cracked screens, battery replacements, water damage, and all hardware issues.',
    color: 'bg-emerald-50 text-emerald-600',
  },
  {
    icon: Battery,
    title: 'Battery Replacement',
    description:
      'Genuine battery replacements for all major brands to restore your device to full performance.',
    color: 'bg-amber-50 text-amber-600',
  },
  {
    icon: Wifi,
    title: 'SIM & Network',
    description:
      'SIM card services, mobile internet packages, and network configuration assistance for all operators.',
    color: 'bg-rose-50 text-rose-600',
  },
  {
    icon: Shield,
    title: 'Accessories',
    description:
      'Premium cases, tempered glass, chargers, earphones, power banks, and all essential accessories.',
    color: 'bg-violet-50 text-violet-600',
  },
  {
    icon: Smartphone,
    title: 'Software Services',
    description:
      'IMEI repair, flashing, unlocking, software updates, and data recovery services by certified technicians.',
    color: 'bg-cyan-50 text-cyan-600',
  },
];

const BRANDS = [
  'Samsung', 'Apple', 'Xiaomi', 'Oppo', 'Vivo', 'Tecno', 'Infinix', 'Nokia',
];

const TESTIMONIALS = [
  {
    name: 'Asif Raza',
    text: 'Got my Samsung screen replaced in just one hour. Excellent service and very affordable price. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Sadia Malik',
    text: 'Bought a new Xiaomi phone at the best price in Gujrat. The staff is very helpful and knowledgeable.',
    rating: 5,
  },
  {
    name: 'Usman Tariq',
    text: 'Battery replacement done perfectly. My phone feels brand new. Great technicians at Star Mobile Point.',
    rating: 5,
  },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', phone: '', message: '' });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* ── Navbar ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-md' : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-2 group">
              <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center shadow-sm group-hover:bg-blue-700 transition-colors">
                <Smartphone className="w-5 h-5 text-white" />
              </div>
              <div className="leading-tight">
                <span className={`font-bold text-base transition-colors ${scrolled ? 'text-gray-900' : 'text-white'}`}>
                  Star Mobile
                </span>
                <span className={`block text-xs font-medium transition-colors ${scrolled ? 'text-blue-600' : 'text-blue-300'}`}>
                  Point
                </span>
              </div>
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-blue-500 ${
                    scrolled ? 'text-gray-700' : 'text-white/90'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
              >
                Get in Touch
              </a>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors ${
                scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
            <div className="px-4 py-3 space-y-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-2.5 px-3 text-gray-700 font-medium rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="block mt-2 py-2.5 px-3 bg-blue-600 text-white font-semibold rounded-lg text-center hover:bg-blue-700 transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>
        )}
      </header>

      {/* ── Hero ── */}
      <section
        id="home"
        className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-blue-950 to-blue-900 overflow-hidden"
      >
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
              backgroundSize: '40px 40px',
            }}
          />
        </div>

        {/* Glow orbs */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full opacity-10 blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-cyan-400 rounded-full opacity-10 blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 pt-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-300 text-sm font-medium mb-6">
                <MapPin className="w-3.5 h-3.5" />
                Gujrat, Punjab, Pakistan
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
                Your Trusted
                <span className="block text-blue-400"> Mobile Shop</span>
                in Gujrat
              </h1>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-lg">
                From the latest smartphones to expert repair services — Star Mobile Point is Gujrat's
                go-to destination for all your mobile needs since 2015.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-400 transition-all shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5"
                >
                  Our Services
                  <ChevronRight className="w-4 h-4" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all border border-white/20"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/10">
                {[
                  { value: '10+', label: 'Years Experience' },
                  { value: '5000+', label: 'Happy Customers' },
                  { value: '8+', label: 'Top Brands' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-slate-400 mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero image */}
            <div className="hidden lg:flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500 rounded-3xl opacity-20 blur-2xl scale-110" />
                <img
                  src="https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Smartphones collection"
                  className="relative rounded-3xl shadow-2xl w-full max-w-md object-cover aspect-[4/5]"
                />
                <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">Trusted Shop</div>
                    <div className="text-xs text-gray-500">Since 2015</div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-gray-900">5.0 Rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40 text-xs">
          <span>Scroll down</span>
          <div className="w-px h-8 bg-white/20" />
        </div>
      </section>

      {/* ── Brand strip ── */}
      <section className="py-10 bg-gray-50 border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-gray-400 mb-6">
            Authorized Brands We Carry
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
            {BRANDS.map((brand) => (
              <span
                key={brand}
                className="px-4 py-2 bg-white rounded-lg border border-gray-200 text-sm font-semibold text-gray-600 shadow-sm hover:shadow-md hover:border-blue-200 hover:text-blue-600 transition-all"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image side */}
            <div className="relative order-2 lg:order-1">
              <div className="absolute -inset-4 bg-blue-50 rounded-3xl -z-10" />
              <img
                src="https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Mobile shop interior"
                className="rounded-2xl shadow-lg w-full object-cover aspect-[4/3]"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white rounded-2xl shadow-xl p-5">
                <div className="text-3xl font-extrabold">10+</div>
                <div className="text-sm text-blue-200 mt-0.5">Years in Business</div>
              </div>
            </div>

            {/* Text side */}
            <div className="order-1 lg:order-2">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 mb-3">
                About Us
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-5 leading-tight">
                Gujrat's Most Trusted Mobile Destination
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Star Mobile Point was established in 2015 in the heart of Gujrat, Pakistan. We
                started with a simple mission: provide the people of Gujrat with quality smartphones
                and honest repair services at fair prices.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Over the decade, we have grown to become one of the most recognized mobile shops in
                the city, serving thousands of satisfied customers. Our team of certified technicians
                and knowledgeable sales staff ensure every customer gets the best possible experience.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  'Authorized dealer for major smartphone brands',
                  'Certified repair technicians with 5+ years experience',
                  'Genuine parts & accessories only',
                  '30-day warranty on all repair services',
                  'Transparent pricing — no hidden charges',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                Contact Us Today
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 mb-3">
              What We Offer
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              From buying a new phone to fixing your current one, we cover everything mobile-related
              under one roof in Gujrat.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all group"
                >
                  <div className={`w-12 h-12 ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{service.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>

          {/* CTA banner */}
          <div className="mt-14 bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div>
              <h3 className="text-2xl font-extrabold text-white mb-1">
                Need a Quick Repair?
              </h3>
              <p className="text-blue-200 text-sm">
                Walk in or call us. Same-day service available for most repairs.
              </p>
            </div>
            <a
              href="#contact"
              className="shrink-0 px-6 py-3 bg-white text-blue-700 font-bold rounded-xl hover:bg-blue-50 transition-colors shadow-lg whitespace-nowrap"
            >
              Book a Repair
            </a>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 mb-3">
              Customer Reviews
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="flex mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold text-sm">
                    {t.name[0]}
                  </div>
                  <span className="font-semibold text-gray-800 text-sm">{t.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 mb-3">
              Get In Touch
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Contact Us
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Have a question, need a repair, or want to check our latest stock? Reach out — we're
              happy to help.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact info */}
            <div className="space-y-6">
              {[
                {
                  icon: MapPin,
                  color: 'bg-blue-100 text-blue-600',
                  label: 'Our Location',
                  lines: ['Main Bazar, Near Ghanta Ghar', 'Gujrat, Punjab 50700, Pakistan'],
                },
                {
                  icon: Phone,
                  color: 'bg-emerald-100 text-emerald-600',
                  label: 'Phone / WhatsApp',
                  lines: ['+92 333 1234567', '+92 321 9876543'],
                },
                {
                  icon: Mail,
                  color: 'bg-amber-100 text-amber-600',
                  label: 'Email',
                  lines: ['info@starmobilepoint.pk'],
                },
                {
                  icon: Clock,
                  color: 'bg-rose-100 text-rose-600',
                  label: 'Business Hours',
                  lines: ['Mon – Sat: 9:00 AM – 9:00 PM', 'Sunday: 11:00 AM – 6:00 PM'],
                },
              ].map(({ icon: Icon, color, label, lines }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className={`w-11 h-11 ${color} rounded-xl flex items-center justify-center shrink-0`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900 mb-0.5">{label}</div>
                    {lines.map((line) => (
                      <div key={line} className="text-gray-600 text-sm">{line}</div>
                    ))}
                  </div>
                </div>
              ))}

              {/* Social links */}
              <div className="pt-2">
                <div className="text-sm font-semibold text-gray-900 mb-3">Follow Us</div>
                <div className="flex gap-3">
                  {[
                    { icon: Facebook, label: 'Facebook', color: 'hover:bg-blue-600 hover:text-white' },
                    { icon: Instagram, label: 'Instagram', color: 'hover:bg-pink-600 hover:text-white' },
                    { icon: MessageCircle, label: 'WhatsApp', color: 'hover:bg-emerald-600 hover:text-white' },
                  ].map(({ icon: Icon, label, color }) => (
                    <button
                      key={label}
                      aria-label={label}
                      className={`w-10 h-10 rounded-xl border border-gray-200 bg-white flex items-center justify-center text-gray-500 transition-all shadow-sm ${color}`}
                    >
                      <Icon className="w-4 h-4" />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Send Us a Message</h3>

              {submitted && (
                <div className="mb-5 p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-3 text-emerald-700 text-sm font-medium">
                  <CheckCircle className="w-5 h-5 shrink-0" />
                  Message sent! We'll get back to you shortly.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ahmed Ali"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-gray-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+92 3XX XXXXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-gray-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe your mobile issue or inquiry..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-gray-400 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center">
                  <Smartphone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-bold text-white">Star Mobile Point</div>
                  <div className="text-xs text-blue-400">Gujrat, Pakistan</div>
                </div>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
                Your one-stop mobile shop in Gujrat for the latest phones, accessories, and expert
                repair services since 2015.
              </p>
            </div>

            {/* Quick links */}
            <div>
              <h4 className="font-semibold text-white text-sm mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-blue-400 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact snippet */}
            <div>
              <h4 className="font-semibold text-white text-sm mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-blue-400" />
                  Main Bazar, Gujrat
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 shrink-0 text-blue-400" />
                  +92 333 1234567
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="w-4 h-4 shrink-0 text-blue-400" />
                  Mon – Sat: 9am – 9pm
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
            <span>© {new Date().getFullYear()} Star Mobile Point. All rights reserved.</span>
            <span>Made with care in Gujrat, Pakistan</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
