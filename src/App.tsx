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
import { NotFoundPage } from './pages/NotFoundPage';
// Uncomment below when testing ₹0 payments locally in the future:
// import { TestPaymentPage } from './pages/TestPaymentPage';

// Feature Sub-Pages
import { FileSearchFeaturePage } from './pages/features/FileSearchFeaturePage';
import { FilePreviewFeaturePage } from './pages/features/FilePreviewFeaturePage';
import { OcrSearchFeaturePage } from './pages/features/OcrSearchFeaturePage';
import { FileOrganizationFeaturePage } from './pages/features/FileOrganizationFeaturePage';

// Blog & SEO Pages
import { AnyTxtAlternativePage } from './pages/blog/AnyTxtAlternativePage';
import { BestDuplicateFinderPage } from './pages/blog/BestDuplicateFinderPage';
import { BestFileExplorersPage } from './pages/blog/BestFileExplorersPage';
import { BestFileSearchToolsPage } from './pages/blog/BestFileSearchToolsPage';
import { DirectoryOpusAlternativePage } from './pages/blog/DirectoryOpusAlternativePage';
import { DisableWindowsSearchPage } from './pages/blog/DisableWindowsSearchPage';
import { DupeGuruAlternativePage } from './pages/blog/DupeGuruAlternativePage';
import { EverythingAlternativePage } from './pages/blog/EverythingAlternativePage';
import { FileManagerComparisonPage } from './pages/blog/FileManagerComparisonPage';
import { FilePreviewWindowsPage } from './pages/blog/FilePreviewWindowsPage';
import { FilesAppAlternativePage } from './pages/blog/FilesAppAlternativePage';
import { FileSearchCommandLinePage } from './pages/blog/FileSearchCommandLinePage';
import { FileSearchShortcutsPage } from './pages/blog/FileSearchShortcutsPage';
import { FindDownloadedFilesPage } from './pages/blog/FindDownloadedFilesPage';
import { FindDuplicateFilesPage } from './pages/blog/FindDuplicateFilesPage';
import { FindDuplicatePhotosPage } from './pages/blog/FindDuplicatePhotosPage';
import { FindFilesByDatePage } from './pages/blog/FindFilesByDatePage';
import { FindFilesByExtensionPage } from './pages/blog/FindFilesByExtensionPage';
import { FindLargeFilesPage } from './pages/blog/FindLargeFilesPage';
import { FindOldFilesPage } from './pages/blog/FindOldFilesPage';
import { FindPdfFilesPage } from './pages/blog/FindPdfFilesPage';
import { FindRecentDownloadsPage } from './pages/blog/FindRecentDownloadsPage';
import { FindScreenshotsPage } from './pages/blog/FindScreenshotsPage';
import { FreeCommanderAlternativePage } from './pages/blog/FreeCommanderAlternativePage';
import { FreeUpDiskSpacePage } from './pages/blog/FreeUpDiskSpacePage';
import { HowToIndexFilesPage } from './pages/blog/HowToIndexFilesPage';
import { ListaryAlternativePage } from './pages/blog/ListaryAlternativePage';
import { OfflineFileSearchPage } from './pages/blog/OfflineFileSearchPage';
import { OneCommanderAlternativePage } from './pages/blog/OneCommanderAlternativePage';
import { OrganizeFilesPage } from './pages/blog/OrganizeFilesPage';
import { PowerToysRunAlternativePage } from './pages/blog/PowerToysRunAlternativePage';
import { PrivateFileSearchPage } from './pages/blog/PrivateFileSearchPage';
import { QDirAlternativePage } from './pages/blog/QDirAlternativePage';
import { QuickLookAlternativePage } from './pages/blog/QuickLookAlternativePage';
import { SearchInsideExcelPage } from './pages/blog/SearchInsideExcelPage';
import { SearchInsideFilesPage } from './pages/blog/SearchInsideFilesPage';
import { SearchInsideImagesPage } from './pages/blog/SearchInsideImagesPage';
import { SearchInsidePdfPage } from './pages/blog/SearchInsidePdfPage';
import { SearchInsideWordPage } from './pages/blog/SearchInsideWordPage';
import { SearchInsideZipPage } from './pages/blog/SearchInsideZipPage';
import { SearchNetworkDrivesPage } from './pages/blog/SearchNetworkDrivesPage';
import { StorageAnalyzerPage } from './pages/blog/StorageAnalyzerPage';
import { TotalCommanderAlternativePage } from './pages/blog/TotalCommanderAlternativePage';
import { Windows11SearchSlowPage } from './pages/blog/Windows11SearchSlowPage';
import { Windows11TipsPage } from './pages/blog/Windows11TipsPage';
import { WindowsExplorerTipsPage } from './pages/blog/WindowsExplorerTipsPage';
import { WindowsFileHistoryPage } from './pages/blog/WindowsFileHistoryPage';
import { WindowsLauncherToolsPage } from './pages/blog/WindowsLauncherToolsPage';
import { WindowsProductivityToolsPage } from './pages/blog/WindowsProductivityToolsPage';
import { WindowsSearchFixPage } from './pages/blog/WindowsSearchFixPage';
import { WindowsSearchOperatorsPage } from './pages/blog/WindowsSearchOperatorsPage';
import { WindowsSearchPrivacyPage } from './pages/blog/WindowsSearchPrivacyPage';

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
    const isSuccess =
      statusParam === 'succeeded' ||
      statusParam === 'paid' ||
      statusParam === 'completed' ||
      hasLicenseKey ||
      (hasPaymentId && !isCancelled && !isFailed);

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
            <Route path="/features/file-search" element={<FileSearchFeaturePage />} />
            <Route path="/features/file-preview" element={<FilePreviewFeaturePage />} />
            <Route path="/features/ocr-search" element={<OcrSearchFeaturePage />} />
            <Route path="/features/file-organization" element={<FileOrganizationFeaturePage />} />
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
            {/* Uncomment below to re-enable local ₹0 test checkout route: */}
            {/* <Route path="/test-payment" element={<TestPaymentPage />} /> */}
            {/* <Route path="/test-checkout" element={<TestPaymentPage />} /> */}
                        {/* Blog & SEO Content Pages */}
            <Route path="/blog/anytxt-alternative" element={<AnyTxtAlternativePage />} />
            <Route path="/blog/best-duplicate-file-finder-windows" element={<BestDuplicateFinderPage />} />
            <Route path="/blog/best-file-explorer-alternatives-windows" element={<BestFileExplorersPage />} />
            <Route path="/blog/best-file-search-tools-windows" element={<BestFileSearchToolsPage />} />
            <Route path="/blog/directory-opus-alternative" element={<DirectoryOpusAlternativePage />} />
            <Route path="/blog/disable-windows-search-indexer" element={<DisableWindowsSearchPage />} />
            <Route path="/blog/dupeguru-alternative" element={<DupeGuruAlternativePage />} />
            <Route path="/blog/everything-search-alternative" element={<EverythingAlternativePage />} />
            <Route path="/blog/windows-file-manager-comparison" element={<FileManagerComparisonPage />} />
            <Route path="/blog/how-to-preview-files-windows" element={<FilePreviewWindowsPage />} />
            <Route path="/blog/files-app-windows-alternative" element={<FilesAppAlternativePage />} />
            <Route path="/blog/windows-file-search-command-line" element={<FileSearchCommandLinePage />} />
            <Route path="/blog/windows-file-search-keyboard-shortcuts" element={<FileSearchShortcutsPage />} />
            <Route path="/blog/how-to-find-downloaded-files-windows" element={<FindDownloadedFilesPage />} />
            <Route path="/blog/how-to-find-duplicate-files-windows" element={<FindDuplicateFilesPage />} />
            <Route path="/blog/find-duplicate-photos-windows" element={<FindDuplicatePhotosPage />} />
            <Route path="/blog/find-files-by-date-windows" element={<FindFilesByDatePage />} />
            <Route path="/blog/find-files-by-extension-windows" element={<FindFilesByExtensionPage />} />
            <Route path="/blog/find-large-files-windows" element={<FindLargeFilesPage />} />
            <Route path="/blog/find-old-files-windows" element={<FindOldFilesPage />} />
            <Route path="/blog/find-pdf-files-windows" element={<FindPdfFilesPage />} />
            <Route path="/blog/find-recently-downloaded-files-windows" element={<FindRecentDownloadsPage />} />
            <Route path="/blog/find-screenshots-windows" element={<FindScreenshotsPage />} />
            <Route path="/blog/freecommander-alternative" element={<FreeCommanderAlternativePage />} />
            <Route path="/blog/free-up-disk-space-windows-11" element={<FreeUpDiskSpacePage />} />
            <Route path="/blog/how-to-index-files-windows" element={<HowToIndexFilesPage />} />
            <Route path="/blog/listary-alternative" element={<ListaryAlternativePage />} />
            <Route path="/blog/offline-file-search-windows" element={<OfflineFileSearchPage />} />
            <Route path="/blog/one-commander-alternative" element={<OneCommanderAlternativePage />} />
            <Route path="/blog/organize-files-windows" element={<OrganizeFilesPage />} />
            <Route path="/blog/powertoys-run-alternative" element={<PowerToysRunAlternativePage />} />
            <Route path="/blog/private-file-search-windows" element={<PrivateFileSearchPage />} />
            <Route path="/blog/q-dir-alternative" element={<QDirAlternativePage />} />
            <Route path="/blog/windows-quick-look-alternative" element={<QuickLookAlternativePage />} />
            <Route path="/blog/search-inside-excel-files-windows" element={<SearchInsideExcelPage />} />
            <Route path="/blog/how-to-search-inside-files-windows" element={<SearchInsideFilesPage />} />
            <Route path="/blog/search-text-inside-images-windows" element={<SearchInsideImagesPage />} />
            <Route path="/blog/search-text-inside-pdf-windows" element={<SearchInsidePdfPage />} />
            <Route path="/blog/search-inside-word-documents-windows" element={<SearchInsideWordPage />} />
            <Route path="/blog/search-inside-zip-files-windows" element={<SearchInsideZipPage />} />
            <Route path="/blog/search-network-drives-windows" element={<SearchNetworkDrivesPage />} />
            <Route path="/blog/windows-storage-analyzer" element={<StorageAnalyzerPage />} />
            <Route path="/blog/total-commander-alternative" element={<TotalCommanderAlternativePage />} />
            <Route path="/blog/windows-11-search-slow-fix" element={<Windows11SearchSlowPage />} />
            <Route path="/blog/windows-11-tips-power-users" element={<Windows11TipsPage />} />
            <Route path="/blog/windows-explorer-tips" element={<WindowsExplorerTipsPage />} />
            <Route path="/blog/windows-file-history-find-files" element={<WindowsFileHistoryPage />} />
            <Route path="/blog/windows-launcher-tools" element={<WindowsLauncherToolsPage />} />
            <Route path="/blog/best-windows-productivity-tools" element={<WindowsProductivityToolsPage />} />
            <Route path="/blog/windows-search-not-working-fix" element={<WindowsSearchFixPage />} />
            <Route path="/blog/windows-search-operators" element={<WindowsSearchOperatorsPage />} />
            <Route path="/blog/windows-search-privacy" element={<WindowsSearchPrivacyPage />} />

            <Route path="/404" element={<NotFoundPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
