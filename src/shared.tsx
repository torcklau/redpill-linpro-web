import { useState, type KeyboardEvent } from 'react';
import { Zap, X, Menu } from 'lucide-react';
import type {
  DemoServer,
  IaasPlan,
  NetworkPrice,
  ManagedService,
  OrgModule,
  PageId,
} from './types';

// ========================================================================
// DELT INNHOLD: Statiske data, hjelpefunksjoner, Navbar og Footer
// Importeres av alle sidefilene (HomePage, TjenesterPage, Beredskap, Sovereign)
// ========================================================================

// --- STATISKE DATA ---

export const DEMO_SERVERS: DemoServer[] = [
  {
    id: '75175164',
    name: 'file01-prod.fdc.c.linpro.net',
    project: 'fdc',
    warning: false,
    current: { flavor: 'gXc.small', vcpu: 2, ram: '5 GB' },
    recommended: { flavor: 'g4b.micro', vcpu: 2, ram: '2 GB' },
    metrics: { peakCpu: '1.93c', ramUsed: '1.9G', cache: '0G', p95Ram: '3.2 GB', iops: 38, minRam: '2.4 GB' },
    savings: 85,
    flavors: [
      { name: 'g4b.pico', vcpu: 2, ram: '1 GB', status: 'NO', reason: 'avg 0.36 cores exceeds sustained limit; only 1 GB RAM' },
      { name: 'g4b.nano', vcpu: 2, ram: '1 GB', status: 'NO', reason: 'avg 0.36 cores exceeds sustained limit; only 1 GB RAM' },
      { name: 'g4b.micro', vcpu: 2, ram: '2 GB', status: 'BEST', reason: '1.93 cores fits limit; 2 GB RAM fulfills requirement' },
      { name: 'g4b.small', vcpu: 2, ram: '5 GB', status: 'OK', reason: 'Full headroom available' },
      { name: 'gXc.small', vcpu: 2, ram: '5 GB', status: 'CUR', reason: '-' },
    ]
  },
  {
    id: '56622703',
    name: 'nfs01-prod.fdc.c.linpro.net',
    project: 'fdc',
    warning: true,
    current: { flavor: 'gXc.medium', vcpu: 4, ram: '10 GB' },
    recommended: { flavor: 'g4b.micro', vcpu: 2, ram: '2 GB' },
    metrics: { peakCpu: '1.39c', ramUsed: '1.2G', cache: '3.5G', p95Ram: '4.1 GB', iops: 120, minRam: '2.4 GB' },
    savings: 205,
    flavors: [
      { name: 'g4b.nano', vcpu: 2, ram: '1 GB', status: 'NO', reason: 'avg 0.8 cores exceeds sustained limit' },
      { name: 'g4b.micro', vcpu: 2, ram: '2 GB', status: 'BEST', reason: '1.39 cores fits limit; 2 GB RAM fulfills requirement' },
      { name: 'g4b.small', vcpu: 2, ram: '5 GB', status: 'OK', reason: 'Full headroom available' },
      { name: 'gXc.medium', vcpu: 4, ram: '10 GB', status: 'CUR', reason: '-' },
    ]
  },
  {
    id: 'e94296af',
    name: 'pg05-prod.fdc.c.linpro.net',
    project: 'fdc',
    warning: false,
    current: { flavor: 'gXc.xlarge', vcpu: 16, ram: '40 GB' },
    recommended: { flavor: 'g4b.large', vcpu: 4, ram: '20 GB' },
    metrics: { peakCpu: '0.25c', ramUsed: '12G', cache: '2.1G', p95Ram: '14.5 GB', iops: 450, minRam: '16.0 GB' },
    savings: 780,
    flavors: [
      { name: 'g4b.small', vcpu: 2, ram: '5 GB', status: 'NO', reason: 'Insufficient RAM for database profile' },
      { name: 'g4b.medium', vcpu: 2, ram: '10 GB', status: 'NO', reason: 'Insufficient RAM for min requirement (16GB)' },
      { name: 'g4b.large', vcpu: 4, ram: '20 GB', status: 'BEST', reason: '0.25 cores fits limit; 20 GB RAM fulfills requirement' },
      { name: 'gXc.xlarge', vcpu: 16, ram: '40 GB', status: 'CUR', reason: '-' },
    ]
  }
];

