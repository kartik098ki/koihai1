"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

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
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Extreme Speed',
    description: 'On a train, a station stop is only minutes. Our logistics are tuned for maximum efficiency to ensure delivery before departure.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'User-Centric Design',
    description: 'The feedback from our first 80 testers helped us refine the PNR-based ordering system to be as simple as "Enter PNR → Get Food".',
  },
];

const stations = [
  { name: 'Hazrat Nizamuddin', code: 'NZM', status: 'active' },
  { name: 'New Delhi', code: 'NDLS', status: 'active' },
  { name: 'Delhi Junction', code: 'DLI', status: 'active' },
  { name: 'Anand Vihar Terminal', code: 'ANVT', status: 'active' },
];

export default function TestPhasePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [headerScrolled, setHeaderScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setHeaderScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${headerScrolled ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-slate-200/50' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">RailQuick</span>
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
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    item.href === '/test-phase' 
                      ? 'bg-slate-100 text-slate-900' 
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="hidden md:block">
              <Link href="/#waitlist">
                <Button className="bg-slate-900 hover:bg-slate-800 text-white rounded-full px-6 shadow-xl shadow-slate-900/20 transition-all hover:shadow-2xl hover:shadow-slate-900/30 hover:-translate-y-0.5">
                  Join Waitlist
                </Button>
              </Link>
            </div>

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2">
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

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t shadow-xl">
            <div className="px-6 py-4 space-y-2">
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
                  className="block px-4 py-3 rounded-xl text-slate-700 hover:bg-slate-50 font-medium"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[300px] bg-blue-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[250px] bg-orange-100/30 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-slate-200 shadow-sm mb-6 sm:mb-8">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-sm font-semibold text-slate-700">Test Phase: Completed</span>
          </div>
          
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-slate-900 mb-4 sm:mb-6 leading-tight">
            From idea to
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">validation</span>
          </h1>
          
          <p className="text-base sm:text-xl text-slate-600 max-w-2xl mx-auto">
            We spent months on the platforms of Delhi&apos;s busiest stations to understand the real problems of travelers.
          </p>
        </div>
      </section>

      {/* Human Connection */}
      <section className="py-12 sm:py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-[1.5rem] sm:rounded-[2.5rem] p-6 sm:p-8 lg:p-16 text-center relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.15),transparent_70%)]" />
            
            <div className="relative">
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">The Human Connection</h2>
              <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto mb-8 sm:mb-12">
                We spent time at Delhi&apos;s busiest stations, talking to travelers and understanding their struggles. Over 80+ testers helped us validate our concept through real conversations and 200+ interactions.
              </p>
              
              <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-xl rounded-2xl px-6 sm:px-8 py-4 sm:py-6 border border-white/10">
                <div className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white">80+</div>
                <div className="text-left">
                  <div className="text-xs sm:text-sm text-slate-400 uppercase tracking-wider">Early Testers</div>
                  <div className="text-sm sm:text-base text-white font-semibold">Validated our model</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Learned */}
      <section className="py-12 sm:py-20 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6">What we learned</h2>
            <p className="text-base sm:text-lg text-slate-600">Key insights from our early testing phase that shaped our product.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {learnings.map((learning, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
                <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-900 mb-6">
                  {learning.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{learning.title}</h3>
                <p className="text-slate-600 leading-relaxed">{learning.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Phases Timeline */}
      <section className="py-12 sm:py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6">Our phases</h2>
            <p className="text-base sm:text-lg text-slate-600">From validation to scale - our roadmap to serve every train passenger.</p>
          </div>

          <div className="space-y-8">
            {phases.map((phase, index) => (
              <div key={index} className={`relative bg-slate-50 rounded-3xl p-8 lg:p-12 transition-all duration-500 ${phase.status === 'current' ? 'ring-2 ring-blue-500 ring-offset-4 ring-offset-white' : ''}`}>
                <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                  {/* Number */}
                  <div className="flex-shrink-0">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-xl font-bold ${
                      phase.status === 'completed' 
                        ? 'bg-green-100 text-green-600' 
                        : phase.status === 'current' 
                          ? 'bg-blue-500 text-white' 
                          : 'bg-slate-200 text-slate-500'
                    }`}>
                      {phase.status === 'completed' ? (
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        phase.number
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <h3 className="text-2xl font-bold text-slate-900">{phase.title}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        phase.status === 'completed' 
                          ? 'bg-green-100 text-green-600' 
                          : phase.status === 'current' 
                            ? 'bg-blue-100 text-blue-600' 
                            : 'bg-slate-200 text-slate-500'
                      }`}>
                        {phase.status === 'completed' ? 'Completed' : phase.status === 'current' ? 'In Progress' : 'Upcoming'}
                      </span>
                    </div>
                    <p className="text-slate-600 mb-6 max-w-2xl">{phase.description}</p>
                    
                    <div className="grid sm:grid-cols-2 gap-3">
                      {phase.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-center gap-3 text-slate-700">
                          <svg className={`w-5 h-5 flex-shrink-0 ${phase.status === 'completed' ? 'text-green-500' : phase.status === 'current' ? 'text-blue-500' : 'text-slate-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {achievement}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Active Stations */}
      <section className="py-12 sm:py-20 lg:py-32 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">Tested in Delhi</h2>
            <p className="text-base sm:text-lg text-slate-400">Stations where we conducted our test phase and validated our model.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stations.map((station, index) => (
              <div key={index} className="bg-slate-800/50 rounded-2xl p-6 text-center border border-slate-700 hover:bg-slate-800 hover:border-slate-600 transition-all">
                <div className="inline-flex items-center gap-2 mb-3">
                  <span className="flex h-2 w-2 relative">
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                  </span>
                  <span className="text-xs font-semibold text-blue-400 uppercase">Tested</span>
                </div>
                <div className="text-2xl font-bold text-white mb-1">{station.name}</div>
                <div className="text-slate-500 font-mono">{station.code}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-20 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6">Be part of our journey</h2>
          <p className="text-base sm:text-xl text-slate-600 mb-8 sm:mb-10">
            Join our waitlist and be the first to experience on-seat delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#waitlist">
              <Button className="bg-slate-900 hover:bg-slate-800 text-white rounded-full px-8 h-12 sm:h-14 text-sm sm:text-base font-semibold shadow-xl shadow-slate-900/20 transition-all hover:shadow-2xl hover:shadow-slate-900/30 hover:-translate-y-0.5 w-full sm:w-auto">
                Join Waitlist
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="h-12 sm:h-14 px-8 text-sm sm:text-base font-semibold rounded-full border-2 hover:bg-slate-50 w-full sm:w-auto">
                Partner With Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 pt-12 sm:pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
            <Link href="/" className="text-xl sm:text-2xl font-bold text-white">RailQuick</Link>
            <div className="flex gap-6 text-slate-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <Link href="/about" className="hover:text-white transition-colors">About</Link>
              <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
              <Link href="/hiring" className="hover:text-white transition-colors">Careers</Link>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center">
            <p className="text-slate-500">© 2026 RailQuick. Revolutionizing train travel.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
