import { ArrowLeft, MessageSquare } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { EnquiryModal } from './EnquiryModal';

interface MockLayoutProps {
  children: React.ReactNode;
  projectName: string;
  accentColor: string;
  categoryId: string;
}

export function MockLayout({ children, projectName, accentColor, categoryId }: MockLayoutProps) {
  const navigate = useNavigate();
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-slate-200/60 shadow-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-12">
          <button
            onClick={() => navigate('/portfolio')}
            className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Portfolio
          </button>
          <span className="text-sm text-slate-400 hidden sm:block">
            Preview: <span className="font-medium" style={{ color: accentColor }}>{projectName}</span>
          </span>
          <button
            onClick={() => setEnquiryOpen(true)}
            className="flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-lg font-medium transition-all duration-200 hover:shadow-soft"
            style={{ backgroundColor: `${accentColor}10`, color: accentColor }}
          >
            <MessageSquare size={14} />
            <span className="hidden sm:inline">Enquire</span>
          </button>
        </div>
      </div>

      {children}

      <div className="bg-slate-50 border-t border-slate-200 py-10 px-4 text-center">
        <p className="text-slate-600 mb-4 font-medium">Like what you see? This could be your website.</p>
        <button
          onClick={() => setEnquiryOpen(true)}
          className="px-8 py-3 rounded-xl font-semibold text-white transition-all duration-200 hover:shadow-brand active:scale-[0.98]"
          style={{ backgroundColor: accentColor }}
        >
          Get Your Custom Solution
        </button>
      </div>

      <EnquiryModal isOpen={enquiryOpen} onClose={() => setEnquiryOpen(false)} preselectedCategory={categoryId} />
    </div>
  );
}
