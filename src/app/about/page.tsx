"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const team = [
  {
    name: 'Kartik Guleria',
    role: 'Founder & CEO',
    description: 'Visionary leader focused on product strategy and the future of rail e-commerce. Passionate about solving real problems for millions of travelers.',
    gradient: 'from-blue-500 to-cyan-400',
  },
  {
    name: 'Harshit Sinha',
    role: 'Founder & Ops Head',
    description: 'Logistics mastermind ensuring every order meets its destination on time. Expert in building efficient delivery systems at scale.',
    gradient: 'from-purple-500 to-pink-400',
  },
  {
    name: 'Avni Porwal',
    role: 'Design Lead',
    description: 'Creating seamless and delightful user experiences for our travelers. Bringing creativity and empathy to every design decision.',
    gradient: 'from-orange-500 to-amber-400',
  },
];

const values = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'Empathy First',
    description: 'We build for the passenger who needs help in the middle of nowhere. Every feature is designed with real traveler pain points in mind.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Extreme Speed',
    description: 'Train stops are short. Our logistics are faster. We optimize every second to ensure your essentials reach you before departure.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Trust & Quality',
    description: 'We source only verified, high-quality products. No more worrying about fake or overpriced items from unauthorized vendors.',
  },
];

const milestones = [
  {
    year: '2025',
    title: 'The Idea',
    description: 'Kartik faced a problem getting essential medicines during a train journey. The frustration sparked the vision for RailQuick.',
  },
  {
    year: '2025',
    title: 'Team Formation',
    description: 'Harshit and Avni joined to build the solution. Together, we formed a passionate team with complementary skills.',
  },
  {
    year: '2025',
    title: 'Test Phase Completed',
    description: 'Conducted extensive testing with 80+ testers and 200+ interactions at Delhi stations to validate our model.',
  },
];

