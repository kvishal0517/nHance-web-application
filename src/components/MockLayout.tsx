import { ArrowLeft, Sparkles, Smartphone, Monitor } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { EnquiryModal } from './EnquiryModal';
import { MeshGradient, CategoryGraphic } from './VisualAssets';
import { CATEGORIES } from '../types';
import { InteractiveSandboxDrawer } from './InteractiveSandboxDrawer';
import { AIAgentSimulator } from './AIAgentSimulator';



interface MockLayoutProps {
  children: React.ReactNode;
  projectName: string;
  accentColor: string;
  categoryId: string;
}


export function MockLayout({ children, projectName, accentColor, categoryId }: MockLayoutProps) {
  const navigate = useNavigate();
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [sandboxOpen, setSandboxOpen] = useState(false);
  const [viewportMode, setViewportMode] = useState<'desktop' | 'mobile'>('desktop');

  // Find the project to get its imageUrl
  const category = CATEGORIES.find(c => c.id === categoryId);
  const project = category?.projects.find(p => p.name === projectName || p.id === projectName.toLowerCase().replace(/\s+/g, '-'));
  const imageUrl = project?.imageUrl;

  // Global click interceptor to catch custom portfolio CTAs
  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Look for target buttons/links with action words
      const buttonOrLink = target.closest('button, a');
      if (!buttonOrLink) return;

      const text = (buttonOrLink.textContent || '').trim().toLowerCase();

      // Exclude navigation/system buttons
      if (
        buttonOrLink.getAttribute('href')?.startsWith('/') ||
        buttonOrLink.getAttribute('onClick')?.includes('navigate') ||
        text === 'back' ||
        text === 'enquire' ||
        text === 'build yours' ||
        buttonOrLink.closest('.sticky') // Exclude header nav buttons
      ) {
        return;
      }

      // Check if button text matches common landing page interactive CTAs
      const actionKeywords = [
        'reserve', 'book', 'calculate', 'fitting', 'menu', 'brief', 
        'dossier', 'custom fit', 'sip', 'tax', 'nda', 'mediation', 
        'terminal', 'estimate', 'solve', 'try-on', 'checkout', 'fitting room'
      ];

      const isAction = actionKeywords.some(keyword => text.includes(keyword));

      if (isAction) {
        e.preventDefault();
        e.stopPropagation();
        setSandboxOpen(true);
      }
    };

    document.addEventListener('click', handleGlobalClick, true);
    return () => {
      document.removeEventListener('click', handleGlobalClick, true);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <MeshGradient className="opacity-[0.1]" />

      {imageUrl && (
        <div className="absolute top-0 right-0 w-[60%] h-[40%] opacity-[0.03] pointer-events-none skew-x-[-12deg] translate-x-[20%]">
          <img src={imageUrl} alt="" className="w-full h-full object-cover grayscale" />
        </div>
      )}

      <div className="absolute top-24 right-[-5%] w-96 h-96 opacity-[0.05] pointer-events-none">
...
      </div>
      <div className="absolute bottom-24 left-[-5%] w-80 h-80 opacity-[0.03] pointer-events-none rotate-12">
        <CategoryGraphic categoryId={categoryId} />
      </div>
      
      <div className="relative z-10">
        <div className="sticky top-0 z-40 bg-white/70 backdrop-blur-xl border-b border-slate-200/40">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-10">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-1.5 text-[11px] font-semibold text-apple-darkGray hover:text-apple-black transition-colors"
            >
              <ArrowLeft size={12} />
              Back
            </button>

            {/* Viewport switcher */}
            <div className="flex items-center gap-1 bg-slate-100/85 p-0.5 rounded-full border border-slate-200/40">
              <button
                onClick={() => setViewportMode('desktop')}
                className={`p-1 px-3 rounded-full text-[10px] font-bold flex items-center gap-1 transition-all ${
                  viewportMode === 'desktop'
                    ? 'bg-white text-apple-black shadow-sm'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                <Monitor size={10} />
                <span className="hidden sm:inline">Desktop</span>
              </button>
              <button
                onClick={() => setViewportMode('mobile')}
                className={`p-1 px-3 rounded-full text-[10px] font-bold flex items-center gap-1 transition-all ${
                  viewportMode === 'mobile'
                    ? 'bg-white text-apple-black shadow-sm'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                <Smartphone size={10} />
                <span className="hidden sm:inline">Mobile</span>
              </button>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-[11px] font-semibold text-apple-darkGray uppercase tracking-widest hidden md:block">
                Preview &middot; <span style={{ color: accentColor }}>{projectName}</span>
              </span>
              <button
                onClick={() => setEnquiryOpen(true)}
                className="flex items-center gap-1.5 text-[11px] px-3 py-1 rounded-full font-bold transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: accentColor, color: 'white' }}
              >
                Enquire
              </button>
            </div>
          </div>
        </div>

        {viewportMode === 'desktop' ? (
          children
        ) : (
          <div className="flex justify-center bg-slate-900/95 py-16 px-6 transition-all duration-500 min-h-[calc(100vh-40px)] border-b border-slate-850 relative z-10">
            <div className="relative w-full max-w-[390px] h-[844px] bg-white border-[12px] border-slate-950 rounded-[54px] overflow-hidden shadow-2xl flex flex-col transition-all duration-500 ring-4 ring-slate-800/50">
              {/* iPhone Notch / Dynamic Island */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-6 bg-slate-950 rounded-full z-50 flex items-center justify-center pointer-events-none">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-900 border border-slate-800 absolute right-4 animate-pulse" />
              </div>
              {/* Screen Container */}
              <div className="flex-1 overflow-y-auto w-full h-full relative" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                {children}
              </div>
              {/* Home Indicator */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-slate-950 rounded-full z-50 pointer-events-none" />
            </div>
          </div>
        )}


        <div className="bg-apple-gray border-t border-slate-200 py-16 px-6 text-center">
          <p className="text-xl text-apple-black mb-8 font-semibold tracking-tight">Like what you see? This is just the beginning.</p>
          <button
            onClick={() => setEnquiryOpen(true)}
            className="px-10 py-3 rounded-full font-bold text-white transition-all duration-300 hover:shadow-xl active:scale-[0.98]"
            style={{ backgroundColor: accentColor }}
          >
            Build yours
          </button>
        </div>

        <EnquiryModal isOpen={enquiryOpen} onClose={() => setEnquiryOpen(false)} preselectedCategory={categoryId} />
      </div>

      {/* Floating Action Button (FAB) */}
      <button
        onClick={() => setSandboxOpen(true)}
        className="fixed bottom-6 right-6 z-40 px-5 py-3 rounded-full text-xs font-extrabold text-white flex items-center gap-2 hover:scale-105 active:scale-95 transition-all duration-300 shadow-2xl animate-pulse-glow"
        style={{
          backgroundColor: accentColor,
        }}
      >
        <Sparkles size={14} className="animate-pulse" />
        Live Interactive Demo
      </button>

      {/* Interactive Sandbox Drawer Component */}
      <InteractiveSandboxDrawer
        isOpen={sandboxOpen}
        onClose={() => setSandboxOpen(false)}
        categoryId={categoryId}
        initialProjectName={projectName}
        accentColor={accentColor}
      />

      {/* Context-Aware AI Chat Agent Simulator */}
      <AIAgentSimulator
        categoryId={categoryId}
        projectName={projectName}
        accentColor={accentColor}
      />


      {/* Custom Styles block for premium glow pulse */}
      <style>{`
        @keyframes pulseGlow {
          0%, 100% {
            box-shadow: 0 0 0 0px ${accentColor}40, 0 10px 25px -5px ${accentColor}60;
          }
          50% {
            box-shadow: 0 0 0 8px ${accentColor}00, 0 10px 25px -5px ${accentColor}80;
          }
        }
        .animate-pulse-glow {
          animation: pulseGlow 2s infinite;
        }
      `}</style>
    </div>
  );
}

