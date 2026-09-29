import { Mail, Phone, Clock, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';
import { useEnquiryForm } from '../hooks/useEnquiryForm';
import { CATEGORIES } from '../types';
import { 
  MeshGradient, FloatingGlow, ConfettiShower, AbstractBusinessGraphic 
} from '../components/VisualAssets';

export function ContactPage() {
  const { formData, handleChange, handleSubmit, isSubmitting, submitStatus, resetForm } = useEnquiryForm();

  const inputClass =
    'w-full bg-apple-gray border-none rounded-2xl px-5 py-4 text-apple-black placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-apple-blue/20 transition-all duration-300 font-medium text-sm';

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Background Graphics */}
      <div className="absolute inset-0 pointer-events-none">
        <MeshGradient className="opacity-[0.15]" />
        <FloatingGlow />
        <ConfettiShower />
        <div className="absolute right-[-10%] top-[10%] w-1/2 h-1/2 opacity-[0.03]">
          <AbstractBusinessGraphic />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 pt-24 pb-16">
        <div className="text-center mb-16 relative">
          <div className="hero-glow" />
          
          <AnimatedSection animationType="fade-up" delay={100}>
            <p className="text-xs font-bold text-apple-blue uppercase tracking-[0.3em] mb-6">Connect</p>
          </AnimatedSection>

          <AnimatedSection animationType="fade-up" delay={200}>
            <h1 className="text-5xl sm:text-7xl lg:text-[100px] font-black leading-[0.9] tracking-tighter mb-8 animate-text-reveal">
              Take Your Digital<br />
              Presence to <span className="text-apple-blue">11.</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection animationType="fade-up" delay={300}>
            <p className="text-xl sm:text-2xl text-apple-darkGray font-medium max-w-2xl mx-auto leading-relaxed">
              Ready to break past standard templates and build a high-performance website? Tell us about your project, and let&apos;s engineer something exceptional.
            </p>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <AnimatedSection>
            <div className="space-y-6">
              <div className="p-8 rounded-[32px] bg-apple-gray border border-slate-100">
                <h3 className="text-xl font-bold text-apple-black mb-8 tracking-tight">Direct Access</h3>
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0">
                      <Mail size={18} className="text-apple-blue" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Email</div>
                      <div className="text-lg font-bold text-apple-black">kritieleven@gmail.com</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0">
                      <Phone size={18} className="text-apple-blue" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">WhatsApp</div>
                      <div className="text-lg font-bold text-apple-black">7483696050</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-[32px] bg-apple-black text-white overflow-hidden relative group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-apple-blue/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl group-hover:bg-apple-blue/30 transition-colors" />
                <h3 className="text-xl font-bold mb-6 tracking-tight relative z-10">Beyond the Binary</h3>
                <p className="text-apple-silver font-medium text-sm leading-relaxed mb-6 relative z-10">
                  We don&apos;t just build websites. We build digital infrastructure that drives measurable growth.
                </p>
                <div className="flex items-center gap-2 text-apple-blue text-sm font-bold relative z-10">
                  <Clock size={16} />
                  <span>24-hour response protocol</span>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Form */}
          <AnimatedSection delay={200} className="lg:col-span-2">
            <div className="p-8 sm:p-12 rounded-[40px] bg-white border border-slate-100 shadow-2xl">
              {submitStatus === 'success' ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-emerald-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-apple-black mb-2 tracking-tight">Enquiry Received</h3>
                  <p className="text-apple-darkGray mb-8 font-medium">Our architects are reviewing your vision. Expect a response within 24 hours.</p>
                  <button
                    onClick={resetForm}
                    className="btn-primary !rounded-full px-8"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-apple-black tracking-tight">Start your project.</h3>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Required fields *</span>
                  </div>

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
                      value={formData.profession}
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
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
