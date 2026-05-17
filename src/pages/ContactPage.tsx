import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';
import { CATEGORIES } from '../types';
import { useEnquiryForm } from '../hooks/useEnquiryForm';

export function ContactPage() {
  const { formData, handleChange, handleSubmit, isSubmitting, submitStatus, resetForm } = useEnquiryForm();

  const inputClass =
    'w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100 transition-all duration-200';

  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider mb-3">Contact</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-4">Get in Touch</h1>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Tell us about your needs and we&apos;ll craft a tailored solution for your profession. We respond within 24 hours.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <AnimatedSection>
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                <h3 className="text-lg font-semibold text-slate-900 mb-5">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail size={18} className="text-brand-500 mt-0.5" />
                    <div>
                      <div className="text-sm font-medium text-slate-700">Email</div>
                      <div className="text-sm text-slate-500">hello@nhanse.digital</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone size={18} className="text-brand-500 mt-0.5" />
                    <div>
                      <div className="text-sm font-medium text-slate-700">Phone</div>
                      <div className="text-sm text-slate-500">+91 98765 43210</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin size={18} className="text-brand-500 mt-0.5" />
                    <div>
                      <div className="text-sm font-medium text-slate-700">Location</div>
                      <div className="text-sm text-slate-500">Bangalore, India</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock size={18} className="text-brand-500 mt-0.5" />
                    <div>
                      <div className="text-sm font-medium text-slate-700">Response Time</div>
                      <div className="text-sm text-slate-500">Within 24 hours</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">How It Works</h3>
                <ol className="space-y-3 text-sm text-slate-500">
                  <li className="flex items-start gap-2.5">
                    <span className="text-brand-600 font-bold">1.</span>
                    Fill out the enquiry form with your details
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-brand-600 font-bold">2.</span>
                    Our team reviews and responds within 24 hours
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-brand-600 font-bold">3.</span>
                    We schedule a free consultation call
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-brand-600 font-bold">4.</span>
                    You receive a custom proposal and timeline
                  </li>
                </ol>
              </div>
            </div>
          </AnimatedSection>

          {/* Form */}
          <AnimatedSection delay={200} className="lg:col-span-2">
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-100 shadow-soft">
              {submitStatus === 'success' ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-14 h-14 text-emerald-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">Enquiry Submitted!</h3>
                  <p className="text-slate-500 mb-6">Thank you for your interest. Our team will reach out within 24 hours.</p>
                  <button
                    onClick={resetForm}
                    className="btn-primary"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Enquiry Form</h3>

                  {submitStatus === 'error' && (
                    <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-100 rounded-xl text-red-600 text-sm">
                      <AlertCircle size={16} />
                      Something went wrong. Please try again.
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Full Name *</label>
                    <input type="text" required value={formData.fullName} onChange={(e) => handleChange('fullName', e.target.value)} className={inputClass} placeholder="Your full name" />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Email *</label>
                      <input type="email" required value={formData.email} onChange={(e) => handleChange('email', e.target.value)} className={inputClass} placeholder="you@example.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Phone</label>
                      <input type="tel" value={formData.phone} onChange={(e) => handleChange('phone', e.target.value)} className={inputClass} placeholder="+91 98765 43210" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Your Industry *</label>
                    <select required value={formData.profession} onChange={(e) => handleChange('profession', e.target.value)} className={inputClass}>
                      <option value="">Select your industry</option>
                      {CATEGORIES.map((cat) => (
                        <option key={cat.id} value={cat.id}>{cat.name}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Service Interest *</label>
                    <select required value={formData.serviceInterest} onChange={(e) => handleChange('serviceInterest', e.target.value)} className={inputClass}>
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
                    <textarea rows={4} value={formData.description} onChange={(e) => handleChange('description', e.target.value)} className={inputClass} placeholder="Brief description of what you're looking for..." />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Budget Range</label>
                      <select value={formData.budgetRange} onChange={(e) => handleChange('budgetRange', e.target.value)} className={inputClass}>
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
                      <select value={formData.timeline} onChange={(e) => handleChange('timeline', e.target.value)} className={inputClass}>
                        <option value="">Select timeline</option>
                        <option value="urgent">Urgent</option>
                        <option value="1-2-weeks">1-2 Weeks</option>
                        <option value="1-month">1 Month</option>
                        <option value="flexible">Flexible</option>
                      </select>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400">Your data is stored securely. We respond within 24 hours.</p>

                  <button type="submit" disabled={isSubmitting} className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-600 hover:bg-brand-700 disabled:bg-brand-400 text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-brand active:scale-[0.98]">
                    {isSubmitting ? (
                      <><Loader2 size={18} className="animate-spin" /> Submitting...</>
                    ) : (
                      <><Send size={18} /> Submit Enquiry</>
                    )}
                  </button>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
