import { useState } from 'react';
import { 
  Activity, AlertTriangle, ArrowRight, Check, CheckCircle, ChevronDown,
  Code, Cpu, DollarSign, FileText, GitBranch, HardDrive, Lock, PlusCircle,
  Search, Server, Shield, TrendingDown, TrendingUp, X, XCircle, Zap
} from 'lucide-react';
import { DEMO_SERVERS, handleKey } from '../shared';
import type { NavigationProps, DemoServer } from '../types';

// ========================================================================
// SOVEREIGNSCALE-SIDE
// Inkluderer både salgssiden (SovereignScalePage) og den interaktive Live Demo,
// siden de lenker tett til hverandre.
// ========================================================================

const SovereignScalePage = ({ setCurrentPage }: NavigationProps) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (id: number): void => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <div className="bg-[#0B0F19] text-gray-100 font-sans leading-relaxed min-h-screen">
      {/* Sub-nav */}
      <div className="bg-[#0B0F19]/80 backdrop-blur-md border-b border-gray-800 hidden md:block sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center space-x-3">
              <span className="text-xs bg-gray-800 text-gray-300 px-2.5 py-1 rounded-full font-semibold uppercase tracking-wider">SovereignScale™</span>
            </div>
            <div className="flex space-x-8 text-sm font-medium">
              <a href="#tjenester" className="text-gray-300 hover:text-white transition">Tjenester</a>
              <a href="#innsikt" className="text-gray-300 hover:text-white transition">Inkludert vs. Tillegg</a>
              <button onClick={() => setCurrentPage('demo')} className="text-red-400 font-bold hover:text-red-300 transition">Live Demo & ROI</button>
              <a href="#faq" className="text-gray-300 hover:text-white transition">Svar på innvendinger</a>
            </div>
            <div>
              <button onClick={() => setCurrentPage('demo')} className="bg-[#E41B13] hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition shadow-lg shadow-[#E41B13]/20">
                Beregn din besparelse
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <header className="relative overflow-hidden pt-20 pb-16 md:py-32 bg-[radial-gradient(circle_at_top_right,_rgba(228,27,19,0.15)_0%,_rgba(11,15,25,1)_70%)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 bg-[#E41B13]/10 border border-[#E41B13]/30 px-3 py-1.5 rounded-full text-xs text-[#E41B13] font-semibold tracking-wide uppercase">
                <GitBranch size={14} /> <span>100% Norskutviklet &amp; Open Source</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-none">
                Kutt skykostnader med <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-500">20-40%</span> – med full datasuverenitet.
              </h1>
              <p className="text-lg text-gray-300 max-w-2xl">
                Mange bedrifter betaler for overdimensjonert kapasitet de aldri bruker. Med <strong>SovereignScale</strong> tar vi kontrollen tilbake. Bygget utelukkende på åpen kildekode, plassert trygt i Norge, og fullstendig tilpasset dine unike behov.
              </p>
              <div className="bg-gray-800/50 border border-gray-700 p-4 rounded-xl max-w-2xl">
                <p className="text-sm text-gray-400">
                  <span className="text-[#10B981] font-bold inline-flex items-center gap-1"><CheckCircle size={14} /> Alltid inkludert:</span> Som kunde på <strong>Redpill Linpro Nordic Cloud</strong> får du dashbordet <strong>SovereignScale Insight</strong> ferdig installert ut-av-boksen!
                </p>
              </div>
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                <a href="#tjenester" className="bg-[#E41B13] hover:bg-red-700 text-white text-center px-6 py-3.5 rounded-lg font-semibold transition shadow-lg shadow-[#E41B13]/30">
                  Se våre tjenester
                </a>
                <button onClick={() => setCurrentPage('demo')} className="bg-gray-800 hover:bg-gray-700 border border-gray-700 text-center text-white px-6 py-3.5 rounded-lg font-semibold transition">
                  Prøv ROI-kalkulatoren
                </button>
              </div>
            </div>
            <div className="lg:col-span-5 relative">
              {/* Dashboard Mockup Widget */}
              <div className="bg-gray-800/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-2xl relative overflow-hidden" aria-hidden="true">
                <div className="flex items-center justify-between pb-4 border-b border-gray-800">
                  <div className="flex items-center space-x-2">
                    <span className="w-3 h-3 rounded-full bg-red-500"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                    <span className="w-3 h-3 rounded-full bg-green-500"></span>
                    <span className="text-xs text-gray-500 font-mono ml-2">sovereignscale-nordic-cloud.no</span>
                  </div>
                  <span className="text-xs text-[#10B981] bg-[#10B981]/10 px-2 py-0.5 rounded font-mono">LIVE TELEMETRI</span>
                </div>
                <div className="pt-6 space-y-4">
                  <div>
                    <div className="flex justify-between text-xs text-gray-400 mb-1">
                      <span>Gjennomsnittlig CPU-allokering</span>
                      <span className="text-red-400 font-bold">Kun 12.4% utnyttet</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2.5 overflow-hidden">
                      <div className="bg-red-500 h-2.5 rounded-full" style={{ width: '12.4%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs text-gray-400 mb-1">
                      <span>Gjennomsnittlig RAM-allokering</span>
                      <span className="text-yellow-400 font-bold">Kun 31.0% utnyttet</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2.5 overflow-hidden">
                      <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: '31%' }}></div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-800 mt-4">
                    <span className="text-xs text-gray-400 block mb-2 font-semibold">Estimert unødvendig månedlig sløsing:</span>
                    <div className="flex items-baseline space-x-2">
                      <span className="text-3xl font-extrabold text-white">kr 42 850,-</span>
                      <span className="text-xs text-red-500 inline-flex items-center gap-1"><TrendingUp size={12} /> 26% av total spend</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <span className="text-[10px] text-gray-500 inline-flex items-center gap-1"><Lock size={10} /> All data oppbevares trygt i Norge i henhold til NIS2/GDPR</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section id="innsikt" className="py-12 bg-gray-900 border-t border-b border-gray-800 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold">Hvordan er leveransen satt opp?</h2>
            <p className="text-gray-400">
              Vi skiller tydelig mellom <span className="text-white font-semibold">Innsikt</span> (hva som skjer) og <span className="text-white font-semibold">Tjenesteutførelse</span> (at vi faktisk fikser det og tar risikoen).
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            <div className="p-6 rounded-xl bg-gray-800/30 border border-gray-800 flex space-x-4">
              <div className="text-[#10B981]"><CheckCircle size={30} /></div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Inkludert ut-av-boksen (Insight)</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Alle våre driftskunder på Redpill Linpro Nordic Cloud får tilgang til vårt egenutviklede SovereignScale-dashboard. Her får du rådataene og visualiseringen av potensielle besparelser helt gratis. Ingen installasjon kreves.
                </p>
              </div>
            </div>
            <div className="p-6 rounded-xl bg-[#E41B13]/10 border border-[#E41B13]/20 flex space-x-4">
              <div className="text-[#E41B13]"><PlusCircle size={30} /></div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Tilleggstjenester (Autopilot &amp; Core)</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Å faktisk skru ned serverstørrelser, endre arkitektur, planlegge endringer utenfor arbeidstid, og ta det formelle ansvaret for at ingenting krasjer – det krever dedikert kompetanse og arbeidstimer. Dette leveres som skreddersydde, selvfinansierende tilleggstjenester.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="tjenester" className="py-20 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">SovereignScale™ Tjenestenivåer</h2>
            <p className="text-gray-400">Velg det niveauet av proaktivitet og involvering som passer din organisasjon best.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Tier 1 */}
            <div className="bg-gray-800/40 backdrop-blur-md rounded-2xl p-8 flex flex-col justify-between border border-gray-800 relative">
              <div>
                <span className="text-xs bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/30 px-3 py-1 rounded-full font-semibold uppercase tracking-wider inline-block mb-4">Inkludert i Nordic Cloud</span>
                <h3 className="text-2xl font-bold text-white mb-2">SovereignScale Insight</h3>
                <p className="text-gray-400 text-sm mb-6">Automatisert overvåking og synliggjøring av dine faktiske ressursbehov i sanntid.</p>
                
                <div className="text-3xl font-extrabold text-white mb-6">kr 0,- <span className="text-sm font-normal text-gray-400">/ mnd</span></div>
                
                <ul className="space-y-3 text-sm text-gray-300 border-t border-gray-800 pt-6 mb-8">
                  <li className="flex items-center"><Check size={16} className="text-[#10B981] mr-2 flex-shrink-0" /> Tilgang til SovereignScale Dashboard</li>
                  <li className="flex items-center"><Check size={16} className="text-[#10B981] mr-2 flex-shrink-0" /> Identifisering av &quot;Zombie&quot; VM-er</li>
                  <li className="flex items-center"><Check size={16} className="text-[#10B981] mr-2 flex-shrink-0" /> Rapportering på uutnyttet RAM/CPU</li>
                  <li className="flex items-center text-gray-500"><X size={16} className="mr-2 flex-shrink-0" /> Ingen aktive optimaliseringstiltak</li>
                  <li className="flex items-center text-gray-500"><X size={16} className="mr-2 flex-shrink-0" /> Ingen ytelsesgarantier</li>
                </ul>
              </div>
              <button disabled className="w-full bg-gray-800 text-gray-400 py-3 rounded-lg font-semibold text-sm cursor-not-allowed">Alltid aktiv i Nordic Cloud</button>
            </div>

            {/* Tier 2 */}
            <div className="bg-gray-800/40 backdrop-blur-md rounded-2xl p-8 flex flex-col justify-between border-2 border-[#E41B13] relative transform lg:-translate-y-4 shadow-xl shadow-[#E41B13]/10">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#E41B13] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                Mest populær
              </div>
              <div>
                <span className="text-xs bg-[#E41B13]/20 text-[#E41B13] border border-[#E41B13]/30 px-3 py-1 rounded-full font-semibold uppercase tracking-wider inline-block mb-4">Managed Service</span>
                <h3 className="text-2xl font-bold text-white mb-2">SovereignScale Autopilot</h3>
                <p className="text-gray-300 text-sm mb-6">Vi tar ansvaret for løpende optimalisering, nedskalering og fjerning av kostnadssløsing.</p>
                
                <div className="text-3xl font-extrabold text-white mb-6">Fra kr 3 500,- <span className="text-sm font-normal text-gray-400">/ mnd *</span></div>
                
                <ul className="space-y-3 text-sm text-gray-200 border-t border-gray-800 pt-6 mb-8">
                  <li className="flex items-center"><Check size={16} className="text-[#10B981] mr-2 flex-shrink-0" /> Alt i Insight</li>
                  <li className="flex items-center font-semibold text-white"><Check size={16} className="text-[#10B981] mr-2 flex-shrink-0" /> Løpende proaktiv rightsizing av eksperter</li>
                  <li className="flex items-center"><Check size={16} className="text-[#10B981] mr-2 flex-shrink-0" /> Planlegging og risikovurdering av endringer</li>
                  <li className="flex items-center"><Check size={16} className="text-[#10B981] mr-2 flex-shrink-0" /> Endringsgjennomføring utenom arbeidstid</li>
                  <li className="flex items-center"><Check size={16} className="text-[#10B981] mr-2 flex-shrink-0" /> Suksessgaranti (ROI &gt; Tjenestepris)</li>
                </ul>
              </div>
              <button onClick={() => setCurrentPage('demo')} className="block w-full bg-[#E41B13] hover:bg-red-700 text-white text-center py-3 rounded-lg font-semibold text-sm transition focus:outline-none focus:ring-4 focus:ring-red-500/50">Kom i gang</button>
            </div>

            {/* Tier 3 */}
            <div className="bg-gray-800/40 backdrop-blur-md rounded-2xl p-8 flex flex-col justify-between border border-gray-800 relative">
              <div>
                <span className="text-xs bg-amber-500/10 text-amber-500 border border-amber-500/30 px-3 py-1 rounded-full font-semibold uppercase tracking-wider inline-block mb-4">Strategisk Partnerskap</span>
                <h3 className="text-2xl font-bold text-white mb-2">SovereignScale Core</h3>
                <p className="text-gray-400 text-sm mb-6">Helhetlig arkitekturveiledning, hybridsky-strategi og etterlevelse av strenge regulatoriske krav.</p>
                
                <div className="text-3xl font-extrabold text-white mb-6">Tilbud <span className="text-sm font-normal text-gray-400">etter avtale</span></div>
                
                <ul className="space-y-3 text-sm text-gray-300 border-t border-gray-800 pt-6 mb-8">
                  <li className="flex items-center"><Check size={16} className="text-[#10B981] mr-2 flex-shrink-0" /> Alt i Autopilot</li>
                  <li className="flex items-center"><Check size={16} className="text-[#10B981] mr-2 flex-shrink-0" /> Kvartalsvise arkitekturrevisjoner</li>
                  <li className="flex items-center"><Check size={16} className="text-[#10B981] mr-2 flex-shrink-0" /> Strategi for hybridsky</li>
                  <li className="flex items-center font-semibold text-white"><Check size={16} className="text-[#10B981] mr-2 flex-shrink-0" /> NIS2 &amp; GDPR Compliance-rådgivning</li>
                  <li className="flex items-center"><Check size={16} className="text-[#10B981] mr-2 flex-shrink-0" /> Dedikert Senior Skyarkitekt</li>
                </ul>
              </div>
              <button className="w-full bg-gray-800 hover:bg-gray-700 text-white text-center py-3 rounded-lg font-semibold text-sm transition focus:outline-none focus:ring-4 focus:ring-gray-500/50">Kontakt oss for tilbud</button>
            </div>
          </div>
          <p className="text-center text-xs text-gray-500 mt-8">*Pris basert på infrastrukturstørrelse. Typisk pris ligger på 4% av månedlig skyforbruk.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Fokus på Open Source og 100% Dataeierskap</h2>
              <p className="text-gray-300">
                Hvorfor sende sensitive metadata om din kritiske infrastruktur ut av landet? De fleste rightsizing-verktøy eies av store multinasjonale selskaper som lagrer dine operasjonsdata i USA eller andre land utenfor EØS.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-[#E41B13]/10 text-[#E41B13] p-2 rounded-lg mt-1"><Shield size={20} /></div>
                  <div>
                    <h4 className="font-bold text-white">Ingen data forlater Norge</h4>
                    <p className="text-sm text-gray-400">Alt av overvåkingsdata, logger og beregninger forblir trygt plassert i våre egne datasentre i Norge. Dette sikrer full etterlevelse av NIS2 og GDPR.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-[#E41B13]/10 text-[#E41B13] p-2 rounded-lg mt-1"><Code size={20} /></div>
                  <div>
                    <h4 className="font-bold text-white">Ingen Vendor Lock-in</h4>
                    <p className="text-sm text-gray-400">Siden vår plattform bygger utelukkende på kjente Open Source-komponenter som Prometheus, Grafana og Kubernetes-integrasjoner, er du aldri låst til proprietære lisenser.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-900 p-8 rounded-3xl border border-gray-800 space-y-6">
              <h3 className="text-xl font-bold text-white mb-4">Slik skiller vi oss fra &quot;de store&quot;</h3>
              <div className="space-y-4 text-sm">
                <div className="grid grid-cols-3 pb-3 border-b border-gray-800 text-gray-400 font-semibold">
                  <span>Funksjon</span>
                  <span>SovereignScale</span>
                  <span>Typisk US-skyverktøy</span>
                </div>
                <div className="grid grid-cols-3 py-2 border-b border-gray-800/50">
                  <span className="text-white">Datalagring</span>
                  <span className="text-[#10B981]"><CheckCircle size={16} className="inline mr-1" /> Norge / Norden</span>
                  <span className="text-red-400"><XCircle size={16} className="inline mr-1" /> USA / Globalt</span>
                </div>
                <div className="grid grid-cols-3 py-2 border-b border-gray-800/50">
                  <span className="text-white">Teknologigrunnlag</span>
                  <span className="text-[#10B981]"><CheckCircle size={16} className="inline mr-1" /> Open Source</span>
                  <span className="text-red-400"><XCircle size={16} className="inline mr-1" /> Lukket / Proprietær</span>
                </div>
                <div className="grid grid-cols-3 py-2 border-b border-gray-800/50">
                  <span className="text-white">Integrert med drift</span>
                  <span className="text-[#10B981]"><CheckCircle size={16} className="inline mr-1" /> Ja, av dine vante teknikere</span>
                  <span className="text-red-400"><XCircle size={16} className="inline mr-1" /> Nei, kun rapportering</span>
                </div>
                <div className="grid grid-cols-3 py-2">
                  <span className="text-white">Ytelsessikkerhet</span>
                  <span className="text-[#10B981]"><CheckCircle size={16} className="inline mr-1" /> Manuelt verifisert av arkitekter</span>
                  <span className="text-red-400"><XCircle size={16} className="inline mr-1" /> Automatiserte gjetninger</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 bg-gray-900 border-t border-b border-gray-800 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <span className="text-xs text-[#E41B13] uppercase font-bold tracking-widest">Innvendings-knuseren</span>
            <h2 className="text-3xl font-extrabold text-white">&quot;Er ikke dette inkludert i vanlig drift?&quot;</h2>
            <p className="text-gray-400">Vi forstår at det er lett å tenke at kostnadsoptimalisering bør skje automatisk &quot;i driften&quot;. Det er i realiteten to helt forskjellige disipliner.</p>
          </div>

          <div className="space-y-4">
            <div className="bg-gray-800/40 border border-gray-800 rounded-xl overflow-hidden transition-all duration-300">
              <button 
                className="w-full text-left p-6 flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-red-500 rounded-xl" 
                onClick={() => toggleFaq(1)}
                aria-expanded={openFaq === 1}
              >
                <span className="font-bold text-white text-lg">Hva er forskjellen på en Driftsavtale og en Rightsizing-avtale?</span>
                <span className={`text-gray-400 transition-transform duration-200 ${openFaq === 1 ? 'rotate-180' : ''}`}>
                  <ChevronDown size={20} />
                </span>
              </button>
              <div className={`px-6 pb-6 text-sm text-gray-300 space-y-4 border-t border-gray-800/50 pt-4 ${openFaq === 1 ? 'block' : 'hidden'}`}>
                <p>
                  En standard <strong>driftsavtale</strong> handler om <strong>oppetid, stabilitet og sikkerhet</strong>. Vår oppgave der er å sikre at &quot;lysene er på&quot; og at dine servere alltid er tilgjengelige og patchet til en så lav kost som mulig. Da må vi ofte være konservative og beholde tildelte ressurser for å sikre at ingenting kneler.
                </p>
                <p>
                  En <strong>rightsizing-avtale (SovereignScale Autopilot)</strong> er en aktiv, finansiell rådgivningstjeneste. Her bruker vi spesialverktøy og dedikert tid til å analysere bruksmønstre over tid, utfordre systemeiere på ressursbruk, og aktivt nedskalere servere for å spare penger. Det krever proaktiv endringshåndtering og risikovurdering som ligger langt utenfor en vanlig driftsramme.
                </p>
              </div>
            </div>

            <div className="bg-gray-800/40 border border-gray-800 rounded-xl overflow-hidden transition-all duration-300">
              <button 
                className="w-full text-left p-6 flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-red-500 rounded-xl" 
                onClick={() => toggleFaq(2)}
                aria-expanded={openFaq === 2}
              >
                <span className="font-bold text-white text-lg">Analogi: Vaktmester vs. Energirådgiver</span>
                <span className={`text-gray-400 transition-transform duration-200 ${openFaq === 2 ? 'rotate-180' : ''}`}>
                  <ChevronDown size={20} />
                </span>
              </button>
              <div className={`px-6 pb-6 text-sm text-gray-300 space-y-4 border-t border-gray-800/50 pt-4 ${openFaq === 2 ? 'block' : 'hidden'}`}>
                <p>
                  Tenk på driftsleverandøren din som en <strong>vaktmester</strong> i et kontorbygg. Vaktmesteren passer på at dørene er låst, at heisen fungerer, og at det er varme i rørene. 
                </p>
                <p>
                  SovereignScale er som en <strong>energirådgiver</strong> som installerer smarte sensorer, analyserer når bygget er tomt, og foreslår å installere solceller eller varmepumper for å kutte strømregningen din med 30 %. Begge gjør en viktig jobb, men energirådgiveren betaler for seg selv gjennom de konkrete pengene han sparer deg for på strømregningen.
                </p>
              </div>
            </div>

            <div className="bg-gray-800/40 border border-gray-800 rounded-xl overflow-hidden transition-all duration-300">
              <button 
                className="w-full text-left p-6 flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-red-500 rounded-xl" 
                onClick={() => toggleFaq(3)}
                aria-expanded={openFaq === 3}
              >
                <span className="font-bold text-white text-lg">Hva skjer hvis en server krasjer etter nedskalering?</span>
                <span className={`text-gray-400 transition-transform duration-200 ${openFaq === 3 ? 'rotate-180' : ''}`}>
                  <ChevronDown size={20} />
                </span>
              </button>
              <div className={`px-6 pb-6 text-sm text-gray-300 space-y-4 border-t border-gray-800/50 pt-4 ${openFaq === 3 ? 'block' : 'hidden'}`}>
                <p>
                  Dette er akkurat grunnen til at rightsizing er en betalt tjeneste og ikke en automatisert prosess. I SovereignScale Autopilot gjør vi grundige analyser av 95. persentilen av ressursbruken over 30–90 dager før vi rører en eneste server.
                </p>
                <p>
                  Vi utfører kun endringer i samråd med systemeier og i avtalte vedlikeholdsvindu. Skulle det mot formodning oppstå ytelsesproblemer, har vi beredskap klar til å rulle tilbake endringene umiddelbart. Vi tar ansvaret for risikostyringen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// --- LIVE DEMO PAGE ---
const LiveDemoPage = ({ setCurrentPage }: NavigationProps) => {
  const [spend, setSpend] = useState(125000);
  const [selectedServer, setSelectedServer] = useState<DemoServer | null>(null);

  const savings = Math.round(spend * 0.25);
  let fee = Math.round(spend * 0.04);
  if (fee < 3500) fee = 3500;
  const netProfit = savings - fee;
  const actualPct = ((fee / spend) * 100).toFixed(1);

  const formatCurrency = (amount: number): string => 'kr ' + amount.toLocaleString('no-NO') + ',-';

  return (
    <div className="bg-[#0B0F19] text-gray-100 font-sans leading-relaxed min-h-screen pt-12 pb-24">
      <section id="livedemo" className="py-12 bg-[#0B0F19]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white">Live Demo</h1>
            <p className="text-gray-400 text-lg">Slik ser dashbordet ut for våre kunder. Klikk på en server i listen for å se den detaljerte metrikk-analysen og risikovurderingen, og se estimert ROI i kalkulatoren nederst.</p>
          </div>

          {/* App Window Wrapper */}
          <div className="bg-slate-50 rounded-xl overflow-hidden shadow-2xl border border-gray-700 font-sans text-slate-800 relative z-10 mb-20">
            {/* Window Header */}
            <div className="bg-slate-200 border-b border-slate-300 px-4 py-3 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
              <div className="mx-auto bg-white px-4 py-1 rounded-md text-xs text-slate-500 font-mono shadow-sm flex items-center gap-2">
                <Lock size={12} className="text-green-600"/> sovereignscale.linpro.cloud
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="p-6 md:p-10 bg-slate-50 min-h-[600px]">
              
              {/* Header */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 flex items-center gap-2">
                    <Activity className="text-indigo-600" size={32} /> SovereignScale Insight
                  </h2>
                  <p className="text-slate-500 text-sm mt-1">Avansert analyse basert på CPU peak, minne p95 og cache-risiko.</p>
                </div>
                <div className="flex gap-3">
                  <button 
                    onClick={() => setCurrentPage('sovereign')}
                    className="px-4 py-2 bg-white border border-slate-200 rounded-md text-slate-700 font-medium text-sm hover:bg-slate-50 shadow-sm"
                  >
                    Tilbake
                  </button>
                  <button className="px-4 py-2 bg-[#d14334] text-white rounded-md font-medium text-sm flex items-center gap-2 hover:bg-red-700 shadow-sm transition-colors">
                    <FileText size={16} /> Generer PDF Rapport
                  </button>
                </div>
              </div>

              {/* KPI Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm relative overflow-hidden">
                  <DollarSign size={120} className="absolute -right-6 -bottom-6 text-emerald-50 opacity-50 pointer-events-none" />
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">Månedlig besparelse</span>
                  <div className="text-4xl font-extrabold text-[#3a9667] mb-3">$1070</div>
                  <div className="inline-flex items-center gap-1 px-2 py-1 bg-emerald-50 text-[#3a9667] text-xs font-bold rounded">
                    <TrendingDown size={14} /> 81.1% Reduksjon
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">Aktive Servergrupper</span>
                  <div className="text-4xl font-extrabold text-slate-800 mb-3">3</div>
                  <div className="text-slate-500 text-xs italic">Alle lokasjoner: fdc.c</div>
                </div>
                <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm border-l-4 border-l-amber-500">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">Optimaliseringsgrad</span>
                  <div className="text-4xl font-extrabold text-amber-500 mb-3">Lav</div>
                  <div className="text-slate-500 text-xs">Over-provisjonering funnet i alle rader</div>
                </div>
              </div>

              {/* Table Section */}
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="p-5 border-b border-slate-100 flex justify-between items-center bg-white">
                  <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                    <Server size={20} className="text-slate-500" /> Optimisation Opportunities
                  </h3>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={16} />
                    <input 
                      type="text" 
                      placeholder="Søk i instanser..." 
                      className="pl-9 pr-4 py-2 border border-slate-200 rounded-lg text-sm w-64 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                    />
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left min-w-[800px]">
                    <thead className="bg-slate-50 text-slate-500 text-xs font-bold uppercase tracking-wider">
                      <tr>
                        <th className="px-6 py-4 border-b border-slate-200">Server &amp; Prosjekt</th>
                        <th className="px-6 py-4 border-b border-slate-200">Nåværende (CUR)</th>
                        <th className="px-6 py-4 border-b border-slate-200">Anbefalt (BEST)</th>
                        <th className="px-6 py-4 border-b border-slate-200">Sentrale Metrikker</th>
                        <th className="px-6 py-4 border-b border-slate-200 text-right">Besparelse</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-sm">
                      {DEMO_SERVERS.map((server) => (
                        <tr 
                          key={server.id} 
                          onClick={() => setSelectedServer(server)}
                          role="button"
                          tabIndex={0}
                          onKeyDown={(e) => handleKey(e, () => setSelectedServer(server))}
                          className="hover:bg-slate-50 cursor-pointer transition-colors group focus:outline-none focus:bg-slate-100"
                        >
                          <td className="px-6 py-5">
                            <div className="font-bold text-slate-900 flex items-center gap-2">
                              {server.name}
                              {server.warning && <AlertTriangle size={14} className="text-amber-500" />}
                            </div>
                            <div className="text-xs text-slate-400 mt-1">{server.id} • {server.project}</div>
                          </td>
                          <td className="px-6 py-5">
                            <div className="font-bold text-slate-800">{server.current.flavor}</div>
                            <div className="text-xs text-slate-500">{server.current.vcpu} vCPU / {server.current.ram}</div>
                          </td>
                          <td className="px-6 py-5">
                            <div className="flex items-center gap-3">
                              <ArrowRight className="text-slate-300" size={16} />
                              <div>
                                <div className="font-bold text-[#3a9667]">{server.recommended.flavor}</div>
                                <div className="text-xs text-slate-500">{server.recommended.vcpu} vCPU / {server.recommended.ram}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-5">
                            <div className="flex flex-wrap gap-2">
                              <span className="inline-flex items-center gap-1 px-2 py-1 bg-slate-100 text-slate-500 text-[10px] font-bold rounded border border-slate-200">
                                <Cpu size={10} /> PEAK: {server.metrics.peakCpu}
                              </span>
                              <span className="inline-flex items-center gap-1 px-2 py-1 bg-slate-100 text-slate-500 text-[10px] font-bold rounded border border-slate-200">
                                <Activity size={10} /> RAM: {server.metrics.ramUsed}
                              </span>
                              <span className="inline-flex items-center gap-1 px-2 py-1 bg-slate-100 text-slate-500 text-[10px] font-bold rounded border border-slate-200">
                                <HardDrive size={10} /> CACHE: {server.metrics.cache}
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-5 text-right">
                            <div className="font-extrabold text-[#3a9667] text-base">-${server.savings}</div>
                            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Per Måned</div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* MODAL OVERLAY */}
            {selectedServer && (
              <div className="absolute inset-0 z-50 flex items-center justify-center p-4 md:p-10 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
                <div className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
                  
                  {/* Modal Header */}
                  <div className="px-4 md:px-8 py-4 md:py-6 flex justify-between items-start">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-slate-900">{selectedServer.name}</h3>
                      <p className="text-slate-500 text-xs md:text-sm mt-1">Detaljert Rightsizing Rapport • ID: {selectedServer.id}</p>
                    </div>
                    <button 
                      onClick={() => setSelectedServer(null)}
                      className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors focus:outline-none"
                    >
                      <X size={24} />
                    </button>
                  </div>

                  <div className="overflow-y-auto px-4 md:px-8 pb-4 md:pb-8 space-y-8">
                    
                    {/* Metrikk Analyse */}
                    <div>
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Metrikkanalyse</h4>
                      <div className="border border-slate-100 rounded-xl p-4 md:p-6 shadow-sm">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                          <div className="flex justify-between items-end border-b border-slate-100 pb-2">
                            <span className="text-slate-600 text-xs md:text-sm">CPU peak</span>
                            <span className="font-mono text-xs md:text-sm font-semibold">{selectedServer.metrics.peakCpu.replace('c', ' cores')}</span>
                          </div>
                          <div className="flex justify-between items-end border-b border-slate-100 pb-2">
                            <span className="text-slate-600 text-xs md:text-sm">Memory peak used</span>
                            <span className="font-mono text-xs md:text-sm font-semibold">{selectedServer.metrics.ramUsed.replace('G', ' GB')}</span>
                          </div>
                          <div className="flex justify-between items-end border-b border-slate-100 pb-2">
                            <span className="text-slate-600 text-xs md:text-sm">Memory p95 usable</span>
                            <span className="font-mono text-xs md:text-sm font-semibold">{selectedServer.metrics.p95Ram}</span>
                          </div>
                          <div className="flex justify-between items-end border-b border-slate-100 pb-2">
                            <span className="text-slate-600 text-xs md:text-sm">FS cache (median)</span>
                            <span className="font-mono text-xs md:text-sm font-semibold">{selectedServer.metrics.cache.replace('G', ' GB')}</span>
                          </div>
                          <div className="flex justify-between items-end border-b border-slate-100 pb-2 md:border-none md:pb-0">
                            <span className="text-slate-600 text-xs md:text-sm">Disk p99 write IOPS</span>
                            <span className="font-mono text-xs md:text-sm font-semibold">{selectedServer.metrics.iops}</span>
                          </div>
                          <div className="flex justify-between items-center pt-2 md:pt-0">
                            <div>
                              <span className="text-slate-900 font-bold block text-sm">Min RAM needed</span>
                              <span className="text-[10px] text-slate-400">(peak / 80% headroom)</span>
                            </div>
                            <span className="font-mono text-xs md:text-sm font-bold text-indigo-600">{selectedServer.metrics.minRam}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Flavor Sammenligning */}
                    <div>
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Flavor Sammenligning</h4>
                      <div className="border border-slate-200 rounded-xl overflow-x-auto shadow-sm">
                        <table className="w-full text-left min-w-[600px]">
                          <thead className="bg-[#363062] text-white text-sm font-semibold">
                            <tr>
                              <th className="px-6 py-4">Flavor</th>
                              <th className="px-6 py-4">vCPU</th>
                              <th className="px-6 py-4">RAM</th>
                              <th className="px-6 py-4">Status</th>
                              <th className="px-6 py-4">Analyse / Risiko</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100 text-sm">
                            {selectedServer.flavors.map((flavor, idx) => (
                              <tr key={idx} className={flavor.status === 'BEST' ? 'bg-emerald-50/50' : flavor.status === 'CUR' ? 'bg-amber-50/30' : 'bg-white'}>
                                <td className="px-6 py-4 font-bold text-slate-800">{flavor.name}</td>
                                <td className="px-6 py-4 text-slate-600">{flavor.vcpu}</td>
                                <td className="px-6 py-4 text-slate-600">{flavor.ram}</td>
                                <td className="px-6 py-4">
                                  {flavor.status === 'NO' && <span className="inline-block px-2 py-1 bg-red-100 text-red-600 text-[10px] font-bold rounded-full">NO</span>}
                                  {flavor.status === 'BEST' && <span className="inline-block px-2 py-1 bg-emerald-500 text-white text-[10px] font-bold rounded-full">BEST</span>}
                                  {flavor.status === 'OK' && <span className="inline-block px-2 py-1 bg-emerald-100 text-emerald-600 text-[10px] font-bold rounded-full">OK</span>}
                                  {flavor.status === 'CUR' && <span className="inline-block px-2 py-1 bg-amber-400 text-slate-900 text-[10px] font-bold rounded-full">CUR</span>}
                                </td>
                                <td className={`px-6 py-4 italic text-xs ${flavor.status === 'BEST' ? 'text-slate-600 font-medium' : 'text-slate-500'}`}>
                                  {flavor.reason}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>

                  {/* Modal Footer */}
                  <div className="bg-slate-50 border-t border-slate-200 px-4 md:px-8 py-4 md:py-5 flex flex-col md:flex-row justify-between items-center gap-4 rounded-b-2xl">
                    <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
                      <div className="w-12 h-12 bg-white rounded-xl border border-slate-200 flex items-center justify-center text-indigo-600 shadow-sm flex-shrink-0">
                        <Zap size={24} />
                      </div>
                      <div>
                        <div className="font-bold text-slate-800 text-base md:text-lg">Anbefalt handling: {selectedServer.recommended.flavor}</div>
                        <div className="text-indigo-600 text-sm">Estimert månedlig besparing: ${selectedServer.savings}</div>
                      </div>
                    </div>
                    <button 
                      onClick={() => setSelectedServer(null)}
                      className="w-full md:w-auto px-6 py-3 bg-[#d14334] text-white font-bold rounded-lg hover:bg-red-700 transition shadow-lg shadow-red-500/30"
                    >
                      Utfør Nedskalering
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section id="kalkulator" className="py-12 bg-gray-900 border-t border-b border-gray-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-extrabold text-white">Prøv vår interaktive ROI-Kalkulator</h2>
            <p className="text-gray-400">Dra i slideren for å se hvor mye du kan spare, og hva din reelle gevinst blir etter at SovereignScale Autopilot er betalt.</p>
          </div>

          <div className="bg-gray-800/40 backdrop-blur-md rounded-3xl p-6 sm:p-10 border border-gray-800 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 space-y-8">
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Dagens månedlige infrastrukturkostnad (NOK):</label>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs text-gray-500">50 000 kr</span>
                  <span className="text-2xl font-extrabold text-[#E41B13]">{spend.toLocaleString('no-NO')} kr</span>
                  <span className="text-xs text-gray-500">300 000 kr</span>
                </div>
                <input 
                  type="range" 
                  min="50000" 
                  max="300000" 
                  step="10000" 
                  value={spend}
                  onChange={(e) => setSpend(Number(e.target.value))}
                  className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-[#E41B13] focus:outline-none focus:ring-2 focus:ring-red-500"
                  aria-label="Juster månedlig infrastrukturkostnad"
                />
              </div>

              <div className="bg-gray-950/40 p-4 rounded-xl border border-gray-800 space-y-3">
                <span className="text-xs text-gray-400 font-bold block uppercase">Estimerte besparelsesparametere</span>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Gjennomsnittlig reduksjon i sløsing:</span>
                  <span className="text-white font-semibold">25%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">SovereignScale Autopilot månedshonorar:</span>
                  <span className="text-white font-semibold">{actualPct}% av spend (Min. 3500 kr)</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-5 bg-gradient-to-br from-gray-900 to-gray-950 p-6 rounded-2xl border border-gray-800 text-center space-y-6">
              <div>
                <span className="text-xs text-gray-400 uppercase tracking-widest font-semibold block mb-1">Beregnet månedlig kutt</span>
                <div className="text-4xl font-black text-[#10B981]">{formatCurrency(savings)}</div>
                <span className="text-[10px] text-gray-500">Reduksjon av unødvendige ressurser</span>
              </div>

              <div className="border-t border-b border-gray-800 py-4 space-y-2 text-sm text-left">
                <div className="flex justify-between">
                  <span className="text-gray-400">Investeringskostnad (Tjeneste):</span>
                  <span className="text-white font-semibold">{formatCurrency(fee)}</span>
                </div>
                <div className="flex justify-between text-xs text-[#10B981] bg-[#10B981]/10 p-2 rounded">
                  <span>SovereignScale Insight (Dashboard):</span>
                  <span className="font-bold">KR 0,- (INKLUDERT)</span>
                </div>
              </div>

              <div>
                <span className="text-xs text-gray-400 uppercase tracking-widest font-semibold block mb-1">Din netto besparelse (Profit)</span>
                <div className="text-3xl font-black text-white">{formatCurrency(netProfit)}</div>
                <span className="text-[10px] text-gray-400 block mt-1">Penger rett på bunnlinjen hver eneste måned!</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Eksporter både hovedside og demo-side så App.jsx kan velge mellom dem
export { LiveDemoPage };
export default SovereignScalePage;
