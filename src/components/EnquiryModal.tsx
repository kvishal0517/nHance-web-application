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
    'w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100 transition-all duration-200';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-elevated">
        <div className="sticky top-0 bg-white border-b border-slate-100 px-6 py-4 flex items-center justify-between z-10">
          <h2 className="text-lg font-semibold text-slate-900">Get a Free Consultation</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-50 rounded-lg transition-colors text-slate-400 hover:text-slate-600"
          >
            <X size={20} />
          </button>
        </div>

        {submitStatus === 'success' ? (
          <div className="p-8 text-center">
            <CheckCircle className="w-14 h-14 text-emerald-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Enquiry Submitted!</h3>
            <p className="text-slate-500 mb-6">
              Thank you for your interest. Our team will reach out within 24 hours.
            </p>
            <button
              onClick={onClose}
              className="btn-primary"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            {submitStatus === 'error' && (
              <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-100 rounded-xl text-red-600 text-sm">
                <AlertCircle size={16} />
                Something went wrong. Please try again.
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Full Name *</label>
              <input
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => handleChange('fullName', e.target.value)}
                className={inputClass}
                placeholder="Your full name"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Email *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className={inputClass}
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Phone</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  className={inputClass}
                  placeholder="+91 98765 43210"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Your Industry *</label>
              <select
                required
                value={formData.profession || preselectedCategory || ''}
                onChange={(e) => handleChange('profession', e.target.value)}
                className={inputClass}
              >
                <option value="">Select your industry</option>
                {CATEGORIES.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Service Interest *</label>
              <select
                required
                value={formData.serviceInterest}
                onChange={(e) => handleChange('serviceInterest', e.target.value)}
                className={inputClass}
              >
                <option value="">What do you need?</option>
                <option value="website">Website</option>
                <option value="portfolio">Portfolio</option>
                <option value="android-app">Android App</option>
                <option value="ai-agent">AI Agent</option>
                <option value="multiple">Multiple Services</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Tell us about your needs</label>
              <textarea
                rows={3}
                value={formData.description}
                onChange={(e) => handleChange('description', e.target.value)}
                className={inputClass}
                placeholder="Brief description of what you're looking for..."
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Budget Range</label>
                <select
                  value={formData.budgetRange}
                  onChange={(e) => handleChange('budgetRange', e.target.value)}
                  className={inputClass}
                >
                  <option value="">Select range</option>
                  <option value="under-25k">Under 25K</option>
                  <option value="25k-50k">25K - 50K</option>
                  <option value="50k-1l">50K - 1L</option>
                  <option value="1l-5l">1L - 5L</option>
                  <option value="5l+">5L+</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Timeline</label>
                <select
                  value={formData.timeline}
                  onChange={(e) => handleChange('timeline', e.target.value)}
                  className={inputClass}
                >
                  <option value="">Select timeline</option>
                  <option value="urgent">Urgent</option>
                  <option value="1-2-weeks">1-2 Weeks</option>
                  <option value="1-month">1 Month</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>
            </div>

            <p className="text-xs text-slate-400">
              Your data is stored securely. We respond within 24 hours.
            </p>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-600 hover:bg-brand-700 disabled:bg-brand-400 text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-brand active:scale-[0.98]"
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <Send size={18} />
                  Submit Enquiry
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
