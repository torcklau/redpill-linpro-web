import { useState } from 'react';
import {
  Server, Database, HardDrive, Network, Cpu,
  CheckCircle, ChevronRight,
} from 'lucide-react';
import { IAAS_PLANS, NETWORK_PRICES, MANAGED_SERVICES } from '../shared';
import type { NavigationProps } from '../types';

// ========================================================================
// TJENESTER-SIDE: Gjennomsiktig IaaS-prising + Managed Services
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

// --- EKSPORTERT TJENESTESIDE ---
const TjenesterPage = ({ setCurrentPage }: NavigationProps) => (
  <>
    <ManagedServicesSection setCurrentPage={setCurrentPage} />
    <IaaSPrisingSection />
  </>
);

export default TjenesterPage;