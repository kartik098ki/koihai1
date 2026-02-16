"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

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
                    item.href === '/about' 
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
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-100/30 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-slate-200 shadow-sm mb-6 sm:mb-8">
            <span className="text-sm font-semibold text-slate-700">Our Story</span>
          </div>
          
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-slate-900 mb-4 sm:mb-6 leading-tight">
            The passion behind
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">RailQuick</span>
          </h1>
          
          <p className="text-base sm:text-xl text-slate-600 max-w-2xl mx-auto">
            A journey that started with a personal struggle on a moving train.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-12 sm:py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-16 items-center">
            {/* Content */}
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-4 sm:space-y-6">
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                  The idea that changed a journey
                </h2>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  Kartik Guleria was traveling to Shirdi when he realized how difficult it was to get essential medicines or snacks on a train. Unlike the 10-minute delivery services in cities, train travelers were left with limited and often low-quality options.
                </p>
                <p className="text-base sm:text-lg text-slate-900 font-medium leading-relaxed">
                  This frustration sparked an idea: <span className="text-blue-600 font-bold">RailQuick</span>. Today, alongside Harshit Sinha, we are building India&apos;s first on-seat essential delivery service.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/test-phase">
                  <Button className="bg-slate-900 hover:bg-slate-800 text-white rounded-full px-6 shadow-xl transition-all hover:-translate-y-0.5 w-full sm:w-auto">
                    View Our Journey
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="rounded-full px-6 border-2 hover:bg-slate-50 w-full sm:w-auto">
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </div>

            {/* Visual */}
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-100 to-slate-50 rounded-3xl p-8 lg:p-12">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-2xl p-6 shadow-lg shadow-slate-200/50">
                    <div className="text-4xl font-bold text-blue-600 mb-2">80+</div>
                    <div className="text-sm text-slate-600">Early Testers</div>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-lg shadow-slate-200/50">
                    <div className="text-4xl font-bold text-blue-600 mb-2">5</div>
                    <div className="text-sm text-slate-600">Train Routes</div>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-lg shadow-slate-200/50">
                    <div className="text-4xl font-bold text-blue-600 mb-2">200+</div>
                    <div className="text-sm text-slate-600">Interactions</div>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-lg shadow-slate-200/50">
                    <div className="text-4xl font-bold text-blue-600 mb-2">1</div>
                    <div className="text-sm text-slate-600">City Covered</div>
                  </div>
                </div>
              </div>
              
              {/* Decorative */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/10 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/10 rounded-full blur-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 sm:py-20 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6">What we stand for</h2>
            <p className="text-base sm:text-lg text-slate-600">The core values that drive everything we do at RailQuick.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
                <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-900 mb-6">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 sm:py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-20">
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-4">Our Team</p>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6">Meet the builders</h2>
            <p className="text-base sm:text-lg text-slate-600">The passionate team driving the revolution in train travel.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {team.map((member, index) => (
              <div key={index} className="group text-center">
                {/* Photo Placeholder */}
                <div className="relative mb-8">
                  <div className={`w-48 h-48 mx-auto rounded-3xl bg-gradient-to-br ${member.gradient} p-1`}>
                    <div className="w-full h-full bg-white rounded-[1.4rem] flex items-center justify-center">
                      <svg className="w-20 h-20 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  </div>
                  {/* Decorative ring */}
                  <div className={`absolute inset-0 w-48 h-48 mx-auto rounded-3xl bg-gradient-to-br ${member.gradient} opacity-20 blur-xl group-hover:opacity-40 transition-opacity`} />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-4">{member.role}</p>
                <p className="text-slate-600 max-w-xs mx-auto">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 sm:py-20 lg:py-32 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">Our journey</h2>
            <p className="text-base sm:text-lg text-slate-400">From an idea to reality - the milestones that shaped RailQuick.</p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-orange-500 hidden lg:block" />

            <div className="space-y-12 lg:space-y-0">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative lg:grid lg:grid-cols-2 lg:gap-16 ${index % 2 === 0 ? '' : 'lg:direction-rtl'} ${index !== milestones.length - 1 ? 'lg:pb-16' : ''}`}>
                  {/* Content */}
                  <div className={`lg:${index % 2 === 0 ? 'text-right pr-16' : 'text-left pl-16 col-start-2'}`}>
                    <div className="bg-slate-800/50 rounded-2xl p-8 inline-block hover:bg-slate-800 transition-colors">
                      <div className="text-sm font-semibold text-blue-400 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-white mb-2">{milestone.title}</h3>
                      <p className="text-slate-400">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Dot */}
                  <div className="hidden lg:block absolute left-1/2 top-8 -translate-x-1/2">
                    <div className="w-4 h-4 bg-white rounded-full ring-4 ring-slate-900" />
                  </div>

                  {/* Empty space for grid */}
                  <div className={index % 2 === 0 ? '' : 'col-start-1 row-start-1'} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-20 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6">Join us on this journey</h2>
          <p className="text-base sm:text-xl text-slate-600 mb-8 sm:mb-10">
            Be part of India&apos;s first train on-seat delivery revolution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button className="bg-slate-900 hover:bg-slate-800 text-white rounded-full px-8 h-12 sm:h-14 text-sm sm:text-base font-semibold shadow-xl shadow-slate-900/20 transition-all hover:shadow-2xl hover:shadow-slate-900/30 hover:-translate-y-0.5 w-full sm:w-auto">
                Join Waitlist
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="h-12 sm:h-14 px-8 text-sm sm:text-base font-semibold rounded-full border-2 hover:bg-slate-50 w-full sm:w-auto">
                Contact Us
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
