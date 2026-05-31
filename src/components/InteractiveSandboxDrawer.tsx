import { useEffect, useState } from 'react';
import { X, Sparkles, Laptop, BookOpen } from 'lucide-react';
import { CATEGORIES } from '../types';

// Import our sandboxes
import { AcademicSandbox } from './interactive/AcademicSandbox';
import { MedicalSandbox } from './interactive/MedicalSandbox';
import { MusicArtSandbox } from './interactive/MusicArtSandbox';
import { FoodSandbox } from './interactive/FoodSandbox';
import { MediaSandbox } from './interactive/MediaSandbox';
import { FitnessSandbox } from './interactive/FitnessSandbox';
import { CreativesSandbox } from './interactive/CreativesSandbox';
import { FinanceSandbox } from './interactive/FinanceSandbox';
import { LegalSandbox } from './interactive/LegalSandbox';
import { TechSandbox } from './interactive/TechSandbox';
import { FashionSandbox } from './interactive/FashionSandbox';

interface InteractiveSandboxDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  categoryId: string;
  initialProjectName: string;
  accentColor: string;
}

export function InteractiveSandboxDrawer({
  isOpen,
  onClose,
  categoryId,
  initialProjectName,
  accentColor,
}: InteractiveSandboxDrawerProps) {
  const [activeProjectName, setActiveProjectName] = useState(initialProjectName);

  // Sync active project if initialProjectName changes
  useEffect(() => {
    setActiveProjectName(initialProjectName);
  }, [initialProjectName, isOpen]);

  // Find the category and its projects
  const category = CATEGORIES.find((c) => c.id === categoryId);
  const projects = category?.projects || [];

  // Lock scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen || !category) return null;

  // Render Sandbox based on category
  const renderSandboxContent = () => {
    switch (categoryId) {
      case 'academic':
        return <AcademicSandbox projectName={activeProjectName} />;
      case 'medical':
        return <MedicalSandbox projectName={activeProjectName} />;
      case 'music-art':
        return <MusicArtSandbox projectName={activeProjectName} />;
      case 'food':
        return <FoodSandbox projectName={activeProjectName} />;
      case 'media':
        return <MediaSandbox projectName={activeProjectName} />;
      case 'fitness':
        return <FitnessSandbox projectName={activeProjectName} />;
      case 'creatives':
        return <CreativesSandbox projectName={activeProjectName} />;
      case 'finance':
        return <FinanceSandbox projectName={activeProjectName} />;
      case 'legal':
        return <LegalSandbox projectName={activeProjectName} />;
      case 'tech':
        return <TechSandbox projectName={activeProjectName} />;
      case 'fashion':
        return <FashionSandbox projectName={activeProjectName} />;
      default:
        return (
          <div className="p-8 text-center text-slate-500">
            No interactive sandbox defined for category "{categoryId}".
          </div>
        );
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden font-sans">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-md transition-opacity duration-300 ease-out"
        onClick={onClose}
      />

      {/* Sliding Sheet Panel */}
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-2xl sm:max-w-3xl md:max-w-4xl bg-slate-50/95 backdrop-blur-2xl shadow-2xl flex flex-col h-full border-l border-slate-200/60 animate-[slideOver_0.4s_ease-out]">
          
          {/* Drawer Header */}
          <div className="bg-white border-b border-slate-200/50 px-6 py-4 flex flex-col gap-3 shrink-0">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div 
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-white"
                  style={{ backgroundColor: accentColor }}
                >
                  <category.icon size={16} />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400">ELEVEN Interactive</span>
                    <span className="text-[9px] bg-indigo-500/10 text-indigo-700 px-1.5 py-0.5 rounded-full font-bold flex items-center gap-0.5">
                      <Sparkles size={8} /> Live Demo
                    </span>
                  </div>
                  <h2 className="text-sm font-bold text-apple-black leading-tight">
                    {category.name} Simulator Space
                  </h2>
                </div>
              </div>

              <div className="flex items-center gap-3">
                {/* Simulated Device Controls */}
                <div className="hidden sm:flex items-center gap-1 bg-apple-gray p-0.5 rounded-lg border border-slate-200/40 text-slate-400">
                  <button className="p-1 rounded bg-white text-apple-black shadow-sm">
                    <Laptop size={13} />
                  </button>
                  <button className="p-1 rounded hover:text-apple-black transition-colors" disabled>
                    <BookOpen size={13} />
                  </button>
                </div>

                <button
                  onClick={onClose}
                  className="w-8 h-8 rounded-full bg-apple-gray hover:bg-slate-200 flex items-center justify-center text-apple-darkGray hover:text-apple-black transition-all"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Project Switcher Tabs */}
            {projects.length > 1 && (
              <div className="flex bg-slate-100 p-1 rounded-xl w-fit">
                {projects.map((proj) => {
                  const isActive = activeProjectName.toLowerCase() === proj.name.toLowerCase() || activeProjectName.toLowerCase() === proj.id;
                  return (
                    <button
                      key={proj.id}
                      onClick={() => setActiveProjectName(proj.name)}
                      className={`px-4 py-1.5 text-xs font-bold rounded-lg transition-all ${
                        isActive
                          ? 'bg-white text-apple-black shadow-sm'
                          : 'text-slate-500 hover:text-slate-800'
                      }`}
                    >
                      {proj.name}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Drawer Body - Sandboxes */}
          <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6">
            <div className="bg-gradient-to-br from-indigo-500/5 to-purple-500/5 border border-indigo-200/20 rounded-2xl p-4 flex gap-3 text-xs text-indigo-900/90 leading-relaxed mb-6">
              <Sparkles size={16} className="text-indigo-600 shrink-0 mt-0.5" />
              <div>
                <strong>Sandbox Console:</strong> Below is a high-fidelity simulator representing the key customer-facing workflows of the <strong>{activeProjectName}</strong> brand. Play with sliders, enter details, and watch real-time logic calculate custom responses!
              </div>
            </div>

            {renderSandboxContent()}
          </div>

          {/* Drawer Footer */}
          <div className="bg-white border-t border-slate-200/50 px-6 py-4 flex items-center justify-between text-[11px] text-apple-darkGray font-medium shrink-0">
            <span>ELEVEN Web Applications &bull; Premium Business Solutions</span>
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-lg border border-slate-200 hover:bg-apple-gray text-apple-black font-bold transition-colors"
            >
              Close Simulator
            </button>
          </div>
        </div>
      </div>

      {/* Embed Keyframe slideOver animation styles */}
      <style>{`
        @keyframes slideOver {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}