export const IAAS_PLANS: IaasPlan[] = [
  { name: 'G5SD.SMALL (2 vCPU / 10 GB)', storage: '40 GB NVMe', transfer: 'Fra 0,30 kr/GB', price: '1,389' },
  { name: 'G5SD.MEDIUM (4 vCPU / 20 GB)', storage: '75 GB NVMe', transfer: 'Fra 0,30 kr/GB', price: '2,777' },
  { name: 'G5SD.LARGE (8 vCPU / 40 GB)', storage: '150 GB NVMe', transfer: 'Fra 0,30 kr/GB', price: '5,555' },
  { name: 'G5SD.XLARGE (16 vCPU / 80 GB)', storage: '300 GB NVMe', transfer: 'Fra 0,30 kr/GB', price: '11,109' },
];

export const NETWORK_PRICES: NetworkPrice[] = [
  { service: 'Offentlig IP-adresse (IPv4)', unit: 'Per IP / måned', price: '10,-' },
  { service: 'Privat Nettverk (SDN / VLAN)', unit: 'Ubegrenset opprettelse', price: 'Inkludert' },
  { service: 'Utgående dataoverføring (Egress)', unit: 'Per GB (første 10 TB)', price: '0,30,-' },
  { service: 'Inngående dataoverføring (Ingress)', unit: 'Alltid gratis', price: '0,-' },
  { service: 'Sky-brannmur (Security Groups)', unit: 'Ubegrenset regler', price: 'Inkludert' }
];

export const MANAGED_SERVICES: ManagedService[] = [
  { name: 'Cloud Platform (IaaS)', category: 'Infrastruktur', desc: 'Vår skyplattform er basert på OpenStack og tilbyr en robust, skalerbar og automatisert infrastruktur.', color: 'text-slate-300' },
  { name: 'Managed Kubernetes', category: 'Orkestrering', desc: 'Vi tar hånd om kompleksiteten ved drift av Kubernetes, slik at dine utviklere kan fokusere på verdiutvikling.', color: 'text-blue-400' },
  { name: 'Database as a Service', category: 'Datalagring', desc: 'Ferdig konfigurerte databaser som PostgreSQL. Vi håndterer backup, skalering og patching.', color: 'text-green-400' },
  { name: 'Object Storage (S3)', category: 'Lagring', desc: 'S3-kompatibel lagring lokalisert i Norge. Skalerbar og optimal for backup og ustrukturerte data.', color: 'text-orange-400' },
  { name: 'Direct Connect', category: 'Nettverk', desc: 'Sikker og dedikert nettverksforbindelse mellom ditt datasenter og vår skyplattform for stabil forsinkelse.', color: 'text-purple-400' },
  { name: 'IT-Sikkerhet', category: 'Sikkerhet', desc: 'Avanserte sikkerhetstjenester inkludert brannmurer, VPN, DDoS-beskyttelse og sårbarhetsscanning.', color: 'text-red-400' },
];

export const ORG_MODULES: Record<string, OrgModule> = {
  'customer': {
    title: 'Kunden (Sluttbruker / Applikasjonseier)',
    dependsOn: ['customer-team'],
    purpose: 'Kjært barn har mange navn og ingen kunder er like. Det kan være utviklere eller IT-avdelingen selv, og de har forskjellige behov og krav. De eier forretningslogikk og ansvar og trenger compliance, forutsigbarhet, kostkontroll, fart, agilitet og spisskompetanse.',
    interface: 'Forretningsmessige SLA-krav, KPIer, budsjettgrenser, Dashboards og APIer.',
    schema: {
      moduleId: "Module-Enterprise-Client",
      requires: ["Module-RL-Customer-Team"],
      constraints: { gdpr_compliant: true, residency: "NO" }
    }
  },
  'customer-team': {
    title: 'Kundeteam hos Redpill Linpro',
    dependsOn: ['managed-services', 'platform-team'],
    purpose: 'Fungerer som primær inngang for operativ dialog og har et helhetlig ansvar for leveransen. Kundeteamet setter sammen løsninger, koordinerer fagressurser og ivaretar kundens arkitektur – med nærhet, fleksibilitet og korte linjer rett inn i deres eksisterende arbeidsflyt.',
    interface: 'Menneskelig rådgivning, integrasjon i kundens samhandlingsverktøy (f.eks. Slack), operative synk-møter og skyarkitektur som kode.',
    quote: '«Våre leveranser er mer enn bare teknologi. Det er et felles språk med tydelige løfter»',
    schema: {
      moduleId: "Module-RL-Customer-Team",
      resolvesDependenciesFor: "Module-Enterprise-Client",
      subscribesTo: ["Module-RL-Managed-Services", "Module-RL-Platform-Team"]
    }
  },
  'managed-services': {
    title: 'Tjenester',
    dependsOn: ['platform-team'],
    purpose: 'Leverer tjenester som FinOps, beredskapspakker, databaser og applikasjonsplattformer med mulighet for automatisk failover, overvåkning og backup. Inkluderer proaktiv analyse og rådgivning fra eksperter. Rullet ut med kode og pakketert for deg av ditt kundeteam.',
    interface: 'Tjeneste-API, databasetilkoblinger, backuprutiner, proaktive helsesjekker.',
    schema: {
      moduleId: "Module-RL-Managed-Services",
      dependsOn: ["Module-RL-Platform-Team"]
    }
  },
  'platform-team': {
    title: 'Plattform',
    dependsOn: [],
    purpose: 'Leverer fundamentet: infrastruktur, nettverk og lagring i norske datasentre.',
    interface: 'Sovereign API og Terraform Providers.',
    schema: {
      moduleId: "Module-RL-Platform-Team",
      infrastructureProvider: "Redpill Linpro Nordic Cloud"
    }
  },
  'project': {
    title: 'Prosjekt (Konsulent)',
    dependsOn: ['customer-team'],
    purpose: 'Konsulentleveranse for skreddersydde behov, arkitekturprosjekter, migrering og spesialistkompetanse. Opererer tett med kundeteamet for å løse komplekse, tidsavgrensede utfordringer.',
    interface: 'Prosjektbeskrivelse, SOW (Statement of Work), milepæler og dedikerte konsulenter.',
    schema: {
      moduleId: "Module-RL-Project",
      dependsOn: ["Module-RL-Customer-Team"]
    }
  }
};

