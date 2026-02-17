"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CheckCircle2, Clock, Smartphone, Zap } from "lucide-react";

const phases = [
  {
    number: '01',
    title: 'Phase 1: Testing',
    status: 'completed',
    description: 'We conducted extensive testing with real travelers to validate our concept and understand their needs.',
    achievements: [
      '80+ early testers validated our model',
      '200+ traveler interactions at stations',
      '5 train routes covered in Delhi NCR',
    ],
  },
  {
    number: '02',
    title: 'Phase 2: Launch',
    status: 'upcoming',
    description: 'Building on our learnings, we\'re preparing to launch our delivery service across more routes.',
    achievements: [
      'Adding more train routes',
      'Expanding product catalog',
      'Building partnerships',
      'Setting up delivery infrastructure',
    ],
  },
];

const learnings = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Trust First',
    description: 'We learned that travelers care most about quality and transparent pricing. No more overcharging from unauthorized vendors.',
    gradient: 'from-blue-500 to-cyan-400',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Extreme Speed',
    description: 'On a train, a station stop is only minutes. Our logistics are tuned for maximum efficiency to ensure delivery before departure.',
    gradient: 'from-purple-500 to-pink-400',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'User-Centric Design',
    description: 'The feedback from our first 80 testers helped us refine the PNR-based ordering system to be as simple as "Enter PNR → Get Food".',
    gradient: 'from-orange-500 to-amber-400',
  },
];

const stations = [
  { name: 'Hazrat Nizamuddin', code: 'NZM', status: 'active' },
  { name: 'New Delhi', code: 'NDLS', status: 'active' },
  { name: 'Delhi Junction', code: 'DLI', status: 'active' },
  { name: 'Anand Vihar Terminal', code: 'ANVT', status: 'active' },
];

