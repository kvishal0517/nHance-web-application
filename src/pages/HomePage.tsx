import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Smartphone, Bot, Briefcase, Star, Zap, Users, ChevronDown } from 'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';
import { CATEGORIES } from '../types';

export function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-brand-900/40 to-slate-900" />
          <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-brand-500/8 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-brand-600/6 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-brand-300 text-sm mb-8 animate-smooth-appear">
            <Zap size={14} />
            Tailored Digital Solutions for Every Profession
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-6 animate-smooth-appear" style={{ animationDelay: '0.1s' }}>
            Your Profession Deserves
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-300 to-brand-400">A Digital Presence</span> That Matches
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-10 animate-smooth-appear" style={{ animationDelay: '0.2s' }}>
            We craft bespoke websites, portfolios, Android apps, and AI agents tailored to your industry.
            See exactly what yours could look like.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-smooth-appear" style={{ animationDelay: '0.3s' }}>
            <Link
              to="/portfolio"
              className="group flex items-center gap-2 px-8 py-4 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-brand active:scale-[0.98]"
            >
              Explore Your Industry
              <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/15 border border-white/15 text-white font-semibold rounded-xl transition-all duration-200"
            >
              Get a Free Consultation
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/30">
          <ChevronDown size={24} />
        </div>
      </section>

      {/* Ticker */}
      <div className="bg-slate-50 border-y border-slate-100 py-3 overflow-hidden">
        <div className="flex animate-ticker whitespace-nowrap">
          {[...CATEGORIES, ...CATEGORIES].map((cat, i) => (
            <span key={i} className="inline-flex items-center gap-2 mx-6 text-sm text-slate-400">
              <cat.icon size={14} className="text-brand-500" />
              {cat.name}
            </span>
          ))}
        </div>
      </div>

      {/* How It Works */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <AnimatedSection>
            <div className="text-center mb-14">
              <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider mb-3">How It Works</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">Three steps to your professional digital presence</h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Briefcase,
                title: 'Choose Your Industry',
                desc: 'Browse mock projects built specifically for your profession. See exactly what your website, portfolio, or app could look like.',
              },
              {
                icon: Star,
                title: 'Explore Live Demos',
                desc: 'Interact with fully designed mock projects. Every detail is crafted for your industry \u2014 from colors to content to AI workflows.',
              },
              {
                icon: Zap,
                title: 'Get Your Custom Solution',
                desc: 'Love what you see? Submit an enquiry and we build your tailored digital solution from the ground up.',
              },
            ].map((step, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="relative p-7 rounded-2xl bg-white border border-slate-100 shadow-soft hover:shadow-medium hover:border-slate-200 transition-all duration-300 group h-full">
                  <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-brand-600 text-white text-sm font-bold flex items-center justify-center shadow-brand">
                    {i + 1}
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center mb-5 group-hover:bg-brand-100 transition-colors">
                    <step.icon size={24} className="text-brand-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-slate-50">
        <div className="container-wide">
          <AnimatedSection>
            <div className="text-center mb-14">
              <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider mb-3">What We Build</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">End-to-end digital solutions crafted for professionals</h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Globe,
                title: 'Websites',
                desc: 'Custom-designed, responsive websites that reflect your professional brand and convert visitors into clients.',
                color: 'from-blue-500 to-cyan-500',
                bg: 'bg-blue-50',
              },
              {
                icon: Briefcase,
                title: 'Portfolios',
                desc: 'Stunning portfolios that showcase your work, credentials, and achievements with visual impact.',
                color: 'from-emerald-500 to-teal-500',
                bg: 'bg-emerald-50',
              },
              {
                icon: Smartphone,
                title: 'Android Apps',
                desc: 'Native-quality mobile apps that put your services in your clients\u2019 pockets, on the Play Store.',
                color: 'from-brand-500 to-brand-600',
                bg: 'bg-brand-50',
              },
              {
                icon: Bot,
                title: 'AI Agents',
                desc: 'Intelligent automation agents that handle lead capture, follow-ups, scheduling, and client communication.',
                color: 'from-rose-500 to-pink-500',
                bg: 'bg-rose-50',
              },
            ].map((service, i) => (
              <AnimatedSection key={i} delay={i * 80}>
                <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-soft hover:shadow-medium hover:border-slate-200 transition-all duration-300 group h-full">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon size={22} className="text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{service.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Category Preview */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <AnimatedSection>
            <div className="text-center mb-14">
              <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider mb-3">Built for Your Industry</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">Every profession has unique needs</h2>
              <p className="text-slate-500 max-w-xl mx-auto mt-3">
                We design solutions that speak your language.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {CATEGORIES.map((cat, i) => (
              <AnimatedSection key={cat.id} delay={i * 50}>
                <Link
                  to="/portfolio"
                  className="group flex flex-col items-center p-5 rounded-2xl bg-white border border-slate-100 shadow-soft hover:shadow-medium hover:border-brand-200 transition-all duration-300 text-center"
                >
                  <cat.icon
                    size={28}
                    className="text-slate-300 group-hover:text-brand-500 transition-colors duration-300 mb-3"
                  />
                  <span className="text-sm font-medium text-slate-600 group-hover:text-slate-900 transition-colors">
                    {cat.name}
                  </span>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={500}>
            <div className="text-center mt-10">
              <Link
                to="/portfolio"
                className="btn-ghost"
              >
                View All Mock Projects
                <ArrowRight size={16} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Social Proof */}
      <section className="section-padding bg-slate-50">
        <div className="container-narrow">
          <AnimatedSection>
            <div className="text-center mb-14">
              <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider mb-3">Why Professionals Choose Us</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">Numbers that speak for themselves</h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                stat: '10+',
                label: 'Industries Served',
                desc: 'From medicine to music, law to tech \u2014 we understand your world.',
              },
              {
                stat: '20+',
                label: 'Live Mock Projects',
                desc: 'Interactive demos you can explore before committing.',
              },
              {
                stat: '24h',
                label: 'Response Time',
                desc: 'Every enquiry answered within 24 hours by a real human.',
              },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="text-center p-8 rounded-2xl bg-white border border-slate-100 shadow-soft">
                  <div className="text-4xl font-bold gradient-text mb-2">{item.stat}</div>
                  <div className="text-sm font-semibold text-slate-900 mb-1">{item.label}</div>
                  <p className="text-xs text-slate-400">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <AnimatedSection>
            <div className="relative p-8 sm:p-12 rounded-3xl overflow-hidden text-center bg-slate-900">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-600/20 via-transparent to-transparent" />
              <div className="relative z-10">
                <Users className="w-10 h-10 text-brand-400 mx-auto mb-5" />
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 tracking-tight">
                  Ready to Stand Out in Your Field?
                </h2>
                <p className="text-slate-300 max-w-lg mx-auto mb-8">
                  Explore mock projects built for your profession, then let us create something even better \u2014 uniquely yours.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    to="/portfolio"
                    className="group flex items-center gap-2 px-8 py-4 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-brand"
                  >
                    Explore Portfolio
                    <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                  <Link
                    to="/contact"
                    className="flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/15 border border-white/15 text-white font-semibold rounded-xl transition-all duration-200"
                  >
                    Get Free Consultation
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
