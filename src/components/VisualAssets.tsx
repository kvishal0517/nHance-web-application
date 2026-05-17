
import { useState, useEffect } from 'react';
import { 
  Megaphone, Palette, Layout, Bot, TrendingUp, Cloud, 
  ShieldCheck, Smartphone, Globe, ShoppingBag, Zap,
  BarChart3, Cpu, Activity, Lock, Layers
} from 'lucide-react';

export function ConfettiShower() {
  const particles = Array.from({ length: 20 });
  const colors = ['#0071e3', '#86868b', '#d2d2d7', '#1d1d1f'];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden h-[120vh]">
      {particles.map((_, i) => {
        const color = colors[i % colors.length];
        const left = Math.random() * 100;
        const delay = Math.random() * 15;
        const duration = 12 + Math.random() * 10;
        const size = 4 + Math.random() * 6;
        
        return (
          <div
            key={i}
            className="absolute top-[-20px] animate-confetti-fall"
            style={{
              left: `${left}%`,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
            }}
          >
            <div 
              className="animate-confetti-shake"
              style={{ animationDuration: `${3 + Math.random() * 2}s` }}
            >
              <svg 
                width={size} 
                height={size} 
                viewBox="0 0 10 10" 
                style={{ transform: `rotate(${Math.random() * 360}deg)` }}
              >
                <rect width="10" height="10" fill={color} opacity="0.6" rx="1" />
              </svg>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function MeshGradient({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-[#0071e3]/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#424245]/5 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '12s' }} />
      <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] bg-[#0071e3]/5 rounded-full blur-[80px] animate-pulse" style={{ animationDuration: '10s' }} />
    </div>
  );
}

export function FloatingGlow() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div 
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full mix-blend-soft-light filter blur-[120px] animate-float opacity-30"
        style={{ background: 'radial-gradient(circle, #0071e3 0%, transparent 70%)', animationDuration: '15s' }}
      />
      <div 
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full mix-blend-soft-light filter blur-[100px] animate-float opacity-20"
        style={{ background: 'radial-gradient(circle, #86868b 0%, transparent 70%)', animationDuration: '20s', animationDirection: 'reverse' }}
      />
    </div>
  );
}

export function AbstractBusinessGraphic() {
  return (
    <svg viewBox="0 0 400 400" className="w-full h-full opacity-60">
      <defs>
        <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0071e3" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#0071e3" stopOpacity="0.2" />
        </linearGradient>
      </defs>
      {[...Array(6)].map((_, i) => (
        <circle
          key={i}
          cx="200"
          cy="200"
          r={40 + i * 30}
          fill="none"
          stroke="url(#lineGrad)"
          strokeWidth="0.5"
          className="animate-pulse"
          style={{ animationDelay: `${i * 0.5}s`, animationDuration: `${4 + i}s` }}
        />
      ))}
      <g className="animate-float" style={{ animationDuration: '10s' }}>
        <rect x="180" y="180" width="40" height="40" rx="10" fill="white" stroke="#0071e3" strokeWidth="1" />
        <path d="M190 200h20M200 190v20" stroke="#0071e3" strokeWidth="1" />
      </g>
    </svg>
  );
}

export function FloatingAppGraphic() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: 'Digital Marketing',
      subtitle: 'Data-Driven Growth',
      icon: <Megaphone className="text-apple-blue" size={20} />,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400',
      color: 'bg-blue-50',
      visual: (
        <div className="flex items-end gap-1.5 h-12 mt-2">
          {[40, 70, 55, 90, 65].map((h, i) => (
            <div key={i} className="flex-1 bg-apple-blue/40 rounded-t-sm animate-[grow_1.5s_ease-out_infinite]" style={{ height: `${h}%`, animationDelay: `${i * 0.1}s` }} />
          ))}
        </div>
      )
    },
    {
      title: 'Premium Branding',
      subtitle: 'Distinctive Identity',
      icon: <Palette className="text-purple-500" size={20} />,
      image: 'https://images.unsplash.com/photo-1561070791-26c11d204a3d?auto=format&fit=crop&q=80&w=400',
      color: 'bg-purple-50',
      visual: (
        <div className="relative h-12 mt-2 flex items-center justify-center">
          <div className="absolute w-10 h-10 rounded-full border-2 border-purple-500/30 animate-ping" />
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-500 to-blue-500 rotate-45 animate-pulse" />
        </div>
      )
    },
    {
      title: 'Web Designing',
      subtitle: 'Immersive UX',
      icon: <Layout className="text-emerald-500" size={20} />,
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=400',
      color: 'bg-emerald-50',
      visual: (
        <div className="w-full mt-2 space-y-2">
          <div className="h-1.5 bg-emerald-500/20 rounded-full w-full" />
          <div className="flex gap-2">
            <div className="h-8 bg-emerald-500/10 rounded-lg flex-1 animate-pulse" />
            <div className="h-8 bg-emerald-500/10 rounded-lg flex-1" style={{ animationDelay: '0.5s' }} />
          </div>
        </div>
      )
    },
    {
      title: 'AI Integration',
      subtitle: 'Smart Automation',
      icon: <Bot className="text-orange-500" size={20} />,
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=400',
      color: 'bg-orange-50',
      visual: (
        <div className="relative h-12 mt-2 flex items-center justify-center">
          <Cpu className="text-orange-500/40 animate-spin-slow" size={32} />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-ping" />
          </div>
        </div>
      )
    },
    {
      title: 'Data Analytics',
      subtitle: 'Actionable Insights',
      icon: <TrendingUp className="text-blue-600" size={20} />,
      image: 'https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=400',
      color: 'bg-blue-50',
      visual: (
        <div className="h-12 mt-2 relative overflow-hidden bg-blue-100/30 rounded-lg">
          <svg viewBox="0 0 100 40" className="w-full h-full">
            <path d="M0 30 Q 25 10, 50 25 T 100 5" fill="none" stroke="#2563eb" strokeWidth="2" className="animate-dash" strokeDasharray="100" strokeDashoffset="100" style={{ animation: 'dash 3s linear infinite' }} />
          </svg>
        </div>
      )
    },
    {
      title: 'Cloud Architecture',
      subtitle: 'Scalable Systems',
      icon: <Cloud className="text-cyan-500" size={20} />,
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400',
      color: 'bg-cyan-50',
      visual: (
        <div className="flex justify-center gap-2 mt-2 h-12 items-center">
          {[1, 2, 3].map((i) => (
            <div key={i} className="w-3 h-3 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: `${i * 0.2}s` }} />
          ))}
        </div>
      )
    },
    {
      title: 'Cyber Security',
      subtitle: 'Enterprise Guard',
      icon: <ShieldCheck className="text-red-500" size={20} />,
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=400',
      color: 'bg-red-50',
      visual: (
        <div className="relative h-12 mt-2 flex items-center justify-center">
          <Lock className="text-red-500 animate-pulse" size={28} />
          <div className="absolute w-12 h-12 border-2 border-red-200 rounded-full animate-spin-slow" />
        </div>
      )
    },
    {
      title: 'App Ecosystem',
      subtitle: 'Native Performance',
      icon: <Smartphone className="text-slate-700" size={20} />,
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=400',
      color: 'bg-slate-50',
      visual: (
        <div className="grid grid-cols-3 gap-1 mt-2">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-5 bg-slate-200 rounded-md animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
          ))}
        </div>
      )
    },
    {
      title: 'Global Reach',
      subtitle: 'Borderless Impact',
      icon: <Globe className="text-indigo-500" size={20} />,
      image: 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&q=80&w=400',
      color: 'bg-indigo-50',
      visual: (
        <div className="relative h-12 mt-2 flex items-center justify-center">
          <Globe className="text-indigo-500/40 animate-spin-slow" size={32} />
          <Activity className="absolute text-indigo-500" size={16} />
        </div>
      )
    },
    {
      title: 'E-commerce',
      subtitle: 'Seamless Sales',
      icon: <ShoppingBag className="text-pink-500" size={20} />,
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=400',
      color: 'bg-pink-50',
      visual: (
        <div className="flex items-center gap-2 mt-2">
          <div className="w-10 h-10 bg-pink-100 rounded-xl flex items-center justify-center">
            <Zap className="text-pink-500" size={16} />
          </div>
          <div className="flex-1 space-y-1">
            <div className="h-1.5 bg-pink-100 rounded-full w-full" />
            <div className="h-1.5 bg-pink-100 rounded-full w-2/3" />
          </div>
        </div>
      )
    },
    {
      title: 'Strategy First',
      subtitle: 'Planned Success',
      icon: <Layers className="text-amber-500" size={20} />,
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=400',
      color: 'bg-amber-50',
      visual: (
        <div className="flex flex-col gap-1 mt-2">
          <div className="h-3 bg-amber-500/20 rounded-md w-full translate-x-2 animate-float" style={{ animationDuration: '3s' }} />
          <div className="h-3 bg-amber-500/40 rounded-md w-full animate-float" style={{ animationDuration: '4s' }} />
          <div className="h-3 bg-amber-500/20 rounded-md w-full -translate-x-2 animate-float" style={{ animationDuration: '3.5s' }} />
        </div>
      )
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative w-full h-full flex items-center justify-center p-4">
      {/* Phone Frame */}
      <div className="w-[260px] h-[520px] bg-white rounded-[50px] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.3)] border-[10px] border-slate-900 overflow-hidden relative animate-float">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-8 bg-slate-900 rounded-b-3xl z-30" />
        
        {/* Progress Bar Top */}
        <div className="absolute top-10 left-0 right-0 h-1 bg-slate-100 z-20 flex px-6 gap-1">
          {slides.map((_, i) => (
            <div 
              key={i}
              className="flex-1 h-full rounded-full overflow-hidden bg-slate-200"
            >
              <div 
                className={`h-full bg-apple-blue transition-all duration-[4000ms] linear ${
                  i === currentSlide ? 'w-full' : i < currentSlide ? 'w-full' : 'w-0'
                }`}
              />
            </div>
          ))}
        </div>

        {/* Screen Content */}
        <div className="relative h-full flex flex-col">
          {/* Main Display */}
          <div className="relative flex-1 overflow-hidden">
            {slides.map((slide, i) => (
              <div
                key={i}
                className={`absolute inset-0 transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                  i === currentSlide 
                    ? 'opacity-100 scale-100 translate-x-0' 
                    : i < currentSlide ? 'opacity-0 scale-110 -translate-x-full' : 'opacity-0 scale-90 translate-x-full'
                }`}
              >
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                  <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-end p-8 pb-12">
                  <div className={`w-12 h-12 rounded-2xl ${slide.color} flex items-center justify-center mb-6 shadow-sm`}>
                    {slide.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-apple-black mb-2 tracking-tight">
                    {slide.title}
                  </h3>
                  <p className="text-sm font-semibold text-apple-blue uppercase tracking-widest mb-4">
                    {slide.subtitle}
                  </p>
                  
                  {/* Dynamic Visual Area */}
                  <div className="bg-white/50 backdrop-blur-md rounded-2xl p-4 border border-white/50 shadow-sm min-h-[80px]">
                    {slide.visual}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Navigation Area */}
          <div className="h-24 bg-white border-t border-slate-50 px-8 flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Current Phase</span>
              <span className="text-sm font-bold text-apple-black">{slides[currentSlide].title}</span>
            </div>
            <div className="w-12 h-12 bg-apple-blue rounded-full flex items-center justify-center text-white shadow-lg shadow-apple-blue/20">
              <Zap size={20} />
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Decorative Elements */}
      <div className="absolute -top-10 -right-10 w-64 h-64 bg-apple-blue/10 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-purple-500/5 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
      
      {/* Floating Badges */}
      <div className="absolute top-20 -right-4 bg-white/80 backdrop-blur-md p-3 rounded-2xl shadow-xl border border-slate-100 animate-float" style={{ animationDelay: '1.5s' }}>
        <BarChart3 className="text-apple-blue" size={24} />
      </div>
      <div className="absolute bottom-40 -left-8 bg-white/80 backdrop-blur-md p-3 rounded-2xl shadow-xl border border-slate-100 animate-float" style={{ animationDelay: '2.5s' }}>
        <Activity className="text-emerald-500" size={24} />
      </div>
    </div>
  );
}

export function CategoryGraphic({ categoryId }: { categoryId: string }) {
  switch (categoryId) {
    case 'tech':
      return (
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#0071e310_0%,transparent_70%)] animate-pulse" />
          <svg viewBox="0 0 200 200" className="w-48 h-48">
            <rect x="60" y="60" width="80" height="80" rx="20" fill="none" stroke="#1d1d1f" strokeWidth="1" className="animate-spin-slow" style={{ animationDuration: '20s' }} />
            <rect x="75" y="75" width="50" height="50" rx="12" fill="none" stroke="#0071e3" strokeWidth="2" className="animate-spin-slow" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
            <circle cx="100" cy="100" r="10" fill="#0071e3" className="animate-pulse" />
          </svg>
        </div>
      );
    case 'medical':
      return (
        <div className="relative w-full h-full flex items-center justify-center">
          <svg viewBox="0 0 200 200" className="w-48 h-48">
            <path d="M100 40c0 0 60 20 60 60s-60 60-60 60-60-20-60-60 60-60 60-60" fill="none" stroke="#0071e3" strokeWidth="1.5" strokeDasharray="5 5" className="animate-glow" />
            <circle cx="100" cy="100" r="30" fill="none" stroke="#1d1d1f" strokeWidth="1" />
            <path d="M90 100h20M100 90v20" stroke="#0071e3" strokeWidth="2" />
          </svg>
        </div>
      );
    case 'creative':
    case 'creatives':
      return (
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="absolute w-40 h-40 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 rounded-full blur-2xl animate-float" />
          <svg viewBox="0 0 200 200" className="w-48 h-48 relative">
            <circle cx="80" cy="100" r="40" fill="none" stroke="#0071e3" strokeWidth="1" />
            <circle cx="120" cy="100" r="40" fill="none" stroke="#1d1d1f" strokeWidth="1" />
            <circle cx="100" cy="80" r="40" fill="none" stroke="#0071e3" strokeWidth="1" opacity="0.5" />
          </svg>
        </div>
      );
    default:
      return (
        <div className="relative w-full h-full flex items-center justify-center">
          <svg viewBox="0 0 200 200" className="w-48 h-48">
            <rect x="50" y="50" width="100" height="100" rx="24" fill="none" stroke="#e8e8ed" strokeWidth="1" />
            <path d="M70 100h60" stroke="#0071e3" strokeWidth="2" strokeLinecap="round" className="animate-pulse" />
            <path d="M100 70v60" stroke="#0071e3" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
          </svg>
        </div>
      );
  }
}
