import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
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
import { PaymentFailedPage } from './pages/PaymentFailedPage';
import { FreeLicensePage } from './pages/FreeLicensePage';

/**
 * Automatically catches any Dodo Payments redirect (to / or any other route)
 * for ALL statuses (success, cancelled, failed, pending) and routes the user
 * to the appropriate dedicated page.
 */
const PaymentRedirectWatcher: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const statusParam = (params.get('status') || params.get('state') || '').toLowerCase();
    const hasPaymentId = params.has('payment_id');
    const hasLicenseKey = params.has('license_key');

    const isCancelled = statusParam === 'cancelled' || statusParam === 'canceled';
    const isFailed = statusParam === 'failed' || statusParam === 'declined';
    const isSuccess = statusParam === 'succeeded' || statusParam === 'paid' || statusParam === 'completed' || hasLicenseKey || (hasPaymentId && !isCancelled && !isFailed);

    if (isCancelled && location.pathname !== '/payment/cancelled') {
      navigate(`/payment/cancelled${location.search}`, { replace: true });
    } else if (isFailed && location.pathname !== '/payment/failed') {
      navigate(`/payment/failed${location.search}`, { replace: true });
    } else if (isSuccess && location.pathname !== '/payment/success') {
      navigate(`/payment/success${location.search}`, { replace: true });
    }
  }, [location.pathname, location.search, navigate]);

  return null;
};

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <PaymentRedirectWatcher />
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100%' }}>
        <Navbar />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/explorer-vs-filsy" element={<ExplorerVsFilsyPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/free-license" element={<FreeLicensePage />} />
            <Route path="/free-key" element={<FreeLicensePage />} />
            <Route path="/creator-reward" element={<FreeLicensePage />} />
            <Route path="/giveaway" element={<FreeLicensePage />} />
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
            <Route path="/payment/failed" element={<PaymentFailedPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
