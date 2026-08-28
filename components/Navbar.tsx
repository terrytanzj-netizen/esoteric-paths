import React from 'react';

export default function Navbar() {
  return (
    <nav className="no-print" style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: '1px solid rgba(201, 162, 39, 0.25)',
      paddingBottom: '1rem',
      position: 'relative',
      zIndex: 2,
      flexWrap: 'wrap',
      gap: '1rem'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
        <span style={{ color: '#C9A227', fontSize: '1.2rem', textShadow: '0 0 10px #C9A227' }}>✦</span>
        <span style={{ fontFamily: 'Georgia, serif', fontWeight: 'bold', letterSpacing: '0.08em', color: '#F4EEDB', fontSize: '1.15rem' }}>
          ESOTERIC PATHS
        </span>
      </div>
      <div style={{ display: 'flex', gap: '1.2rem', fontSize: '0.8rem', fontFamily: 'monospace', flexWrap: 'wrap' }}>
        <a href="#" style={{ color: '#C9A227', textDecoration: 'none', textShadow: '0 0 8px rgba(201,162,39,0.4)' }}>Oracle Engine</a>
        <a href="#methodology" style={{ color: '#8A8678', textDecoration: 'none' }}>Methodology</a>
        <a href="#blueprints" style={{ color: '#8A8678', textDecoration: 'none' }}>Blueprints</a>
        <a href="#knowledge-base" style={{ color: '#8A8678', textDecoration: 'none' }}>Knowledge Base</a>
        <a href="#about" style={{ color: '#8A8678', textDecoration: 'none' }}>About</a>
        <a href="#support" style={{ color: '#8A8678', textDecoration: 'none' }}>Support</a>
      </div>
    </nav>
  );
}
