import { useState, useEffect, useRef } from 'react';
import { 
  Terminal, 
  Cpu, 
  Layers, 
  DollarSign, 
  Server, 
  HardDrive, 
  Cloud, 
  Database, 
  Activity, 
  Code, 
  Play, 
  Check, 
  Sparkles,
  RefreshCw
} from 'lucide-react';

interface TechSandboxProps {
  projectName: string;
}

interface CommandLog {
  command: string;
  output: React.ReactNode;
}

export function TechSandbox({ projectName }: TechSandboxProps) {
  const isVikram = projectName.toLowerCase().includes('vikram') || projectName.toLowerCase().includes('staff') || projectName.toLowerCase().includes('sre');

  // Vikram Terminal State
  const [terminalInput, setTerminalInput] = useState('');
  const [commandHistory, setCommandHistory] = useState<CommandLog[]>([
    {
      command: 'ssh visitor@vikram-nair.sre',
      output: (
        <div className="text-emerald-400 font-mono text-xs leading-relaxed space-y-1">
          <p>Welcome to Vikram Nair's Staff SRE Node (v2.4.9-LTS)</p>
          <p>System status: ACTIVE | Load: 0.22 | Uptime: 452d 12h 4m</p>
          <p className="text-slate-400">Type <span className="text-amber-300 font-bold">help</span> to view available terminal actions.</p>
        </div>
      )
    }
  ]);
  const [isMatrixMode, setIsMatrixMode] = useState(false);
  const terminalBottomRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom of terminal
  useEffect(() => {
    if (terminalBottomRef.current) {
      terminalBottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [commandHistory, isMatrixMode]);

  // Handle Terminal CLI Command
  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = terminalInput.trim().toLowerCase();
    if (!cmd) return;

    let output: React.ReactNode = null;

    switch (cmd) {
      case 'help':
        output = (
          <div className="space-y-1.5 text-slate-300">
            <p className="font-bold text-emerald-400">Available commands:</p>
            <div className="grid grid-cols-2 gap-x-4 max-w-sm">
              <p><span className="text-amber-300">skills</span>   - List specialized tech stack</p>
              <p><span className="text-amber-300">projects</span> - Print architecture portfolios</p>
              <p><span className="text-amber-300">neofetch</span> - System specs & ASCII card</p>
              <p><span className="text-amber-300">matrix</span>   - Trigger system diagnostic rain</p>
              <p><span className="text-amber-300">clear</span>    - Wipe the console screen</p>
              <p><span className="text-amber-300">resume</span>   - SRE professional snapshot</p>
            </div>
          </div>
        );
        break;
      case 'clear':
        setCommandHistory([]);
        setTerminalInput('');
        return;
      case 'neofetch':
        output = (
          <div className="flex gap-4 items-start text-xs font-mono">
            <pre className="text-emerald-500 font-bold leading-none hidden sm:block">
{`   /\\_/\\
  ( o.o )
   > ^ <
 /|     |\\
  | | | |
  |_|_|_|`}
            </pre>
            <div className="space-y-0.5 text-slate-300">
              <p className="font-bold text-emerald-400">visitor@vikram-sre-node</p>
              <p className="text-slate-500">--------------------------</p>
              <p><span className="text-slate-400">OS:</span> Ubuntu 22.04.2 LTS x86_64</p>
              <p><span className="text-slate-400">Host:</span> VikramSRE-Custom Node</p>
              <p><span className="text-slate-400">Kernel:</span> 5.15.0-72-generic</p>
              <p><span className="text-slate-400">Uptime:</span> 452 days, 12 hours</p>
              <p><span className="text-slate-400">Shell:</span> bash 5.1.16</p>
              <p><span className="text-slate-400">CPU:</span> AMD Ryzen 9 5950X (32) @ 3.4GHz</p>
              <p><span className="text-slate-400">Memory:</span> 12.4 GB / 64 GB (19%)</p>
              <p><span className="text-slate-400">SRE Focus:</span> Kubernetes, Terraform, High Availability, CoreOS</p>
            </div>
          </div>
        );
        break;
      case 'skills':
        output = (
          <div className="space-y-2 text-slate-300 text-xs">
            <p className="font-bold text-emerald-400">SRE Domain Competency Ledger:</p>
            <div className="space-y-1.5 max-w-md">
              <div>
                <div className="flex justify-between font-semibold mb-0.5">
                  <span>Kubernetes & Orchestration</span>
                  <span className="text-emerald-400">95%</span>
                </div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-emerald-500 h-full w-[95%]"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between font-semibold mb-0.5">
                  <span>IaC (Terraform, Ansible, Pulumi)</span>
                  <span className="text-emerald-400">90%</span>
                </div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-emerald-500 h-full w-[90%]"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between font-semibold mb-0.5">
                  <span>CI/CD & Observability (Grafana, Prometheus)</span>
                  <span className="text-emerald-400">92%</span>
                </div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-emerald-500 h-full w-[92%]"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between font-semibold mb-0.5">
                  <span>AWS, GCP & Hybrid Cloud Topology</span>
                  <span className="text-emerald-400">88%</span>
                </div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-emerald-500 h-full w-[88%]"></div>
                </div>
              </div>
            </div>
          </div>
        );
        break;
      case 'projects':
        output = (
          <div className="space-y-3 text-slate-300 text-xs max-w-lg">
            <p className="font-bold text-emerald-400">High-Availability Production Deployments:</p>
            <div className="border-l-2 border-emerald-500 pl-3 py-0.5 space-y-1">
              <p className="font-bold text-slate-200">1. Global FinTech Gateway Scaling</p>
              <p className="text-slate-400">Migrated legacy transaction API from ECS to multi-region EKS. Designed low-latency Consul service mesh, boosting throughput to 85,000 requests/sec while slashing multi-region database sync lag to under 45ms.</p>
            </div>
            <div className="border-l-2 border-emerald-500 pl-3 py-0.5 space-y-1">
              <p className="font-bold text-slate-200">2. Autonomous Chaos Engineering Framework</p>
              <p className="text-slate-400">Built a custom Litmus-based scheduler that dynamically injects CPU/network spikes into staging clusters. Drastically improved automatic failure recovery configurations, trimming MTTR by 64%.</p>
            </div>
          </div>
        );
        break;
      case 'resume':
        output = (
          <div className="space-y-1.5 text-slate-300 text-xs">
            <p className="font-bold text-emerald-400">Vikram Nair — Staff Site Reliability Engineer</p>
            <p className="text-slate-400">Location: Bengaluru, KA, India (Open to Remote)</p>
            <p className="text-slate-400">Experience: 8+ Years scaling systems at Tier-1 Tech & Hyper-Growth Unicorns.</p>
            <p className="text-slate-400">Core Stack: K8s, Go, Python, Terraform, Helm, Prometheus, AWS, Linux Kernel Tuning.</p>
            <p className="text-indigo-400 font-bold flex items-center gap-1 mt-1 cursor-pointer hover:underline">
              <span>[!] Secure/Download SRE_Full_Resume.pdf</span>
            </p>
          </div>
        );
        break;
      case 'matrix':
        setIsMatrixMode(true);
        setTimeout(() => {
          setIsMatrixMode(false);
          setCommandHistory(prev => [
            ...prev,
            {
              command: 'matrix',
              output: (
                <div className="text-emerald-400 leading-normal">
                  <p className="font-bold">SYSTEM DIAGNOSTIC RAIN COMPLETE.</p>
                  <p>All core Kubernetes API servers operational. Underlaying hypervisors report 100% health metrics.</p>
                </div>
              )
            }
          ]);
        }, 3000);
        setTerminalInput('');
        return;
      default:
        output = (
          <p className="text-rose-400">
            command not found: {cmd}. Type <span className="underline font-bold">help</span> to list commands.
          </p>
        );
    }

    setCommandHistory(prev => [...prev, { command: terminalInput, output }]);
    setTerminalInput('');
  };

  // BuildFast State
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    'auth', 'database', 'payments'
  ]);
  const [cloudProvider, setCloudProvider] = useState<'aws' | 'gcp' | 'supabase' | 'vps'>('supabase');
  const [dailyUsers, setDailyUsers] = useState<number>(5000);

  const featureMetadata = [
    { id: 'auth', label: 'OAuth & MFA Authentication', cost: 15, desc: 'Secure Cognito/Supabase Auth with social login & biometric access keys' },
    { id: 'database', label: 'PostgreSQL DB & Redis Cache', cost: 45, desc: 'High-availability read-replicas + memory caching layer' },
    { id: 'realtime', label: 'Real-time WebSockets Sync', cost: 25, desc: 'Push notifications & multi-client live dashboard streaming' },
    { id: 'payments', label: 'Stripe Pay & Billing Portal', cost: 10, desc: 'Automated invoice drafting, multi-tier webhooks, and receipts' },
    { id: 'ai', label: 'AI LLM Agents & Embeddings', cost: 120, desc: 'Vector database lookup + LLM prompt reasoning workers' },
    { id: 'cdn', label: 'Cloudflare CDN Asset Storage', cost: 20, desc: 'Edge cache optimization & asset storage files' }
  ];

  const handleFeatureToggle = (id: string) => {
    setSelectedFeatures(prev =>
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
  };

  // Cost calculator logic
  const calculateSaaSCosts = () => {
    let baseCompute = 0;
    
    // Cloud pricing differences
    if (cloudProvider === 'aws') baseCompute = 80;
    else if (cloudProvider === 'gcp') baseCompute = 95;
    else if (cloudProvider === 'supabase') baseCompute = 25;
    else baseCompute = 15; // VPS

    // Feature costs
    const featuresCost = selectedFeatures.reduce((acc, featId) => {
      const feat = featureMetadata.find(f => f.id === featId);
      return acc + (feat ? feat.cost : 0);
    }, 0);

    // Dynamic cost scaling based on user volume
    const trafficMultiplier = Math.max(1, dailyUsers / 5000);
    const scaledDatabase = selectedFeatures.includes('database') ? 30 * trafficMultiplier : 0;
    const scaledCompute = baseCompute * trafficMultiplier;

    const totalCost = Math.round(scaledCompute + featuresCost + scaledDatabase);

    return { totalCost, baseCompute, featuresCost, scaledDatabase };
  };

  const costBreakdown = calculateSaaSCosts();

  return (
    <div className="font-sans text-apple-black bg-white rounded-3xl p-6 shadow-xl border border-slate-100 max-w-4xl mx-auto">
      {isVikram ? (
        <div>
          {/* SRE Terminal Header */}
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600">
              <Terminal size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-apple-black">SRE Remote Console Simulator</h3>
              <p className="text-xs text-apple-darkGray font-medium">Verify node uptime and run automated system architecture queries.</p>
            </div>
          </div>

          {/* Terminal Box */}
          <div className="bg-slate-900 border border-slate-950 rounded-2xl p-5 shadow-2xl relative h-[420px] flex flex-col overflow-hidden">
            {isMatrixMode ? (
              <div className="flex-1 flex flex-col items-center justify-center font-mono text-emerald-400 space-y-4">
                <RefreshCw size={36} className="animate-spin text-emerald-500" />
                <div className="text-center space-y-1">
                  <p className="text-sm font-bold tracking-widest animate-pulse">EXECUTING CLUSTER INTRUSION SCHEDULER</p>
                  <p className="text-[10px] text-slate-500">Injecting chaos protocols to test load balancer auto-scaling resiliency...</p>
                </div>
                <div className="w-48 bg-slate-800 h-1 rounded-full overflow-hidden">
                  <div className="bg-emerald-500 h-full w-[80%] animate-[pulse_1s_infinite]"></div>
                </div>
              </div>
            ) : (
              <>
                {/* Window buttons */}
                <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-500 font-bold uppercase tracking-wider">visitor@vikram-nair: /home/sre</span>
                  <div className="w-12"></div>
                </div>

                {/* Logs Screen */}
                <div className="flex-1 overflow-y-auto space-y-4 pr-1 scrollbar-thin select-text">
                  {commandHistory.map((h, i) => (
                    <div key={i} className="space-y-1.5">
                      <div className="flex items-center gap-1.5 text-slate-400 font-mono text-xs">
                        <span className="text-emerald-500 font-bold">visitor@vikram-sre:~$</span>
                        <span>{h.command}</span>
                      </div>
                      <div className="pl-4">{h.output}</div>
                    </div>
                  ))}
                  <div ref={terminalBottomRef} />
                </div>

                {/* Command Line Input Form */}
                <form onSubmit={handleCommandSubmit} className="mt-4 pt-3 border-t border-slate-800 flex items-center gap-2">
                  <span className="text-emerald-500 font-mono text-xs font-bold shrink-0">visitor@vikram-sre:~$</span>
                  <input
                    type="text"
                    value={terminalInput}
                    onChange={(e) => setTerminalInput(e.target.value)}
                    placeholder="Type 'help' and hit enter..."
                    className="flex-1 bg-transparent border-none text-emerald-400 font-mono text-xs focus:outline-none focus:ring-0 p-0"
                    autoFocus
                  />
                  <button type="submit" className="text-emerald-500 hover:text-emerald-400 p-1 rounded hover:bg-slate-800">
                    <Play size={12} />
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      ) : (
        <div>
          {/* BuildFast Blueprint & Hosting Estimator */}
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
            <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center text-purple-600">
              <Cpu size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-apple-black">SaaS Architecture Blueprint Designer</h3>
              <p className="text-xs text-apple-darkGray font-medium">Select features, scale workloads, and estimate monthly cloud hosting costs instantly.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-12 gap-8">
            {/* Form Column */}
            <div className="md:col-span-6 space-y-5">
              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2.5">1. Select Core Components</label>
                <div className="space-y-2 max-h-[180px] overflow-y-auto pr-1 border border-slate-100 p-2 rounded-xl">
                  {featureMetadata.map((f) => (
                    <label
                      key={f.id}
                      className={`flex items-start gap-3 p-2.5 rounded-xl border transition-all cursor-pointer ${
                        selectedFeatures.includes(f.id)
                          ? 'bg-purple-50/50 border-purple-200'
                          : 'bg-white border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={selectedFeatures.includes(f.id)}
                        onChange={() => handleFeatureToggle(f.id)}
                        className="rounded border-slate-300 text-purple-600 focus:ring-purple-500 mt-0.5"
                      />
                      <div>
                        <div className="flex justify-between items-center w-full">
                          <span className="text-xs font-bold text-slate-800">{f.label}</span>
                          <span className="text-[10px] font-bold text-purple-700 bg-purple-100/60 px-1.5 py-0.5 rounded-md">+${f.cost}/mo</span>
                        </div>
                        <p className="text-[10px] text-slate-500 mt-0.5 leading-normal">{f.desc}</p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">2. Cloud Infrastructure</label>
                  <select
                    value={cloudProvider}
                    onChange={(e) => setCloudProvider(e.target.value as any)}
                    className="w-full bg-apple-gray border border-slate-200/60 rounded-xl px-3 py-2 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  >
                    <option value="supabase">Supabase Serverless</option>
                    <option value="aws">AWS Web Services</option>
                    <option value="gcp">Google Cloud Platform</option>
                    <option value="vps">Hetzner VPS Dedicated</option>
                  </select>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400">3. Scale (DAU)</label>
                    <span className="text-xs font-bold text-purple-700">{dailyUsers.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="1000"
                    max="50000"
                    step="1000"
                    value={dailyUsers}
                    onChange={(e) => setDailyUsers(Number(e.target.value))}
                    className="w-full accent-purple-600 bg-slate-100 h-2 rounded-lg cursor-pointer"
                  />
                </div>
              </div>

              {/* Total Card */}
              <div className="p-4 bg-purple-900 text-white rounded-2xl shadow-xl flex items-center justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-wider font-bold opacity-80">Estimated Cloud Budget</p>
                  <div className="flex items-baseline gap-1.5 mt-0.5">
                    <span className="text-3xl font-black">${costBreakdown.totalCost}</span>
                    <span className="text-xs font-bold opacity-80">/ month</span>
                  </div>
                </div>
                <div className="text-right text-[10px] space-y-0.5 opacity-90">
                  <p>Compute: ${Math.round(costBreakdown.baseCompute)}/mo</p>
                  <p>Features: ${costBreakdown.featuresCost}/mo</p>
                  <p>Scaled DB: ${Math.round(costBreakdown.scaledDatabase)}/mo</p>
                </div>
              </div>
            </div>

            {/* Architecture Visualizer Column */}
            <div className="md:col-span-6 bg-slate-50 border border-slate-200/50 rounded-2xl p-5 flex flex-col h-[400px]">
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-200">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Live Dynamic Systems Diagram</span>
                <span className="text-[9px] bg-emerald-500/10 text-emerald-700 px-2 py-0.5 rounded-full font-bold border border-emerald-500/20">Operational</span>
              </div>

              {/* Block diagram */}
              <div className="flex-1 flex flex-col justify-center gap-4 bg-slate-900 border border-slate-950 p-4 rounded-xl shadow-inner font-mono text-[9px] text-slate-300">
                {/* Node 1: Client */}
                <div className="flex items-center justify-center border border-dashed border-slate-700 rounded-lg p-2 bg-slate-950 shadow">
                  <span className="text-purple-400 font-bold flex items-center gap-1"><Cloud size={10} /> User Browser / App</span>
                </div>
                
                {/* Arrow */}
                <div className="text-center text-slate-500 text-xs">▼</div>

                {/* Node 2: API Gateway / Load Balancer */}
                <div className="flex items-center justify-between gap-2 border border-slate-800 rounded-lg p-2.5 bg-slate-950">
                  <div className="text-slate-400 flex items-center gap-1"><Activity size={10} /> API Gateway</div>
                  <div className="text-slate-600">---</div>
                  <div className="text-emerald-400 font-bold bg-emerald-500/5 border border-emerald-500/10 px-1.5 py-0.5 rounded text-[8px]">
                    {cloudProvider === 'supabase' ? 'Kong Edge Gateway' : cloudProvider === 'aws' ? 'AWS ALB' : cloudProvider === 'gcp' ? 'GCP HTTPS Load Balancer' : 'Nginx/Traefik Proxy'}
                  </div>
                </div>

                {/* Arrow */}
                <div className="text-center text-slate-500 text-xs">▼</div>

                {/* Node 3: Microservices / Functions */}
                <div className="grid grid-cols-2 gap-2">
                  <div className="border border-slate-800 rounded-lg p-2 bg-slate-950 flex flex-col gap-1 items-center justify-center">
                    <span className="text-blue-400 font-bold flex items-center gap-1"><Cpu size={10} /> Compute API</span>
                    <span className="text-[7px] text-slate-500">
                      {cloudProvider === 'supabase' ? 'Edge Functions' : cloudProvider === 'aws' ? 'AWS ECS Node' : cloudProvider === 'gcp' ? 'GCP Cloud Run' : 'Docker VPS Container'}
                    </span>
                  </div>

                  {selectedFeatures.includes('ai') ? (
                    <div className="border border-purple-800/80 rounded-lg p-2 bg-slate-950 flex flex-col gap-1 items-center justify-center animate-pulse">
                      <span className="text-amber-400 font-bold flex items-center gap-1"><Sparkles size={10} /> AI Inference</span>
                      <span className="text-[7px] text-purple-400">LLM Proxy Pipeline</span>
                    </div>
                  ) : (
                    <div className="border border-dashed border-slate-800 opacity-40 rounded-lg p-2 bg-slate-950 flex items-center justify-center">
                      <span className="text-slate-600">AI Node Inactive</span>
                    </div>
                  )}
                </div>

                {/* Arrow */}
                <div className="text-center text-slate-500 text-xs">▼</div>

                {/* Node 4: Database & Redis */}
                <div className="flex gap-2">
                  {selectedFeatures.includes('database') ? (
                    <div className="flex-1 border border-slate-800 rounded-lg p-2 bg-slate-950 flex flex-col items-center justify-center">
                      <span className="text-emerald-400 font-bold flex items-center gap-1"><Database size={10} /> PostgreSQL DB</span>
                      <span className="text-[7px] text-slate-500">{dailyUsers > 15000 ? 'Multi-Region Replicas' : 'Single Instance'}</span>
                    </div>
                  ) : (
                    <div className="flex-1 border border-dashed border-slate-800 opacity-40 rounded-lg p-2 bg-slate-950 flex items-center justify-center text-slate-600">
                      No DB Provisioned
                    </div>
                  )}

                  {selectedFeatures.includes('cdn') ? (
                    <div className="w-[40%] border border-slate-800 rounded-lg p-2 bg-slate-950 flex flex-col items-center justify-center">
                      <span className="text-indigo-400 font-bold flex items-center gap-1"><HardDrive size={10} /> CDN Storage</span>
                      <span className="text-[7px] text-slate-500">Asset Cloud Bucket</span>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
