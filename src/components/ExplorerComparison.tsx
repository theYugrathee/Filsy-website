import React from 'react';
import { COMPARISON_DATA, APP_CONFIG } from '../config';
import { Check } from 'lucide-react';

export const ExplorerComparison: React.FC = () => {
  return (
    <div className="comparison-card">
      <table className="homy-table">
        <thead>
          <tr>
            <th style={{ width: '40%' }}>Everyday Job</th>
            <th style={{ width: '30%' }} className="brand-col">
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--documents)', fontWeight: 700 }}>
                <img src="/app-icon.png" alt="Filsy" style={{ width: '20px', height: '20px', borderRadius: '5px', objectFit: 'contain' }} />
                <span>Filsy ({APP_CONFIG.pricing.displayPrice})</span>
              </span>
            </th>
            <th style={{ width: '30%' }}>File Explorer</th>
          </tr>
        </thead>
        <tbody>
          {COMPARISON_DATA.map((row, index) => {
            const isFilsyYes = row.filsy === '✓';
            const isExplorerYes = row.explorer === '✓';

            return (
              <tr key={index}>
                <td style={{ fontWeight: 600, color: 'var(--ink)' }}>
                  {row.feature}
                </td>
                <td className="brand-col">
                  {isFilsyYes ? (
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--documents)', fontWeight: 600 }}>
                      <Check size={16} strokeWidth={2.5} />
                      <span>Supported naturally</span>
                    </span>
                  ) : (
                    <span style={{ color: 'var(--documents)', fontWeight: 600 }}>{row.filsy}</span>
                  )}
                </td>
                <td style={{ color: 'var(--muted)' }}>
                  {isExplorerYes ? (
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--ink)' }}>
                      <Check size={16} />
                      <span>Yes</span>
                    </span>
                  ) : row.explorer === '✗' ? (
                    <span>— Not supported</span>
                  ) : (
                    <span>{row.explorer}</span>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
