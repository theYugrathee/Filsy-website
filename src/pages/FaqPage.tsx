import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { APP_CONFIG } from '../config';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';

interface FaqItem {
  q: string;
  a: string;
}

const FAQS: FaqItem[] = [
  {
    q: 'Does Filsy replace Windows File Explorer?',
    a: 'No. Filsy works alongside File Explorer. It’s a nicer, faster way to see and search your files, and “Show in Explorer” is always one click away.',
  },
  {
    q: 'Do my files get uploaded anywhere?',
    a: 'No. Text recognition, indexing, and duplicate detection all run strictly on your PC. Your files never leave it. The only network call Filsy makes is the initial license check.',
  },
  {
    q: 'Will it delete my files during cleanup?',
    a: 'Only when you choose to, and only by moving disposable clutter (%TEMP%, crash dumps) to the Recycle Bin. Nothing is ever permanently deleted without your confirmation.',
  },
  {
    q: 'Is it a subscription?',
    a: 'No. Filsy is Pay What You Want. You choose what to contribute once and keep it forever. All future updates are included.',
  },
  {
    q: 'Can I use Filsy on more than one PC?',
    a: 'One active PC at a time. When moving to a new PC, open Filsy → Settings → License, click “Deactivate this PC”, then activate your key on your new computer.',
  },
  {
    q: 'Does it work offline?',
    a: 'Yes. The license only needs to verify once during activation, and Filsy continues working offline for up to 30 days in between.',
  },
  {
    q: 'How will I install Filsy from the Microsoft Store?',
    a: 'Filsy is currently preparing for its Microsoft Store release for Windows 10 & 11. You can acquire your lifetime license key now at Pay What You Want, and activate it inside the app as soon as it goes live on the Store.',
  },
  {
    q: 'What if I lose my license key?',
    a: 'You can retrieve your key anytime on the homepage or license portal by typing the email address you used at checkout.',
  },
];

export const FaqPage: React.FC = () => {
  const [filter, setFilter] = useState('');
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const filtered = FAQS.filter(f =>
    filter === '' ||
    f.q.toLowerCase().includes(filter.toLowerCase()) ||
    f.a.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="page-wrapper">
      <div className="wrap-narrow">
        <div className="section-head center">
          <h2>Frequently Asked Questions</h2>
          <p>Everything you need to know about Filsy, security, and lifetime licensing.</p>
        </div>

        {/* Search */}
        <div style={{ marginBottom: '24px', position: 'relative' }}>
          <Search size={18} color="var(--subtle)" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
          <input
            type="text"
            placeholder="Search questions (e.g. offline, license, explorer, indexing)..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="form-input"
            style={{ paddingLeft: '42px' }}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {filtered.map((faq, idx) => {
            const isOpen = expandedIndex === idx;
            return (
              <div
                key={idx}
                className="card"
                style={{ padding: '16px 20px', cursor: 'pointer' }}
                onClick={() => setExpandedIndex(isOpen ? null : idx)}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: 600 }}>{faq.q}</h3>
                  <span style={{ color: 'var(--muted)' }}>{isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}</span>
                </div>
                {isOpen && (
                  <p style={{ marginTop: '10px', fontSize: '0.92rem', color: 'var(--muted)', lineHeight: 1.65 }}>
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <p style={{ fontSize: '0.9rem', color: 'var(--muted)' }}>
            Have another question? Email <a href={`mailto:${APP_CONFIG.supportEmail}`} style={{ color: 'var(--ink)', fontWeight: 600 }}>{APP_CONFIG.supportEmail}</a> and you’ll hear back directly.
          </p>
        </div>
      </div>
    </div>
  );
};
