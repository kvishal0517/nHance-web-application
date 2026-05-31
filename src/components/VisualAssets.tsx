
import { useState, useEffect } from 'react';
import { 
  Megaphone, Palette, Layout, Bot, TrendingUp, Cloud, 
  ShieldCheck, Smartphone, Globe, ShoppingBag, Zap,
  BarChart3, Cpu, Activity, Lock, Layers, Monitor, AlertCircle, ArrowUpRight,
  Briefcase
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

export function DigitalTransformationMonitor() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      phase: 'Legacy Burden',
      title: 'Stagnant Growth',
      desc: 'Outdated websites and weak digital portfolios fail to capture modern leads, causing business growth to stall and authority to fade.',
      impact: 'Negative ROI',
      icon: <AlertCircle className="text-red-500" size={24} />,
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800',
      color: 'bg-red-50',
      visual: (
        <div className="space-y-3">
          <div className="h-2 bg-red-100 rounded-full w-full overflow-hidden">
            <div className="h-full bg-red-500 w-1/4 animate-pulse" />
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[10px] font-bold text-red-600 uppercase">Conversion</span>
            <span className="text-[10px] font-bold text-red-600">0.4%</span>
          </div>
        </div>
      )
    },
    {
      phase: 'Java Legacy',
      title: 'Obsolete Systems',
      desc: 'Clunky Java Swing POS systems from 2005 slow down your checkout and frustrate employees. It\'s time to move to fluid, touch-optimized interfaces.',
      impact: 'System Lag',
      icon: <Cpu className="text-orange-600" size={24} />,
      image: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=800',
      color: 'bg-orange-50',
      visual: (
        <div className="flex gap-1 items-end h-8">
          {[30, 45, 25, 60, 40].map((h, i) => (
            <div key={i} className="flex-1 bg-orange-400/40 rounded-t-sm animate-pulse" style={{ height: `${h}%` }} />
          ))}
        </div>
      )
    },
    {
      phase: 'Portfolio Gap',
      title: 'Invisible Talent',
      desc: 'In the digital world, if your portfolio doesn\'t wow them in 3 seconds, you don\'t exist. Weak portfolios fail to showcase your true value.',
      impact: 'Lost Leads',
      icon: <Briefcase className="text-slate-400" size={24} />,
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800',
      color: 'bg-slate-50',
      visual: (
        <div className="grid grid-cols-2 gap-2">
          <div className="h-3 bg-slate-200 rounded w-full" />
          <div className="h-3 bg-slate-200 rounded w-3/4" />
          <div className="h-3 bg-slate-200 rounded w-1/2" />
        </div>
      )
    },
    {
      phase: 'Modern POS',
      title: 'Fluid Transactions',
      desc: 'Experience the ease of a modern React-powered POS. Real-time inventory, biometric checkout, and glassmorphic aesthetics that impress.',
      impact: '3x Speed',
      icon: <Zap className="text-apple-blue" size={24} />,
      image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=800',
      color: 'bg-blue-50',
      visual: (
        <div className="relative h-12 flex items-center justify-center">
          <div className="w-10 h-10 rounded-full border-2 border-apple-blue animate-ping opacity-20" />
          <Smartphone className="text-apple-blue" size={24} />
        </div>
      )
    },
    {
      phase: 'Global Reach',
      title: 'Worldwide Outreach',
      desc: 'Break local barriers. A professional digital presence allows you to reach clients in London, Tokyo, and New York from a single hub.',
      impact: '24/7 Access',
      icon: <Globe className="text-indigo-600" size={24} />,
      image: 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&q=80&w=800',
      color: 'bg-indigo-50',
      visual: (
        <div className="flex justify-center gap-1">
          {[1, 2, 3].map(i => (
            <div key={i} className="w-2 h-2 rounded-full bg-indigo-400 animate-bounce" style={{ animationDelay: `${i * 0.2}s` }} />
          ))}
        </div>
      )
    },
    {
      phase: 'Paper Burden',
      title: 'Manual Bottlenecks',
      desc: 'Relying on physical files and paper trails slows down your response time and limits your ability to scale effectively.',
      impact: 'High Cost',
      icon: <Layers className="text-amber-600" size={24} />,
      image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&q=80&w=800',
      color: 'bg-amber-50',
      visual: (
        <div className="space-y-2">
          <div className="h-2 bg-amber-200 rounded-full w-full" />
          <div className="h-2 bg-amber-200 rounded-full w-3/4" />
          <div className="h-2 bg-amber-200 rounded-full w-1/2" />
        </div>
      )
    },
    {
      phase: 'Cloud Mastery',
      title: 'Instant Intelligence',
      desc: 'Migrate your paper trail to a secure, AI-powered cloud vault. Access every contract, lead, and metric from anywhere in the world.',
      impact: 'Zero Friction',
      icon: <Cloud className="text-cyan-600" size={24} />,
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
      color: 'bg-cyan-50',
      visual: (
        <div className="flex items-center justify-center h-10">
          <Activity className="text-cyan-500 animate-pulse" size={32} />
        </div>
      )
    },
    {
      phase: 'Trust Factor',
      title: 'Professional Authority',
      desc: 'A high-end website isn\'t just "pretty"—it\'s a trust engine. Professionals who invest in quality are perceived as higher value.',
      impact: 'Premium Brand',
      icon: <ShieldCheck className="text-emerald-600" size={24} />,
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800',
      color: 'bg-emerald-50',
      visual: (
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center">
            <Lock className="text-emerald-600" size={16} />
          </div>
          <div className="h-2 bg-emerald-100 flex-1 rounded-full overflow-hidden">
            <div className="h-full bg-emerald-500 w-full animate-pulse" />
          </div>
        </div>
      )
    },
    {
      phase: 'AI Evolution',
      title: 'Automated Growth',
      desc: 'Replace manual follow-ups with intelligent AI agents that qualify leads, book meetings, and handle support while you sleep.',
      impact: '24/7 Sales',
      icon: <Bot className="text-purple-600" size={24} />,
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
      color: 'bg-purple-50',
      visual: (
        <div className="grid grid-cols-4 gap-1">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-8 bg-purple-200/50 rounded animate-bounce" style={{ animationDelay: `${i * 0.1}s` }} />
          ))}
        </div>
      )
    },
    {
      phase: 'The Visual Edge',
      title: 'Immersive Portfolios',
      desc: 'Go beyond static images. Showcase your projects with interactive 3D views and cinematic motion that captures imagination.',
      impact: 'Max Impact',
      icon: <Palette className="text-pink-600" size={24} />,
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800',
      color: 'bg-pink-50',
      visual: (
        <div className="relative h-12 w-full bg-pink-100/30 rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-400/20 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
        </div>
      )
    },
    {
      phase: 'Data Blindness',
      title: 'Guesswork Strategy',
      desc: 'Running a business without real-time analytics is like flying blind. Stop guessing and start knowing exactly where your growth is.',
      impact: 'Uncertainty',
      icon: <BarChart3 className="text-red-600" size={24} />,
      image: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&q=80&w=800',
      color: 'bg-red-50',
      visual: (
        <div className="flex gap-1 h-8 items-center">
          {[20, 10, 15, 5].map((h, i) => (
            <div key={i} className="flex-1 bg-red-300 rounded-sm" style={{ height: `${h}%` }} />
          ))}
        </div>
      )
    },
    {
      phase: 'Market Mastery',
      title: 'Predictive Insights',
      desc: 'Our dashboards turn data into a competitive advantage. Forecast trends and identify high-value opportunities before they peak.',
      impact: 'Pure Precision',
      icon: <TrendingUp className="text-apple-blue" size={24} />,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
      color: 'bg-blue-50',
      visual: (
        <div className="relative h-12">
          <svg viewBox="0 0 100 40" className="w-full h-full">
            <path d="M0 35 Q 25 10, 50 25 T 100 5" fill="none" stroke="#0071e3" strokeWidth="2" className="animate-dash" strokeDasharray="100" />
          </svg>
        </div>
      )
    },
    {
      phase: 'Social Vacuum',
      title: 'Isolated Brand',
      desc: 'Without an integrated social and digital ecosystem, your brand exists in a vacuum. Connect with your audience where they live.',
      impact: 'Low Reach',
      icon: <Megaphone className="text-orange-500" size={24} />,
      image: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&q=80&w=800',
      color: 'bg-orange-50',
      visual: (
        <div className="flex justify-center h-10 items-center">
          <div className="w-8 h-8 rounded-full border-2 border-orange-300 animate-ping" />
        </div>
      )
    },
    {
      phase: 'Omnichannel',
      title: 'Unified Experience',
      desc: 'Deliver a consistent, premium experience across mobile, web, and physical touchpoints. Your brand, everywhere, all at once.',
      impact: 'Total Sync',
      icon: <Smartphone className="text-slate-800" size={24} />,
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800',
      color: 'bg-slate-50',
      visual: (
        <div className="grid grid-cols-3 gap-1">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-6 bg-slate-300 rounded animate-pulse" />
          ))}
        </div>
      )
    },
    {
      phase: 'Efficiency Trap',
      title: 'Manual Grind',
      desc: 'Hours spent on repetitive tasks are hours lost for innovation. Automation isn\'t a luxury; it\'s your ticket to high-level strategy.',
      impact: 'Fatigue',
      icon: <Activity className="text-red-400" size={24} />,
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800',
      color: 'bg-red-50',
      visual: (
        <div className="h-1 bg-red-200 rounded-full w-full overflow-hidden">
          <div className="h-full bg-red-500 w-3/4 animate-pulse" />
        </div>
      )
    },
    {
      phase: 'One-Click World',
      title: 'Hyper Efficiency',
      desc: 'Transform complex workflows into elegant, one-click actions. We engineer systems that work for you, not the other way around.',
      impact: 'Max Flow',
      icon: <Zap className="text-amber-500" size={24} />,
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800',
      color: 'bg-amber-50',
      visual: (
        <div className="relative h-12 flex items-center justify-center">
          <div className="w-12 h-12 rounded-2xl bg-amber-100 animate-spin-slow" />
          <Zap className="absolute text-amber-600" size={20} />
        </div>
      )
    },
    {
      phase: 'Security Risk',
      title: 'Vulnerable Assets',
      desc: 'Old systems are a playground for breaches. Protect your client data and business reputation with enterprise-grade security.',
      impact: 'Risk High',
      icon: <Lock className="text-red-600" size={24} />,
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
      color: 'bg-red-50',
      visual: (
        <div className="flex justify-center gap-1">
          <div className="w-4 h-1 bg-red-400 rounded-full animate-pulse" />
          <div className="w-4 h-1 bg-red-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
        </div>
      )
    },
    {
      phase: 'Ironclad',
      title: 'Fortified Future',
      desc: 'Zero-trust architecture, end-to-end encryption, and real-time threat monitoring. Peace of mind engineered into every pixel.',
      impact: 'Safe Haven',
      icon: <ShieldCheck className="text-emerald-500" size={24} />,
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800',
      color: 'bg-emerald-50',
      visual: (
        <div className="relative w-full h-10 flex items-center justify-center">
          <div className="absolute inset-0 bg-emerald-500/10 rounded-full animate-ping" />
          <Lock className="text-emerald-600" size={24} />
        </div>
      )
    },
    {
      phase: 'Scalability Wall',
      title: 'Growth Ceiling',
      desc: 'When your system crashes under success, you\'ve failed. Build on a cloud-native foundation that scales with your ambition.',
      impact: 'Capached',
      icon: <Monitor className="text-red-500" size={24} />,
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800',
      color: 'bg-red-50',
      visual: (
        <div className="h-4 bg-red-200 w-full rounded relative overflow-hidden">
          <div className="absolute inset-0 bg-red-500 w-full" />
        </div>
      )
    },
    {
      phase: 'Future Proof',
      title: 'Unlimited Potential',
      desc: 'Serverless architecture and auto-scaling ensure your digital presence is as ready for 1,000,000 users as it is for one.',
      impact: 'No Limits',
      icon: <TrendingUp className="text-apple-blue" size={24} />,
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
      color: 'bg-blue-50',
      visual: (
        <div className="flex gap-1 items-end h-10 w-full">
          {[10, 25, 45, 70, 95].map((h, i) => (
            <div key={i} className="flex-1 bg-apple-blue/60 rounded-t-sm" style={{ height: `${h}%` }} />
          ))}
        </div>
      )
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative w-full max-w-5xl mx-auto aspect-[16/10] lg:aspect-video group">
      {/* Monitor Frame */}
      <div className="absolute inset-0 bg-slate-900 rounded-[40px] p-4 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.4)] border-[12px] border-slate-800 overflow-hidden animate-float">
        {/* Screen Content */}
        <div className="relative h-full w-full bg-white rounded-2xl overflow-hidden">
          {slides.map((slide, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                i === currentSlide 
                  ? 'opacity-100 translate-y-0 scale-100 z-10' 
                  : 'opacity-0 translate-y-12 scale-95 z-0 pointer-events-none invisible'
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
                {/* Visual Side */}
                <div className="relative h-64 lg:h-full overflow-hidden bg-slate-100">
                   <img src={slide.image} alt={slide.title} className="w-full h-full object-cover opacity-90 transition-transform duration-[7000ms] ease-linear scale-110 group-hover:scale-100" />
                   <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-transparent" />
                   
                   {/* HUD Elements */}
                   <div className="absolute top-6 left-6 right-6">
                     <div className="bg-white p-5 rounded-2xl border border-white/50 shadow-2xl animate-float" style={{ animationDelay: '0.5s' }}>
                        <div className="flex items-center gap-4 mb-4">
                          <div className={`p-2.5 ${slide.color} rounded-xl shadow-sm`}>
                            {slide.icon}
                          </div>
                          <div>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.1em]">Status Analysis</p>
                            <p className="text-sm font-bold text-apple-black">{slide.impact}</p>
                          </div>
                        </div>
                        {slide.visual}
                     </div>
                   </div>
                   
                   <div className="absolute bottom-6 left-6">
                      <div className="px-3 py-1.5 bg-black text-white text-[10px] font-bold rounded-lg uppercase tracking-widest flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-apple-blue rounded-full animate-pulse" />
                        Live Feed: Phase {i + 1}
                      </div>
                   </div>
                </div>

                {/* Content Side */}
                <div className="p-8 lg:p-16 flex flex-col justify-center bg-white">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="h-px w-8 bg-apple-blue/30" />
                    <span className="text-apple-blue font-bold tracking-[0.25em] uppercase text-[10px]">{slide.phase}</span>
                  </div>
                  
                  <h3 className="text-3xl lg:text-5xl font-bold text-apple-black mb-6 tracking-tight leading-[1.1]">
                    {slide.title}
                  </h3>
                  
                  <p className="text-lg lg:text-xl text-apple-darkGray font-medium leading-relaxed mb-10">
                    {slide.desc}
                  </p>
                  
                  <div className="mt-auto pt-8 border-t border-slate-50 flex items-center justify-between">
                     <div 
                        className="flex items-center gap-2 text-apple-blue font-bold text-sm group/btn cursor-pointer"
                        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
                      >
                        Discover Next
                        <ArrowUpRight size={18} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                     </div>
                     <span className="text-[10px] font-bold text-slate-300 tabular-nums">
                        {String(i + 1).padStart(2, '0')} / {slides.length}
                     </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Monitor Stand Styling */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-40 h-6 bg-slate-800 rounded-b-xl shadow-lg" />
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-64 h-2 bg-black/10 blur-md rounded-full" />

      {/* Background Decor */}
      <div className="absolute -top-12 -right-12 w-64 h-64 bg-apple-blue/10 rounded-full blur-[100px] animate-pulse pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-purple-500/5 rounded-full blur-[120px] animate-pulse pointer-events-none" style={{ animationDelay: '1s' }} />
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
    case 'fashion':
      return (
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="absolute w-40 h-40 bg-[#D4AF37]/10 rounded-full blur-3xl animate-pulse" />
          <svg viewBox="0 0 200 200" className="w-48 h-48 relative">
            <path d="M60 40 L140 40 L140 160 L100 140 L60 160 Z" fill="none" stroke="#1d1d1f" strokeWidth="1" className="animate-float" />
            <path d="M80 60 L120 60 M100 60 L100 120" stroke="#D4AF37" strokeWidth="1.5" />
            <circle cx="100" cy="140" r="4" fill="#D4AF37" className="animate-pulse" />
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