export default function TestPhasePage() {
  const [headerScrolled, setHeaderScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setHeaderScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${headerScrolled ? 'bg-white/80 backdrop-blur-xl border-b border-slate-100 shadow-sm' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <Link href="/" className="flex items-center gap-2 group">
              <img src="/images/logo-full.png" alt="RailQuick" className="h-10 sm:h-12 w-auto mix-blend-multiply" />
            </Link>
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1 bg-slate-100/50 backdrop-blur-md p-1 rounded-full border border-slate-200/50">
              {[
                { label: 'Home', href: '/' },
                { label: 'About', href: '/about' },
                { label: 'Test Phase', href: '/test-phase' },
                { label: 'Contact', href: '/contact' },
                { label: "We're Hiring", href: '/hiring' },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${item.href === '/test-phase'
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-500 hover:text-slate-900 hover:bg-white/50'
                    }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="hidden md:block">
              <Link href="/#waitlist">
                <Button className="bg-slate-900 hover:bg-slate-800 text-white rounded-full px-6 h-11 shadow-lg shadow-slate-900/20 transition-all hover:shadow-xl hover:-translate-y-0.5 font-bold">
                  Join Waitlist
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Consistent Mobile Navigation - Simple Top Bar */}
        <div className="md:hidden border-t border-slate-100 bg-white/80 backdrop-blur-md overflow-x-auto no-scrollbar py-3">
          <div className="flex items-center justify-start gap-1 px-4 min-w-max bg-slate-100/50 backdrop-blur-md p-1 rounded-full border border-slate-200/50 mx-auto w-fit">
            {[
              { label: 'Home', href: '/' },
              { label: 'About', href: '/about' },
              { label: 'Test Phase', href: '/test-phase' },
              { label: 'Contact', href: '/contact' },
              { label: 'Hiring', href: '/hiring' },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${item.href === '/test-phase'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-500 hover:text-slate-900 hover:bg-white/50'
                  }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 relative overflow-hidden bg-white">
        <div className="absolute top-0 left-1/4 w-[600px] h-[300px] bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[250px] bg-orange-100/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-slate-200 shadow-sm mb-8 hover:shadow-md transition-shadow"
          >
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span className="text-sm font-semibold text-slate-700">Test Phase: <span className="text-green-600">Completed</span></span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-[1.1] tracking-tight"
          >
            From idea to
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">validation</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            We spent months on the platforms of Delhi&apos;s busiest stations to understand the real problems of travelers.
          </motion.p>
        </div>
      </section>

      {/* Human Connection */}
      <section className="py-20 lg:py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-slate-900 rounded-[2.5rem] overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-orange-600/20 opacity-30" />
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl" />

            <div className="relative p-8 sm:p-12 lg:p-20 text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">The Human Connection</h2>
              <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed">
                We spent time at Delhi&apos;s busiest stations, talking to travelers and understanding their struggles. Over 80+ testers helped us validate our concept through real conversations.
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-6 border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="text-4xl sm:text-5xl font-bold text-white mb-2">80+</div>
                  <div className="text-slate-400 font-medium">Early Testers</div>
                </div>
                <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-6 border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="text-4xl sm:text-5xl font-bold text-white mb-2">200+</div>
                  <div className="text-slate-400 font-medium">Interactions</div>
                </div>
                <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-6 border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="text-4xl sm:text-5xl font-bold text-white mb-2">4</div>
                  <div className="text-slate-400 font-medium">Top Stations</div>
                </div>
                <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-6 border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="text-4xl sm:text-5xl font-bold text-white mb-2">100%</div>
                  <div className="text-slate-400 font-medium">Commitment</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Learned */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">What we learned</h2>
            <p className="text-lg text-slate-600">Key insights from our early testing phase that shaped our product.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            {learnings.map((learning, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-[2rem] p-8 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-slate-100"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${learning.gradient} rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg`}>
                  {learning.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{learning.title}</h3>
                <p className="text-slate-600 leading-relaxed text-lg">{learning.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Active Stations */}
      <section className="py-20 lg:py-32 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">Tested in Delhi</h2>
            <p className="text-lg text-slate-400">Stations where we conducted our test phase and validated our model.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stations.map((station, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 text-center border border-slate-700/50 hover:bg-slate-800 hover:border-slate-600 hover:-translate-y-1 transition-all group"
              >
                <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors">
                  <span className="flex h-1.5 w-1.5 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-500"></span>
                  </span>
                  <span className="text-[10px] font-bold text-blue-400 uppercase tracking-wider">Validated</span>
                </div>
                <div className="text-xl font-bold text-white mb-2">{station.name}</div>
                <div className="text-slate-500 font-mono text-sm bg-slate-900/50 inline-block px-2 py-1 rounded-md">{station.code}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-8 tracking-tight">Be part of our journey</h2>
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
            Join our waitlist and be the first to experience on-seat delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#waitlist">
              <Button className="bg-slate-900 hover:bg-slate-800 text-white rounded-full px-10 h-16 text-lg font-bold shadow-xl shadow-slate-900/20 transition-all hover:shadow-2xl hover:shadow-slate-900/30 hover:-translate-y-1 w-full sm:w-auto">
                Join Waitlist
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="h-16 px-10 text-lg font-bold rounded-full border-2 hover:bg-slate-50 w-full sm:w-auto">
                Partner With Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 pt-12 sm:pt-14 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-10">
            <div className="md:col-span-2">
              <Link href="/" className="inline-block mb-3 bg-white p-2 rounded-xl shadow-sm">
                <img src="/images/logo-full.png" alt="RailQuick" className="h-10 sm:h-12 w-auto" />
              </Link>
              <p className="text-sm sm:text-base text-slate-400 mb-5 max-w-sm">Your journey, our priority. Revolutionizing train travel with on-seat essential delivery.</p>
              <div className="flex gap-2 sm:gap-3">
                <a href="https://www.linkedin.com/company/railquick/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 sm:w-10 sm:h-10 bg-slate-800 rounded-lg sm:rounded-xl flex items-center justify-center text-slate-400 hover:bg-white hover:text-slate-900 transition-all">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                </a>
                <a href="https://www.instagram.com/railquick/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 sm:w-10 sm:h-10 bg-slate-800 rounded-lg sm:rounded-xl flex items-center justify-center text-slate-400 hover:bg-white hover:text-slate-900 transition-all">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                </a>
                <a href="mailto:contact.railquick@gmail.com" className="w-9 h-9 sm:w-10 sm:h-10 bg-slate-800 rounded-lg sm:rounded-xl flex items-center justify-center text-slate-400 hover:bg-white hover:text-slate-900 transition-all">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-3 text-sm sm:text-base">Quick Links</h4>
              <div className="space-y-2 sm:space-y-3">
                <Link href="/" className="block text-slate-400 hover:text-white transition-colors text-sm sm:text-base">Home</Link>
                <Link href="/about" className="block text-slate-400 hover:text-white transition-colors text-sm sm:text-base">About Us</Link>
                <Link href="/test-phase" className="block text-slate-400 hover:text-white transition-colors text-sm sm:text-base">Test Phase</Link>
                <Link href="/contact" className="block text-slate-400 hover:text-white transition-colors text-sm sm:text-base">Contact</Link>
                <Link href="/hiring" className="block text-slate-400 hover:text-white transition-colors text-sm sm:text-base">Careers</Link>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-3 text-sm sm:text-base">Contact</h4>
              <div className="space-y-2 sm:space-y-3 text-slate-400 text-sm sm:text-base">
                <p>contact.railquick@gmail.com</p>
                <p>Delhi, India</p>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-6 text-center">
            <p className="text-slate-500 text-sm">© 2026 RailQuick. Revolutionizing train travel.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