// --- HJELPEFUNKSJONER ---
export const handleKey = (e: KeyboardEvent, callback: () => void): void => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    callback();
  }
};

// --- NAVBAR ---
interface NavbarProps {
  currentPage: PageId;
  setCurrentPage: (page: PageId) => void;
}

export const Navbar = ({ currentPage, setCurrentPage }: NavbarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (page: PageId) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800 transition-all duration-300 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div 
            className="flex items-center gap-3 cursor-pointer" 
            onClick={() => handleNavClick('home')}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => handleKey(e, () => handleNavClick('home'))}
          >
            <div className="w-8 h-8 bg-[#e30613] rounded-sm flex items-center justify-center">
              <span className="text-white font-bold text-xl">R</span>
            </div>
            <span className="text-white font-bold text-xl tracking-tight">Redpill <span className="font-light">Linpro</span></span>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-6">
              <a 
                href="#"
                onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}
                className={`${currentPage === 'home' ? 'text-white' : 'text-slate-300 hover:text-white'} px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer block`}
              >
                Hovedside
              </a>
              <a 
                href="#"
                onClick={(e) => { e.preventDefault(); handleNavClick('tjenester'); }}
                className={`${currentPage === 'tjenester' ? 'text-white bg-slate-800' : 'text-slate-300 hover:text-white'} px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer block`}
              >
                Tjenester
              </a>
              <a 
                href="#"
                onClick={(e) => { e.preventDefault(); handleNavClick('programmerbar'); }}
                className={`${currentPage === 'programmerbar' ? 'text-white bg-slate-800' : 'text-slate-300 hover:text-white'} px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer block`}
              >
                Programmerbar Org.
              </a>
              <a 
                href="#"
                onClick={(e) => { e.preventDefault(); handleNavClick('beredskap'); }}
                className={`${currentPage === 'beredskap' ? 'text-white bg-slate-800' : 'text-slate-300 hover:text-white'} px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1 cursor-pointer`}
              >
                Beredskapspakker
              </a>
              <a 
                href="#"
                onClick={(e) => { e.preventDefault(); handleNavClick('sovereign'); }}
                className={`${currentPage === 'sovereign' ? 'text-red-400 font-bold' : 'text-slate-300 hover:text-white'} px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1 cursor-pointer`}
              >
                SovereignScale <Zap size={14} className={currentPage === 'sovereign' ? 'text-red-500 fill-current' : ''} />
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden sm:block bg-[#e30613] hover:bg-red-700 text-white px-5 py-2 rounded text-sm font-semibold transition-colors shadow-lg shadow-red-900/50">
              Kontakt oss
            </button>
            
            {/* Mobile menu button */}
            <button 
              className="lg:hidden p-2 text-slate-300 hover:text-white focus:outline-none cursor-pointer"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Meny"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 border-b border-slate-800 shadow-xl absolute w-full left-0 top-16 flex flex-col p-4 space-y-2 z-50">
          <a 
            href="#"
            onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}
            className={`block text-left w-full px-4 py-3 rounded-md text-sm font-medium transition-colors cursor-pointer ${currentPage === 'home' ? 'bg-slate-800 text-white' : 'text-slate-300 hover:bg-slate-800/50'}`}
          >
            Hovedside
          </a>
          <a 
            href="#"
            onClick={(e) => { e.preventDefault(); handleNavClick('tjenester'); }}
            className={`block text-left w-full px-4 py-3 rounded-md text-sm font-medium transition-colors cursor-pointer ${currentPage === 'tjenester' ? 'bg-slate-800 text-white' : 'text-slate-300 hover:bg-slate-800/50'}`}
          >
            Tjenester
          </a>
           <a 
            href="#"
            onClick={(e) => { e.preventDefault(); handleNavClick('programmerbar'); }}
            className={`block text-left w-full px-4 py-3 rounded-md text-sm font-medium transition-colors cursor-pointer ${currentPage === 'programmerbar' ? 'bg-slate-800 text-white' : 'text-slate-300 hover:bg-slate-800/50'}`}
          >
            Programmerbar Org.
          </a>
          <a 
            href="#"
            onClick={(e) => { e.preventDefault(); handleNavClick('beredskap'); }}
            className={`block text-left w-full px-4 py-3 rounded-md text-sm font-medium transition-colors cursor-pointer ${currentPage === 'beredskap' ? 'bg-slate-800 text-white' : 'text-slate-300 hover:bg-slate-800/50'}`}
          >
            Beredskapspakker
          </a>
          <a 
            href="#"
            onClick={(e) => { e.preventDefault(); handleNavClick('sovereign'); }}
            className={`flex items-center gap-2 text-left w-full px-4 py-3 rounded-md text-sm font-medium transition-colors cursor-pointer ${currentPage === 'sovereign' ? 'bg-slate-800 text-red-400' : 'text-slate-300 hover:bg-slate-800/50'}`}
          >
            SovereignScale <Zap size={14} className={currentPage === 'sovereign' ? 'text-red-500 fill-current' : ''} />
          </a>
          <div className="pt-4 mt-2 border-t border-slate-800">
            <button className="w-full bg-[#e30613] hover:bg-red-700 text-white px-5 py-3 rounded text-sm font-semibold transition-colors shadow-lg cursor-pointer">
              Kontakt oss
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
// --- SOSIAL BEVIS (gjenbrukbar) ---
//
// Viser et utvalg kunder som "tillit-byggende" seksjon.
// Importeres og brukes hvor som helst via:
//   import { SocialProof } from '../shared';
//   <SocialProof />
//
// Logoer er foreløpig stiliserte tekstlogoer. Byttes til SVG senere.
// ====================================================================

