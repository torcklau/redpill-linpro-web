import { ChevronRight } from 'lucide-react';
import type { NavigationProps } from '../types';

// ========================================================================
// ARKIV: Original Hero fra HomePage (lagret 28. mai 2026)
//
// Mulig fremtidig bruk:
// - Settes inn igjen som hovedside-hero
// - Brukes som overskrift på ProgrammerbarOrganisasjonPage
//
// Importeres ikke noe sted akkurat nå — kun arkivert for referanse.
// ========================================================================

const Hero = ({ setCurrentPage }: NavigationProps) => (
  <div className="relative overflow-hidden bg-slate-950 pt-24 pb-32">
    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-950"></div>
    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-red-900/10 to-transparent blur-3xl"></div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
        Gjør din IT-infrastruktur og <br className="hidden sm:block" />
        <span className="text-[#e30613]">organisasjon programmerbar.</span>
      </h1>
      <p className="mt-4 max-w-3xl mx-auto text-lg sm:text-xl text-slate-300 leading-relaxed">
        Fra suveren infrastruktur og premium tjenester til kundeteam som blir en forlenget del av din IT-funksjon. 
        Vi hjelper deg å modernisere din eksisterende IT og klargjør deg for fremtiden.
      </p>
      <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
       <button onClick={() => setCurrentPage('programmerbar')} className="bg-[#e30613] text-white px-8 py-3.5 rounded font-bold transition-colors hover:bg-red-700 shadow-lg shadow-red-900/50 flex items-center justify-center gap-2 cursor-pointer">
          Se vår verdikjede <ChevronRight size={18} />
        </button>
        <a href="#suverenitet" className="border-2 border-slate-700 bg-transparent hover:bg-slate-800 text-white px-8 py-3.5 rounded font-bold transition-colors flex items-center justify-center">
          Utforsk Norsk Sky
        </a>
      </div>
    </div>
  </div>
);


export { Hero as OriginalHero };