"use client";

import React, { useEffect, useRef, useState } from 'react';
import { Heart, Activity, Shield, Users, ArrowRight, Zap, Globe } from 'lucide-react';

export default function HealthcareHomepage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Dynamic script loading for GSAP
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
    script.onload = () => {
      const scrollScript = document.createElement('script');
      scrollScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js';
      scrollScript.onload = initAnimations;
      document.body.appendChild(scrollScript);
    };
    document.body.appendChild(script);

    return () => {
      if (script.parentNode) script.parentNode.removeChild(script);
    };
  }, []);

  const initAnimations = () => {
    const gsap = (window as any).gsap;
    if (!gsap) return;

    gsap.registerPlugin((window as any).ScrollTrigger);

    // ===== HERO SECTION =====
    const heroTl = gsap.timeline();

    heroTl
      .from('.hero-title', {
        duration: 0.8,
        y: 60,
        opacity: 0,
        ease: 'power3.out',
       })
      .from(
        '.hero-subtitle',
        {
          duration: 0.8,
          y: 40,
          opacity: 0,
          ease: 'power3.out',
        },
        0.2
      )
      .from(
        '.hero-cta',
        {
          duration: 0.8,
          y: 40,
          opacity: 0,
          ease: 'power3.out',
        },
        0.4
      )
      .from(
        '.floating-cards',
        {
          duration: 1,
          scale: 0,
          opacity: 0,
          stagger: 0.15,
          ease: 'back.out',
        },
        0.2
      );

    // Floating animation
    gsap.to('.floating-cards', {
      duration: 3,
      y: -20,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      stagger: {
        amount: 0.5,
      },
    });

    // Rotating circles
    gsap.to('.rotating-circle', {
      rotation: 360,
      duration: 20,
      repeat: -1,
      ease: 'none',
    });

    // ===== STATS SECTION =====
    gsap.from('.stat-item', {
      scrollTrigger: {
        trigger: '.stats-section',
        start: 'top 80%',
      },
      duration: 0.8,
      y: 50,
      opacity: 0,
      stagger: 0.2,
    //   repeat: -1,
      ease: 'power3.out',
    });

    gsap.from('.stat-number', {
      scrollTrigger: {
        trigger: '.stats-section',
        start: 'top 80%',
      },
      duration: 2,
      textContent: 0,
      snap: { textContent: 1 },
      stagger: 0.3,
    });

    // ===== FEATURES SECTION =====
    gsap.from('.feature-card', {
      scrollTrigger: {
        trigger: '.features-section',
        start: 'top 75%',
      },
      duration: 0.8,
      y: 60,
      opacity: 0,
      stagger: 0.2,
      ease: 'power3.out',
    });

    // Icon animations
    gsap.to('.feature-icon', {
      scrollTrigger: {
        trigger: '.features-section',
        start: 'top 75%',
      },
      duration: 2,
      rotation: 360,
      stagger: 0.3,
      ease: 'none',
      repeat: -1,
    });

    // ===== BENEFITS SECTION =====
    const benefitsItems = document.querySelectorAll('.benefit-item');
    benefitsItems.forEach((item, index) => {
      const isOdd = index % 2 === 0;

      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: 'top 85%',
        },
        duration: 0.8,
        x: isOdd ? -100 : 100,
        opacity: 0,
        ease: 'power3.out',
      });

      gsap.to(item, {
        scrollTrigger: {
          trigger: item,
          start: 'top 50%',
          markers: false,
        },
        duration: 1,
        boxShadow: '0 20px 40px rgba(59, 130, 246, 0.3)',
      });
    });

    // ===== CTA SECTION =====
    gsap.from('.cta-main', {
      scrollTrigger: {
        trigger: '.cta-section',
        start: 'top 80%',
      },
      duration: 1,
      scale: 0.8,
      opacity: 0,
      ease: 'back.out',
    });

    gsap.from('.cta-text', {
      scrollTrigger: {
        trigger: '.cta-section',
        start: 'top 80%',
      },
      duration: 0.8,
      y: 40,
      opacity: 0,
      stagger: 0.15,
      ease: 'power3.out',
    });

    // ===== TESTIMONIALS =====
    gsap.to('.testimonial-card', {
      scrollTrigger: {
        trigger: '.testimonials-section',
        start: 'top 80%',
      },
      duration: 0.8,
      opacity: 1,
      y: 0,
      stagger: 0.2,
      ease: 'power3.out',
    });

    // ===== PULSE ANIMATIONS =====
    gsap.to('.pulse-dot', {
      duration: 2,
      scale: 1.3,
      opacity: 0,
      repeat: -1,
      ease: 'power1.out',
      stagger: 0.3,
    });
  };

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden"
    >
      {/* ===== ANIMATED BACKGROUND ===== */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-pulse"></div>
      </div>

      {/* ===== NAVBAR ===== */}
      <nav className="fixed top-0 w-full z-50 bg-black bg-opacity-40 backdrop-blur-md border-b border-blue-500 border-opacity-20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="w-8 h-8 text-red-500" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              VitaFlow
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {['Services', 'Features', 'About', 'Contact'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-300 hover:text-cyan-400 transition-colors text-sm font-medium"
              >
                {item}
              </a>
            ))}
            <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* ===== HERO SECTION ===== */}
      <section ref={heroRef} className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="hero-title text-6xl md:text-7xl font-bold leading-tight">
              Your Health,
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Our Priority
              </span>
            </h1>

            <p className="hero-subtitle text-xl text-gray-300 leading-relaxed">
              Experience healthcare like never before with our AI-powered diagnostics and
              personalized wellness solutions. We combine cutting-edge technology with
              compassionate care.
            </p>

            <div className="hero-cta flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all transform hover:scale-105 flex items-center justify-center gap-2">
                Start Your Journey <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 border-2 border-cyan-400 rounded-full font-bold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all">
                Watch Demo
              </button>
            </div>
          </div>

          {/* Right - Floating Cards */}
          <div className="relative h-96 md:h-[500px]">
            {/* Card 1 */}
            <div className="floating-cards absolute top-0 right-0 w-48 h-32 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-6 shadow-2xl">
              <div className="flex items-center gap-3 mb-3">
                <Heart className="w-6 h-6" />
                <span className="font-bold">Heart Rate</span>
              </div>
              <p className="text-3xl font-bold">72 BPM</p>
              <p className="text-sm text-blue-100 mt-2">Optimal</p>
            </div>

            {/* Card 2 */}
            <div className="floating-cards absolute top-40 left-0 w-48 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-6 shadow-2xl">
              <div className="flex items-center gap-3 mb-3">
                <Activity className="w-6 h-6" />
                <span className="font-bold">Activity</span>
              </div>
              <p className="text-3xl font-bold">8.2K</p>
              <p className="text-sm text-purple-100 mt-2">Steps Today</p>
            </div>

            {/* Card 3 */}
            <div className="floating-cards absolute bottom-0 right-20 w-48 h-32 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl p-6 shadow-2xl">
              <div className="flex items-center gap-3 mb-3">
                <Shield className="w-6 h-6" />
                <span className="font-bold">Health Score</span>
              </div>
              <p className="text-3xl font-bold">94/100</p>
              <p className="text-sm text-green-100 mt-2">Excellent</p>
            </div>

            {/* Rotating Circle */}
            <div className="rotating-circle absolute inset-0 w-full h-full border-2 border-transparent border-t-cyan-400 border-r-blue-400 rounded-full"></div>
            <div className="rotating-circle absolute inset-0 w-full h-full border-2 border-transparent border-t-red-400 border-r-blue-400 rounded"></div>
          </div>
        </div>
      </section>

      {/* ===== STATS SECTION ===== */}
      <section className="stats-section py-20 px-6 bg-gradient-to-r from-blue-500 from-10% via-blue-600 via-50% to-cyan-500 to-90% bg-opacity-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { label: 'Active Users', value: '500K' },
            { label: 'Health Records', value: '2M' },
            { label: 'Doctors Network', value: '5K' },
            { label: 'Success Rate', value: '98%' },
          ].map((stat, i) => (
            <div key={i} className="stat-item text-center space-y-3">
              <p className="stat-number text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                0
              </p>
              <p className="text-gray-300 text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== FEATURES SECTION ===== */}
      <section className="features-section py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">
              Powerful <span className="text-cyan-400">Features</span>
            </h2>
            <p className="text-xl text-gray-400">Everything you need for better health management</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: 'Real-time Monitoring',
                desc: 'Track vital signs 24/7 with our advanced wearable integration',
              },
              {
                icon: Zap,
                title: 'AI Diagnostics',
                desc: 'Get instant health insights powered by machine learning algorithms',
              },
              {
                icon: Shield,
                title: 'Data Security',
                desc: 'Military-grade encryption keeps your health data completely private',
              },
              {
                icon: Users,
                title: 'Expert Network',
                desc: 'Connect with certified doctors for instant consultations',
              },
              {
                icon: Globe,
                title: 'Global Access',
                desc: 'Access your health records from anywhere in the world',
              },
              {
                icon: Activity,
                title: 'Smart Coaching',
                desc: 'Personalized fitness and nutrition plans tailored to your goals',
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="feature-card p-8 bg-gradient-to-br from-blue-500 from-0% via-slate-800 via-50% to-slate-900 to-100% rounded-xl border border-blue-400 border-opacity-20 hover:border-opacity-50 transition-all cursor-pointer group"
              >
                <div className="feature-icon mb-6 inline-block p-4 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-lg group-hover:scale-110 transition-transform">
                  <feature.icon className="w-8 h-8 text-slate-900" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BENEFITS SECTION ===== */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          {[
            {
              title: 'Smart Health Tracking',
              desc: 'Monitor your health metrics in real-time with our intuitive dashboard',
              icon: Activity,
            },
            {
              title: 'Predictive Healthcare',
              desc: 'Our AI predicts potential health issues before they become critical',
              icon: Zap,
            },
            {
              title: 'Holistic Wellness',
              desc: 'Balance physical, mental, and emotional health with our comprehensive platform',
              icon: Heart,
            },
          ].map((benefit, i) => (
            <div
              key={i}
              className="benefit-item grid md:grid-cols-2 gap-8 items-center p-8 rounded-2xl bg-gradient-to-r from-blue-500 from-0% to-cyan-500 to-100% bg-opacity-5 border border-blue-400 border-opacity-20"
            >
              <div className={i % 2 === 1 ? 'md:order-2' : ''}>
                <h3 className="text-3xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-gray-300 text-lg leading-relaxed">{benefit.desc}</p>
                <button className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all">
                  Learn More
                </button>
              </div>
              <div className={`flex justify-center ${i % 2 === 1 ? 'md:order-1' : ''}`}>
                <div className="pulse-dot relative w-32 h-32 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full flex items-center justify-center">
                  <benefit.icon className="w-16 h-16 text-slate-900" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== TESTIMONIALS =====  */}
      <section className="testimonials-section py-20 px-6 bg-gradient-to-r from-blue-500 from-10% via-blue-600 via-50% to-cyan-500 to-90% bg-opacity-5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16">
            What Our Users <span className="text-cyan-400">Say</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'Patient',
                text: 'VitaFlow has completely transformed how I manage my health. The AI insights are incredibly accurate!',
              },
              {
                name: 'Dr. Michael Chen',
                role: 'Cardiologist',
                text: 'The platform makes it easier to monitor my patients and provide better care. Highly recommended.',
              },
              {
                name: 'Emma Wilson',
                role: 'Fitness Coach',
                text: 'The personalized coaching features help my clients achieve their goals faster than ever before.',
              },
            ].map((testimonial, i) => (
              <div
                key={i}
                className="testimonial-card p-8 bg-gradient-to-br from-blue-500 from-0% via-slate-800 via-50% to-slate-900 to-100% rounded-xl border border-blue-400 border-opacity-20 opacity-0"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400"></div>
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300">{testimonial.text}</p>
                <div className="flex gap-1 mt-4">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className="text-yellow-400">
                      ★
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="cta-section py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-20"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="cta-main">
            <h2 className="cta-text text-5xl font-bold mb-4">
              Ready to Transform Your Health?
            </h2>
            <p className="cta-text text-xl text-gray-300 mb-8">
              Join thousands of users who've already started their wellness journey
            </p>

            <div className="cta-text flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-white font-bold text-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border-2 border-cyan-400 rounded-full font-bold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="border-t border-blue-500 border-opacity-20 py-12 px-6 bg-black bg-opacity-30">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 mb-8">
          {[
            {
              title: 'Product',
              links: ['Features', 'Pricing', 'Security', 'Roadmap'],
            },
            {
              title: 'Company',
              links: ['About', 'Blog', 'Careers', 'Press'],
            },
            {
              title: 'Legal',
              links: ['Privacy', 'Terms', 'HIPAA', 'Compliance'],
            },
            {
              title: 'Social',
              links: ['Twitter', 'LinkedIn', 'Facebook', 'Instagram'],
            },
          ].map((col, i) => (
            <div key={i}>
              <h4 className="font-bold mb-4">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link, j) => (
                  <li key={j}>
                    <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-blue-500 border-opacity-20 pt-8 flex justify-between items-center">
          <p className="text-gray-400">© 2024 VitaFlow. All rights reserved.</p>
          <p className="text-gray-400">Made with ❤️ for your health</p>
        </div>
      </footer>
    </div>
  );
}