import { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Sparkles, User, Bot } from 'lucide-react';

interface AIAgentSimulatorProps {
  categoryId: string;
  projectName: string;
  accentColor: string;
}

interface ChatMessage {
  sender: 'user' | 'bot';
  text: string;
  time: string;
}

export function AIAgentSimulator({ categoryId, projectName, accentColor }: AIAgentSimulatorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  // Context configuration
  const getContextConfig = () => {
    switch (categoryId) {
      case 'academic':
        return {
          agentName: projectName.includes('Pinnacle') ? 'Pinnacle Batch Advisor' : 'Alumni Coord',
          avatarBg: '#0A1628',
          greeting: `Welcome to ${projectName}! Looking for admissions guidance, batch schedule details, or mentorship programs?`,
          chips: [
            'When are the next coaching batches starting?',
            'What is the success rate for the IIT entrance?',
            'How does the alumni mentorship network operate?',
          ],
          responses: {
            'when are the next coaching batches starting?':
              'New advanced batches start on the 1st and 15th of next month. We have restricted sizes of 25 students per class. Click "Enquire" in the header to lock in a diagnostic seat!',
            'what is the success rate for the iit entrance?':
              'Over 84% of our cohort rank in the top 2 percentile nationally, with 40+ direct IIT admissions last term alone. We offer high-fidelity practice simulators that build peak performance.',
            'how does the alumni mentorship network operate?':
              'Verified IIT founders & industry quants offer 1-on-1 scheduled sessions. Our member portal links you to active slots in under 2 minutes.',
          },
        };
      case 'medical':
        return {
          agentName: 'Clinical Concierge',
          avatarBg: '#2D6A4F',
          greeting: `Hello. I am ${projectName}'s Assistant. I can clarify clinical schedules, record-handling, or book assessment calls.`,
          chips: [
            'Can I schedule a diagnostic consult?',
            'Is medical records data fully secured?',
            'What are the clinic visiting hours?',
          ],
          responses: {
            'can i schedule a diagnostic consult?':
              'Yes, our next available booking window is tomorrow morning. Our patients can schedule direct booking using the "Live Interactive Demo" button!',
            'is medical records data fully secured?':
              'Absolutely. Patient details are secure, utilizing local end-to-end encryption complying with HIPAA and SOC2 healthcare regulations.',
            'what are the clinic visiting hours?':
              'Mon-Sat from 8:00 AM to 6:00 PM. Emergency lines are operating 24/7.',
          },
        };
      case 'music-art':
        return {
          agentName: 'Creative Assistant',
          avatarBg: '#D4AF37',
          greeting: `Hey! Thanks for visiting ${projectName}. Ready to schedule commissions, book private lessons, or review tour bookings?`,
          chips: [
            'How do I request a custom commission?',
            'Are online vocal classes open?',
            'Can I book a live performance?',
          ],
          responses: {
            'how do i request a custom commission?':
              'Commission slots open monthly. Share your style profile via our "Enquire" channel and our team will prepare moodboards in 48 hours!',
            'are online vocal classes open?':
              'Yes, our semi-private Hindustani classical masterclasses take in 5 learners per batch. Drop a message to save your slot.',
            'can i book a live performance?':
              'We are currently confirming slots for late 2026/early 2027. Simply leave your contact details to request calendar access.',
          },
        };
      case 'food':
        return {
          agentName: 'Culinary Host AI',
          avatarBg: '#3D1E0C',
          greeting: `Welcome to ${projectName}! Let me reserve prime tables, recommend our tasting menu, or discuss bespoke catering.`,
          chips: [
            'Is there a table open for 4 tonight?',
            'What is the chef\'s tasting menu cost?',
            'Do you offer custom catering?',
          ],
          responses: {
            'is there a table open for 4 tonight?':
              'We have two premium alcove slots at 7:30 PM and 9:15 PM tonight. Try the "Live Interactive Demo" table reservations panel to book instantly!',
            "what is the chef's tasting menu cost?":
              'Our heritage 7-course culinary tasting menu is priced at $120 per guest, featuring optional vintage pairing recommendations.',
            'do you offer custom catering?':
              'Yes, our boutique catering handles fine events, custom menus, and personal chef deployments. Send us details via the Enquire form!',
          },
        };
      case 'media':
        return {
          agentName: 'Editorial Desk Bot',
          avatarBg: '#DC2626',
          greeting: `Hello, reader! Need archives, subscription assistance, or wishing to pitch an investigative brief?`,
          chips: [
            'How do I submit an anonymous tip?',
            'Where is the media archive hosted?',
            'What are member subscription perks?',
          ],
          responses: {
            'how do i submit an anonymous tip?':
              'Our system handles tips via secure client-side PGP encryption. Head over to our submit module to share sensitive materials.',
            'where is the media archive hosted?':
              'We run our archives on a decentralized digital vault. Members get unrestricted access to 10+ years of high-quality local reports.',
            'what are member subscription perks?':
              'Unrestricted reporting access, zero display ads, early entry to our audio digests, and invitations to monthly editorial roundtables.',
          },
        };
      case 'fitness':
        return {
          agentName: 'Wellness Coach AI',
          avatarBg: '#AAFF00',
          greeting: `Hi there! Ready to transform? I can detail our customized training programs, schedules, and pricing.`,
          chips: [
            'What is included in the 12-week challenge?',
            'Can beginners join the yoga retreat?',
            'How do online coaching feedback loops work?',
          ],
          responses: {
            'what is included in the 12-week challenge?':
              'You get tailored biometric diets, 4 live personal coach calls, custom daily schedules, and progress tracking. Our clients average an 8% drop in body fat!',
            'can beginners join the yoga retreat?':
              'Certainly! Our retreat is designed with multi-level flows. Our coaches customize sessions so both beginners and masters progress safely.',
            'how do online coaching feedback loops work?':
              'Upload a short video of your routine, and our trainers return precise posture overlays and biomechanic insights in 6 hours.',
          },
        };
      case 'creatives':
        return {
          agentName: 'Studio Partner',
          avatarBg: '#C75B39',
          greeting: `Hello! I am ${projectName}'s Assistant. Let me walk you through our custom brand identity phases, fees, or case studies.`,
          chips: [
            'What is the standard design timeline?',
            'Can I request a custom product redesign?',
            'How do you handle licensing and assets?',
          ],
          responses: {
            'what is the standard design timeline?':
              'Brand identity cycles usually take 4-6 weeks. Custom website setups are completed in 6-8 weeks from alignment to launch.',
            'can i request a custom product redesign?':
              'Yes, product UX and cinematic design frameworks are our specialties. Click "Enquire" to schedule a moodboard briefing call.',
            'how do you handle licensing and assets?':
              'Clients receive 100% intellectual property rights, high-res source exports, and full design system components on delivery.',
          },
        };
      case 'finance':
        return {
          agentName: 'Cornerstone Desk',
          avatarBg: '#0B2545',
          greeting: `Greetings from ${projectName}. Let me assist you with Wealth Strategy consultations, tax planners, or audit calendars.`,
          chips: [
            'What is the CA audit checklist?',
            'How can I schedule a tax analysis?',
            'Can you guide NRI wealth setups?',
          ],
          responses: {
            'what is the ca audit checklist?':
              'We verify assets, crosscheck tax files, review bank registers, and check compliance rules. You can interact with deadlines in our simulated dashboard!',
            'how can i schedule a tax analysis?':
              'Use the "Live Interactive Demo" dashboard panel or tap "Enquire" to sync calendar openings with our senior partners.',
            'can you guide nri wealth setups?':
              'Yes, our multi-jurisdiction desks manage foreign investments, repatriations, NRE/NRO accounts, and local tax compliance.',
          },
        };
      case 'legal':
        return {
          agentName: 'Legal Assistant AI',
          avatarBg: '#4361EE',
          greeting: `Hello. How can I assist you with corporate fixed-fee agreements, NDAs, or family mediation workflows?`,
          chips: [
            'What is the startup counsel package?',
            'Can we sign an NDA before a brief?',
            'How do mediation processes flow?',
          ],
          responses: {
            'what is the startup counsel package?':
              'Our packages include incorporation filings, founder vest registers, 3 custom employment agreements, and active legal advisory.',
            'can we sign an nda before a brief?':
              'Of course! You can trigger our automated NDA drafting simulator by launching the "Live Interactive Demo".',
            'how do mediation processes flow?':
              'Mediation runs in 3 steps: joint alignment, confidential caucus reviews, and legal drafting. It resolves disputes in 10% of the cost of trials.',
          },
        };
      case 'tech':
        return {
          agentName: 'Dev Lead AI',
          avatarBg: '#3FB950',
          greeting: `System active. I can outline our preferred technical stacks, CTO advisory slots, or past architecture milestones.`,
          chips: [
            'What is your standard development stack?',
            'Are you available for consulting?',
            'How does the product architect coordinate?',
          ],
          responses: {
            'what is your standard development stack?':
              'We specialize in high-performance stacks: Next.js/React, TypeScript, Supabase, Tailwind, and custom serverless setups.',
            'are you available for consulting?':
              'Our engineering slots open quarterly. Hit "Enquire" in the header to check current availability for Q3/Q4 terms.',
            'how does the product architect coordinate?':
              'We join active dev chats, build high-fidelity interactive prototypes, and establish solid engineering blueprints before coding.',
          },
        };
      case 'fashion':
      default:
        return {
          agentName: 'ELEVEN Stylist',
          avatarBg: '#D4AF37',
          greeting: `Welcome to ${projectName}! Ready to experience our 3D Virtual Fitting Simulator, check inventory sources, or request size help?`,
          chips: [
            'How does the 3D Virtual Fitting work?',
            'Are customized orders refundable?',
            'Where do you source organic materials?',
          ],
          responses: {
            'how does the 3d virtual fitting work?':
              'We use your camera to scan 1.2M points of volumetric detail, creating an exact digital twin of your structure to simulate clothing drop. Open the "Live Interactive Demo" to try it!',
            'are customized orders refundable?':
              'Every customized fit is crafted specifically for you. If it doesn\'t sit flawlessly, we perform direct tailored adjustments free of charge.',
            'where do you source organic materials?':
              'We deal with verified carbon-neutral organic farms in Northern Italy & India. Scan your label to review the full blockchain trail.',
          },
        };
    }
  };

  const context = getContextConfig();

  // Initialize greeting on open
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          sender: 'bot',
          text: context.greeting,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    }
  }, [isOpen]);

  const handleSendMessage = (textToSend: string) => {
    if (!textToSend.trim()) return;

    const userMsg: ChatMessage = {
      sender: 'user',
      text: textToSend,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI Agent analysis
    setTimeout(() => {
      const cleanInput = textToSend.trim().toLowerCase();
      let replyText = `Thank you for asking! For specific details on ${projectName}, our senior advisors can customize solutions for you. Tap "Enquire" in the top header, or interact with our "Live Interactive Demo" panel at the bottom right!`;

      // Match responses
      if (context.responses[cleanInput as keyof typeof context.responses]) {
        replyText = context.responses[cleanInput as keyof typeof context.responses];
      } else {
        // Fallback custom matcher
        const matchedKey = Object.keys(context.responses).find((key) =>
          cleanInput.includes(key) || key.includes(cleanInput)
        );
        if (matchedKey) {
          replyText = context.responses[matchedKey as keyof typeof context.responses];
        }
      }

      const botMsg: ChatMessage = {
        sender: 'bot',
        text: replyText,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-24 right-6 z-40 w-12 h-12 rounded-full shadow-2xl flex items-center justify-center text-white transition-all duration-300 hover:scale-110 active:scale-95 group"
        style={{
          backgroundColor: accentColor,
          boxShadow: `0 8px 30px ${accentColor}40`,
        }}
      >
        {isOpen ? <X size={20} /> : (
          <div className="relative">
            <MessageSquare size={20} className="group-hover:rotate-6 transition-transform" />
            <span className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-red-500 rounded-full border-2 border-white animate-ping" />
            <span className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-red-500 rounded-full border-2 border-white" />
          </div>
        )}
      </button>

      {/* Chat Window Panel */}
      {isOpen && (
        <div className="fixed bottom-38 right-6 z-50 w-[350px] sm:w-[380px] h-[500px] bg-white rounded-3xl shadow-2xl border border-slate-200/60 overflow-hidden flex flex-col font-sans animate-fade-in animate-[slideUp_0.3s_ease-out]">
          
          {/* Header */}
          <div 
            className="p-4 text-white flex items-center justify-between shadow-md relative overflow-hidden shrink-0"
            style={{ backgroundColor: accentColor }}
          >
            {/* Background elements */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent pointer-events-none" />
            <div className="absolute -right-10 -top-10 w-24 h-24 rounded-full bg-white/10 blur-xl pointer-events-none" />
            
            <div className="flex items-center gap-3 relative z-10">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center border border-white/20">
                <Bot size={18} className="text-white" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-black tracking-widest uppercase">{context.agentName}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                </div>
                <span className="text-[9px] text-white/80 font-bold uppercase tracking-wider">ELEVEN Contextual Agent</span>
              </div>
            </div>

            <button 
              onClick={() => setIsOpen(false)}
              className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            >
              <X size={14} />
            </button>
          </div>

          {/* Messages Body */}
          <div className="flex-1 overflow-y-auto p-4 bg-slate-50/50 space-y-4">
            {messages.map((msg, idx) => (
              <div 
                key={idx} 
                className={`flex gap-2.5 max-w-[85%] ${
                  msg.sender === 'user' ? 'ml-auto flex-row-reverse' : 'mr-auto'
                }`}
              >
                <div 
                  className={`w-7 h-7 rounded-full shrink-0 flex items-center justify-center border text-[10px] ${
                    msg.sender === 'user' 
                      ? 'bg-slate-200 border-slate-300 text-slate-700' 
                      : 'text-white border-transparent'
                  }`}
                  style={msg.sender === 'bot' ? { backgroundColor: accentColor } : {}}
                >
                  {msg.sender === 'user' ? <User size={12} /> : <Bot size={12} />}
                </div>

                <div className="flex flex-col gap-1">
                  <div 
                    className={`rounded-2xl p-3 text-xs leading-relaxed ${
                      msg.sender === 'user' 
                        ? 'bg-slate-800 text-white rounded-tr-none' 
                        : 'bg-white text-apple-black rounded-tl-none border border-slate-200/50 shadow-sm'
                    }`}
                  >
                    {msg.text}
                  </div>
                  <span className="text-[9px] text-slate-400 self-end font-medium">{msg.time}</span>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-2.5 mr-auto max-w-[85%]">
                <div 
                  className="w-7 h-7 rounded-full shrink-0 flex items-center justify-center text-white text-[10px]"
                  style={{ backgroundColor: accentColor }}
                >
                  <Bot size={12} />
                </div>
                <div className="bg-white rounded-2xl rounded-tl-none border border-slate-200/50 shadow-sm p-3 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" />
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggestions footer / inquiry chips */}
          {messages.length === 1 && !isTyping && (
            <div className="p-3 bg-white border-t border-slate-100 shrink-0 flex flex-col gap-1.5">
              <span className="text-[9px] text-slate-400 uppercase font-black tracking-widest pl-1">Suggested Inquiries</span>
              <div className="flex flex-col gap-1.5">
                {context.chips.map((chip, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSendMessage(chip)}
                    className="text-left w-full p-2 text-[10px] font-semibold text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200/60 rounded-xl transition-all hover:translate-x-1"
                  >
                    {chip}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Message Input Box */}
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage(inputValue);
            }}
            className="p-3 bg-white border-t border-slate-200/60 shrink-0 flex items-center gap-2"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask the AI agent..."
              className="flex-1 py-2 px-3 text-xs bg-slate-50 border border-slate-200 rounded-full focus:outline-none focus:ring-1 focus:ring-slate-300 font-medium"
            />
            <button
              type="submit"
              disabled={!inputValue.trim()}
              className="w-8 h-8 rounded-full flex items-center justify-center text-white transition-all disabled:opacity-50"
              style={{ backgroundColor: accentColor }}
            >
              <Send size={12} className="relative left-px" />
            </button>
          </form>

        </div>
      )}

      {/* Embedded slideUp keyframes in style tag */}
      <style>{`
        @keyframes slideUp {
          0% {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .bottom-38 {
          bottom: 9.5rem;
        }
      `}</style>
    </>
  );
}
