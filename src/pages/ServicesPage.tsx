import { Link } from 'react-router-dom';
import { Globe, Smartphone, Bot, Briefcase, ArrowRight, Check } from 'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';

export function ServicesPage() {
  const services = [
    {
      icon: Globe,
      title: 'Custom Websites',
      desc: 'Professionally designed, responsive websites built from scratch for your industry. No templates \u2014 every pixel is intentional.',
      features: [
        'Custom design matching your brand',
        'Mobile-first responsive layout',
        'SEO-optimized structure',
        'Fast loading performance',
        'Contact forms and lead capture',
        'Analytics integration',
      ],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Briefcase,
      title: 'Professional Portfolios',
      desc: 'Stunning portfolios that showcase your expertise, credentials, and work with visual impact that converts visitors into clients.',
      features: [
        'Visual case study layouts',
        'Credential and award showcases',
        'Client testimonial sections',
        'Booking and inquiry integration',
        'Social media connections',
        'Downloadable press kits',
      ],
      gradient: 'from-emerald-500 to-teal-500',
    },
    {
      icon: Smartphone,
      title: 'Android Apps',
      desc: 'Native-quality mobile applications that put your services in your clients\u2019 pockets. Published on the Google Play Store.',
      features: [
        'Intuitive user experience',
        'Push notifications',
        'Offline functionality',
        'Secure authentication',
        'In-app booking and payments',
        'Play Store deployment',
      ],
      gradient: 'from-brand-500 to-brand-600',
    },
    {
      icon: Bot,
      title: 'AI Agents',
      desc: 'Intelligent automation agents that handle repetitive tasks \u2014 lead capture, follow-ups, scheduling, and client communication.',
      features: [
        'Automated lead nurturing',
        'Smart follow-up sequences',
        'Appointment scheduling',
        'Document collection workflows',
        'Client status updates',
        'Performance dashboards',
      ],
      gradient: 'from-rose-500 to-pink-500',
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider mb-3">Services</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-4">Our Services</h1>
            <p className="text-slate-500 max-w-2xl mx-auto">
              End-to-end digital solutions crafted specifically for professionals. Every service is tailored to your industry, your brand, and your clients.
            </p>
          </div>
        </AnimatedSection>

        <div className="space-y-20">
          {services.map((service, i) => (
            <AnimatedSection key={i} delay={i * 100}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-5`}>
                    <service.icon size={28} className="text-white" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-3">{service.title}</h2>
                  <p className="text-slate-500 leading-relaxed mb-6">{service.desc}</p>
                  <Link
                    to="/contact"
                    className="btn-ghost"
                  >
                    Get a Quote <ArrowRight size={16} />
                  </Link>
                </div>
                <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                    <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">What&apos;s Included</h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <Check size={16} className="text-brand-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-slate-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={400}>
          <div className="mt-20 text-center p-8 sm:p-12 rounded-3xl bg-slate-900">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 tracking-tight">Need Something Custom?</h2>
            <p className="text-slate-300 max-w-lg mx-auto mb-8">
              Every professional is unique. Tell us what you need and we&apos;ll craft a solution that fits perfectly.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-brand"
            >
              Start a Conversation <ArrowRight size={18} />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
