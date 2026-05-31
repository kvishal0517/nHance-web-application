import { Code2, ShieldCheck, Sparkles } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

export function VisionCards() {
  const cards = [
    {
      id: '01',
      title: 'THE HOOK',
      description: "Most business websites online today are a 'ten out of ten.' They follow standard templates and get completely ignored.",
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000',
      glow: 'shadow-[0_0_50px_rgba(239,68,68,0.2)]',
      visual: (
        <div className="relative w-full h-full overflow-hidden">
           <img 
             src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000" 
             className="w-full h-full object-cover transition-transform duration-[10000ms] group-hover:scale-125"
             alt="Digital Chaos"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-apple-black via-transparent to-transparent opacity-60" />
           <div className="absolute inset-0 bg-red-500/10 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-1000" />
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-red-500/20 blur-[80px] rounded-full animate-pulse" />
        </div>
      )
    },
    {
      id: '02',
      title: 'PHILOSOPHY',
      description: "But 'fine' doesn't scale. At 11, we build digital assets engineered to outperform and outclass your competition.",
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000',
      glow: 'shadow-[0_0_50px_rgba(0,113,227,0.3)]',
      visual: (
        <div className="relative w-full h-full overflow-hidden">
           <img 
             src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000" 
             className="w-full h-full object-cover transition-transform duration-[10000ms] group-hover:scale-110"
             alt="Futuristic Tech"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-apple-blue/80 via-apple-blue/20 to-transparent" />
           <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-8xl font-black text-white/90 tracking-tighter drop-shadow-[0_10px_30px_rgba(255,255,255,0.3)]">11</div>
           </div>
           <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,transparent,white,transparent)] opacity-10 animate-spin-slow" />
        </div>
      )
    },
    {
      id: '03',
      title: 'CAPABILITY',
      description: "Custom code. Intentional design. Bulletproof security. Built to grow with your revenue. No templates. No bloat.",
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000',
      glow: 'shadow-[0_0_50px_rgba(16,185,129,0.2)]',
      visual: (
        <div className="relative w-full h-full overflow-hidden">
           <img 
             src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000" 
             className="w-full h-full object-cover transition-transform duration-[10000ms] group-hover:scale-125"
             alt="Cyber Code"
           />
           <div className="absolute inset-0 bg-apple-black/80" />
           <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 via-transparent to-transparent" />
           <div className="absolute inset-0 flex items-center justify-center">
              <div className="grid grid-cols-2 gap-4">
                 {[Code2, ShieldCheck].map((Icon, i) => (
                   <div key={i} className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400 shadow-2xl backdrop-blur-md animate-float" style={{ animationDelay: `${i * 0.5}s` }}>
                     <Icon size={28} />
                   </div>
                 ))}
              </div>
           </div>
           <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-apple-black to-transparent" />
        </div>
      )
    },
    {
      id: '04',
      title: 'CALL TO ACTION',
      description: "Break past the conventional limit. Schedule your blueprint call today. ELEVEN: Beyond the Code.",
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000',
      glow: 'shadow-[0_0_50px_rgba(0,113,227,0.2)]',
      visual: (
        <div className="relative w-full h-full overflow-hidden">
           <img 
             src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000" 
             className="w-full h-full object-cover transition-transform duration-[10000ms] group-hover:scale-110"
             alt="Modern Studio"
           />
           <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px] group-hover:bg-white/0 transition-all duration-1000" />
           <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
           <div className="absolute inset-0 flex flex-col items-center justify-center gap-6">
              <div className="p-4 rounded-full bg-white shadow-2xl animate-bounce-subtle">
                <Sparkles size={32} className="text-apple-blue" />
              </div>
              <div className="px-8 py-4 bg-apple-black text-white rounded-full font-black tracking-tighter shadow-2xl group-hover:bg-apple-blue transition-all">
                START ELEVATING
              </div>
           </div>
        </div>
      )
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-32 px-6 lg:px-12">
      {cards.map((card, i) => (
        <AnimatedSection key={card.id} delay={i * 150} animationType="fade-up">
          <div className={`group h-[600px] flex flex-col bg-white rounded-[48px] border border-slate-100 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.05)] hover:shadow-[0_50px_100px_-30px_rgba(0,113,227,0.15)] transition-all duration-700 overflow-hidden ${card.glow}`}>
            {/* Header Content */}
            <div className="p-10 flex-shrink-0">
               <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] font-black text-apple-blue uppercase tracking-[0.4em]">{card.title}</span>
                  <span className="text-[10px] font-black text-slate-300 tracking-widest">{card.id}</span>
               </div>
               <p className="text-apple-black font-black text-2xl leading-[1.1] tracking-tighter mb-4 group-hover:text-apple-blue transition-colors duration-500">
                 {card.description}
               </p>
               <div className="h-1 w-8 bg-slate-100 group-hover:w-16 group-hover:bg-apple-blue transition-all duration-500 rounded-full" />
            </div>

            {/* Stunning Visual Bottom Half */}
            <div className="flex-1 overflow-hidden relative border-t border-slate-50">
               {card.visual}
            </div>
          </div>
        </AnimatedSection>
      ))}
    </div>
  );
}