interface ClientLogo {
  name: string;
  className: string;
}

const CLIENT_LOGOS: ClientLogo[] = [
  { name: 'AMEDIA', className: 'font-black italic tracking-tight' },
  { name: 'DN', className: 'font-serif font-bold italic' },
  { name: 'NTB', className: 'font-extrabold tracking-tight' },
  { name: 'Startsiden.', className: 'font-bold' },
  { name: 'DOMSTOL\nADMINISTRASJONEN', className: 'font-bold text-xs whitespace-pre-line leading-tight tracking-wider' },
  { name: '§ lovdata', className: 'font-bold tracking-tight' },
];

export const SocialProof = () => (
  <section className="bg-slate-900/40 border border-slate-800 rounded-2xl py-10 px-6 md:px-12 max-w-5xl mx-auto">
    <div className="text-center mb-8">
      <div className="text-slate-500 text-4xl leading-none mb-3" aria-hidden="true">"</div>
      <p className="text-slate-300 italic text-sm md:text-base max-w-2xl mx-auto">
        Den 3. og 4. statsmakt har uavhengighet i sitt DNA. Utvalgte kunder med strategisk fokus på egen suverenitet:
      </p>
    </div>

    <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-14">
      {CLIENT_LOGOS.map((logo) => (
        <div
          key={logo.name}
          className={`text-slate-400 text-2xl md:text-3xl ${logo.className} hover:text-slate-200 transition-colors`}
        >
          {logo.name}
        </div>
      ))}
    </div>
  </section>
);
// --- FOOTER ---
export const Footer = () => (
  <footer className="bg-slate-950 border-t border-slate-800 py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-[#e30613] rounded-sm flex items-center justify-center" aria-hidden="true">
          <span className="text-white font-bold text-lg">R</span>
        </div>
        <span className="text-white font-bold text-xl tracking-tight">Redpill Linpro</span>
      </div>
      <p className="text-slate-500 text-sm text-center md:text-left max-w-xl">
        All plattformteknologi er bygget på åpen kildekode og underlagt norsk lovgivning for din trygghet.
      </p>
      <div className="text-slate-500 text-sm">
        © 2026 Redpill Linpro.
      </div>
    </div>
  </footer>
);
