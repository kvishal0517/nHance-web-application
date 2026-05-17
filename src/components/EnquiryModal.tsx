import { createPortal } from 'react-dom';
import { X, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { useEnquiryForm } from '../hooks/useEnquiryForm';
import { CATEGORIES } from '../types';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedCategory?: string;
}

export function EnquiryModal({ isOpen, onClose, preselectedCategory }: EnquiryModalProps) {
  const { formData, handleChange, handleSubmit, isSubmitting, submitStatus } = useEnquiryForm();

  if (!isOpen) return null;

  const inputClass =
    'w-full bg-apple-gray border-none rounded-2xl px-5 py-4 text-apple-black placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-apple-blue/20 transition-all duration-300 font-medium text-sm';

  const modalContent = (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-apple-black/40 backdrop-blur-md animate-fade-in" onClick={onClose} />
      <div className="relative bg-white rounded-[40px] w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl animate-smooth-appear">
        <div className="sticky top-0 bg-white/80 backdrop-blur-xl px-8 py-6 flex items-center justify-between z-10">
          <h2 className="text-2xl font-bold text-apple-black tracking-tight">Start your project.</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-apple-gray rounded-full transition-colors text-apple-darkGray hover:text-apple-black"
          >
            <X size={24} />
          </button>
        </div>

        {submitStatus === 'success' ? (
          <div className="p-12 text-center">
            <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-10 h-10 text-emerald-500" />
            </div>
            <h3 className="text-3xl font-bold text-apple-black mb-4 tracking-tight">Sent.</h3>
            <p className="text-lg text-apple-darkGray mb-10 font-medium">
              We'll be in touch within 24 hours.
            </p>
            <button
              onClick={onClose}
              className="btn-primary !px-12"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            {submitStatus === 'error' && (
              <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-100 rounded-2xl text-red-600 text-sm font-semibold">
                <AlertCircle size={20} />
                Please try again.
              </div>
            )}

            <div className="space-y-4">
              <input
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => handleChange('fullName', e.target.value)}
                className={inputClass}
                placeholder="Full Name"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className={inputClass}
                  placeholder="Email"
                />
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  className={inputClass}
                  placeholder="Phone"
                />
              </div>

              <select
                required
                value={formData.profession || preselectedCategory || ''}
                onChange={(e) => handleChange('profession', e.target.value)}
                className={inputClass}
              >
                <option value="">Your Industry</option>
                {CATEGORIES.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </select>

              <select
                required
                value={formData.serviceInterest}
                onChange={(e) => handleChange('serviceInterest', e.target.value)}
                className={inputClass}
              >
                <option value="">What can we build?</option>
                <option value="website">Website</option>
                <option value="portfolio">Portfolio</option>
                <option value="android-app">Android App</option>
                <option value="ai-agent">AI Agent</option>
              </select>

              <textarea
                rows={4}
                value={formData.description}
                onChange={(e) => handleChange('description', e.target.value)}
                className={inputClass}
                placeholder="Project details..."
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <select
                  value={formData.budgetRange}
                  onChange={(e) => handleChange('budgetRange', e.target.value)}
                  className={inputClass}
                >
                  <option value="">Budget</option>
                  <option value="under-25k">Under 25K</option>
                  <option value="25k-50k">25K - 50K</option>
                  <option value="50k-1l">50K - 1L</option>
                  <option value="1l-5l">1L - 5L</option>
                  <option value="5l+">5L+</option>
                </select>
                <select
                  value={formData.timeline}
                  onChange={(e) => handleChange('timeline', e.target.value)}
                  className={inputClass}
                >
                  <option value="">Timeline</option>
                  <option value="urgent">Urgent</option>
                  <option value="1-2-weeks">1-2 Weeks</option>
                  <option value="1-month">1 Month</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-apple-blue hover:bg-[#0077ed] disabled:bg-apple-silver text-white font-bold rounded-full transition-all duration-300 shadow-lg active:scale-[0.98] mt-4"
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={20} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={20} />
                  Submit Enquiry
                </>
              )}
            </button>
            <p className="text-[11px] text-apple-darkGray text-center font-medium opacity-60">
              We respond to all inquiries within 24 hours.
            </p>
          </form>
        )}
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}
