import { useState } from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  Calculator, 
  Calendar, 
  Users, 
  Clock, 
  CheckCircle, 
  ChevronRight, 
  Sparkles, 
  Award,
  ArrowRight
} from 'lucide-react';

interface AcademicSandboxProps {
  projectName: string;
}

export function AcademicSandbox({ projectName }: AcademicSandboxProps) {
  const isPinnacle = projectName.toLowerCase().includes('pinnacle');

  // Pinnacle State
  const [grade, setGrade] = useState<'11' | '12' | 'foundation'>('12');
  const [track, setTrack] = useState<'jee' | 'neet' | 'olympiad'>('jee');
  const [scholarshipScore, setScholarshipScore] = useState<number>(75);
  const [downloaded, setDownloaded] = useState(false);

  // Alumni State
  const [selectedTopic, setSelectedTopic] = useState<string>('All');
  const [selectedAlumni, setSelectedAlumni] = useState<number | null>(null);
  const [bookingDate, setBookingDate] = useState<string>('');
  const [bookingTime, setBookingTime] = useState<string>('');
  const [bookingSuccess, setBookingSuccess] = useState(false);

  // Pinnacle Data
  const baseFees: Record<string, number> = {
    jee: 180000,
    neet: 160000,
    olympiad: 90000,
  };
  const feeMultiplier = grade === 'foundation' ? 0.7 : grade === '11' ? 0.9 : 1.0;
  const rawFee = Math.round(baseFees[track] * feeMultiplier);
  const discountPercent = scholarshipScore >= 95 ? 90 : scholarshipScore >= 85 ? 50 : scholarshipScore >= 70 ? 25 : 0;
  const finalFee = Math.round(rawFee * (1 - discountPercent / 100));

  const syllabusTopics = {
    jee: [
      'Rotational Dynamics & Elasticity',
      'Organic Reaction Mechanisms & Synthesis',
      'Calculus: Limits, Continuity & Integrals',
      'Electrostatics & Electromagnetic Induction',
      'Coordinate Geometry & Complex Numbers'
    ],
    neet: [
      'Human Physiology & Neural Coordination',
      'Genetics & Evolutionary Biology',
      'Plant Kingdom & Photosynthesis Mechanisms',
      'Chemical Bonding & Coordination Compounds',
      'Thermodynamics & Kinetic Theory'
    ],
    olympiad: [
      'Number Theory & Combinatorics',
      'Euclidean Geometry & Inequalities',
      'Kinematics & Newton\'s Laws',
      'Atomic Structure & Periodic Properties',
      'Cell Biology & Genetics Basics'
    ]
  };

  // Alumni Data
  const alumniDatabase = [
    { id: 1, name: 'Siddharth Sen', class: 'IIT Bombay \'18', company: 'Stripe, Staff SRE', topic: 'Distributed Systems', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200' },
    { id: 2, name: 'Priya Mukherjee', class: 'IIT Delhi \'20', company: 'Y-Combinator Founder', topic: 'Startup Funding', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200' },
    { id: 3, name: 'Rohan Deshmukh', class: 'IIT Madras \'16', company: 'Citadel, Quant Lead', topic: 'Quantitative Trading', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200' },
    { id: 4, name: 'Ananya Reddy', class: 'IIT Kharagpur \'21', company: 'Google Brain, Researcher', topic: 'AI/ML Engineering', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200' }
  ];

  const topicsList = ['All', 'Distributed Systems', 'Startup Funding', 'Quantitative Trading', 'AI/ML Engineering'];

  const filteredAlumni = selectedTopic === 'All' 
    ? alumniDatabase 
    : alumniDatabase.filter(a => a.topic === selectedTopic);

  return (
    <div className="font-sans text-apple-black bg-white rounded-3xl p-6 shadow-xl border border-slate-100 max-w-4xl mx-auto">
      {isPinnacle ? (
        <div>
          {/* Header */}
          <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-100">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-500">
              <GraduationCap size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-apple-black">Curriculum Planner & Fee Estimator</h3>
              <p className="text-xs text-apple-darkGray font-medium">Design your course layout and calculate custom scholarships.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-12 gap-8">
            {/* Form Side */}
            <div className="md:col-span-7 space-y-6">
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-slate-400 block mb-2.5">1. Target Class</label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: 'foundation', label: 'Class 8-10' },
                    { id: '11', label: 'Class 11' },
                    { id: '12', label: 'Class 12 / Repeaters' }
                  ].map(g => (
                    <button
                      key={g.id}
                      onClick={() => setGrade(g.id as any)}
                      className={`py-3 px-4 rounded-xl text-xs font-bold transition-all border ${
                        grade === g.id
                          ? 'bg-amber-500 text-apple-black border-amber-500 shadow-md shadow-amber-500/10'
                          : 'bg-apple-gray hover:bg-slate-200 border-transparent text-slate-600'
                      }`}
                    >
                      {g.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-slate-400 block mb-2.5">2. Prep Stream</label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: 'jee', label: 'JEE Main & Adv' },
                    { id: 'neet', label: 'NEET Medical' },
                    { id: 'olympiad', label: 'Olympiad Foundation' }
                  ].map(t => (
                    <button
                      key={t.id}
                      onClick={() => setTrack(t.id as any)}
                      className={`py-3 px-4 rounded-xl text-xs font-bold transition-all border ${
                        track === t.id
                          ? 'bg-apple-black text-white border-apple-black shadow-md shadow-black/10'
                          : 'bg-apple-gray hover:bg-slate-200 border-transparent text-slate-600'
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400">3. Scholarship Test score</label>
                  <span className="text-sm font-black text-amber-600">{scholarshipScore}% Score</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={scholarshipScore}
                  onChange={(e) => setScholarshipScore(Number(e.target.value))}
                  className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-bold mt-1">
                  <span>0% (No test)</span>
                  <span>70% (25% off)</span>
                  <span>85% (50% off)</span>
                  <span>95%+ (90% off)</span>
                </div>
              </div>

              {/* Dynamic Curriculum topics */}
              <div className="bg-slate-25 rounded-2xl p-5 border border-slate-100">
                <div className="flex items-center gap-2 mb-3 text-xs font-bold uppercase tracking-wider text-slate-500">
                  <BookOpen size={14} className="text-slate-400" />
                  Curriculum Highlights
                </div>
                <div className="space-y-2.5">
                  {syllabusTopics[track].map((topic, index) => (
                    <div key={index} className="flex items-center gap-2.5 text-xs font-medium text-slate-600">
                      <CheckCircle size={14} className="text-emerald-500 shrink-0" />
                      {topic}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Calculations Card Side */}
            <div className="md:col-span-5 bg-apple-gray rounded-3xl p-6 flex flex-col justify-between border border-slate-200/40">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 block mb-1">Fee Breakdown</span>
                <h4 className="text-sm font-extrabold text-apple-black mb-4">Pinnacle Seat Summary</h4>

                <div className="space-y-3.5 mb-6">
                  <div className="flex justify-between items-center text-xs text-slate-500 font-medium">
                    <span>Base Course Fee</span>
                    <span className="font-semibold text-apple-black">₹{rawFee.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs text-slate-500 font-medium">
                    <span>Target Grade Ratio</span>
                    <span className="font-semibold text-apple-black">{grade === 'foundation' ? '0.7x (Junior)' : grade === '11' ? '0.9x' : '1.0x (Senior)'}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs text-slate-500 font-medium">
                    <span>Scholarship Reward</span>
                    <span className="font-semibold text-emerald-600">-{discountPercent}%</span>
                  </div>
                </div>

                <div className="border-t border-slate-200/60 pt-4 mb-6">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-1">Final Estimated Fee</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-black text-apple-black">₹{finalFee.toLocaleString('en-IN')}</span>
                    <span className="text-xs text-slate-400 font-bold uppercase">/ Year</span>
                  </div>
                </div>
              </div>

              <div>
                {downloaded ? (
                  <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 rounded-xl p-3.5 text-center text-xs font-bold flex items-center justify-center gap-2 animate-fade-in">
                    <CheckCircle size={16} />
                    Syllabus & Quote Confirmed!
                  </div>
                ) : (
                  <button
                    onClick={() => setDownloaded(true)}
                    className="w-full py-4 bg-apple-black text-white hover:bg-amber-500 hover:text-apple-black font-bold rounded-2xl text-xs uppercase tracking-widest transition-all duration-300 shadow-lg shadow-black/5 flex items-center justify-center gap-2"
                  >
                    Confirm & Email Quote
                    <ChevronRight size={14} />
                  </button>
                )}
                <p className="text-[9px] text-center text-slate-400 font-semibold mt-3 leading-relaxed">
                  *Quote valid for 14 days. Final seat admission contingent on verification of credentials.
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          {/* IIT Alumni Network */}
          <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-100">
            <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center text-red-600">
              <Users size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-apple-black">Mentorship Hub & Directory Matcher</h3>
              <p className="text-xs text-apple-darkGray font-medium">Search esteemed IIT founders & quant leaders to book interactive mentorship slots.</p>
            </div>
          </div>

          {!bookingSuccess ? (
            <div className="grid md:grid-cols-12 gap-8">
              {/* Directory Filter & Search */}
              <div className="md:col-span-7 space-y-6">
                <div>
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400 block mb-2.5">Filter by Expertise</label>
                  <div className="flex flex-wrap gap-2">
                    {topicsList.map(topic => (
                      <button
                        key={topic}
                        onClick={() => setSelectedTopic(topic)}
                        className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all border ${
                          selectedTopic === topic
                            ? 'bg-red-600 text-white border-red-600'
                            : 'bg-apple-gray hover:bg-slate-200 border-transparent text-slate-600'
                        }`}
                      >
                        {topic}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-3 max-h-[300px] overflow-y-auto pr-1">
                  {filteredAlumni.map(alumni => (
                    <div
                      key={alumni.id}
                      onClick={() => setSelectedAlumni(alumni.id)}
                      className={`flex items-center gap-4 p-3.5 rounded-2xl border transition-all cursor-pointer ${
                        selectedAlumni === alumni.id
                          ? 'border-red-500 bg-red-50/50 shadow-md'
                          : 'border-slate-100 hover:border-slate-200 bg-white'
                      }`}
                    >
                      <img src={alumni.avatar} className="w-12 h-12 rounded-xl object-cover border border-slate-100" alt={alumni.name} />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="text-sm font-bold text-apple-black">{alumni.name}</h4>
                          <span className="text-[9px] font-black uppercase tracking-widest text-red-500 bg-red-100/50 px-2 py-0.5 rounded-md">{alumni.class}</span>
                        </div>
                        <p className="text-xs font-bold text-slate-500 mt-0.5">{alumni.company}</p>
                        <p className="text-[10px] text-slate-400 mt-1 font-semibold flex items-center gap-1">
                          <Award size={10} className="text-amber-500" />
                          Expertise: {alumni.topic}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Slot Scheduler Card */}
              <div className="md:col-span-5 bg-apple-gray rounded-3xl p-6 border border-slate-200/40 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 block mb-1">Scheduler</span>
                  <h4 className="text-sm font-extrabold text-apple-black mb-4">Book Mentorship Session</h4>

                  {selectedAlumni ? (
                    <div className="space-y-4">
                      <div className="p-3 bg-white rounded-xl border border-slate-200/50 flex items-center gap-3">
                        <img src={alumniDatabase.find(a => a.id === selectedAlumni)?.avatar} className="w-8 h-8 rounded-lg object-cover" />
                        <div>
                          <p className="text-xs font-bold text-apple-black">{alumniDatabase.find(a => a.id === selectedAlumni)?.name}</p>
                          <p className="text-[9px] text-slate-400 font-semibold">{alumniDatabase.find(a => a.id === selectedAlumni)?.topic}</p>
                        </div>
                      </div>

                      <div>
                        <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-1">Pick Date</label>
                        <input
                          type="date"
                          value={bookingDate}
                          onChange={(e) => setBookingDate(e.target.value)}
                          className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-red-500"
                        />
                      </div>

                      <div>
                        <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-1">Pick Slot</label>
                        <div className="grid grid-cols-2 gap-2">
                          {['10:00 AM', '2:00 PM', '4:30 PM', '7:00 PM'].map(time => (
                            <button
                              key={time}
                              onClick={() => setBookingTime(time)}
                              className={`py-2 px-3 rounded-lg text-xs font-bold border transition-all ${
                                bookingTime === time
                                  ? 'bg-red-600 border-red-600 text-white'
                                  : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                              }`}
                            >
                              {time}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-10 text-slate-400">
                      <Calendar size={32} className="mx-auto mb-2 text-slate-300" />
                      <p className="text-xs font-bold">Select an alumni member from the directory list to schedule your slot.</p>
                    </div>
                  )}
                </div>

                <div className="mt-6">
                  <button
                    onClick={() => {
                      if (selectedAlumni && bookingDate && bookingTime) setBookingSuccess(true);
                    }}
                    disabled={!selectedAlumni || !bookingDate || !bookingTime}
                    className="w-full py-3.5 bg-red-600 disabled:opacity-40 text-white font-bold rounded-2xl text-xs uppercase tracking-widest transition-all duration-300 shadow-md shadow-red-500/10 flex items-center justify-center gap-2"
                  >
                    Lock Session
                    <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            // Success Screen
            <div className="text-center py-12 max-w-md mx-auto animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-500 flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={32} />
              </div>
              <h3 className="text-2xl font-black text-apple-black mb-2">Mentorship Booked!</h3>
              <p className="text-sm text-slate-500 font-medium leading-relaxed mb-8">
                Your request has been registered in the IIT Alumni database. A secure video invite has been generated.
              </p>

              <div className="bg-apple-gray rounded-3xl p-6 border border-slate-100 text-left space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <img src={alumniDatabase.find(a => a.id === selectedAlumni)?.avatar} className="w-10 h-10 rounded-xl object-cover" />
                  <div>
                    <h4 className="text-xs font-bold text-apple-black">{alumniDatabase.find(a => a.id === selectedAlumni)?.name}</h4>
                    <p className="text-[10px] text-slate-400 font-semibold">{alumniDatabase.find(a => a.id === selectedAlumni)?.company}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-200/60">
                  <div>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400 block mb-0.5">Date</span>
                    <span className="text-xs font-bold text-apple-black">{bookingDate}</span>
                  </div>
                  <div>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400 block mb-0.5">Time</span>
                    <span className="text-xs font-bold text-apple-black">{bookingTime} (IST)</span>
                  </div>
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-slate-200/60 flex items-center justify-between text-xs font-bold text-red-500">
                  <span className="flex items-center gap-1.5">
                    <Clock size={14} />
                    Link: meet.iit-alumni.org/x9-d3s
                  </span>
                  <Sparkles size={12} className="text-red-500" />
                </div>
              </div>

              <button
                onClick={() => {
                  setBookingSuccess(false);
                  setSelectedAlumni(null);
                  setBookingDate('');
                  setBookingTime('');
                }}
                className="px-8 py-3 bg-apple-black text-white hover:bg-slate-800 text-xs font-bold rounded-xl uppercase tracking-widest transition-all"
              >
                Book Another
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
