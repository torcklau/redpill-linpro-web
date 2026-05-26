import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

describe('App navigation', () => {
  it('rendrer hovedsiden som standard', () => {
    render(<App />);
    // Hero-tittelen skal være synlig
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  it('viser Tjenester-siden når Tjenester-lenken klikkes', () => {
    render(<App />);
    // Klikk på Tjenester i nav-en (desktop-versjonen)
    const tjenesterLinks = screen.getAllByText('Tjenester');
    fireEvent.click(tjenesterLinks[0]);

    // Skal nå vise IaaS-prising eller Managed Services-overskrift
    expect(
      screen.getByText(/Gjennomsiktig IaaS-prising|Premium Managed Services/i),
    ).toBeInTheDocument();
  });

  it('viser Beredskap-siden når Beredskapspakker-lenken klikkes', () => {
    render(<App />);
    const beredskapLinks = screen.getAllByText('Beredskapspakker');
    fireEvent.click(beredskapLinks[0]);

    // Beredskap-siden skal være synlig
    expect(screen.getByText(/100% Norsk Suverenitet/i)).toBeInTheDocument();
  });

  it('viser SovereignScale-siden når SovereignScale-lenken klikkes', () => {
    render(<App />);
    const sovereignLinks = screen.getAllByText('SovereignScale');
    fireEvent.click(sovereignLinks[0]);

    // SovereignScale tagline skal være synlig
    expect(screen.getByText(/Kutt skykostnader/i)).toBeInTheDocument();
  });
});
