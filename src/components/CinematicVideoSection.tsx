import { useState, useEffect, useMemo } from 'react';
import { Play, Pause, RotateCcw, ArrowRight } from 'lucide-react';

export function CinematicVideoSection() {
  const [currentScene, setCurrentScene] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  const scenes = useMemo(() => [
    {
      id: 0,
      duration: 10000,
      label: 'CONTEXT',
      vo: "Most business websites are 'ten out of ten.' They look fine. They follow templates. And they get ignored.",
      visual: (
        <div className="absolute inset-0 bg-[#F5F5F7] flex items-center justify-center p-20">
          <div className="w-full h-full border border-slate-200 rounded-2xl bg-white shadow-sm overflow-hidden flex flex-col grayscale opacity-40 transition-all duration-[5000ms] ease-out group-hover:scale-[1.02]">
            <div className="h-10 bg-slate-50 border-b border-slate-100 flex items-center px-4 gap-2">
              <div className="w-2 h-2 rounded-full bg-slate-200" />
              <div className="w-2 h-2 rounded-full bg-slate-200" />
              <div className="w-20 h-2 bg-slate-100 rounded-full" />
            </div>
            <div className="p-12 space-y-8">
              <div className="h-8 w-1/3 bg-slate-100 rounded" />
              <div className="h-4 w-full bg-slate-50 rounded" />
              <div className="h-4 w-5/6 bg-slate-50 rounded" />
              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="h-32 bg-slate-50 rounded-xl" />
                <div className="h-32 bg-slate-50 rounded-xl" />
                <div className="h-32 bg-slate-50 rounded-xl" />
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 1,
      duration: 12000,
      label: 'PHILOSOPHY',
      vo: "But 'fine' doesn't scale. At ELEVEN, we engineer digital assets to outperform and outclass the competition.",
      visual: (
        <div className="absolute inset-0 bg-white flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#0071e308,transparent_70%)]" />
          <div className="relative flex flex-col items-center">
            <div className="text-[240px] font-black text-apple-black leading-none tracking-tighter opacity-[0.03] absolute -translate-y-1/4 scale-150">
              11
            </div>
            <div className="text-[120px] font-black text-apple-black tracking-tighter relative transition-transform duration-[10000ms] ease-out scale-110">
              11
            </div>
            <div className="h-1 w-24 bg-apple-blue mt-4 rounded-full" />
          </div>
        </div>
      )
    },
    {
      id: 2,
      duration: 18000,
      label: 'CAPABILITY',
      vo: "Custom code. Intentional design. Bulletproof security. Built to grow with your revenue.",
      visual: (
        <div className="absolute inset-0 bg-apple-black flex items-center justify-center p-24 overflow-hidden">
           <div className="absolute inset-0 grid grid-cols-[repeat(20,minmax(0,1fr))] opacity-[0.03]">
             {Array.from({ length: 400 }).map((_, i) => (
               <div key={i} className="border-[0.5px] border-white" />
             ))}
           </div>
           <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-20 w-full max-w-5xl">
              {['PERFORMANCE', 'SECURITY', 'CONVERSION'].map((text, i) => (
                <div key={i} className="flex flex-col items-start gap-4 border-l border-apple-blue/30 pl-8 transition-all duration-1000" style={{ transitionDelay: `${i * 400}ms` }}>
                  <span className="text-apple-blue font-bold text-xs tracking-[0.3em]">{text}</span>
                  <div className="h-[1px] w-full bg-white/10" />
                  <p className="text-white/40 text-sm font-medium">BEYOND THE STANDARD</p>
                </div>
              ))}
           </div>
        </div>
      )
    },
    {
      id: 3,
      duration: 15000,
      label: 'CALL TO ACTION',
      vo: "Break past the conventional limit. Schedule your blueprint call today. 11: Beyond the Code.",
      visual: (
        <div className="absolute inset-0 bg-white flex flex-col items-center justify-center overflow-hidden">
          <div className="text-[200px] font-black text-apple-black tracking-tighter mb-12 opacity-5 absolute">11</div>
          <div className="relative z-10 flex flex-col items-center gap-12">
            <h3 className="text-4xl font-black text-apple-black tracking-tight">ENGINEERED TO ELEVATE.</h3>
            <div className="group/btn relative">
              <div className="absolute -inset-4 bg-apple-blue/10 blur-2xl rounded-full opacity-0 group-hover/btn:opacity-100 transition-opacity" />
              <div className="relative px-12 py-6 bg-apple-black text-white rounded-full font-bold text-lg flex items-center gap-3 cursor-pointer hover:bg-apple-blue transition-all duration-500 shadow-xl">
                Get Started <ArrowRight size={20} />
              </div>
            </div>
          </div>
        </div>
      )
    }
  ], []);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            if (currentScene < scenes.length - 1) {
              setCurrentScene(s => s + 1);
              return 0;
            } else {
              setIsPlaying(false);
              return 100;
            }
          }
          const step = (100 / (scenes[currentScene].duration / 100)) ;
          return prev + step;
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentScene, scenes]);

  const restart = () => {
    setCurrentScene(0);
    setProgress(0);
    setIsPlaying(true);
  };

  return (
    <div className="w-full max-w-6xl mx-auto mb-32 relative font-sans">
      <div className="relative aspect-video rounded-[32px] overflow-hidden bg-[#F5F5F7] border border-slate-100 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.1)]">
        
        {/* Visual Layer */}
        <div className="absolute inset-0 transition-opacity duration-1000 ease-in-out">
          {scenes[currentScene].visual}
        </div>

        {/* Minimal HUD */}
        <div className="absolute top-10 left-12 right-12 flex justify-between items-center pointer-events-none z-20">
           <div className="flex items-center gap-3">
             <div className="w-1.5 h-1.5 rounded-full bg-apple-blue animate-pulse" />
             <span className="text-[10px] font-bold text-apple-black/40 uppercase tracking-[0.3em]">ELEVEN / PHILOSOPHY</span>
           </div>
           <span className="text-[10px] font-bold text-apple-black/20 uppercase tracking-[0.3em]">0{currentScene + 1} — 04</span>
        </div>

        {/* Content Layer */}
        <div className="absolute inset-0 flex flex-col justify-end p-16 pointer-events-none z-10 bg-gradient-to-t from-white/40 via-transparent to-transparent">
           <p className="text-3xl sm:text-4xl font-bold text-apple-black leading-[1.1] tracking-tight max-w-3xl animate-fade-in-up">
             {scenes[currentScene].vo}
           </p>
        </div>

        {/* Progress Bar (Minimal) */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-100">
           <div 
             className="h-full bg-apple-blue transition-all duration-100 ease-linear" 
             style={{ width: `${progress}%` }} 
           />
        </div>

        {/* Controls Overlay (Extremely Minimal) */}
        <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 flex items-center justify-center bg-white/10 backdrop-blur-[2px]">
           <button 
             onClick={() => setIsPlaying(!isPlaying)}
             className="w-16 h-16 rounded-full bg-white shadow-xl flex items-center justify-center text-apple-black hover:scale-105 active:scale-95 transition-all"
           >
             {isPlaying ? <Pause size={24} fill="currentColor" /> : <Play size={24} fill="currentColor" className="ml-1" />}
           </button>
           <button 
             onClick={restart}
             className="absolute bottom-10 right-12 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-apple-darkGray hover:text-apple-black transition-all"
           >
             <RotateCcw size={18} />
           </button>
        </div>
      </div>
      
      {/* Scene Navigation */}
      <div className="mt-8 flex justify-center gap-6">
        {scenes.map((_, i) => (
          <button
            key={i}
            onClick={() => { setCurrentScene(i); setProgress(0); setIsPlaying(true); }}
            className="group flex flex-col items-center gap-3"
          >
            <span className={`text-[10px] font-bold tracking-widest transition-colors ${currentScene === i ? 'text-apple-blue' : 'text-slate-300'}`}>
              SCENE 0{i + 1}
            </span>
            <div className={`h-1 rounded-full transition-all duration-500 ${
              currentScene === i ? 'w-12 bg-apple-blue' : 'w-4 bg-slate-200 group-hover:bg-slate-300'
            }`} />
          </button>
        ))}
      </div>
    </div>
  );
}
