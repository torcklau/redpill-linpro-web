// ========================================================================
// SENTRALE TYPER
// Alle delte datatyper og prop-shapes ligger her, så endringer
// trygt forplanter seg gjennom kodebasen.
// ========================================================================

/** Hvilke sider som finnes i appen. Brukes som diskriminert union i App-routing. */
export type PageId = 'home' | 'tjenester' | 'programmerbar' | 'beredskap' | 'sovereign' | 'demo';

/** Standard prop som side-komponenter mottar når de trenger å navigere. */
export interface NavigationProps {
  setCurrentPage: (page: PageId) => void;
}

/** Server-flavor i Live Demo (kostnadsoptimaliseringsmotoren). */
export interface ServerFlavor {
  name: string;
  vcpu: number;
  ram: string;
  status: 'BEST' | 'OK' | 'NO' | 'CUR';
  reason: string;
}

/** En enkelt server som vises i Live Demo. */
export interface DemoServer {
  id: string;
  name: string;
  project: string;
  warning: boolean;
  current: { flavor: string; vcpu: number; ram: string };
  recommended: { flavor: string; vcpu: number; ram: string };
  metrics: {
    peakCpu: string;
    ramUsed: string;
    cache: string;
    p95Ram: string;
    iops: number;
    minRam: string;
  };
  savings: number;
  flavors: ServerFlavor[];
}

/** Prislinje for IaaS-pakker. */
export interface IaasPlan {
  name: string;
  storage: string;
  transfer: string;
  price: string;
}

/** Prislinje for nettverkstjenester. */
export interface NetworkPrice {
  service: string;
  unit: string;
  price: string;
}

/** Managed Service-element i tjenester-galleriet. */
export interface ManagedService {
  name: string;
  category: string;
  desc: string;
  color: string;
}

/** Modul i organisasjonskart-visualiseringen. */
export interface OrgModule {
  title: string;
  dependsOn: string[];
  purpose: string;
  interface: string;
  quote?: string;
  schema: Record<string, unknown>;
}