export default function AboutPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [headerScrolled, setHeaderScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setHeaderScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${headerScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-slate-100' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <Link href="/" className="flex items-center gap-2 group">
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">RailQuick</span>
            </Link>

            <div className="hidden md:flex items-center gap-1">
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
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${item.href === '/about'
                    ? 'bg-slate-100 text-slate-900 shadow-inner'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                    }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="hidden md:block">
              <Link href="/#waitlist">
                <Button className="bg-slate-900 hover:bg-slate-800 text-white rounded-full px-6 shadow-lg shadow-slate-900/20 transition-all hover:shadow-xl hover:shadow-slate-900/30 hover:-translate-y-0.5 active:scale-95">
                  Join Waitlist
                </Button>
              </Link>
            </div>

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 text-slate-600 hover:text-slate-900 transition-colors">
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Outside Nav for visibility */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-[60] pt-[64px] bg-white/98 backdrop-blur-xl animate-in slide-in-from-top duration-300">
          <div className="px-6 py-8 space-y-8 overflow-y-auto h-full pb-20">
            <div className="flex flex-col gap-6">
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
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-3xl font-bold text-slate-900 active:text-blue-600 transition-colors py-3 border-b border-slate-100 flex items-center justify-between group"
                >
                  {item.label}
                  <svg className="w-6 h-6 text-slate-300 group-active:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </div>
            <div className="pt-6">
              <Button
                onClick={() => { setMobileMenuOpen(false); }}
                className="w-full h-16 bg-slate-900 text-white rounded-2xl text-xl font-bold shadow-2xl shadow-slate-900/20 active:scale-[0.98] transition-all"
              >
                Join Waitlist
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 relative overflow-hidden bg-white">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/80 backdrop-blur-sm rounded-full border border-slate-200 shadow-sm mb-8 hover:shadow-md transition-shadow cursor-default"
          >
            <span className="text-sm font-semibold text-slate-700">Our Story</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-[1.1] tracking-tight"
          >
            The passion behind
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">RailQuick</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            A journey that started with a personal struggle on a moving train.
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 lg:py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight tracking-tight">
                  The idea that changed a journey
                </h2>
                <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
                  <p>
                    Kartik Guleria was traveling to Shirdi when he realized how difficult it was to get essential medicines or snacks on a train. Unlike the 10-minute delivery services in cities, train travelers were left with limited and often low-quality options.
                  </p>
                  <p className="font-medium text-slate-900">
                    This frustration sparked an idea: <span className="text-blue-600 font-bold">RailQuick</span>. Today, alongside Harshit Sinha, we are building India&apos;s first on-seat essential delivery service.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/test-phase">
                  <Button className="bg-slate-900 hover:bg-slate-800 text-white rounded-full px-8 h-12 font-medium shadow-xl transition-all hover:-translate-y-0.5 w-full sm:w-auto">
                    View Our Journey
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="rounded-full px-8 h-12 font-medium border-2 hover:bg-slate-50 w-full sm:w-auto">
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Visual */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-slate-100 to-white rounded-[2.5rem] p-8 lg:p-12 border border-slate-100 shadow-2xl shadow-slate-200/50">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow">
                    <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">80+</div>
                    <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">Early Testers</div>
                  </div>
                  <div className="bg-white rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow">
                    <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">5</div>
                    <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">Train Routes</div>
                  </div>
                  <div className="bg-white rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow">
                    <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">200+</div>
                    <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">Interactions</div>
                  </div>
                  <div className="bg-white rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow">
                    <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">1</div>
                    <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">City Covered</div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-12 -right-12 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-10" />
              <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">What we stand for</h2>
            <p className="text-lg text-slate-600">The core values that drive everything we do at RailQuick.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-[2rem] p-8 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-slate-100/50"
              >
                <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-900 mb-6 shadow-inner">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed text-lg">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <p className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4">Our Team</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Meet the builders</h2>
            <p className="text-lg text-slate-600">The passionate team driving the revolution in train travel.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group text-center"
              >
                <div className="relative mb-8 inline-block">
                  <div className={`w-56 h-56 mx-auto rounded-[2rem] bg-gradient-to-br ${member.gradient} p-1 transform group-hover:scale-105 transition-transform duration-500`}>
                    <div className="w-full h-full bg-white rounded-[1.8rem] flex items-center justify-center overflow-hidden relative">
                      {/* Placeholder for real image, using avatar icon for now */}
                      <div className="absolute inset-0 bg-slate-50" />
                      <svg className="w-24 h-24 text-slate-300 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  </div>
                  {/* Decorative glow */}
                  <div className={`absolute inset-0 w-56 h-56 mx-auto rounded-[2rem] bg-gradient-to-br ${member.gradient} opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-500 -z-10`} />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-4">{member.role}</p>
                <p className="text-slate-600 max-w-xs mx-auto leading-relaxed">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 lg:py-32 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">Our journey</h2>
            <p className="text-lg text-slate-400">From an idea to reality - the milestones that shaped RailQuick.</p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-slate-800 lg:-translate-x-1/2" />

            <div className="space-y-12 lg:space-y-0">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative lg:grid lg:grid-cols-2 lg:gap-16 ${index % 2 === 0 ? '' : 'lg:direction-rtl'} ${index !== milestones.length - 1 ? 'lg:pb-16' : ''}`}>
                  {/* Content */}
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className={`ml-16 lg:ml-0 lg:${index % 2 === 0 ? 'text-right pr-16' : 'text-left pl-16 col-start-2'}`}
                  >
                    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-800 transition-colors group">
                      <div className="text-sm font-bold text-blue-400 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-200 transition-colors">{milestone.title}</h3>
                      <p className="text-slate-400 leading-relaxed">{milestone.description}</p>
                    </div>
                  </motion.div>

                  {/* Dot */}
                  <div className="absolute left-8 lg:left-1/2 w-4 h-4 bg-slate-900 border-4 border-slate-700 rounded-full lg:-translate-x-1/2 mt-8 z-10 lg:ml-0 -ml-2" />

                  {/* Empty space for grid */}
                  <div className={index % 2 === 0 ? '' : 'col-start-1 row-start-1'} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-8 tracking-tight">Join us on this journey</h2>
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
            Be part of India&apos;s first train on-seat delivery revolution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button className="bg-slate-900 hover:bg-slate-800 text-white rounded-full px-10 h-16 text-lg font-bold shadow-xl shadow-slate-900/20 transition-all hover:shadow-2xl hover:shadow-slate-900/30 hover:-translate-y-1 w-full sm:w-auto">
                Join Waitlist
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="h-16 px-10 text-lg font-bold rounded-full border-2 hover:bg-slate-50 w-full sm:w-auto">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 pt-16 pb-8 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
            <Link href="/" className="text-2xl font-bold text-white tracking-tight">RailQuick</Link>
            <div className="flex flex-wrap justify-center gap-8 text-slate-400 font-medium">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <Link href="/about" className="hover:text-white transition-colors">About</Link>
              <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
              <Link href="/hiring" className="hover:text-white transition-colors">Careers</Link>
            </div>
          </div>
          <div className="border-t border-slate-800/50 pt-8 text-center">
            <p className="text-slate-500 text-sm">© 2026 RailQuick. Revolutionizing train travel.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
