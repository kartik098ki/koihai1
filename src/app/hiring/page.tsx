"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

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

const perks = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'High Impact',
    description: 'Work on problems that solve real daily struggles for millions of Indians.',
    gradient: 'from-blue-500 to-cyan-400',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: 'Rapid Growth',
    description: 'Join at the ground floor of a fast-moving logistics startup.',
    gradient: 'from-green-500 to-emerald-400',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Open Culture',
    description: 'We value ideas over hierarchy. If you have a better way, we listen.',
    gradient: 'from-purple-500 to-pink-400',
  },
];

const openRoles = [
  { title: 'Operations Manager', type: 'Full-time', location: 'Delhi' },
  { title: 'Software Engineer', type: 'Full-time', location: 'Remote' },
  { title: 'Product Designer', type: 'Full-time', location: 'Remote' },
  { title: 'Delivery Executive', type: 'Part-time', location: 'Delhi' },
];

export default function HiringPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [headerScrolled, setHeaderScrolled] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', reason: '', linkedin: '', journey: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleScroll = () => setHeaderScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const success = await submitToSupabase('applications', formData);
      if (success) {
        toast({ title: 'Application Submitted!', description: 'We\'ll review and get back to you.' });
        setFormData({ name: '', email: '', phone: '', reason: '', linkedin: '', journey: '' });
      } else {
        toast({ title: 'Error', description: 'Failed to submit application.', variant: 'destructive' });
      }
    } catch {
      toast({ title: 'Error', description: 'Something went wrong.', variant: 'destructive' });
    }
    setIsSubmitting(false);
  };

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
                    item.href === '/hiring' 
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
        <div className="absolute top-0 left-1/3 w-[600px] h-[300px] bg-purple-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-[400px] h-[200px] bg-blue-100/30 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-slate-200 shadow-sm mb-6 sm:mb-8">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-sm font-semibold text-slate-700">Join the Family</span>
          </div>
          
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-slate-900 mb-4 sm:mb-6 leading-tight">
            Build the future of
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">travel</span>
          </h1>
          
          <p className="text-base sm:text-xl text-slate-600 max-w-2xl mx-auto">
            We&apos;re not just hiring employees—we&apos;re looking for partners who want to build something that affects millions of daily commuters.
          </p>
        </div>
      </section>

      {/* Perks */}
      <section className="py-12 sm:py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6">Why join us?</h2>
            <p className="text-base sm:text-lg text-slate-600">Be part of a team that&apos;s revolutionizing train travel in India.</p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {perks.map((perk, index) => (
              <div key={index} className="bg-slate-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 text-center">
                <div className={`w-14 h-14 bg-gradient-to-br ${perk.gradient} rounded-xl flex items-center justify-center text-white mx-auto mb-6`}>
                  {perk.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{perk.title}</h3>
                <p className="text-slate-600">{perk.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="py-12 sm:py-20 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6">Open positions</h2>
            <p className="text-base sm:text-lg text-slate-600">Find your perfect role and join our mission.</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {openRoles.map((role, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all group cursor-pointer">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{role.title}</h3>
                    <div className="flex gap-3 mt-2 text-sm text-slate-500">
                      <span>{role.type}</span>
                      <span>•</span>
                      <span>{role.location}</span>
                    </div>
                  </div>
                  <svg className="w-5 h-5 text-slate-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-12 sm:py-20 lg:py-32 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6">Apply now</h2>
            <p className="text-base sm:text-lg text-slate-600">Tell us about yourself and why you want to join RailQuick.</p>
          </div>

          <form onSubmit={handleSubmit} className="bg-slate-50 rounded-3xl p-6 sm:p-8 lg:p-12 space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">Full Name</label>
                <Input
                  type="text"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full h-14 px-5 bg-white border-slate-200 rounded-xl"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">Email Address</label>
                <Input
                  type="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full h-14 px-5 bg-white border-slate-200 rounded-xl"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-900 mb-2">Phone Number</label>
              <Input
                type="tel"
                placeholder="Your phone number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full h-14 px-5 bg-white border-slate-200 rounded-xl"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-900 mb-2">Why do you want to join us?</label>
              <Textarea
                placeholder="Tell us your motivation..."
                value={formData.reason}
                onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                required
                rows={4}
                className="w-full px-5 py-4 bg-white border-slate-200 rounded-xl resize-none"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-900 mb-2">LinkedIn Profile URL</label>
              <Input
                type="url"
                placeholder="https://linkedin.com/in/..."
                value={formData.linkedin}
                onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                required
                className="w-full h-14 px-5 bg-white border-slate-200 rounded-xl"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-900 mb-2">Previous Work / Journey</label>
              <Textarea
                placeholder="Highlight your best work..."
                value={formData.journey}
                onChange={(e) => setFormData({ ...formData, journey: e.target.value })}
                rows={4}
                className="w-full px-5 py-4 bg-white border-slate-200 rounded-xl resize-none"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-14 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-semibold shadow-xl shadow-slate-900/20 transition-all hover:shadow-2xl hover:shadow-slate-900/30 hover:-translate-y-0.5 disabled:opacity-50"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </Button>
          </form>
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
