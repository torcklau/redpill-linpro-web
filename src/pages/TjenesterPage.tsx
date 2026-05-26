import { useState } from 'react';
import { 
  Server, Database, HardDrive, Network, Cpu, Workflow, 
  CheckCircle, ChevronRight, ArrowRight, FileCode, Share2, Users
} from 'lucide-react';
import { IAAS_PLANS, NETWORK_PRICES, MANAGED_SERVICES, ORG_MODULES, handleKey } from '../shared';
import type { NavigationProps } from '../types';

// ========================================================================
// TJENESTER-SIDE: Gjennomsiktig IaaS-prising + Managed Services + Programmable Org
// ========================================================================

// --- IAAS-PRISING ---
const IaaSPrisingSection = () => {
  const [activeTab, setActiveTab] = useState('compute');

  const [nvmeStorage, setNvmeStorage] = useState(250);
  const [objectStorage, setObjectStorage] = useState(1000);
  
  const nvmePricePerGB = 3.156;
  const objectPricePerGB = 0.725;
  const totalStorageCost = (nvmeStorage * nvmePricePerGB) + (objectStorage * objectPricePerGB);

  return (
    <div id="iaas-prising" className="py-24 bg-slate-900 border-t border-slate-800 scroll-mt-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* PRISING */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-white mb-4">Gjennomsiktig IaaS-prising</h3>
          <p className="text-slate-400">Forutsigbare kostnader uten skjulte avgifter eller ubehagelige overraskelser.</p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="bg-slate-800 p-1 rounded-lg inline-flex flex-wrap justify-center gap-1">
            <button 
              onClick={() => setActiveTab('compute')} 
              className={`px-6 py-2 rounded-md text-sm font-medium flex items-center gap-2 transition-all ${activeTab === 'compute' ? 'bg-slate-700 text-white shadow' : 'text-slate-400 hover:text-white'}`}
            >
              <Server size={16}/> Compute
            </button>
            <button 
              onClick={() => setActiveTab('storage')} 
              className={`px-6 py-2 rounded-md text-sm font-medium flex items-center gap-2 transition-all ${activeTab === 'storage' ? 'bg-slate-700 text-white shadow' : 'text-slate-400 hover:text-white'}`}
            >
              <HardDrive size={16}/> Lagring
            </button>
            <button 
              onClick={() => setActiveTab('network')} 
              className={`px-6 py-2 rounded-md text-sm font-medium flex items-center gap-2 transition-all ${activeTab === 'network' ? 'bg-slate-700 text-white shadow' : 'text-slate-400 hover:text-white'}`}
            >
              <Network size={16}/> Nettverk
            </button>
          </div>
        </div>

        {activeTab === 'compute' && (
          <div className="bg-slate-800/50 border border-slate-700 rounded-xl overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-slate-800/80 border-b border-slate-700">
                  <th className="p-4 text-slate-300 font-medium">Instans / Ytelse</th>
                  <th className="p-4 text-slate-300 font-medium">Inkludert Lagring</th>
                  <th className="p-4 text-slate-300 font-medium hidden sm:table-cell">Overføring</th>
                  <th className="p-4 text-slate-300 font-medium text-right">Timepris (NOK)</th>
                </tr>
              </thead>
              <tbody>
                {IAAS_PLANS.map((plan, i) => (
                  <tr key={i} className="border-b border-slate-700/50 hover:bg-slate-800/80 transition-colors">
                    <td className="p-4 text-white font-medium flex items-center gap-3">
                      <Cpu size={18} className="text-slate-400"/> {plan.name}
                    </td>
                    <td className="p-4 text-slate-300">{plan.storage}</td>
                    <td className="p-4 text-slate-300 hidden sm:table-cell">{plan.transfer}</td>
                    <td className="p-4 text-white font-bold text-right">{plan.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="p-4 bg-slate-800/30 text-center text-sm text-slate-400">
              Prisene faktureres per time. Maksimal månedlig pris som vist.
            </div>
          </div>
        )}
        
        {activeTab === 'storage' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 bg-slate-800/40 border border-slate-700 rounded-xl p-6 space-y-8">
              <h4 className="text-xl font-bold text-white mb-4">Lagringskalkulator</h4>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-slate-300 font-medium">NVMe Block Storage</span>
                  <span className="text-[#e30613] font-bold">{nvmeStorage} GB</span>
                </div>
                <input 
                  type="range" min="50" max="5000" step="50"
                  value={nvmeStorage}
                  onChange={(e) => setNvmeStorage(Number(e.target.value))}
                  className="w-full h-2 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                  aria-label="NVMe Block Storage kalkulator"
                />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-slate-300 font-medium">S3-kompatibel Objektlagring</span>
                  <span className="text-[#e30613] font-bold">{objectStorage} GB</span>
                </div>
                <input 
                  type="range" min="100" max="20000" step="100"
                  value={objectStorage}
                  onChange={(e) => setObjectStorage(Number(e.target.value))}
                  className="w-full h-2 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                  aria-label="S3-kompatibel Objektlagring kalkulator"
                />
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-950 border border-slate-800 rounded-xl p-6 flex flex-col justify-between">
              <div>
                <h4 className="text-lg font-bold text-white mb-6">Månedlig lagring</h4>
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">NVMe Block Storage:</span>
                    <span className="text-white font-medium">{(nvmeStorage * nvmePricePerGB).toLocaleString('no-NO', {minimumFractionDigits: 2, maximumFractionDigits: 2})} NOK</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Object Storage:</span>
                    <span className="text-white font-medium">{(objectStorage * objectPricePerGB).toLocaleString('no-NO', {minimumFractionDigits: 2, maximumFractionDigits: 2})} NOK</span>
                  </div>
                </div>
              </div>
              <div className="pt-6 border-t border-slate-800 text-center">
                <span className="text-xs text-slate-500 uppercase block mb-1">Total lagringskost</span>
                <span className="text-3xl font-extrabold text-white">{totalStorageCost.toLocaleString('no-NO', {maximumFractionDigits: 0})},- <span className="text-sm font-normal text-slate-400">NOK/mnd</span></span>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'network' && (
          <div className="bg-slate-800/50 border border-slate-700 rounded-xl overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-slate-800/80 border-b border-slate-700">
                  <th className="p-4 text-slate-300 font-medium">Tjeneste</th>
                  <th className="p-4 text-slate-300 font-medium">Enhet</th>
                  <th className="p-4 text-slate-300 font-medium text-right">Pris (NOK)</th>
                </tr>
              </thead>
              <tbody>
                {NETWORK_PRICES.map((item, i) => (
                  <tr key={i} className="border-b border-slate-700/50 hover:bg-slate-800/80 transition-colors">
                    <td className="p-4 text-white font-medium flex items-center gap-3">
                      <Network size={18} className="text-slate-400"/> {item.service}
                    </td>
                    <td className="p-4 text-slate-300">{item.unit}</td>
                    <td className="p-4 text-white font-bold text-right">{item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

const ManagedServicesSection = ({ setCurrentPage: _setCurrentPage }: NavigationProps) => {
  return (
    <div id="managed" className="py-24 bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <h2 className="text-[#e30613] font-bold tracking-wide uppercase text-sm mb-2">Premium Managed Services</h2>
            <h3 className="text-3xl font-bold text-white mb-4">Slipp drift, fokuser på kode</h3>
            <p className="text-slate-400">
              Distribuer tjenester trygt og forutsigbart. Vi håndterer oppetid, 
              oppdateringer og sikkerhet direkte på plattformen vår. Alt integrert gjennom åpne API-er.
            </p>
          </div>
        </div>

        {/* Utvikleropplevelse / IAC */}
        <div className="mb-16 bg-slate-900 border border-slate-800 rounded-xl overflow-hidden flex flex-col lg:flex-row shadow-2xl">
           <div className="lg:w-1/2 p-6 md:p-8 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-slate-800">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-slate-800 text-slate-300 text-xs font-semibold uppercase tracking-wider mb-4 w-max border border-slate-700">
               Infrastructure as Code
             </div>
             <h4 className="text-2xl md:text-3xl font-bold text-white mb-4">Utrulling på sekunder</h4>
             <p className="text-slate-400 mb-6 leading-relaxed text-sm md:text-base">
               Administrerte tjenester betyr at du deklarerer hva du trenger i kode, 
               og plattformen sørger for etablering, nettverksruting og backup-planer automatisk. 
               Zero-config compliance bakt rett inn.
             </p>
             <ul className="space-y-3 text-sm text-slate-300">
               <li className="flex gap-3 items-center"><CheckCircle size={18} className="text-emerald-500 flex-shrink-0" /> Full støtte for Terraform &amp; OpenTofu</li>
               <li className="flex gap-3 items-center"><CheckCircle size={18} className="text-emerald-500 flex-shrink-0" /> Omfattende REST API</li>
               <li className="flex gap-3 items-center"><CheckCircle size={18} className="text-emerald-500 flex-shrink-0" /> Ingen proprietær vendor lock-in</li>
             </ul>
           </div>
           
           <div className="lg:w-1/2 bg-[#0f172a] p-6 relative flex flex-col justify-center overflow-x-auto">
             <div className="flex gap-2 mb-4 absolute top-4 left-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
             </div>
             <div className="text-slate-500 text-xs font-mono absolute top-4 right-4 hidden sm:block">user@linpro-cli: ~</div>
             
             <pre className="text-xs md:text-sm font-mono text-slate-300 mt-8 whitespace-pre-wrap leading-loose">
<span className="text-sky-400 font-bold">$</span> linpro login --sso
<span className="text-slate-500">Authenticating with Norsk Suveren Sky... </span><span className="text-emerald-400">Success.</span>

<span className="text-sky-400 font-bold">$</span> linpro deploy --cluster sovereign-dev
<span className="text-slate-500">Initializing deployment to Region NO-SOUTH-1...</span>
<span className="text-emerald-400">[####################] 100%</span> Managed K8s active
<span className="text-emerald-400">[####################] 100%</span> Zero Trust secured

<span className="text-sky-400 font-bold">$</span> ping api.no-south.linpro.cloud
<span className="text-emerald-400">64 bytes from 185.12.x.x: icmp_seq=0 time=1.24 ms
64 bytes from 185.12.x.x: icmp_seq=1 time=1.18 ms</span>
             </pre>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MANAGED_SERVICES.map((svc, i) => (
            <div key={i} className="bg-slate-900 border border-slate-800 p-6 rounded-xl hover:border-slate-700 transition-all group flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <Database className={svc.color} size={28} />
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{svc.category}</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-2">{svc.name}</h4>
              <p className="text-slate-400 text-sm mb-6 flex-1 leading-relaxed">{svc.desc}</p>
              <div className="pt-4 border-t border-slate-800 flex justify-between items-center">
                <span className="text-sm text-slate-300 flex items-center gap-1 cursor-pointer hover:text-white">Les mer <ChevronRight size={14}/></span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

const PlatformVisual = () => (
  <div className="relative w-32 h-32 md:w-48 md:h-48 mx-auto my-6 flex items-center justify-center" aria-hidden="true">
    <div className="absolute inset-0 bg-red-600/15 rounded-full filter blur-xl animate-pulse"></div>
    <div className="absolute w-24 h-24 md:w-32 md:h-32 bg-orange-500/10 rounded-full filter blur-lg"></div>
    <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_10px_20px_rgba(220,38,38,0.4)]">
      <defs>
        <radialGradient id="nodeBody" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#ff7e40" />
          <stop offset="40%" stopColor="#e11d48" />
          <stop offset="85%" stopColor="#88051a" />
          <stop offset="100%" stopColor="#4c0519" />
        </radialGradient>
        <linearGradient id="highlight" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="white" stopOpacity="0.8" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
      <g>
        <path d="M 100,25 C 145,25 175,70 160,110 C 150,135 170,175 125,175 C 95,175 75,150 55,165 C 25,185 15,110 40,85 C 60,65 65,25 100,25 Z M 100,80 C 85,80 80,95 80,100 C 80,115 95,120 100,120 C 115,120 120,105 120,100 C 120,85 115,80 100,80 Z" fill="url(#nodeBody)" />
        <ellipse cx="100" cy="45" rx="15" ry="7" fill="url(#highlight)" opacity="0.4" transform="rotate(-10 100 45)" />
        <ellipse cx="145" cy="135" rx="12" ry="6" fill="url(#highlight)" opacity="0.3" transform="rotate(35 145 135)" />
        <ellipse cx="45" cy="115" rx="10" ry="5" fill="url(#highlight)" opacity="0.3" transform="rotate(-40 45 115)" />
      </g>
    </svg>
  </div>
);

const ProgrammableOrgSection = () => {
  const [activeModule, setActiveModule] = useState('customer-team');

  return (
    <div id="programmable-org" className="py-24 bg-slate-900 border-t border-slate-800 relative overflow-hidden scroll-mt-16">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl pointer-events-none opacity-5">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#e30613] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-[#e30613] font-bold tracking-wide uppercase text-sm mb-2 block">Tjenester I NORGE</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">Modulære tjenester med autonome team</h2>
          <p className="text-slate-400 max-w-3xl mx-auto text-lg">
            Vi organiserer oss med klart ansvar og evne til å løse oppgavene våre internt i hvert team. Dette fjerner avhengigheter, bygger sterkt eierskap og sikrer at vi leverer raskere og med høyere kvalitet til kundene våre i hele Norge.
          </p>
        </div>

        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 lg:p-10 mb-16 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-semibold uppercase tracking-wider border border-blue-500/20">
                Inverse Conway Maneuver
              </div>
              <blockquote className="border-l-4 border-blue-500 pl-4 sm:pl-5 space-y-4">
                <p className="text-slate-300 italic text-sm md:text-base leading-relaxed">
                  «Vår forskning støtter det som noen ganger kalles den 'omvendte Conway-manøveren', som sier at organisasjoner bør utvikle sin team- og organisasjonsstruktur for å oppnå ønsket arkitektur. Målet er at arkitekturen skal støtte teamenes evne til å få jobben gjort — fra design til utrulling — uten å kreve høy båndbredde i kommunikasjonen mellom teamene.»
                </p>
                <footer className="text-xs text-slate-500 font-semibold uppercase tracking-wider">
                  — Accelerate: The Science of Dev Ops (s. 18)
                </footer>
              </blockquote>
            </div>

            <div className="bg-slate-950 rounded-xl p-4 sm:p-6 md:p-8 border border-slate-800 flex flex-col gap-6 sm:gap-8 overflow-hidden">
              <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] gap-4 items-center">
                 <div className="text-center space-y-3">
                   <span className="text-xs font-bold text-blue-400 uppercase tracking-widest block mb-2 sm:mb-4">Organisasjon</span>
                   <div className="flex justify-center gap-2 text-blue-400">
                     <div className="p-2 border border-blue-900/50 bg-blue-950/30 rounded-full"><Users size={18} /></div>
                     <div className="p-2 border border-blue-900/50 bg-blue-950/30 rounded-full"><Users size={18} /></div>
                   </div>
                   <div className="flex justify-center gap-2 text-blue-400 mt-2">
                     <div className="p-2 border border-blue-900/50 bg-blue-950/30 rounded-full"><Users size={18} /></div>
                   </div>
                   <span className="text-[10px] uppercase font-bold text-slate-400 block mt-3">Små uavhengige team</span>
                 </div>
                 
                 <div className="flex items-center justify-center mt-2 sm:mt-8 rotate-90 sm:rotate-0">
                   <ArrowRight className="text-slate-600" size={24} />
                 </div>
                 
                 <div className="text-center space-y-3">
                    <span className="text-xs font-bold text-blue-400 uppercase tracking-widest block mb-2 sm:mb-4">Programvare</span>
                    <div className="flex justify-center text-emerald-400 h-auto sm:h-[88px] items-center py-4 sm:py-0">
                       <Share2 size={40} />
                    </div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 block mt-3">Modulær tjenestearkitektur</span>
                 </div>
              </div>

              <div className="w-full h-px bg-slate-800 hidden sm:block"></div>

              <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] gap-4 items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-500 pt-6 sm:pt-0 border-t border-slate-800 sm:border-t-0">
                 <div className="text-center space-y-3">
                   <div className="flex justify-center text-slate-400 h-auto sm:h-[88px] items-center py-4 sm:py-0">
                     <div className="p-4 border border-slate-700 bg-slate-900 rounded-full"><Users size={32} /></div>
                   </div>
                   <span className="text-[10px] uppercase font-bold text-slate-400 block mt-3">Ett stort team</span>
                 </div>
                 
                 <div className="flex items-center justify-center rotate-90 sm:rotate-0">
                   <ArrowRight className="text-slate-600" size={24} />
                 </div>
                 
                 <div className="text-center space-y-3">
                    <div className="flex justify-center text-slate-400 h-auto sm:h-[88px] items-center py-4 sm:py-0">
                       <Database size={40} />
                    </div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 block mt-3">Monolittisk arkitektur</span>
                 </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          <div className="lg:col-span-6 bg-slate-950/60 border border-slate-800 rounded-xl p-4 sm:p-6 lg:p-8 flex flex-col items-center justify-center space-y-0 relative overflow-x-auto">
            <h4 className="text-white font-semibold mb-8 text-sm uppercase tracking-wider text-slate-400 w-full text-left">Vår verdikjede</h4>
            
            <div className="flex flex-col items-center w-full max-w-[500px] min-w-[300px]">
                
                {/* ROW 1: ENTERPRISE KUNDE */}
                <div className="w-[280px] max-w-full z-10 bg-slate-950 rounded-xl">
                    <div 
                      onClick={() => setActiveModule('customer')}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => handleKey(e, () => setActiveModule('customer'))}
                      className={`p-4 rounded-xl cursor-pointer transition-all border flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-red-500 ${activeModule === 'customer' ? 'bg-slate-800/80 border-[#e30613] shadow-lg shadow-red-900/20' : 'bg-slate-900/40 border-slate-800 hover:border-slate-700'}`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded ${activeModule === 'customer' ? 'bg-red-500/20 text-red-400' : 'bg-slate-800 text-slate-400'}`}><Server size={20} /></div>
                        <div className="text-left">
                          <div className="text-[10px] sm:text-xs text-slate-500 uppercase font-semibold">Sluttmottaker</div>
                          <div className="text-white font-bold text-sm">Enterprise Kunde</div>
                        </div>
                      </div>
                      <ChevronRight size={16} className="text-slate-600 hidden sm:block" />
                    </div>
                </div>

                {/* CONNECTOR 1: Branching Line */}
                <div className="w-full relative h-10 z-0">
                   {/* Left branch (Konsulent) */}
                   <div className="absolute left-[25%] right-[50%] top-1/2 bottom-0 border-t-2 border-l-2 border-red-500/50 rounded-tl-lg"></div>
                   {/* Right branch (Kundeteam) */}
                   <div className="absolute left-[50%] right-[25%] top-1/2 bottom-0 border-t-2 border-r-2 border-red-500/50 rounded-tr-lg"></div>
                   {/* Center trunk */}
                   <div className="absolute left-[50%] top-0 h-1/2 w-0.5 bg-red-500/50 -translate-x-1/2"></div>
                </div>

                {/* ROW 2: KONSULENT & KUNDETEAM */}
                <div className="flex w-full justify-between items-stretch z-10 gap-4 sm:gap-6 relative">
                    {/* Dotted line between them */}
                    <div className="absolute top-1/2 left-[25%] right-[25%] border-t-2 border-dashed border-red-500/50 -translate-y-1/2 z-0 hidden sm:block"></div>
                    
                    {/* Left: Konsulent */}
                    <div className="flex-1 w-full z-10 bg-slate-950 rounded-xl">
                        <div 
                          onClick={() => setActiveModule('project')}
                          role="button"
                          tabIndex={0}
                          onKeyDown={(e) => handleKey(e, () => setActiveModule('project'))}
                          className={`p-3 sm:p-4 rounded-xl cursor-pointer transition-all border flex items-center justify-between h-full focus:outline-none focus:ring-2 focus:ring-red-500 ${activeModule === 'project' ? 'bg-slate-800/80 border-[#e30613] shadow-lg shadow-red-900/20' : 'bg-slate-900/40 border-slate-800 hover:border-slate-700'}`}
                        >
                          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-3 w-full">
                            <div className={`p-2 rounded flex-shrink-0 ${activeModule === 'project' ? 'bg-red-500/20 text-red-400' : 'bg-slate-800 text-slate-400'}`}><FileCode size={18} /></div>
                            <div className="text-center sm:text-left">
                              <div className="text-[10px] text-slate-500 uppercase font-semibold">Konsulent</div>
                              <div className="text-white font-bold text-xs sm:text-sm">Prosjekt</div>
                            </div>
                          </div>
                        </div>
                    </div>

                    {/* Right: Kundeteam */}
                    <div className="flex-1 w-full z-10 bg-slate-950 rounded-xl">
                        <div 
                          onClick={() => setActiveModule('customer-team')}
                          role="button"
                          tabIndex={0}
                          onKeyDown={(e) => handleKey(e, () => setActiveModule('customer-team'))}
                          className={`p-3 sm:p-4 rounded-xl cursor-pointer transition-all border flex items-center justify-between h-full focus:outline-none focus:ring-2 focus:ring-red-500 ${activeModule === 'customer-team' ? 'bg-slate-800/80 border-[#e30613] shadow-lg shadow-red-900/20' : 'bg-slate-900/40 border-slate-800 hover:border-slate-700'}`}
                        >
                          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-3 w-full">
                            <div className={`p-2 rounded flex-shrink-0 ${activeModule === 'customer-team' ? 'bg-red-500/20 text-red-400' : 'bg-slate-800 text-slate-400'}`}><Workflow size={18} /></div>
                            <div className="text-center sm:text-left">
                              <div className="text-[10px] text-slate-500 uppercase font-semibold leading-tight">Brobygger &amp; Arkitekt</div>
                              <div className="text-white font-bold text-xs sm:text-sm">Kundeteam</div>
                            </div>
                          </div>
                        </div>
                    </div>
                </div>

                {/* CONNECTOR 2: Down from Kundeteam */}
                <div className="w-full relative h-10 z-0">
                   <div className="absolute left-[75%] top-0 bottom-0 w-0.5 bg-red-500/50 -translate-x-1/2"></div>
                </div>

                {/* ROW 3: TJENESTER & PLATTFORM */}
                <div className="flex w-full justify-between items-stretch z-10 gap-4 sm:gap-6 relative">
                    <div className="flex-1 hidden sm:block"></div> {/* Spacer to push to the right */}
                    
                    <div className="flex-1 grid grid-cols-2 gap-2 sm:gap-3 z-10 bg-slate-950 rounded-xl w-full sm:w-auto">
                        <div 
                          onClick={() => setActiveModule('managed-services')}
                          role="button"
                          tabIndex={0}
                          onKeyDown={(e) => handleKey(e, () => setActiveModule('managed-services'))}
                          className={`p-2 sm:p-3 rounded-xl cursor-pointer transition-all border text-center h-full flex flex-col justify-center focus:outline-none focus:ring-2 focus:ring-red-500 ${activeModule === 'managed-services' ? 'bg-slate-800/80 border-[#e30613] shadow-lg shadow-red-900/20' : 'bg-slate-900/40 border-slate-800 hover:border-slate-700'}`}
                        >
                          <div className={`p-1.5 mx-auto rounded w-max mb-1.5 ${activeModule === 'managed-services' ? 'bg-red-500/20 text-red-400' : 'bg-slate-800 text-slate-400'}`}><Database size={16} /></div>
                          <div className="text-[9px] text-slate-500 uppercase font-semibold">Tjenester</div>
                          <div className="text-white font-bold text-[10px] mt-0.5 leading-tight">Managed Services</div>
                        </div>

                        <div 
                          onClick={() => setActiveModule('platform-team')}
                          role="button"
                          tabIndex={0}
                          onKeyDown={(e) => handleKey(e, () => setActiveModule('platform-team'))}
                          className={`p-2 sm:p-3 rounded-xl cursor-pointer transition-all border text-center h-full flex flex-col justify-center focus:outline-none focus:ring-2 focus:ring-red-500 ${activeModule === 'platform-team' ? 'bg-slate-800/80 border-[#e30613] shadow-lg shadow-red-900/20' : 'bg-slate-900/40 border-slate-800 hover:border-slate-700'}`}
                        >
                          <div className={`p-1.5 mx-auto rounded w-max mb-1.5 ${activeModule === 'platform-team' ? 'bg-red-500/20 text-red-400' : 'bg-slate-800 text-slate-400'}`}><Server size={16} /></div>
                          <div className="text-[9px] text-slate-500 uppercase font-semibold">Plattform</div>
                          <div className="text-white font-bold text-[10px] mt-0.5 leading-tight">Plattform- &amp; IaaS</div>
                        </div>
                    </div>
                </div>
            </div>
          </div>

          <div className="lg:col-span-6 bg-slate-900 border border-slate-800 rounded-xl p-6 lg:p-8 flex flex-col justify-between">
            <div className="flex flex-col h-full justify-between animate-in fade-in duration-300">
              <div>
                <span className="text-xs font-bold text-[#e30613] uppercase tracking-wider">Modul-detaljer</span>
                <h3 className="text-2xl font-bold text-white mt-2 mb-6 flex items-center gap-2">
                  {ORG_MODULES[activeModule].title}
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <h5 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2">Hvem er dette egentlig?</h5>
                    <p className="text-slate-300 text-sm leading-relaxed">{ORG_MODULES[activeModule].purpose}</p>
                  </div>

                  {activeModule === 'customer-team' && (
                    <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-4 sm:p-5 my-6 flex flex-col md:flex-row items-center gap-4 relative overflow-hidden">
                      <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none">
                        <Workflow size={120} className="text-[#e30613]" />
                      </div>
                      <div className="flex-1">
                        <span className="text-[10px] font-bold text-[#e30613] uppercase tracking-wider block mb-2">Plattform-Filosofi</span>
                        <p className="text-sm text-slate-200 italic font-medium leading-relaxed">
                          {ORG_MODULES['customer-team'].quote}
                        </p>
                      </div>
                      <div className="flex-shrink-0">
                        <PlatformVisual />
                      </div>
                    </div>
                  )}

                  <div>
                    <h5 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2">Grensesnitt</h5>
                    <p className="text-slate-300 text-sm leading-relaxed">{ORG_MODULES[activeModule].interface}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- EKSPORTERT TJENESTESIDE ---
const TjenesterPage = ({ setCurrentPage }: NavigationProps) => (
  <>
    <IaaSPrisingSection />
    <ManagedServicesSection setCurrentPage={setCurrentPage} />
    <ProgrammableOrgSection />
  </>
);

export default TjenesterPage;
