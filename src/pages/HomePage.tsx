import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { handleKey } from '../shared';
import type { NavigationProps } from '../types';

// ========================================================================
// HOVEDSIDE: Hero + Norsk Suveren Sky + Digital Suverenitet
// ========================================================================

const Hero = ({ setCurrentPage }: NavigationProps) => (
  <div className="relative overflow-hidden bg-slate-950 pt-16 pb-20 md:pt-24 md:pb-28">
    {/* Bakgrunns-gradient (subtil) */}
    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-950"></div>
    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-red-900/10 to-transparent blur-3xl pointer-events-none"></div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* VENSTRE: Overskrift, tekst og knapper */}
        <div className="space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
            <span className="block text-white">Cloud Operations &</span>
            <span className="block text-[#e30613]">Norsk Suveren Sky</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-xl">
            Hvor raskt kan du bygge om du slipper å bekymre deg for compliance?
            Vi tar oss av infrastrukturen, slik at du kan fokusere 100% på koden.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <button
              onClick={() => setCurrentPage('beredskap')}
              className="bg-[#e30613] text-white px-8 py-3.5 rounded font-bold transition-colors hover:bg-red-700 shadow-lg shadow-red-900/50 cursor-pointer"
            >
              Se beredskapspakker
            </button>
            <button
              onClick={() => setCurrentPage('tjenester')}
              className="border-2 border-slate-700 bg-transparent hover:bg-slate-800 text-white px-8 py-3.5 rounded font-bold transition-colors cursor-pointer"
            >
              Utforsk våre tjenester
            </button>
          </div>
        </div>

        {/* HØYRE: Rød "Din digitale beredskapspakke"-panel */}
        <button
          onClick={() => setCurrentPage('beredskap')}
          className="group relative bg-[#e30613] hover:bg-red-700 rounded-2xl p-10 md:p-12 text-left transition-all shadow-2xl shadow-red-900/40 hover:shadow-red-900/60 cursor-pointer min-h-[320px] flex flex-col justify-center overflow-hidden"
          aria-label="Se digitale beredskapspakker"
        >
          {/* Subtil glød/glans-effekt */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>

          <span className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-white/80 mb-4 relative z-10">
            Dette spør alle om
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] relative z-10">
            Din digitale<br />beredskapspakke
          </h2>
        </button>

      </div>
    </div>
  </div>
);

