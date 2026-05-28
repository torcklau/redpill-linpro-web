import { useState, useEffect } from 'react';
import { Navbar, Footer } from './shared';
import HomePage from './pages/HomePage';
import TjenesterPage from './pages/TjenesterPage';
import ProgrammerbarOrganisasjonPage from './pages/ProgrammerbarOrganisasjonPage';
import BeredskapPage from './pages/BeredskapPage';
import SovereignScalePage, { LiveDemoPage } from './pages/SovereignScalePage';
import type { PageId } from './types';

// ========================================================================
// APP-SHELL: Håndterer side-navigasjon mellom Hovedside, Tjenester,
// Beredskap, SovereignScale og Live Demo.
//
// Modulær oppdeling — hver side ligger i sin egen fil for raskere iterasjon.
// ========================================================================

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');

  const handlePageChange = (page: PageId): void => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  // Skru på "smooth scroll" globalt for HTML-elementet når appen laster
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  const renderContent = () => {
    switch (currentPage) {
      case 'tjenester':
        return <TjenesterPage setCurrentPage={handlePageChange} />;
      case 'programmerbar':
        return <ProgrammerbarOrganisasjonPage />;       
      case 'beredskap':
        return <BeredskapPage />;
      case 'sovereign':
        return <SovereignScalePage setCurrentPage={handlePageChange} />;
      case 'demo':
        return <LiveDemoPage setCurrentPage={handlePageChange} />;
      case 'home':
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-red-500/30">
      <Navbar currentPage={currentPage} setCurrentPage={handlePageChange} />
      <main>{renderContent()}</main>
      <Footer />
    </div>
  );
}
