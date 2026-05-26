import { Shield, Cloud, Database, Lock, CheckCircle, Check } from 'lucide-react';

// ========================================================================
// BEREDSKAPSPAKKER-SIDE
// ========================================================================

const BeredskapPage = () => {
  return (
    <div className="bg-[#0B0F19] text-gray-100 font-sans leading-relaxed min-h-screen">
      {/* Hero Section */}
      <header className="relative overflow-hidden pt-20 pb-16 md:py-32 bg-[radial-gradient(circle_at_top_right,_rgba(228,27,19,0.15)_0%,_rgba(11,15,25,1)_70%)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 bg-[#E41B13]/10 border border-[#E41B13]/30 px-3 py-1.5 rounded-full text-xs text-[#E41B13] font-semibold tracking-wide uppercase">
                <Shield size={14} /> <span>100% Norsk Suverenitet</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-none">
                Digitale <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-500">Beredskapspakker.</span>
              </h1>
              <p className="text-lg text-gray-300 max-w-2xl">
                Velg løsningen som passer ditt behov. Våre ferdige pakker gir deg rask tilgang til sikker norsk skyinfrastruktur med de essensielle verktøyene organisasjonen din trenger i krisetider eller for økt uavhengighet.
              </p>
              <div className="bg-gray-800/50 border border-gray-700 p-4 rounded-xl max-w-2xl">
                <p className="text-sm text-gray-400">
                  <span className="text-[#10B981] font-bold inline-flex items-center gap-1"><Lock size={14} /> Fysisk sikret:</span> Datasentrene er lokalisert på norsk jord, underlagt utelukkende norsk jurisdiksjon (utenfor Cloud Act).
                </p>
              </div>
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                <a href="#pakker" className="bg-[#E41B13] hover:bg-red-700 text-white text-center px-6 py-3.5 rounded-lg font-semibold transition shadow-lg shadow-[#E41B13]/30">
                  Se våre pakker
                </a>
                <a href="#kontakt" className="bg-gray-800 hover:bg-gray-700 border border-gray-700 text-center text-white px-6 py-3.5 rounded-lg font-semibold transition">
                  Snakk med en arkitekt
                </a>
              </div>
            </div>
            <div className="lg:col-span-5 relative">
              {/* Dashboard/Security Mockup Widget */}
              <div className="bg-gray-800/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-2xl relative overflow-hidden" aria-hidden="true">
                <div className="flex items-center justify-between pb-4 border-b border-gray-800">
                  <div className="flex items-center space-x-2">
                    <span className="w-3 h-3 rounded-full bg-red-500"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                    <span className="w-3 h-3 rounded-full bg-green-500"></span>
                    <span className="text-xs text-gray-500 font-mono ml-2">secure-vault.linpro.no</span>
                  </div>
                  <span className="text-xs text-[#10B981] bg-[#10B981]/10 px-2 py-0.5 rounded font-mono">AIRGAPPED STATUS</span>
                </div>
                <div className="pt-6 space-y-4">
                  <div>
                    <div className="flex justify-between text-xs text-gray-400 mb-1">
                      <span>Datalokalitet (Norge)</span>
                      <span className="text-[#10B981] font-bold">100% Verifisert</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2.5 overflow-hidden">
                      <div className="bg-[#10B981] h-2.5 rounded-full" style={{ width: '100%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs text-gray-400 mb-1">
                      <span>Trafikk-kryptering (E2E)</span>
                      <span className="text-[#10B981] font-bold">Aktiv</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2.5 overflow-hidden">
                      <div className="bg-emerald-400 h-2.5 rounded-full" style={{ width: '100%' }}></div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-800 mt-4">
                    <span className="text-xs text-gray-400 block mb-2 font-semibold">Gjenopprettingstid (RTO):</span>
                    <div className="flex items-baseline space-x-2">
                      <span className="text-3xl font-extrabold text-white">&lt; 1 time</span>
                      <span className="text-xs text-[#10B981] inline-flex items-center gap-1"><CheckCircle size={12} /> Høy beredskap</span>
                    </div>
                  </div>
                  <div className="text-center mt-2 flex justify-around">
                    <span className="text-[10px] text-gray-500 inline-flex items-center gap-1"><Cloud size={10} /> Nextcloud</span>
                    <span className="text-[10px] text-gray-500 inline-flex items-center gap-1"><Database size={10} /> PostgreSQL</span>
                    <span className="text-[10px] text-gray-500 inline-flex items-center gap-1"><Lock size={10} /> Keycloak</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section id="pakker" className="py-20 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Velg beredskapsnivå</h2>
            <p className="text-gray-400">Pakkene kan kjøres som en isolert øy, eller integreres mot deres eksisterende identitetsløsninger.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Tier 1 */}
            <div className="bg-gray-800/40 backdrop-blur-md rounded-2xl p-8 flex flex-col justify-between border border-gray-800 relative hover:border-gray-600 transition-all">
              <div>
                <span className="text-xs bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/30 px-3 py-1 rounded-full font-semibold uppercase tracking-wider inline-block mb-4">Samhandling &amp; Kontor</span>
                <h3 className="text-2xl font-bold text-white mb-2">Sovereign Start</h3>
                <p className="text-gray-400 text-sm mb-6">Målgruppe: Organisasjoner eller prosjekter som krever alternativer til utenlandske kontorpakker.</p>
                
                <div className="text-3xl font-extrabold text-white mb-6">Fra 8.000,- <span className="text-sm font-normal text-gray-400">NOK/mnd</span></div>
                
                <span className="block text-xs font-bold text-gray-500 uppercase mb-3">Inkluderte verktøy</span>
                <ul className="space-y-3 text-sm text-gray-300 border-t border-gray-800 pt-4 mb-8">
                  <li className="flex items-center"><Check size={16} className="text-[#E41B13] mr-2 flex-shrink-0" /> Dokumenter (Nextcloud)</li>
                  <li className="flex items-center"><Check size={16} className="text-[#E41B13] mr-2 flex-shrink-0" /> Kommunikasjon (Mattermost/Jitsi)</li>
                  <li className="flex items-center"><Check size={16} className="text-[#E41B13] mr-2 flex-shrink-0" /> Identitet (Keycloak)</li>
                </ul>
              </div>
              <button className="w-full border-2 border-gray-700 hover:border-gray-500 text-white py-3 rounded-lg font-semibold text-sm transition focus:outline-none focus:ring-4 focus:ring-gray-600/50">Velg Start</button>
            </div>

            {/* Tier 2 */}
            <div className="bg-gray-800/40 backdrop-blur-md rounded-2xl p-8 flex flex-col justify-between border-2 border-[#E41B13] relative transform lg:-translate-y-4 shadow-xl shadow-[#E41B13]/10">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#E41B13] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide whitespace-nowrap">
                Populær for utviklere
              </div>
              <div>
                <span className="text-xs bg-[#E41B13]/20 text-[#E41B13] border border-[#E41B13]/30 px-3 py-1 rounded-full font-semibold uppercase tracking-wider inline-block mb-4">Utvikling &amp; DevOps</span>
                <h3 className="text-2xl font-bold text-white mb-2">Sovereign Dev</h3>
                <p className="text-gray-300 text-sm mb-6">Målgruppe: Utviklingsavdelinger som krever full kontroll og forutsigbarhet over egen pipeline.</p>
                
                <div className="text-3xl font-extrabold text-white mb-6">Tilpasset <span className="text-sm font-normal text-gray-400">etter bruk</span></div>
                
                <span className="block text-xs font-bold text-gray-500 uppercase mb-3">Inkluderte verktøy</span>
                <ul className="space-y-3 text-sm text-gray-200 border-t border-gray-800 pt-4 mb-8">
                  <li className="flex items-center"><Check size={16} className="text-[#E41B13] mr-2 flex-shrink-0" /> Managed Kubernetes (K8s)</li>
                  <li className="flex items-center"><Check size={16} className="text-[#E41B13] mr-2 flex-shrink-0" /> Versjonskontroll (GitLab)</li>
                  <li className="flex items-center"><Check size={16} className="text-[#E41B13] mr-2 flex-shrink-0" /> Passordhåndtering (Vaultwarden)</li>
                  <li className="flex items-center"><Check size={16} className="text-[#E41B13] mr-2 flex-shrink-0" /> CI/CD pipelines på Norsk jord</li>
                </ul>
              </div>
              <div className="flex flex-col gap-3">
                <button className="w-full bg-[#E41B13] hover:bg-red-700 text-white text-center py-3 rounded-lg font-semibold text-sm transition focus:outline-none focus:ring-4 focus:ring-red-500/50">Velg Dev</button>
                <button className="w-full bg-gray-800 hover:bg-gray-700 text-white text-center py-3 rounded-lg font-semibold text-sm transition focus:outline-none focus:ring-4 focus:ring-gray-600/50">Snakk med arkitekt</button>
              </div>
            </div>

            {/* Tier 3 */}
            <div className="bg-gray-800/40 backdrop-blur-md rounded-2xl p-8 flex flex-col justify-between border border-gray-800 relative hover:border-gray-600 transition-all">
              <div>
                <span className="text-xs bg-amber-500/10 text-amber-500 border border-amber-500/30 px-3 py-1 rounded-full font-semibold uppercase tracking-wider inline-block mb-4">Full Infrastruktur</span>
                <h3 className="text-2xl font-bold text-white mb-2">Sovereign Enterprise</h3>
                <p className="text-gray-400 text-sm mb-6">Målgruppe: Organisasjoner med strenge krav til compliance, skreddersøm og total maskinvareisolasjon.</p>
                
                <div className="text-3xl font-extrabold text-white mb-6">På forespørsel</div>
                
                <span className="block text-xs font-bold text-gray-500 uppercase mb-3">Inkluderte verktøy</span>
                <ul className="space-y-3 text-sm text-gray-300 border-t border-gray-800 pt-4 mb-8">
                  <li className="flex items-center text-white font-semibold"><Check size={16} className="text-[#10B981] mr-2 flex-shrink-0" /> Alt fra Sovereign Start</li>
                  <li className="flex items-center"><Check size={16} className="text-gray-400 mr-2 flex-shrink-0" /> Dedikert Proxmox-cluster (IaaS)</li>
                  <li className="flex items-center"><Check size={16} className="text-gray-400 mr-2 flex-shrink-0" /> Egen Ceph-lagringsklynge</li>
                  <li className="flex items-center"><Check size={16} className="text-gray-400 mr-2 flex-shrink-0" /> 24/7 Beredskap og overvåking</li>
                </ul>
              </div>
              <button className="w-full bg-gray-800 hover:bg-gray-700 text-white text-center py-3 rounded-lg font-semibold text-sm transition focus:outline-none focus:ring-4 focus:ring-gray-500/50">Be om tilbud</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BeredskapPage;