// --- SUVERENITETS-SEKSJON ---
// Inneholder NORSK SUVEREN SKY (med AZ-diagram) og DIGITAL SUVERENITET (sammenligningstabell)
const SuverenitetSection = () => {
  const [activeAZ, setActiveAZ] = useState<string | null>(null);

  const handleAZClick = (az: string): void => {
    setActiveAZ(activeAZ === az ? null : az);
  };

  return (
    <div id="suverenitet" className="py-24 bg-slate-900 border-t border-slate-800 scroll-mt-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* NORSK SUVEREN SKY */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-[#e30613] font-bold tracking-wide uppercase text-sm mb-2">Norsk Suveren Sky i Norge</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Geografisk distribuert, redundant og sikker i Norge</h3>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Infrastruktur designet for maksimal tilgjengelighet og operativ kontroll i Norge. Klikk på en sone for status.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="bg-slate-800/80 p-6 rounded-xl border border-slate-700 shadow-xl">
                <h4 className="text-[#e30613] font-bold uppercase text-xs tracking-widest mb-4">Infrastruktur</h4>
                <ul className="space-y-5 text-sm">
                  <li>
                    <span className="block font-bold uppercase text-white mb-1">Tier 3 Datasenter</span>
                    <span className="text-slate-400 leading-relaxed">Designet for 99.982 % tilgjengelighet og robust drift.</span>
                  </li>
                  <li>
                    <span className="block font-bold uppercase text-white mb-1">Geografisk separasjon</span>
                    <span className="text-slate-400 leading-relaxed">Godkjent katastrofeavstand mellom lokasjoner i Norge.</span>
                  </li>
                  <li>
                    <span className="block font-bold uppercase text-white mb-1">Fiber-redundans</span>
                    <span className="text-slate-400 leading-relaxed">Full-mesh mørk fiber-topologi for uavbrutt kontakt.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* AZ Diagram */}
            <div className="relative flex flex-col items-center justify-center py-10 h-[450px]">
              <div className="z-20 w-36 h-36 bg-[#e30613] rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(227,6,19,0.4)] text-center p-4 border-4 border-red-900 relative">
                <span className="block font-bold text-lg leading-tight text-white">Norsk Suveren Sky i Norge</span>
              </div>

              {/* Dekorative sirkler */}
              <div className="absolute w-80 h-80 border border-[#e30613] rounded-full opacity-20 pointer-events-none"></div>
              <div className="absolute w-[450px] h-[450px] border border-slate-700 rounded-full opacity-10 pointer-events-none"></div>

              {/* AZ 1 */}
              <div className="absolute top-16 w-1 h-10 bg-[#e30613] opacity-80 z-10 shadow-[0_0_10px_rgba(227,6,19,0.5)]"></div>
              <div 
                onClick={() => handleAZClick('az1')}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => handleKey(e, () => handleAZClick('az1'))}
                className={`absolute top-0 px-6 py-3 rounded-xl text-center shadow-lg border-2 cursor-pointer transition-all z-30 focus:outline-none focus:ring-2 focus:ring-red-500 ${activeAZ === 'az1' ? 'border-[#e30613] bg-slate-800 scale-105' : 'border-slate-700 bg-slate-800/80 hover:border-[#e30613]'}`}
              >
                <div className="flex items-center justify-center gap-2 mb-1">
                  <div className={`w-2 h-2 rounded-full ${activeAZ === 'az1' ? 'bg-green-500 animate-pulse' : 'bg-green-500'}`}></div>
                  <span className="text-[#e30613] font-bold text-sm">AZ 1</span>
                </div>
                <p className="text-[10px] text-slate-300 uppercase tracking-tighter">Region Sør (OSL)</p>
                {activeAZ === 'az1' && <div className="text-[10px] text-green-400 font-bold mt-2 bg-slate-900 py-1 rounded">LIVE: 99.998% UP</div>}
              </div>

              {/* AZ 2 */}
              <div className="absolute left-12 w-20 h-1 bg-[#e30613] opacity-80 z-10 shadow-[0_0_10px_rgba(227,6,19,0.5)]"></div>
              <div 
                onClick={() => handleAZClick('az2')}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => handleKey(e, () => handleAZClick('az2'))}
                className={`absolute -left-16 px-6 py-3 rounded-xl text-center shadow-lg border-2 cursor-pointer transition-all z-30 focus:outline-none focus:ring-2 focus:ring-red-500 ${activeAZ === 'az2' ? 'border-[#e30613] bg-slate-800 scale-105' : 'border-slate-700 bg-slate-800/80 hover:border-[#e30613]'}`}
              >
                <div className="flex items-center justify-center gap-2 mb-1">
                  <div className={`w-2 h-2 rounded-full ${activeAZ === 'az2' ? 'bg-green-500 animate-pulse' : 'bg-green-500'}`}></div>
                  <span className="text-[#e30613] font-bold text-sm">AZ 2</span>
                </div>
                <p className="text-[10px] text-slate-300 uppercase tracking-tighter">Region Sør (OSL)</p>
                {activeAZ === 'az2' && <div className="text-[10px] text-green-400 font-bold mt-2 bg-slate-900 py-1 rounded">LIVE: 99.994% UP</div>}
              </div>

              {/* AZ 3 */}
              <div className="absolute right-12 w-20 h-1 bg-[#e30613] opacity-80 z-10 shadow-[0_0_10px_rgba(227,6,19,0.5)]"></div>
              <div 
                onClick={() => handleAZClick('az3')}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => handleKey(e, () => handleAZClick('az3'))}
                className={`absolute -right-16 px-6 py-3 rounded-xl text-center shadow-lg border-2 cursor-pointer transition-all z-30 focus:outline-none focus:ring-2 focus:ring-red-500 ${activeAZ === 'az3' ? 'border-[#e30613] bg-slate-800 scale-105' : 'border-slate-700 bg-slate-800/80 hover:border-[#e30613]'}`}
              >
                <div className="flex items-center justify-center gap-2 mb-1">
                  <div className={`w-2 h-2 rounded-full ${activeAZ === 'az3' ? 'bg-green-500 animate-pulse' : 'bg-green-500'}`}></div>
                  <span className="text-[#e30613] font-bold text-sm">AZ 3</span>
                </div>
                <p className="text-[10px] text-slate-300 uppercase tracking-tighter">Region Vest (SVG)</p>
                {activeAZ === 'az3' && <div className="text-[10px] text-green-400 font-bold mt-2 bg-slate-900 py-1 rounded">LIVE: 99.999% UP</div>}
              </div>

              {/* Backup */}
              <div className="absolute bottom-16 w-1 h-10 bg-slate-600 opacity-50 z-10 border-l-2 border-dashed border-slate-500"></div>
              <div className="absolute bottom-2 border-2 border-dashed border-slate-600 bg-slate-900/80 px-6 py-3 rounded-xl text-center z-10 opacity-90 shadow-lg backdrop-blur-sm cursor-default">
                <span className="text-slate-300 font-bold text-sm block mb-1">Katastrofesikring</span>
                <p className="text-[10px] text-slate-500 uppercase font-mono">Off-site Airgapped Backup</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-slate-800/80 p-8 rounded-xl border border-slate-700 relative overflow-hidden shadow-xl">
                <div className="absolute top-0 left-4 text-[#e30613] opacity-20 text-7xl font-serif">“</div>
                <blockquote className="relative z-10 mt-4">
                  <p className="text-sm md:text-base text-slate-200 font-medium leading-relaxed italic mb-6">
                    «Suverenitet er evnen en nasjon har til å styre seg selv. Når samfunnet har blitt digitalt, har definisjonen av staten endret seg. Det handler ikke lenger bare om landegrenser, men om digitale grenser.»
                  </p>
                  <footer className="flex items-center gap-3">
                    <div className="w-8 h-0.5 bg-[#e30613]"></div>
                    <cite className="not-italic">
                      <span className="block text-white font-bold text-sm uppercase">Inga Strümke</span>
                      <span className="text-[#e30613] text-[10px] font-semibold uppercase tracking-wider">AI-forsker &amp; Forfatter</span>
                    </cite>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        {/* DIGITAL SUVERENITET */}
        <div className="mb-24 bg-slate-950 p-6 md:p-12 rounded-2xl border border-slate-800">
          <div className="text-center mb-12">
            <h2 className="text-[#e30613] font-bold tracking-wide uppercase text-sm mb-2">Hvorfor eierskap betyr noe</h2>
            <h3 className="text-3xl font-bold text-white mb-4">Digital suverenitet forklart</h3>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Det er en juridisk forskjell på hvem som eier skyen din, og hvilke lover som gjelder for dine sensitive data.
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-700 shadow-xl bg-slate-900">
            <table className="w-full text-left min-w-[800px]">
              <thead className="bg-slate-800/80 text-slate-300">
                <tr>
                  <th className="p-4 border-b-2 border-slate-700 font-bold uppercase text-xs tracking-wider w-1/3">Kategorier &amp; Krav</th>
                  <th className="p-4 border-b-2 border-red-900 bg-red-950/30 text-[#e30613] text-center font-bold uppercase text-xs tracking-wider">Redpill Linpro (RLNC)</th>
                  <th className="p-4 border-b-2 border-slate-700 text-center font-bold uppercase text-xs tracking-wider">Globale Hyperskalere</th>
                  <th className="p-4 border-b-2 border-slate-700 text-center font-bold uppercase text-xs tracking-wider">Utenlandskeide MSP-er</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="bg-slate-800/50">
                  <td colSpan={4} className="p-3 font-bold text-white uppercase tracking-wider text-xs border-y border-slate-700">1. Data &amp; Jurisdiksjon</td>
                </tr>
                <tr className="border-b border-slate-800">
                  <td className="p-4 font-medium text-slate-300">Juridisk Suverenitet (Cloud Act beskyttelse)</td>
                  <td className="p-4 text-center bg-red-950/20 text-lg">✅</td>
                  <td className="p-4 text-center text-slate-500 font-medium">Ingen garanti</td>
                  <td className="p-4 text-center text-slate-500 font-medium">Begrenset</td>
                </tr>
                <tr className="border-b border-slate-800">
                  <td className="p-4 font-medium text-slate-300">Datalagring (100% lokalt)</td>
                  <td className="p-4 text-center bg-red-950/20 text-lg">✅</td>
                  <td className="p-4 text-center text-yellow-500 font-medium">Delvis</td>
                  <td className="p-4 text-center text-lg">✅</td>
                </tr>
                <tr className="border-b border-slate-800">
                  <td className="p-4 font-medium text-slate-300">Selskapseierskap (Lokalt eierskap/kontroll)</td>
                  <td className="p-4 text-center bg-red-950/20 text-lg">✅</td>
                  <td className="p-4 text-center text-slate-500 font-medium">Utenlandsk</td>
                  <td className="p-4 text-center text-slate-500 font-medium">Utenlandsk</td>
                </tr>

                <tr className="bg-slate-800/50">
                  <td colSpan={4} className="p-3 font-bold text-white uppercase tracking-wider text-xs border-y border-slate-700">2. Teknologi</td>
                </tr>
                <tr className="border-b border-slate-800">
                  <td className="p-4 font-medium text-slate-300">Teknologisk frihet (Open Source, ingen lock-in)</td>
                  <td className="p-4 text-center bg-red-950/20 text-lg">✅</td>
                  <td className="p-4 text-center text-slate-500 font-medium">Proprietært</td>
                  <td className="p-4 text-center text-slate-500 font-medium">Ofte proprietært</td>
                </tr>
                <tr className="border-b border-slate-800">
                  <td className="p-4 font-medium text-slate-300">Innsyn &amp; Telemetri (Ingen bruk av metadata)</td>
                  <td className="p-4 text-center bg-red-950/20 text-lg">✅</td>
                  <td className="p-4 text-center text-slate-500 font-medium">Uklart / Utbredt</td>
                  <td className="p-4 text-center text-yellow-500 font-medium">Uklart</td>
                </tr>

                <tr className="bg-slate-800/50">
                  <td colSpan={4} className="p-3 font-bold text-white uppercase tracking-wider text-xs border-y border-slate-700">3. Operasjonelt</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-slate-300">Operativ kontroll (Lokalt personell)</td>
                  <td className="p-4 text-center bg-red-950/20 text-lg">✅</td>
                  <td className="p-4 text-center text-slate-500 font-medium">Global support</td>
                  <td className="p-4 text-center text-yellow-500 font-medium">Varierende</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- EKSPORTERT HOVEDSIDE ---
const HomePage = ({ setCurrentPage }: NavigationProps) => (
  <>
    <Hero setCurrentPage={setCurrentPage} />
    <SuverenitetSection />
  </>
);

export default HomePage;
