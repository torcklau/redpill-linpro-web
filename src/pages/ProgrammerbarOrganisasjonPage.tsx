import { useState } from 'react';
import {
  Server, Database, Workflow, ArrowRight,
  FileCode, Share2, Users, ChevronRight,
} from 'lucide-react';
import { ORG_MODULES, handleKey } from '../shared';

// ========================================================================
// PROGRAMMERBAR ORGANISASJON-SIDE
// Inneholder vår verdikjede-modell: modulære tjenester med autonome team.
// ========================================================================

// --- PLATTFORM-VISUALISERING (intern komponent) ---
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
          <stop offset="100%" stopColor="#4a0010" />
        </radialGradient>
      </defs>
      <circle cx="100" cy="100" r="65" fill="url(#nodeBody)" stroke="#e30613" strokeWidth="1.5" />
      <circle cx="100" cy="100" r="50" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
      <circle cx="100" cy="100" r="35" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
    </svg>
  </div>
);

// --- PROGRAMMERBAR ORGANISASJON-SEKSJONEN ---
const ProgrammerbarOrganisasjonSection = () => {
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
                    <span className="text-xs font-bold text-blue-400 uppercase tracking-widest block mb-2 sm:mb-4">Tjenester</span>
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


// --- EKSPORTERT SIDE ---
const ProgrammerbarOrganisasjonPage = () => (
  <ProgrammerbarOrganisasjonSection />
);

export default ProgrammerbarOrganisasjonPage;