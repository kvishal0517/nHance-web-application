import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Smartphone, Bot, Briefcase, Zap } from 'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';
import { CATEGORIES } from '../types';
import { 
  MeshGradient, AbstractBusinessGraphic, FloatingAppGraphic, 
  FloatingGlow, ConfettiShower, DigitalTransformationMonitor 
} from '../components/VisualAssets';

export function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-white">
        <MeshGradient />
        <FloatingGlow />
        <ConfettiShower />

        <div className="absolute right-[-10%] top-[10%] w-1/2 h-1/2 opacity-20 pointer-events-none">

          <AbstractBusinessGraphic />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <div className="hero-glow" />
          
          <AnimatedSection animationType="fade-up" delay={100}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-apple-gray text-apple-black text-[13px] font-medium mb-10">
              <span className="flex h-2 w-2 rounded-full bg-apple-blue animate-pulse" />
              Tailored for your profession
            </div>
          </AnimatedSection>

          <AnimatedSection animationType="fade-up" delay={200}>
            <h1 className="text-5xl sm:text-7xl md:text-[100px] font-black leading-[0.9] tracking-tighter mb-8 pb-4 animate-text-reveal">
              The future of your
              <br />
              <span className="text-apple-blue">digital presence.</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection animationType="fade-up" delay={300}>
            <p className="text-xl sm:text-2xl text-apple-darkGray max-w-3xl mx-auto mb-12 font-medium">
              We build high-performance websites and digital experiences
              <br className="hidden md:block" />
              that break through the noise and scale your business.
            </p>
          </AnimatedSection>

          <AnimatedSection animationType="fade-up" delay={400}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                to="/portfolio"
                className="btn-primary text-lg !py-4 !px-10"
              >
                Learn more
              </Link>
              <Link
                to="/contact"
                className="btn-ghost text-lg !text-apple-blue"
              >
                Get a consultation
                <ArrowRight size={20} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Ticker - Minimalist */}
      <div className="bg-white border-y border-slate-100 py-6 overflow-hidden">
        <div className="flex animate-ticker whitespace-nowrap opacity-40 hover:opacity-100 transition-opacity duration-500">
          {[...CATEGORIES, ...CATEGORIES].map((cat, i) => (
            <span key={i} className="inline-flex items-center gap-3 mx-10 text-xs font-semibold uppercase tracking-[0.2em] text-apple-black">
              {cat.name}
            </span>
          ))}
        </div>
      </div>

      {/* Product-like Feature Section */}
      <section className="section-padding bg-apple-gray">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animationType="fade-up">
              <div className="max-w-xl">
                <h2 className="text-4xl sm:text-5xl font-bold text-apple-black tracking-tight mb-6 leading-tight">
                  Precision built. 
                  <br />
                  Professionally focused.
                </h2>
                <p className="text-lg text-apple-darkGray mb-10 leading-relaxed font-medium">
                  We don't just build websites. We build digital ecosystems that understand the nuances of your field. From legal frameworks to creative portfolios, every detail is engineered for performance.
                </p>
                
                <div className="space-y-6">
                  {[
                    { title: 'Industry-specific workflows', desc: 'AI agents that handle your specific client interactions.' },
                    { title: 'Native-feel design', desc: 'Interfaces that feel as premium as your services.' },
                    { title: 'Cloud-native performance', desc: 'Fast, secure, and always available.' },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="mt-1 w-5 h-5 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0">
                        <Zap size={10} className="text-apple-blue" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-apple-black">{item.title}</h4>
                        <p className="text-sm text-apple-darkGray">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={200} animationType="scale">
              <div className="relative aspect-[4/5] lg:aspect-square rounded-[48px] bg-gradient-to-br from-slate-50 to-slate-200 shadow-2xl group border border-slate-100/50">
                <FloatingAppGraphic />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Transformation Section */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="container-wide">
          <div className="text-center mb-16 lg:mb-24">
            <AnimatedSection animationType="fade-up">
              <h2 className="text-4xl sm:text-6xl font-bold text-apple-black tracking-tight mb-4 text-balance">Transform your business.</h2>
              <p className="text-xl text-apple-darkGray font-medium max-w-2xl mx-auto">From legacy limitations to modern market leadership. Witness the evolution of your digital presence.</p>
            </AnimatedSection>
          </div>
          
          <AnimatedSection animationType="scale" delay={200}>
            <DigitalTransformationMonitor />
          </AnimatedSection>
        </div>
      </section>

      {/* Grid Features */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="text-center mb-24">
            <h2 className="text-4xl sm:text-6xl font-bold text-apple-black tracking-tight mb-4">Uncompromising quality.</h2>
            <p className="text-xl text-apple-darkGray font-medium">Standard on every project we deliver.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Globe,
                title: 'Websites',
                desc: 'Clean, responsive, and conversion-optimized.',
                motion: (
                  <div className="relative w-full h-12 mt-6 flex items-center justify-center overflow-hidden rounded-xl bg-white/50 group-hover:bg-white transition-colors">
                    <div className="absolute inset-0 flex items-center justify-center opacity-20">
                      <div className="w-16 h-16 border border-apple-blue rounded-full animate-spin-slow" />
                      <div className="absolute w-20 h-20 border border-apple-blue/30 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '12s' }} />
                    </div>
                    <div className="w-2 h-2 bg-apple-blue rounded-full animate-pulse" />
                  </div>
                )
              },
              {
                icon: Briefcase,
                title: 'Portfolios',
                desc: 'Showcase your expertise with visual elegance.',
                motion: (
                  <div className="relative w-full h-12 mt-6 flex gap-1 items-center justify-center overflow-hidden rounded-xl bg-white/50 group-hover:bg-white transition-colors px-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="h-6 w-1/3 bg-slate-200 rounded-sm animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                    ))}
                  </div>
                )
              },
              {
                icon: Smartphone,
                title: 'Android Apps',
                desc: 'Direct access to your services on any device.',
                motion: (
                  <div className="relative w-full h-12 mt-6 flex items-center justify-center overflow-hidden rounded-xl bg-white/50 group-hover:bg-white transition-colors">
                    <div className="w-6 h-10 border-2 border-slate-300 rounded-md relative flex items-center justify-center">
                      <div className="w-1 h-1 bg-apple-blue rounded-full absolute bottom-1" />
                      <div className="w-4 h-4 rounded-full bg-apple-blue/20 animate-ping" />
                    </div>
                  </div>
                )
              },
              {
                icon: Bot,
                title: 'AI Agents',
                desc: 'Intelligent automation for modern efficiency.',
                motion: (
                  <div className="relative w-full h-12 mt-6 flex items-center justify-center overflow-hidden rounded-xl bg-white/50 group-hover:bg-white transition-colors">
                    <div className="flex gap-1.5 items-center">
                      <div className="w-1.5 h-1.5 bg-apple-blue rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
                      <div className="w-1.5 h-1.5 bg-apple-blue rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                      <div className="w-1.5 h-1.5 bg-apple-blue rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-apple-blue/5 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />
                  </div>
                )
              },
            ].map((service, i) => (
              <AnimatedSection key={i} delay={i * 100} animationType="scale">
                <div className="group p-10 rounded-[40px] bg-apple-gray hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ease-out border border-transparent hover:border-slate-100 flex flex-col h-full">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                    <service.icon size={28} className="text-apple-black" />
                  </div>
                  <h3 className="text-2xl font-bold text-apple-black mb-4">{service.title}</h3>
                  <p className="text-apple-darkGray font-medium leading-relaxed flex-1">{service.desc}</p>
                  {service.motion}
                </div>
              </AnimatedSection>
            ))}
          </div>

        </div>
      </section>

      {/* CTA - The Apple "Buy" feel */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <AnimatedSection animationType="scale">
            <div className="relative p-12 sm:p-24 rounded-[64px] bg-apple-black overflow-hidden text-center text-white">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,#0071e3,transparent_70%)]" />
              <div className="relative z-10">
                <h2 className="text-4xl sm:text-6xl font-bold mb-8 tracking-tight">
                  Ready to elevate?
                </h2>
                <p className="text-xl text-apple-silver mb-12 font-medium max-w-lg mx-auto leading-relaxed">
                  Join the professionals who choose quality over compromise. Let's build your future today.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <Link
                    to="/portfolio"
                    className="btn-primary !bg-white !text-apple-black !px-12 !py-5 text-lg"
                  >
                    View portfolio
                  </Link>
                  <Link
                    to="/contact"
                    className="btn-ghost !text-white text-lg"
                  >
                    Contact sales
                    <ArrowRight size={20} />
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
