import { Link } from 'react-router-dom';
import { 
  ArrowRight, Code2, Layout, Zap 
} from 'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';
import { VisionCards } from '../components/VisionCards';
import { 
  MeshGradient, FloatingGlow, ConfettiShower, AbstractBusinessGraphic 
} from '../components/VisualAssets';
import logo from '../assets/logo.png';

export function AboutPage() {
  const pillars = [
    {
      icon: Code2,
      title: 'Engineering Beyond Standards',
      desc: 'We write clean, optimized code to ensure your site is fast, secure, and built to scale. We don\'t stop at perfect; we go one step further.',
    },
    {
      icon: Layout,
      title: 'Intentional Design',
      desc: 'Every pixel, transition, and layout is crafted to guide your users seamlessly toward conversion through intuitive user experiences.',
    },
    {
      icon: Zap,
      title: 'Future-Proof Strategy',
      desc: 'We build with the next generation of web technologies, ensuring your brand stays ahead of the curve in a crowded marketplace.',
    },
  ];

  const checklist = [
    'Pixel-Perfect Responsiveness',
    'Cross-Browser Compatibility',
    'Core Web Vitals Optimization',
    'Clean Code Validation',
    'SEO Foundation',
    'Watertight Security',
    'Accessibility (WCAG) Compliance',
    'Broken Link & Redirect Audit',
    'Form & Integration Testing',
    'Automated Backups Setup',
    'Client Empowerment Handover',
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Background Graphics */}
      <div className="absolute inset-0 pointer-events-none">
        <MeshGradient className="opacity-[0.15]" />
        <FloatingGlow />
        <ConfettiShower />
        <div className="absolute right-[-10%] top-[10%] w-1/2 h-1/2 opacity-[0.03]">
          <AbstractBusinessGraphic />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 pt-24 pb-16">
        {/* Brand Hero */}
        <div className="text-center mb-24 relative">
          <div className="hero-glow" />
          
          <AnimatedSection animationType="fade-up" delay={100}>
            <p className="text-xs font-bold text-apple-blue uppercase tracking-[0.3em] mb-6">Brand Philosophy</p>
          </AnimatedSection>

          <AnimatedSection animationType="fade-up" delay={200}>
            <h1 className="text-5xl sm:text-7xl lg:text-[100px] font-black leading-[0.9] tracking-tighter mb-8 animate-text-reveal">
              The Standard is 10.<br />
              <span className="text-apple-blue">We Are 11.</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection animationType="fade-up" delay={300}>
            <p className="text-xl sm:text-2xl text-apple-darkGray max-w-3xl mx-auto font-medium leading-relaxed">
              We build high-performance websites and digital experiences that break through the noise, scale your business, and outpace the competition.
            </p>
          </AnimatedSection>
        </div>

        {/* The Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <AnimatedSection animationType="fade-up">
            <div className="relative aspect-square rounded-[48px] bg-apple-gray overflow-hidden group border border-slate-100/50 shadow-2xl">
               <div className="absolute inset-0 bg-gradient-to-br from-apple-blue/5 to-transparent transition-opacity duration-1000" />
               
               {/* Persistent Stunning Logo Background Graphic */}
               <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
                  <div className="relative w-2/3 h-2/3 flex items-center justify-center transition-all duration-[2000ms] scale-110 group-hover:scale-125 group-hover:rotate-6">
                    <img 
                      src={logo} 
                      alt="" 
                      className="w-full h-auto object-contain opacity-[0.1] group-hover:opacity-[0.25] transition-all duration-700" 
                    />
                    {/* Persistent Light Sweep */}
                    <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,transparent,#0071e366,transparent)] animate-spin-slow opacity-60 group-hover:opacity-100 transition-opacity" />
                    
                    {/* Hover Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-apple-blue/10 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                  </div>
               </div>

               {/* Persistent "Beyond the Limit" Visual Streaks */}
               <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-full">
                    {[1, 2, 3].map((i) => (
                      <div 
                        key={i} 
                        className="absolute top-0 w-[2px] h-full bg-gradient-to-b from-transparent via-apple-blue to-transparent transform -skew-x-12 animate-shimmer"
                        style={{ 
                          left: `${i * 30}%`, 
                          animationDuration: `${3 + i}s`,
                          opacity: 0.5
                        }} 
                      />
                    ))}
                  </div>
               </div>

               <div className="absolute bottom-12 left-12 right-12">
                  <div className="p-8 bg-white/80 backdrop-blur-xl rounded-3xl border border-white/40 shadow-xl transform transition-all duration-700 group-hover:-translate-y-4 group-hover:shadow-2xl">
                    <p className="text-apple-black font-black italic text-xl leading-tight">
                      "Safe doesn't get noticed. <br />
                      <span className="text-apple-blue">Safe doesn't scale."</span>
                    </p>
                  </div>
               </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animationType="fade-up" delay={200}>
            <div>
              <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-8">
                <h2 className="text-4xl font-bold text-apple-black tracking-tight">Our Story</h2>
                <div className="relative group/logo">
                  <div className="absolute -inset-4 bg-apple-blue/10 blur-xl rounded-full opacity-0 group-hover/logo:opacity-100 transition-opacity duration-700" />
                  <img 
                    src={logo} 
                    alt="ELEVEN" 
                    className="h-12 w-auto object-contain relative z-10 animate-float drop-shadow-sm group-hover:scale-110 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,transparent,rgba(0,113,227,0.2),transparent)] rounded-full animate-spin-slow opacity-0 group-hover/logo:opacity-100 transition-opacity" />
                </div>
              </div>
              <div className="space-y-6 text-apple-darkGray text-lg leading-relaxed font-medium">
                <p>
                  Every industry has its upper limit. In the digital world, that limit is usually a "ten out of ten." It represents a standard that is good, predictable, and safe.
                </p>
                <p>
                  We founded ELEVEN because we realized that the most impactful digital breakthroughs happen just beyond the conventional boundary. We didn’t want to build websites that just checked the boxes; we wanted to build platforms that shattered them.
                </p>
                <p>
                  The name 11 is our permanent reminder to go the extra mile. It represents that extra degree of effort, the clever pivot in the code, and the unexpected design choice that transforms a user into a loyal customer.
                </p>
                <p className="text-apple-black font-bold">
                  We don't stop at perfect. We go one step further.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Core Pillars */}
        <div className="mb-32">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-5xl font-bold text-apple-black tracking-tight">Engineered to Elevate</h2>
              <p className="mt-4 text-xl text-apple-darkGray font-medium">Our strategic approach to digital architecture.</p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="p-10 rounded-[40px] bg-apple-gray border border-transparent hover:border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-500 h-full group">
                  <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                    <pillar.icon size={32} className="text-apple-blue" />
                  </div>
                  <h3 className="text-2xl font-bold text-apple-black mb-4 tracking-tight">{pillar.title}</h3>
                  <p className="text-apple-darkGray leading-relaxed font-medium">{pillar.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* 11-Point Quality Checklist */}
        <section className="mb-32">
          <AnimatedSection>
            <div className="p-12 lg:p-20 rounded-[64px] bg-apple-black text-white overflow-hidden relative">
              <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
                <span className="text-[400px] font-black absolute -top-20 -right-20">11</span>
              </div>
              
              <div className="relative z-10">
                <div className="mb-16">
                  <h2 className="text-4xl lg:text-6xl font-bold mb-6 tracking-tight">The 11-Point Quality Checklist</h2>
                  <p className="text-xl text-apple-silver font-medium max-w-2xl">Our signature development workflow ensures flawless delivery before any platform goes live.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-12">
                  {checklist.map((item, i) => (
                    <div key={i} className="flex items-center gap-4 py-4 border-b border-white/10 group">
                      <div className="w-8 h-8 rounded-full bg-apple-blue/20 flex items-center justify-center shrink-0 text-apple-blue font-bold text-xs">
                        {i + 1}
                      </div>
                      <span className="text-lg font-medium group-hover:text-apple-blue transition-colors">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </section>

        {/* Vision Cards Section */}
        <section className="mb-32">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-5xl font-bold text-apple-black tracking-tight text-balance">The EllEVEN Vision</h2>
              <p className="mt-4 text-xl text-apple-darkGray font-medium">Breaking past the conventional limit in four stages.</p>
            </div>
            
            <VisionCards />
          </AnimatedSection>
        </section>

        {/* CTA */}
        <AnimatedSection>
          <div className="text-center">
            <h2 className="text-4xl font-bold text-apple-black mb-8 tracking-tight">Beyond the Binary.</h2>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-10 py-5 bg-apple-black text-white font-bold rounded-full hover:bg-apple-blue transition-all duration-300 hover:shadow-2xl active:scale-95"
            >
              Turn Your Digital Presence Up <ArrowRight size={20} />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
