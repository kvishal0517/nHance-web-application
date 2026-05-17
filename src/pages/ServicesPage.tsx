import { Link } from 'react-router-dom';
import { Globe, Smartphone, Bot, Briefcase, ArrowRight, Check } from 'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';
import { MeshGradient } from '../components/VisualAssets';

export function ServicesPage() {
  const services = [
    {
      icon: Globe,
      title: 'Websites',
      desc: 'Precision engineered. Every pixel is intentional. We build custom ecosystems that serve as the foundation of your digital authority.',
      features: [
        'Custom design language',
        'Responsive engineering',
        'SEO architecture',
        'Performance optimization',
        'Lead capture systems',
        'Advanced analytics',
      ],
    },
    {
      icon: Briefcase,
      title: 'Portfolios',
      desc: 'Showcase your expertise with visual elegance. We design portfolios that communicate value and establish instant trust.',
      features: [
        'Case study architecture',
        'Credential showcases',
        'Testimonial workflows',
        'Booking integration',
        'Social ecosystem',
        'Press kit design',
      ],
    },
    {
      icon: Smartphone,
      title: 'Android Apps',
      desc: 'Mobile experiences that feel native and refined. Put your services directly into your clients\u2019 hands with our specialized Android development.',
      features: [
        'Refined UX/UI',
        'Smart notifications',
        'Offline capabilities',
        'Secure architecture',
        'Payment workflows',
        'Play Store delivery',
      ],
    },
    {
      icon: Bot,
      title: 'AI Agents',
      desc: 'Intelligent automation for the modern professional. Our agents handle your interactions with the same care and precision you do.',
      features: [
        'Intelligent lead nurturing',
        'Smart follow-up logic',
        'Schedule management',
        'Document workflows',
        'Client status updates',
        'Insight dashboards',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-24 lg:pt-32 pb-16 relative overflow-hidden">
      <MeshGradient className="opacity-[0.15]" />
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        <AnimatedSection animationType="blur">
          <div className="text-center mb-24">
            <h1 className="text-5xl sm:text-7xl font-bold text-apple-black tracking-tight mb-6">Built for impact.</h1>
            <p className="text-xl text-apple-darkGray max-w-2xl mx-auto font-medium leading-relaxed">
              Every service we offer is engineered to elevate your professional presence. No compromise.
            </p>
          </div>
        </AnimatedSection>

        <div className="space-y-32">
          {services.map((service, i) => (
            <AnimatedSection key={i} delay={i * 100} animationType="fade-up">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-16 h-16 rounded-2xl bg-apple-gray flex items-center justify-center mb-8">
                    <service.icon size={32} className="text-apple-black" />
                  </div>
                  <h2 className="text-4xl font-bold text-apple-black tracking-tight mb-6">{service.title}</h2>
                  <p className="text-lg text-apple-darkGray font-medium leading-relaxed mb-8">{service.desc}</p>
                  <Link
                    to="/contact"
                    className="btn-ghost !text-apple-blue !px-0"
                  >
                    Get a quote <ArrowRight size={20} />
                  </Link>
                </div>
                <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="p-10 lg:p-14 rounded-[48px] bg-apple-gray border border-slate-100/50">
                    <h3 className="text-[11px] font-bold text-apple-darkGray uppercase tracking-widest mb-8">Engineering Standards</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-8">
                      {service.features.map((feature, j) => (
                        <li key={j} className="flex items-center gap-3">
                          <Check size={18} className="text-apple-blue shrink-0" />
                          <span className="text-sm font-semibold text-apple-black">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={400} animationType="scale">
          <div className="mt-32 p-12 lg:p-24 rounded-[64px] bg-apple-black text-white text-center">
            <h2 className="text-4xl sm:text-6xl font-bold mb-8 tracking-tight">Need a custom stack?</h2>
            <p className="text-xl text-apple-silver max-w-2xl mx-auto mb-12 font-medium">
              We specialize in solving unique digital challenges. Let's discuss your architectural needs.
            </p>
            <Link
              to="/contact"
              className="btn-primary !bg-white !text-apple-black !px-12 !py-5 text-lg"
            >
              Start the conversation
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
