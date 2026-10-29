import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

// Pages
import { HomePage } from './pages/HomePage';
import { FeaturesPage } from './pages/FeaturesPage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { ExplorerVsFilsyPage } from './pages/ExplorerVsFilsyPage';
import { PricingPage } from './pages/PricingPage';
import { DownloadPage } from './pages/DownloadPage';
import { ChangelogPage } from './pages/ChangelogPage';
import { FaqPage } from './pages/FaqPage';
import { AboutPage } from './pages/AboutPage';
import { LicenseHelpPage } from './pages/LicenseHelpPage';
import { ManageLicensePage } from './pages/ManageLicensePage';
import { SupportPage } from './pages/SupportPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';
import { FindKeyPage } from './pages/FindKeyPage';
import { PaymentSuccessPage } from './pages/PaymentSuccessPage';
import { PaymentCancelledPage } from './pages/PaymentCancelledPage';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100%' }}>
        <Navbar />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/explorer-vs-filsy" element={<ExplorerVsFilsyPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/find-key" element={<FindKeyPage />} />
            <Route path="/retrieve-key" element={<FindKeyPage />} />
            <Route path="/find-license" element={<FindKeyPage />} />
            <Route path="/download" element={<DownloadPage />} />
            <Route path="/changelog" element={<ChangelogPage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/license" element={<LicenseHelpPage />} />
            <Route path="/manage-license" element={<ManageLicensePage />} />
            <Route path="/support" element={<SupportPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/refunds" element={<Navigate to="/terms" replace />} />
            <Route path="/payment/success" element={<PaymentSuccessPage />} />
            <Route path="/payment/cancelled" element={<PaymentCancelledPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
