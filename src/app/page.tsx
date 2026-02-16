"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

// Supabase config
const SUPABASE_URL = 'https://lviykwlunvdfjizxpgvd.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx2aXlrd2x1bnZkZmppenhwZ3ZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI2NzUyOTYsImV4cCI6MjA3ODI1MTI5Nn0.ugD5GHsfYLKKRidFkvKL8fhQ0U_xXLxrT3lf18g0NW8';

async function submitToSupabase(table: string, data: Record<string, string>) {
  const response = await fetch(`${SUPABASE_URL}/rest/v1/${table}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'apikey': SUPABASE_ANON_KEY,
      'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
      'Prefer': 'return=minimal'
    },
    body: JSON.stringify(data)
  });
  return response.ok;
}

const steps = [
  { 
    number: '01', 
    title: 'Select Station', 
    description: 'Choose your upcoming station from our route list.',
    icon: (
      <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  },
  { 
    number: '02', 
    title: 'Add Essentials', 
    description: 'Pick medicines, travel items, or daily needs you require.',
    icon: (
      <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    )
  },
  { 
    number: '03', 
    title: 'On-Seat Delivery', 
    description: 'We deliver right to your seat/berth on arrival.',
    icon: (
      <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
];

const products = [
  { 
    title: 'Medicines', 
    description: 'Essential medicines and basic medical supplies.',
    gradient: 'from-blue-500 to-cyan-400',
    icon: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    )
  },
  { 
    title: 'Travel Essentials', 
    description: 'Blankets, pillows, locks, and travel accessories.',
    gradient: 'from-purple-500 to-pink-400',
    icon: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    )
  },
  { 
    title: 'Electronics', 
    description: 'Chargers, power banks, earphones and gadgets.',
    gradient: 'from-green-500 to-emerald-400',
    icon: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    )
  },
  { 
    title: 'Toiletries', 
    description: 'Personal hygiene products and daily essentials.',
    gradient: 'from-cyan-500 to-blue-400',
    icon: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  },
  { 
    title: 'Beverages', 
    description: 'Water bottles, energy drinks, and refreshments.',
    gradient: 'from-orange-500 to-amber-400',
    icon: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
];

const testimonials = [
  { name: 'Rohit', role: 'Passenger at Delhi Station', text: 'Local vendors often sell low-quality or fake products. I would always prefer ordering from RailQuick because it solves this exact problem.' },
  { name: 'Shreya', role: 'Solo Traveler', text: 'I\'ll definitely use this service. No overpricing, no different or fake products — that\'s what travelers actually need.' },
  { name: 'Varun', role: 'Regular Commuter', text: 'Finding trusted products during a train journey is always a problem. RailQuick makes it simple, reliable, and stress-free.' },
  { name: 'Gaurav', role: 'Business Traveler', text: 'Knowing that the products are verified gives confidence. I don\'t mind ordering if I know I\'m getting genuine items.' },
  { name: 'Ayush', role: 'Student Traveler', text: 'This feels like a service Indian Railways passengers have needed for a long time.' },
];

const stats = [
  { value: '80+', label: 'Testers' },
  { value: '5', label: 'Routes' },
  { value: '200+', label: 'Interactions' },
  { value: '1', label: 'City' },
];

const brands = ['IIT KGP', 'IIT Delhi', 'Times of India', 'Aaj Tak', 'ANI', 'Delhi Yuva Festival', 'Delhi Government'];

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [headerScrolled, setHeaderScrolled] = useState(false);
  const [waitlistEmail, setWaitlistEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [modalEmail, setModalEmail] = useState('');
  const [modalSubmitting, setModalSubmitting] = useState(false);

  useEffect(() => {
    const handleScroll = () => setHeaderScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const success = await submitToSupabase('notifications', { email: waitlistEmail });
      if (success) {
        toast({ title: 'Success!', description: 'You\'ve joined the waitlist!' });
        setWaitlistEmail('');
      } else {
        toast({ title: 'Error', description: 'Failed to join waitlist.', variant: 'destructive' });
      }
    } catch {
      toast({ title: 'Error', description: 'Something went wrong.', variant: 'destructive' });
    }
    setIsSubmitting(false);
  };

  const handleModalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setModalSubmitting(true);
    try {
      const success = await submitToSupabase('notifications', { email: modalEmail });
      if (success) {
        toast({ title: 'Success!', description: 'We\'ll notify you when we launch!' });
        setModalEmail('');
        setShowModal(false);
      } else {
        toast({ title: 'Error', description: 'Failed to submit.', variant: 'destructive' });
      }
    } catch {
      toast({ title: 'Error', description: 'Something went wrong.', variant: 'destructive' });
    }
    setModalSubmitting(false);
  };

  const faqs = [
    { question: 'How does RailQuick work?', answer: 'Simply enter your PNR, browse our catalog of essentials, and place your order. We\'ll deliver it right to your train seat at the next station.' },
    { question: 'Which cities are currently serviced?', answer: 'We are currently testing our services in Delhi at Hazrat Nizamuddin, New Delhi, Delhi Junction, and Anand Vihar Terminal. We\'ll be expanding to more cities soon!' },
    { question: 'What payment methods are accepted?', answer: 'We accept various payment methods, including credit/debit cards, UPI, and cash on delivery (COD) for your convenience.' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowModal(false)} />
          <div className="relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl animate-scale-in">
            <button 
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 flex items-center justify-center text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="text-center mb-6">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white text-2xl">
                🚀
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">Coming Soon!</h3>
              <p className="text-sm sm:text-base text-slate-600 px-2">We&apos;re currently in testing phase. Enter your email to get notified when we launch.</p>
            </div>
            
            <form onSubmit={handleModalSubmit} className="space-y-3 sm:space-y-4">
              <Input
                type="email"
                placeholder="Enter your email"
                value={modalEmail}
                onChange={(e) => setModalEmail(e.target.value)}
                required
                className="w-full h-12 sm:h-14 px-4 sm:px-5 border-slate-200 rounded-xl text-center text-base"
              />
              <Button
                type="submit"
                disabled={modalSubmitting}
                className="w-full h-12 sm:h-14 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-semibold text-base"
              >
                {modalSubmitting ? 'Submitting...' : 'Notify Me'}
              </Button>
            </form>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerScrolled ? 'bg-white/95 backdrop-blur-xl shadow-md' : 'bg-white/80 backdrop-blur-md'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-18">
            <Link href="/" className="flex items-center">
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">RailQuick</span>
            </Link>

            {/* Desktop Nav */}
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
                    item.href === '/' 
                      ? 'bg-slate-100 text-slate-900' 
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="hidden md:block">
              <Button onClick={() => setShowModal(true)} className="bg-slate-900 hover:bg-slate-800 text-white rounded-full px-5 shadow-lg transition-all hover:-translate-y-0.5">
                Join Waitlist
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 -mr-2 rounded-lg hover:bg-slate-100">
              {mobileMenuOpen ? (
                <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t shadow-lg">
            <div className="px-4 py-3 space-y-1">
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
                  className="block px-4 py-3 rounded-xl text-slate-700 hover:bg-slate-50 font-medium text-base"
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-2">
                <Button onClick={() => { setMobileMenuOpen(false); setShowModal(true); }} className="w-full bg-slate-900 text-white rounded-xl py-3 text-base font-medium">
                  Join Waitlist
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50" />
        <div className="absolute top-10 left-0 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-blue-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-0 w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] bg-orange-100/30 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 lg:py-28 w-full">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div className="text-center lg:text-left order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white rounded-full border border-slate-200 shadow-sm mb-5 sm:mb-6">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                <span className="text-xs sm:text-sm font-semibold text-slate-700">India&apos;s First</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-tight mb-4 sm:mb-5">
                Train On-Seat
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Essential Delivery</span>
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-lg mx-auto lg:mx-0 mb-6 sm:mb-8">
                Essential delivery infrastructure for the modern traveler. Get what you need, delivered to your seat.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <Button 
                  onClick={() => setShowModal(true)}
                  size="lg"
                  className="bg-slate-900 hover:bg-slate-800 text-white rounded-full px-6 sm:px-8 h-12 sm:h-14 text-sm sm:text-base font-semibold shadow-xl transition-all hover:-translate-y-0.5"
                >
                  Try Now
                </Button>
                <Link href="/test-phase" className="w-full sm:w-auto">
                  <Button size="lg" variant="outline" className="w-full h-12 sm:h-14 px-6 sm:px-8 text-sm sm:text-base font-semibold rounded-full border-2 hover:bg-slate-50">
                    Test Phase: Completed
                  </Button>
                </Link>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative flex justify-center order-1 lg:order-2">
              <div className="relative bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-xl border border-slate-100 max-w-xs sm:max-w-sm w-full">
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center text-white text-lg sm:text-xl">
                    📦
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 text-sm sm:text-base">Order Ready</p>
                    <p className="text-xs sm:text-sm text-slate-500">Seat 42, Coach B3</p>
                  </div>
                </div>

                <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-5">
                  {['Medicines', 'Charger', 'Water'].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 bg-slate-50 rounded-lg sm:rounded-xl">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-100 rounded-md sm:rounded-lg flex items-center justify-center">
                        <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-slate-700 text-sm sm:text-base">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full w-full bg-gradient-to-r from-green-500 to-emerald-400 rounded-full" />
                </div>
              </div>
              
              <div className="absolute -top-3 -right-3 bg-white rounded-lg sm:rounded-xl px-3 sm:px-4 py-1.5 sm:py-2 shadow-md border text-xs sm:text-sm font-semibold text-green-600 animate-float">
                ✓ Ready to deliver
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Marquee */}
      <section className="py-8 sm:py-10 bg-slate-900 relative overflow-hidden">
        <p className="relative text-center text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-widest mb-4">
          Trusted Partners & Brands
        </p>
        <div className="relative flex animate-marquee">
          {[...brands, ...brands, ...brands].map((brand, i) => (
            <div key={i} className="flex-shrink-0 px-6 sm:px-10 text-sm sm:text-lg font-bold text-slate-600 hover:text-white transition-colors">
              {brand}
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <p className="text-xs sm:text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">How It Works</p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">Get your essentials in 3 simple steps</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5 sm:gap-6">
            {steps.map((step, index) => (
              <div key={index} className="relative bg-slate-50 rounded-xl sm:rounded-2xl p-5 sm:p-6 hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 text-4xl sm:text-5xl font-black text-slate-100">
                  {step.number}
                </div>
                <div className="relative w-11 h-11 sm:w-14 sm:h-14 bg-white rounded-lg sm:rounded-xl flex items-center justify-center text-slate-900 shadow-sm mb-4">
                  {step.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1.5 sm:mb-2">{step.title}</h3>
                <p className="text-sm sm:text-base text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <p className="text-xs sm:text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">What We Deliver</p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">Curated essentials for every journey</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-5">
            {products.map((product, index) => (
              <div key={index} className="group relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-slate-100 hover:border-transparent hover:shadow-lg transition-all duration-300 text-center">
                <div className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${product.gradient} rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-3 text-white group-hover:scale-110 transition-transform duration-300`}>
                  {product.icon}
                </div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900">{product.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 hidden sm:block">{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 sm:py-14 lg:py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs sm:text-sm text-slate-400 uppercase tracking-wider font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-8 sm:mb-10">
          <div className="text-center">
            <p className="text-xs sm:text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">Testimonials</p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">What our early users say</h2>
          </div>
        </div>

        <div className="relative">
          <div className="flex gap-4 animate-marquee py-4">
            {[...testimonials, ...testimonials].map((t, i) => (
              <div key={i} className="flex-shrink-0 w-[280px] sm:w-[340px] bg-slate-50 rounded-xl sm:rounded-2xl p-5 sm:p-6 hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className="flex text-amber-400 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-700 mb-3 sm:mb-4 leading-relaxed text-sm">&ldquo;{t.text}&rdquo;</p>
                <div>
                  <p className="font-semibold text-slate-900 text-sm">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="absolute inset-y-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-white to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-white to-transparent pointer-events-none" />
        </div>
      </section>

      {/* Features */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <p className="text-xs sm:text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">Why Choose Us</p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">
              Experience train travel like never before
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {[
              { 
                title: 'Lightning Fast Delivery', 
                description: 'Get your essentials delivered to your seat at the next station stop.',
                gradient: 'from-blue-500 to-cyan-400',
                icon: '⚡'
              },
              { 
                title: 'Quality Guaranteed', 
                description: 'We source only verified, high-quality products for your peace of mind.',
                gradient: 'from-green-500 to-emerald-400',
                icon: '✓'
              },
              { 
                title: 'Wide Selection', 
                description: 'From medicines to gadgets, we\'ve got everything you might need.',
                gradient: 'from-purple-500 to-pink-400',
                icon: '📦'
              },
            ].map((feature, index) => (
              <div key={index} className="group relative bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-slate-100 hover:border-transparent hover:shadow-lg transition-all duration-300">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${feature.gradient} rounded-lg sm:rounded-xl flex items-center justify-center text-white text-lg sm:text-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-sm sm:text-base text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-10">
            <p className="text-xs sm:text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">FAQ</p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-slate-200 rounded-xl sm:rounded-2xl overflow-hidden">
                <button
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left font-semibold text-slate-900 hover:bg-slate-50 transition-colors"
                >
                  <span className="text-sm sm:text-base pr-4">{faq.question}</span>
                  <svg className={`w-5 h-5 text-slate-400 transition-transform flex-shrink-0 ${activeFaq === index ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${activeFaq === index ? 'max-h-96' : 'max-h-0'}`}>
                  <p className="px-4 sm:px-5 pb-4 sm:pb-5 text-sm sm:text-base text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 lg:py-20 bg-slate-900 relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            Be the first to experience RailQuick
          </h2>
          <p className="text-base sm:text-lg text-slate-400 mb-8 max-w-xl mx-auto">
            Real-time Tracking: Track your order from placement to delivery at your seat.
          </p>

          <form onSubmit={handleWaitlistSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={waitlistEmail}
              onChange={(e) => setWaitlistEmail(e.target.value)}
              required
              className="flex-1 h-12 sm:h-14 px-4 sm:px-6 bg-white/10 border-slate-700 text-white placeholder:text-slate-500 rounded-xl text-base"
            />
            <Button
              type="submit"
              disabled={isSubmitting}
              className="h-12 sm:h-14 px-6 bg-white text-slate-900 hover:bg-slate-100 rounded-xl font-semibold shadow-lg transition-all"
            >
              {isSubmitting ? 'Joining...' : 'Join Waitlist'}
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 pt-12 sm:pt-14 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-10">
            <div className="md:col-span-2">
              <Link href="/" className="inline-block mb-3">
                <span className="text-xl sm:text-2xl font-bold text-white">RailQuick</span>
              </Link>
              <p className="text-sm sm:text-base text-slate-400 mb-5 max-w-sm">Your journey, our priority. Revolutionizing train travel with on-seat essential delivery.</p>
              <div className="flex gap-2 sm:gap-3">
                <a href="https://www.linkedin.com/company/railquick/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 sm:w-10 sm:h-10 bg-slate-800 rounded-lg sm:rounded-xl flex items-center justify-center text-slate-400 hover:bg-white hover:text-slate-900 transition-all">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                <a href="https://www.instagram.com/railquick/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 sm:w-10 sm:h-10 bg-slate-800 rounded-lg sm:rounded-xl flex items-center justify-center text-slate-400 hover:bg-white hover:text-slate-900 transition-all">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
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
