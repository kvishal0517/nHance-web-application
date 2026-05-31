import { useState } from 'react';
import { 
  Dumbbell, 
  Sparkles, 
  Clock, 
  Calendar, 
  CheckCircle, 
  ChevronRight, 
  Activity, 
  Heart,
  Scale
} from 'lucide-react';

interface FitnessSandboxProps {
  projectName: string;
}

export function FitnessSandbox({ projectName }: FitnessSandboxProps) {
  const isIronbound = projectName.toLowerCase().includes('ironbound');

  // Ironbound State
  const [height, setHeight] = useState<number>(175);
  const [weight, setWeight] = useState<number>(75);
  const [age, setAge] = useState<number>(26);
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [goal, setGoal] = useState<'shred' | 'bulk' | 'endurance'>('shred');
  const [fitnessCalculated, setFitnessCalculated] = useState(false);

  // Sattvic State
  const [className, setClassName] = useState<string>('Hatha Awakening Flow');
  const [bookingDate, setBookingDate] = useState<string>('');
  const [bookingTime, setBookingTime] = useState<string>('');
  const [bookingSuccess, setBookingSuccess] = useState(false);

  // Ironbound Calculations
  const bmi = Number((weight / ((height / 100) * (height / 100))).toFixed(1));
  
  const bmr = gender === 'male' 
    ? 10 * weight + 6.25 * height - 5 * age + 5 
    : 10 * weight + 6.25 * height - 5 * age - 161;
  
  const tdee = Math.round(bmr * 1.375); // standard active
  const targetCalories = goal === 'shred' ? tdee - 500 : goal === 'bulk' ? tdee + 300 : tdee;

  // Macros (Proteins 30%, Fats 25%, Carbs 45%)
  const proteinGrams = Math.round((targetCalories * 0.3) / 4);
  const fatGrams = Math.round((targetCalories * 0.25) / 9);
  const carbGrams = Math.round((targetCalories * 0.45) / 4);

  const workouts = {
    shred: [
      { name: 'Barbell Squats', sets: '4 Sets x 8 Reps', rest: '90s Rest' },
      { name: 'Dumbbell Incline Bench Press', sets: '4 Sets x 10 Reps', rest: '60s Rest' },
      { name: 'Lat Pulldowns', sets: '3 Sets x 12 Reps', rest: '60s Rest' },
      { name: 'HIIT Treadmill Sprints', sets: '15 Mins (30s sprint / 30s walk)', rest: 'HIIT' }
    ],
    bulk: [
      { name: 'Deadlifts', sets: '4 Sets x 6 Reps', rest: '120s Rest' },
      { name: 'Overhead Barbell Press', sets: '4 Sets x 8 Reps', rest: '90s Rest' },
      { name: 'Weighted Pullups', sets: '3 Sets x 8 Reps', rest: '90s Rest' },
      { name: 'Heavy Barbell Curls', sets: '3 Sets x 10 Reps', rest: '60s Rest' }
    ],
    endurance: [
      { name: 'Kettlebell Swings', sets: '4 Sets x 20 Reps', rest: '45s Rest' },
      { name: 'Pushups to Plank Walkouts', sets: '4 Sets x 15 Reps', rest: '45s Rest' },
      { name: 'Rowing Machine Interval', sets: '2000m Pace Trial', rest: 'Endurance' },
      { name: 'Farmer Walks', sets: '3 Sets x 50 Meters', rest: '60s Rest' }
    ]
  };

  return (
    <div className="font-sans text-apple-black bg-white rounded-3xl p-6 shadow-xl border border-slate-100 max-w-4xl mx-auto">
      {isIronbound ? (
        <div>
          {/* Ironbound Fitness Dashboard */}
          <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-100">
            <div className="w-12 h-12 rounded-2xl bg-apple-black flex items-center justify-center text-lime-400">
              <Dumbbell size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-apple-black">BMI & Calorie Target Dashboard</h3>
              <p className="text-xs text-apple-darkGray font-medium">Input biometric specs to generate TDEE caloric budgets, macro distributions, and intense workouts.</p>
            </div>
          </div>

          {!fitnessCalculated ? (
            <div className="grid md:grid-cols-12 gap-8">
              {/* Form Input Side */}
              <div className="md:col-span-7 space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-1">Height (CM)</label>
                    <div className="flex items-center bg-apple-gray rounded-xl px-3.5 py-2.5">
                      <input
                        type="number"
                        value={height}
                        onChange={(e) => setHeight(Math.max(1, Number(e.target.value)))}
                        className="w-full bg-transparent text-xs font-bold focus:outline-none text-apple-black"
                      />
                      <span className="text-[10px] font-black text-slate-400 ml-2">CM</span>
                    </div>
                  </div>
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-1">Weight (KG)</label>
                    <div className="flex items-center bg-apple-gray rounded-xl px-3.5 py-2.5">
                      <input
                        type="number"
                        value={weight}
                        onChange={(e) => setWeight(Math.max(1, Number(e.target.value)))}
                        className="w-full bg-transparent text-xs font-bold focus:outline-none text-apple-black"
                      />
                      <span className="text-[10px] font-black text-slate-400 ml-2">KG</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-1">Age (Years)</label>
                    <input
                      type="number"
                      value={age}
                      onChange={(e) => setAge(Math.max(1, Number(e.target.value)))}
                      className="w-full bg-apple-gray border border-transparent rounded-xl px-3.5 py-2.5 text-xs font-semibold focus:outline-none focus:bg-white focus:border-apple-black"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-1">Gender</label>
                    <div className="grid grid-cols-2 gap-2">
                      {['male', 'female'].map(g => (
                        <button
                          key={g}
                          type="button"
                          onClick={() => setGender(g as any)}
                          className={`py-2.5 px-2 rounded-lg text-xs font-bold border transition-all text-center capitalize ${
                            gender === g
                              ? 'bg-apple-black text-white border-apple-black'
                              : 'bg-apple-gray border-transparent text-slate-600'
                          }`}
                        >
                          {g}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-2">Select Primary Target Goal</label>
                  <div className="grid grid-cols-3 gap-2.5">
                    {[
                      { id: 'shred', label: 'Shred & Tone', desc: '-500 kcal deficit' },
                      { id: 'bulk', label: 'Bulk & Power', desc: '+300 kcal surplus' },
                      { id: 'endurance', label: 'Stamina & Lean', desc: 'Maintenance' }
                    ].map(g => (
                      <button
                        key={g.id}
                        type="button"
                        onClick={() => setGoal(g.id as any)}
                        className={`p-3.5 rounded-xl text-left border transition-all ${
                          goal === g.id
                            ? 'bg-lime-400 text-apple-black border-lime-400 shadow-md shadow-lime-400/10'
                            : 'bg-apple-gray border-transparent text-slate-600 hover:bg-slate-200'
                        }`}
                      >
                        <p className="text-xs font-extrabold">{g.label}</p>
                        <p className="text-[9px] opacity-60 mt-0.5 font-semibold">{g.desc}</p>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar trigger */}
              <div className="md:col-span-5 bg-apple-gray rounded-3xl p-6 border border-slate-200/40 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 block mb-1">Target Spec</span>
                  <h4 className="text-sm font-extrabold text-apple-black mb-4">Biometric Diagnostic</h4>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">
                    Estimates caloric output based on Mifflin-St Jeor formulas. Final routines are calibrated dynamically.
                  </p>
                </div>

                <div className="mt-8">
                  <button
                    onClick={() => setFitnessCalculated(true)}
                    className="w-full py-4 bg-apple-black text-white hover:bg-slate-800 font-bold rounded-2xl text-xs uppercase tracking-widest transition-all duration-300 shadow-md flex items-center justify-center gap-2"
                  >
                    Calculate Targets
                    <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            // Dynamic Athlete Dashboard Outcomes
            <div className="animate-fade-in space-y-6">
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="bg-apple-gray rounded-2xl p-4.5 border border-slate-200/30 text-center">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400 block mb-1">Body Mass Index</span>
                  <span className="text-2xl font-black text-apple-black">{bmi}</span>
                  <p className="text-[9px] text-slate-400 font-semibold mt-1">
                    {bmi < 18.5 ? 'Underweight' : bmi < 25 ? 'Healthy Weight' : 'Overweight'}
                  </p>
                </div>
                <div className="bg-apple-gray rounded-2xl p-4.5 border border-slate-200/30 text-center">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400 block mb-1">TDEE Calorie Target</span>
                  <span className="text-2xl font-black text-lime-600">{targetCalories} Kcal</span>
                  <p className="text-[9px] text-slate-400 font-semibold mt-1">Goal: {goal === 'shred' ? 'Deficit Shredding' : 'Surplus Bulking'}</p>
                </div>
                <div className="bg-apple-gray rounded-2xl p-4.5 border border-slate-200/30 text-center">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400 block mb-1">Macronutrient Split</span>
                  <div className="flex justify-center items-baseline gap-1 mt-1 text-xs font-bold text-apple-black">
                    <span>P: {proteinGrams}g</span> &bull; 
                    <span>C: {carbGrams}g</span> &bull; 
                    <span>F: {fatGrams}g</span>
                  </div>
                  <p className="text-[9px] text-slate-400 font-semibold mt-1">Balanced Ratio</p>
                </div>
              </div>

              {/* Workout Routine block */}
              <div className="bg-[#0D1117] text-white rounded-3xl p-6 border border-slate-800">
                <div className="flex justify-between items-center pb-3 border-b border-slate-800 mb-4">
                  <h4 className="text-sm font-extrabold uppercase tracking-wider text-lime-400 flex items-center gap-1.5">
                    <Activity size={16} />
                    Customized Workout Protocol
                  </h4>
                  <span className="text-[9px] font-bold text-slate-400 uppercase">3-Day Split Blueprint</span>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {workouts[goal].map((exer, i) => (
                    <div key={i} className="p-3.5 bg-white/5 border border-white/5 rounded-2xl flex justify-between items-center text-xs">
                      <div>
                        <h5 className="font-extrabold text-slate-100">{exer.name}</h5>
                        <p className="text-[9px] text-slate-400 font-semibold mt-0.5">{exer.sets}</p>
                      </div>
                      <span className="text-[9px] font-black uppercase text-lime-400 bg-lime-400/10 px-2 py-0.5 rounded-md">{exer.rest}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-center">
                <button
                  onClick={() => setFitnessCalculated(false)}
                  className="px-8 py-3 bg-apple-black text-white hover:bg-slate-800 text-xs font-bold rounded-xl uppercase tracking-widest transition-all"
                >
                  Recalculate Macros
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div>
          {/* Sattvic Space Yoga Class Scheduler */}
          <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-100">
            <div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-600">
              <Heart size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-apple-black">Calm Zen Yoga Class Reservation</h3>
              <p className="text-xs text-apple-darkGray font-medium">Select meditative yoga courses, secure booking mats, and receive entrance tickets.</p>
            </div>
          </div>

          {!bookingSuccess ? (
            <div className="grid md:grid-cols-12 gap-8">
              {/* Form entries */}
              <div className="md:col-span-7 space-y-6">
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-2">1. Select Yoga Course Class</label>
                  <div className="grid grid-cols-1 gap-2.5">
                    {[
                      { title: 'Hatha Awakening Flow', teacher: 'Guru Shrinath', duration: '60 Mins &bull; Beginners' },
                      { title: 'Vinyasa Mindful Breath', teacher: 'Ma Kavitha', duration: '75 Mins &bull; Intermediate' },
                      { title: 'Sound Healing Meditation', teacher: 'Guru Amit', duration: '45 Mins &bull; All Levels' }
                    ].map(yoga => (
                      <button
                        key={yoga.title}
                        type="button"
                        onClick={() => setClassName(yoga.title)}
                        className={`p-3.5 rounded-2xl border text-left flex justify-between items-center transition-all ${
                          className === yoga.title
                            ? 'bg-teal-800 text-white border-teal-800 shadow-md'
                            : 'bg-apple-gray border-transparent text-slate-600 hover:bg-slate-200'
                        }`}
                      >
                        <div>
                          <p className="text-xs font-extrabold">{yoga.title}</p>
                          <p className="text-[9px] opacity-60 mt-0.5 font-semibold">Mentor: {yoga.teacher}</p>
                        </div>
                        <span 
                          className="text-[9px] font-black uppercase text-slate-400"
                          dangerouslySetInnerHTML={{ __html: yoga.duration }}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-1">Pick Date</label>
                    <input
                      type="date"
                      value={bookingDate}
                      onChange={(e) => setBookingDate(e.target.value)}
                      className="w-full bg-apple-gray border border-transparent rounded-xl px-3.5 py-2.5 text-xs font-semibold focus:outline-none focus:bg-white focus:border-teal-800"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-1">Select Mat Hour</label>
                    <select
                      value={bookingTime}
                      onChange={(e) => setBookingTime(e.target.value)}
                      className="w-full bg-apple-gray border border-transparent rounded-xl px-3.5 py-2.5 text-xs font-semibold focus:outline-none focus:bg-white focus:border-teal-800 appearance-none"
                    >
                      <option value="">Select hour</option>
                      <option>06:30 AM (Dawn)</option>
                      <option>08:00 AM (Sunrise)</option>
                      <option>05:30 PM (Sunset)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Summary selector sidebar */}
              <div className="md:col-span-5 bg-[#E8D5B7] text-teal-950 rounded-3xl p-6 border border-amber-200/50 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-teal-800 block mb-1">Zen Reservation</span>
                  <h4 className="text-sm font-extrabold mb-4">Yoga Cover Summary</h4>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">
                    Reservations provide full access to hot tea, changing lounges, and raw canvas yoga mats.
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-teal-900/10">
                  <button
                    onClick={() => {
                      if (bookingDate && bookingTime) setBookingSuccess(true);
                    }}
                    disabled={!bookingDate || !bookingTime}
                    className="w-full py-4 bg-teal-850 hover:bg-teal-900 bg-teal-950 disabled:opacity-40 text-white font-bold rounded-2xl text-xs uppercase tracking-widest transition-all duration-300 shadow-md flex items-center justify-center gap-2"
                  >
                    Reserve Mat
                    <CheckCircle size={14} />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            // Success Calming Pass
            <div className="text-center py-8 max-w-md mx-auto animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-teal-50 border border-teal-200 text-teal-600 flex items-center justify-center mx-auto mb-5">
                <CheckCircle size={32} />
              </div>
              <h3 className="text-2xl font-black text-apple-black mb-1">Mat Spot Locked</h3>
              <p className="text-xs text-slate-500 font-medium mb-6">
                Your calming entry pass to Sattvic Space is registered.
              </p>

              <div className="bg-[#E8D5B7] text-teal-950 rounded-3xl p-7 shadow-xl border-2 border-white/50 text-left space-y-5 relative overflow-hidden">
                {/* Circular Ticket notches */}
                <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white" />
                <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white" />

                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[8px] font-black uppercase tracking-widest text-teal-850 bg-white/40 px-2 py-0.5 rounded-md">Zen Meditation</span>
                    <h4 className="text-lg font-bold mt-2 uppercase tracking-wide leading-tight">{className}</h4>
                    <p className="text-[10px] font-bold text-slate-600">Mat Allocation Zone: A-Lounge</p>
                  </div>
                  <Sparkles size={24} className="text-teal-800" />
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-teal-900/10 text-xs">
                  <div>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-slate-500 block mb-0.5">Duration</span>
                    <span className="font-semibold text-teal-950">Full Session Class</span>
                  </div>
                  <div>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-slate-500 block mb-0.5">Mat Time</span>
                    <span className="font-semibold text-teal-900">{bookingDate} @ {bookingTime}</span>
                  </div>
                </div>

                <div className="bg-white/40 p-3 rounded-xl border border-white/40 flex items-center justify-between text-xs font-semibold text-teal-950">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} className="text-teal-800" />
                    Mat Slot: SS-YOG-{Math.floor(Math.random() * 90000 + 10000)}
                  </span>
                  <span className="text-[9px] font-bold bg-teal-950 px-2 py-0.5 rounded text-white">Active Pass</span>
                </div>
              </div>

              <button
                onClick={() => {
                  setBookingSuccess(false);
                  setBookingDate('');
                  setBookingTime('');
                }}
                className="mt-6 px-8 py-3 bg-teal-950 text-white hover:bg-teal-900 text-xs font-bold rounded-xl uppercase tracking-widest transition-all"
              >
                Book New Mat
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
