import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { EnquiryModal } from './EnquiryModal';
import { MeshGradient, CategoryGraphic } from './VisualAssets';
import { CATEGORIES } from '../types';

interface MockLayoutProps {
  children: React.ReactNode;
  projectName: string;
  accentColor: string;
  categoryId: string;
}

export function MockLayout({ children, projectName, accentColor, categoryId }: MockLayoutProps) {
  const navigate = useNavigate();
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  // Find the project to get its imageUrl
  const category = CATEGORIES.find(c => c.id === categoryId);
  const project = category?.projects.find(p => p.name === projectName || p.id === projectName.toLowerCase().replace(/\s+/g, '-'));
  const imageUrl = project?.imageUrl;

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
            <span className="text-[11px] font-semibold text-apple-darkGray uppercase tracking-widest hidden sm:block">
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

        {children}

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
    </div>
  );
}
