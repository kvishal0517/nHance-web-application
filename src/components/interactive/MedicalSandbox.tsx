import { useState } from 'react';
import { 
  Stethoscope, 
  Heart, 
  Calendar, 
  Clock, 
  CheckCircle, 
  AlertCircle, 
  Activity,
  FileText,
  User,
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface MedicalSandboxProps {
  projectName: string;
}

export function MedicalSandbox({ projectName }: MedicalSandboxProps) {
  const isDrPriya = projectName.toLowerCase().includes('priya');

  // Dr. Priya State
  const [bookingDate, setBookingDate] = useState<string>('');
  const [bookingTime, setBookingTime] = useState<string>('');
  const [patientName, setPatientName] = useState<string>('');
  const [patientAge, setPatientAge] = useState<string>('');
  const [consultType, setConsultType] = useState<string>('Routine Consultation');
  const [bookingSuccess, setBookingSuccess] = useState(false);

  // ClarityMind State
  const [quizStep, setQuizStep] = useState<number>(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [quizSuccess, setQuizSuccess] = useState(false);

  // ClarityMind Quiz Questions
  const questions = [
    { text: 'How often have you felt unable to control the important things in your life over the last 2 weeks?', options: ['Never', 'Almost Never', 'Sometimes', 'Fairly Often', 'Very Often'] },
    { text: 'How often have you felt confident about your ability to handle your personal problems?', options: ['Very Often', 'Fairly Often', 'Sometimes', 'Almost Never', 'Never'] }, // inverted scale for calculation
    { text: 'How often have you felt that things were going your way?', options: ['Very Often', 'Fairly Often', 'Sometimes', 'Almost Never', 'Never'] }, // inverted
    { text: 'How often have you found that you could not cope with all the things that you had to do?', options: ['Never', 'Almost Never', 'Sometimes', 'Fairly Often', 'Very Often'] },
    { text: 'How often have you felt difficulties were piling up so high that you could not overcome them?', options: ['Never', 'Almost Never', 'Sometimes', 'Fairly Often', 'Very Often'] }
  ];

  const handleAnswerSelect = (optionIndex: number) => {
    const updatedAnswers = [...answers, optionIndex];
    setAnswers(updatedAnswers);
    if (quizStep < questions.length - 1) {
      setQuizStep(quizStep + 1);
    } else {
      setQuizSuccess(true);
    }
  };

  // Calculate stress score (out of 20)
  const getStressScore = () => {
    return answers.reduce((acc, curr) => acc + curr, 0);
  };

  const getScoreVerdict = (score: number) => {
    if (score <= 5) return { label: 'Low stress levels detected', color: 'text-emerald-600 bg-emerald-50 border-emerald-100', desc: 'Your coping mechanisms are functioning optimally. We recommend routine mindfulness and balanced sleep hygiene to sustain this state.' };
    if (score <= 12) return { label: 'Moderate stress levels detected', color: 'text-amber-600 bg-amber-50 border-amber-100', desc: 'You are experiencing standard workload burnout. We suggest incorporating structured digital detox slots, cognitive rest, and brief counseling workshops.' };
    return { label: 'High stress / High load state detected', color: 'text-rose-600 bg-rose-50 border-rose-100', desc: 'Your system is operating in sympathetic overdrive. It is highly advisable to schedule a professional 1-on-1 intake analysis to guide you towards stress reduction protocols.' };
  };

  return (
    <div className="font-sans text-apple-black bg-white rounded-3xl p-6 shadow-xl border border-slate-100 max-w-4xl mx-auto">
      {isDrPriya ? (
        <div>
          {/* Dr. Priya Specialist Scheduler */}
          <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-100">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600">
              <Heart size={24} className="fill-emerald-500 text-emerald-500" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-apple-black">Clinical Consultation Booker</h3>
              <p className="text-xs text-apple-darkGray font-medium">Secure private slots for diagnostic reviews, Echocardiograms, or clinical advisory.</p>
            </div>
          </div>

          {!bookingSuccess ? (
            <div className="grid md:grid-cols-12 gap-8">
              {/* Form Input Section */}
              <div className="md:col-span-7 space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-1">Patient Full Name</label>
                    <input
                      type="text"
                      placeholder="e.g. John Doe"
                      value={patientName}
                      onChange={(e) => setPatientName(e.target.value)}
                      className="w-full bg-apple-gray border border-transparent rounded-xl px-3.5 py-3 text-xs font-semibold focus:outline-none focus:bg-white focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-1">Patient Age</label>
                    <input
                      type="number"
                      placeholder="e.g. 45"
                      value={patientAge}
                      onChange={(e) => setPatientAge(e.target.value)}
                      className="w-full bg-apple-gray border border-transparent rounded-xl px-3.5 py-3 text-xs font-semibold focus:outline-none focus:bg-white focus:border-emerald-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-1">Consultation Category</label>
                  <select
                    value={consultType}
                    onChange={(e) => setConsultType(e.target.value)}
                    className="w-full bg-apple-gray border border-transparent rounded-xl px-3.5 py-3 text-xs font-semibold focus:outline-none focus:bg-white focus:border-emerald-500 appearance-none"
                  >
                    <option>Routine Consultation</option>
                    <option>Cardiac Stress Test (TMT)</option>
                    <option>Echocardiogram Diagnostic</option>
                    <option>Angiography Report Evaluation</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-1">Preferred Date</label>
                    <input
                      type="date"
                      value={bookingDate}
                      onChange={(e) => setBookingDate(e.target.value)}
                      className="w-full bg-apple-gray border border-transparent rounded-xl px-3.5 py-3 text-xs font-semibold focus:outline-none focus:bg-white focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-1">Available Hours</label>
                    <div className="grid grid-cols-2 gap-2">
                      {['09:00 AM', '11:30 AM', '02:00 PM', '04:00 PM'].map(time => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setBookingTime(time)}
                          className={`py-2 px-1 rounded-lg text-[11px] font-bold border transition-all text-center ${
                            bookingTime === time
                              ? 'bg-emerald-600 border-emerald-600 text-white shadow-sm'
                              : 'bg-apple-gray border-transparent text-slate-600 hover:bg-slate-200'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Clinic Intake Summary / Right Sidebar */}
              <div className="md:col-span-5 bg-[#F0F7F4] rounded-3xl p-6 border border-emerald-500/10 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-700 block mb-1">Live Estimate</span>
                  <h4 className="text-sm font-extrabold text-apple-black mb-4">Diagnostic Booking</h4>

                  <div className="space-y-4">
                    <div className="flex items-start gap-2.5">
                      <Activity size={16} className="text-emerald-600 mt-0.5 shrink-0" />
                      <div>
                        <p className="text-[11px] font-bold text-apple-black">{consultType}</p>
                        <p className="text-[9px] text-slate-400 font-semibold">Diagnostic Lab Level-2</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-2.5">
                      <Clock size={16} className="text-emerald-600 mt-0.5 shrink-0" />
                      <div>
                        <p className="text-[11px] font-bold text-apple-black">
                          {bookingDate ? bookingDate : 'Select Date'} &bull; {bookingTime ? bookingTime : 'Select Slot'}
                        </p>
                        <p className="text-[9px] text-slate-400 font-semibold">Clinician Priority Slot</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <button
                    onClick={() => {
                      if (patientName && patientAge && bookingDate && bookingTime) {
                        setBookingSuccess(true);
                      }
                    }}
                    disabled={!patientName || !patientAge || !bookingDate || !bookingTime}
                    className="w-full py-4 bg-emerald-600 disabled:opacity-40 text-white font-bold rounded-2xl text-xs uppercase tracking-widest transition-all duration-300 shadow-lg shadow-emerald-600/10 flex items-center justify-center gap-2"
                  >
                    Confirm Booking
                    <CheckCircle size={14} />
                  </button>
                  <p className="text-[8px] text-center text-slate-400 font-semibold mt-2.5">
                    *Requires patient to carry previous cardiovascular prescriptions if any.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            // Secure Clinic Check-in Pass
            <div className="text-center py-8 max-w-md mx-auto animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-500 flex items-center justify-center mx-auto mb-5">
                <CheckCircle size={32} />
              </div>
              <h3 className="text-2xl font-black text-apple-black mb-1">Appointment Secured</h3>
              <p className="text-xs text-slate-500 font-medium leading-relaxed mb-6">
                Your medical consultation check-in pass has been generated. Please save the details.
              </p>

              <div className="bg-white border-2 border-dashed border-emerald-500/30 rounded-3xl p-6 shadow-inner text-left space-y-4 relative overflow-hidden bg-gradient-to-br from-white to-[#F0F7F4]/20">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[8px] font-black uppercase tracking-widest text-emerald-600 bg-emerald-100 px-2 py-0.5 rounded-md">Diagnostic Intake</span>
                    <h4 className="text-lg font-bold text-apple-black mt-1.5">{consultType}</h4>
                    <p className="text-xs font-bold text-slate-500">Dr. Priya Menon, MBBS, MD</p>
                  </div>
                  {/* Fake QR Code */}
                  <div className="w-16 h-16 bg-white border border-slate-200 rounded-xl p-1 flex flex-wrap gap-[2px]">
                    {[...Array(64)].map((_, i) => (
                      <div key={i} className={`w-[6px] h-[6px] rounded-[1px] ${Math.random() > 0.4 ? 'bg-apple-black' : 'bg-transparent'}`} />
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                  <div>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400 block mb-0.5">Patient Details</span>
                    <span className="text-xs font-bold text-apple-black">{patientName} ({patientAge} Yrs)</span>
                  </div>
                  <div>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400 block mb-0.5">Scheduled Slot</span>
                    <span className="text-xs font-bold text-apple-black">{bookingDate} @ {bookingTime}</span>
                  </div>
                </div>

                <div className="bg-white p-3 rounded-xl border border-slate-200/50 flex items-center justify-between text-xs font-semibold text-emerald-700">
                  <span className="flex items-center gap-1.5">
                    <FileText size={14} className="text-emerald-500" />
                    Booking ID: PM-CARD-{Math.floor(Math.random() * 90000 + 10000)}
                  </span>
                  <span className="text-[9px] font-bold bg-emerald-50 px-2 py-0.5 rounded">Status: Active</span>
                </div>
              </div>

              <button
                onClick={() => {
                  setBookingSuccess(false);
                  setPatientName('');
                  setPatientAge('');
                  setBookingDate('');
                  setBookingTime('');
                }}
                className="mt-6 px-8 py-3 bg-apple-black text-white hover:bg-slate-800 text-xs font-bold rounded-xl uppercase tracking-widest transition-all"
              >
                Book New Session
              </button>
            </div>
          )}
        </div>
      ) : (
        <div>
          {/* ClarityMind Mental Wellness Assessment */}
          <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-100">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-600">
              <Stethoscope size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-apple-black">Intake Self-Assessment</h3>
              <p className="text-xs text-apple-darkGray font-medium">Complete our validated diagnostic mental health intake quiz to find your stress rating.</p>
            </div>
          </div>

          {!quizSuccess ? (
            <div className="max-w-xl mx-auto space-y-6">
              {/* Quiz Progress */}
              <div className="flex justify-between items-center text-xs font-bold text-slate-400 uppercase tracking-wider">
                <span>Step {quizStep + 1} of {questions.length}</span>
                <span className="text-amber-600">{Math.round(((quizStep) / questions.length) * 100)}% Progress</span>
              </div>
              <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-amber-400 transition-all duration-300"
                  style={{ width: `${((quizStep + 1) / questions.length) * 100}%` }}
                />
              </div>

              {/* Question Box */}
              <div className="bg-apple-gray rounded-3xl p-8 border border-slate-200/40 min-h-[160px] flex flex-col justify-center">
                <h4 className="text-lg font-bold text-apple-black leading-snug">{questions[quizStep].text}</h4>
              </div>

              {/* Options */}
              <div className="grid gap-3">
                {questions[quizStep].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    className="w-full text-left p-4 rounded-2xl border border-slate-100 bg-white hover:bg-amber-50 hover:border-amber-400 text-xs font-semibold text-slate-700 transition-all duration-200 flex items-center justify-between group"
                  >
                    {option}
                    <ArrowRight size={14} className="text-transparent group-hover:text-amber-500 group-hover:translate-x-1 transition-all" />
                  </button>
                ))}
              </div>
            </div>
          ) : (
            // Quiz Results
            <div className="text-center py-6 max-w-xl mx-auto animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-amber-50 border border-amber-200 text-amber-500 flex items-center justify-center mx-auto mb-5">
                <Sparkles size={32} />
              </div>
              
              <h3 className="text-2xl font-black text-apple-black mb-1">Assessment Analysis Complete</h3>
              <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-6">Score Outcome: {getStressScore()} / 20 Scale</p>

              {(() => {
                const verdict = getScoreVerdict(getStressScore());
                return (
                  <div className="space-y-6">
                    <div className={`p-6 rounded-3xl border text-left ${verdict.color}`}>
                      <h4 className="text-sm font-bold uppercase tracking-wider mb-2 flex items-center gap-2">
                        <AlertCircle size={16} />
                        {verdict.label}
                      </h4>
                      <p className="text-xs font-semibold opacity-80 leading-relaxed">
                        {verdict.desc}
                      </p>
                    </div>

                    <div className="bg-apple-gray rounded-3xl p-6 border border-slate-200/40 text-left">
                      <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4">Recommended Recovery Path</h4>
                      <ul className="space-y-3.5">
                        <li className="flex items-start gap-2.5 text-xs font-semibold text-slate-600">
                          <CheckCircle size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                          <span>Structured Cognitive behavioral rest slots (30 mins daily).</span>
                        </li>
                        <li className="flex items-start gap-2.5 text-xs font-semibold text-slate-600">
                          <CheckCircle size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                          <span>Intake Assessment scheduling with a licensed counselor.</span>
                        </li>
                      </ul>
                    </div>

                    <div className="flex gap-4 justify-center">
                      <button
                        onClick={() => {
                          setQuizSuccess(false);
                          setQuizStep(0);
                          setAnswers([]);
                        }}
                        className="px-6 py-3 border border-slate-200 text-slate-600 hover:bg-slate-50 text-xs font-bold rounded-xl uppercase tracking-widest transition-all"
                      >
                        Retake Test
                      </button>
                      <button
                        onClick={() => {
                          alert('Clinic intake routing complete. We have booked a simulated slot!');
                        }}
                        className="px-8 py-3 bg-apple-black text-white hover:bg-slate-800 text-xs font-bold rounded-xl uppercase tracking-widest transition-all shadow-md"
                      >
                        Book Counselor Slot
                      </button>
                    </div>
                  </div>
                );
              })()}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
