import { Link } from 'react-router-dom';
import { Target, Heart, Lightbulb, ArrowRight, Users, Shield, Rocket } from 'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';

export function AboutPage() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider mb-3">About</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-4">About nH&auml;nce</h1>
            <p className="text-slate-500 max-w-2xl mx-auto">
              We believe every professional deserves a digital presence that matches the quality of their work. No templates. No shortcuts. Just tailored solutions.
            </p>
          </div>
        </AnimatedSection>

        {/* Story */}
        <AnimatedSection>
          <div className="max-w-3xl mx-auto mb-20">
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-5">Our Story</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  nH&auml;nce was born from a simple observation: most professionals \u2014 doctors, lawyers, coaches, artists, engineers \u2014 settle for digital presences that don&apos;t reflect who they are. Generic templates. Clunky layouts. Zero personality.
                </p>
                <p>
                  We set out to change that. By building industry-specific mock projects that professionals can actually explore, we let you see what&apos;s possible before you commit. No guesswork. No surprises. Just clarity.
                </p>
                <p>
                  Today, we serve professionals across 10+ industries \u2014 from IIT coaching centers to family law practices, from Hindustani vocalists to SaaS founders. Each project is built from scratch, designed for that specific profession, and infused with AI automation that saves real time.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Values */}
        <AnimatedSection>
          <div className="text-center mb-10">
            <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider mb-3">Values</p>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">What Drives Us</h2>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {[
            {
              icon: Target,
              title: 'Precision',
              desc: 'Every project is built for one specific profession. We don\'t adapt templates \u2014 we design from scratch based on how your industry works.',
            },
            {
              icon: Heart,
              title: 'Empathy',
              desc: 'We study your clients, your workflow, and your pain points before writing a single line of code. The result feels like it was made by someone who understands your world.',
            },
            {
              icon: Lightbulb,
              title: 'Innovation',
              desc: 'AI agents, smart automation, interactive demos \u2014 we bring the latest technology to professionals who\'ve been underserved by the digital world.',
            },
          ].map((value, i) => (
            <AnimatedSection key={i} delay={i * 100}>
              <div className="p-7 rounded-2xl bg-white border border-slate-100 shadow-soft hover:shadow-medium transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center mb-5">
                  <value.icon size={24} className="text-brand-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{value.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{value.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Process */}
        <AnimatedSection>
          <div className="text-center mb-10">
            <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider mb-3">Process</p>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Our Process</h2>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {[
            {
              icon: Users,
              title: 'Discovery',
              desc: 'We learn your profession, your clients, and your goals. We study what works in your industry and what doesn\'t.',
            },
            {
              icon: Shield,
              title: 'Design & Build',
              desc: 'We design and develop your solution from scratch. Every element is intentional \u2014 from the color palette to the AI workflows.',
            },
            {
              icon: Rocket,
              title: 'Launch & Support',
              desc: 'We deploy, test, and optimize. Post-launch, we\'re available for updates, enhancements, and ongoing support.',
            },
          ].map((step, i) => (
            <AnimatedSection key={i} delay={i * 100}>
              <div className="relative p-7 rounded-2xl bg-white border border-slate-100 shadow-soft hover:shadow-medium transition-all duration-300">
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-brand-600 text-white text-sm font-bold flex items-center justify-center shadow-brand">
                  {i + 1}
                </div>
                <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center mb-5">
                  <step.icon size={24} className="text-brand-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection>
          <div className="text-center p-8 sm:p-12 rounded-3xl bg-slate-900">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 tracking-tight">Let&apos;s Build Something Great</h2>
            <p className="text-slate-300 max-w-lg mx-auto mb-8">
              Ready to see what your professional digital presence could look like?
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/portfolio"
                className="group flex items-center gap-2 px-8 py-4 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-brand"
              >
                Explore Portfolio <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/15 border border-white/15 text-white font-semibold rounded-xl transition-all duration-200"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
