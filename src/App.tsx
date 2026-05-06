import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

const HomePage = lazy(() => import('./pages/HomePage').then((m) => ({ default: m.HomePage })));
const PortfolioPage = lazy(() => import('./pages/PortfolioPage').then((m) => ({ default: m.PortfolioPage })));
const ServicesPage = lazy(() => import('./pages/ServicesPage').then((m) => ({ default: m.ServicesPage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then((m) => ({ default: m.AboutPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then((m) => ({ default: m.ContactPage })));

// Academic
const PinnacleCoaching = lazy(() => import('./mocks/academic/PinnacleCoaching'));
const IIMAlumni = lazy(() => import('./mocks/academic/IIMAlumni'));

// Medical
const DrPriyaCardiologist = lazy(() => import('./mocks/medical/DrPriyaCardiologist'));
const ClarityMindPsychiatry = lazy(() => import('./mocks/medical/ClarityMindPsychiatry'));

// Music & Art
const RaagasResonance = lazy(() => import('./mocks/music-art/RaagasResonance'));
const StudioKaavya = lazy(() => import('./mocks/music-art/StudioKaavya'));

// Food & Hospitality
const CopperHandi = lazy(() => import('./mocks/food/CopperHandi'));
const ChefArvind = lazy(() => import('./mocks/food/ChefArvind'));

// Media
const SiddharthJournalist = lazy(() => import('./mocks/media/SiddharthJournalist'));
const DistrictLens = lazy(() => import('./mocks/media/DistrictLens'));

// Fitness
const IronboundTraining = lazy(() => import('./mocks/fitness/IronboundTraining'));
const SattvicSpace = lazy(() => import('./mocks/fitness/SattvicSpace'));

// Creatives
const AanyaBrandDesigner = lazy(() => import('./mocks/creatives/AanyaBrandDesigner'));
const WunderkindStudio = lazy(() => import('./mocks/creatives/WunderkindStudio'));

// Finance
const CornerstoneWealth = lazy(() => import('./mocks/finance/CornerstoneWealth'));
const VivekCAFirm = lazy(() => import('./mocks/finance/VivekCAFirm'));

// Legal
const MehraNairLaw = lazy(() => import('./mocks/legal/MehraNairLaw'));
const LakshmiFamilyLaw = lazy(() => import('./mocks/legal/LakshmiFamilyLaw'));

// Tech
const VikramStaffEngineer = lazy(() => import('./mocks/tech/VikramStaffEngineer'));
const BuildfastCTO = lazy(() => import('./mocks/tech/BuildfastCTO'));

function LoadingFallback() {
  return (
    <div className="min-h-screen bg-charcoal-950 flex items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <div className="w-8 h-8 border-2 border-brand-500 border-t-transparent rounded-full animate-spin" />
        <span className="text-sm text-charcoal-400">Loading...</span>
      </div>
    </div>
  );
}

function ScrollToTop() {
  if (typeof window !== 'undefined') {
    window.scrollTo(0, 0);
  }
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-charcoal-950 flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />

              {/* Academic */}
              <Route path="/portfolio/academic/pinnacle-coaching" element={<PinnacleCoaching />} />
              <Route path="/portfolio/academic/iim-alumni" element={<IIMAlumni />} />

              {/* Medical */}
              <Route path="/portfolio/medical/dr-priya-cardiologist" element={<DrPriyaCardiologist />} />
              <Route path="/portfolio/medical/claritymind-psychiatry" element={<ClarityMindPsychiatry />} />

              {/* Music & Art */}
              <Route path="/portfolio/music-art/raagas-resonance" element={<RaagasResonance />} />
              <Route path="/portfolio/music-art/studio-kaavya" element={<StudioKaavya />} />

              {/* Food & Hospitality */}
              <Route path="/portfolio/food/copper-handi" element={<CopperHandi />} />
              <Route path="/portfolio/food/chef-arvind" element={<ChefArvind />} />

              {/* Media */}
              <Route path="/portfolio/media/siddharth-journalist" element={<SiddharthJournalist />} />
              <Route path="/portfolio/media/district-lens" element={<DistrictLens />} />

              {/* Fitness */}
              <Route path="/portfolio/fitness/ironbound-training" element={<IronboundTraining />} />
              <Route path="/portfolio/fitness/sattvic-space" element={<SattvicSpace />} />

              {/* Creatives */}
              <Route path="/portfolio/creatives/aanya-brand-designer" element={<AanyaBrandDesigner />} />
              <Route path="/portfolio/creatives/wunderkind-studio" element={<WunderkindStudio />} />

              {/* Finance */}
              <Route path="/portfolio/finance/cornerstone-wealth" element={<CornerstoneWealth />} />
              <Route path="/portfolio/finance/vivek-ca-firm" element={<VivekCAFirm />} />

              {/* Legal */}
              <Route path="/portfolio/legal/mehra-nair-law" element={<MehraNairLaw />} />
              <Route path="/portfolio/legal/lakshmi-family-law" element={<LakshmiFamilyLaw />} />

              {/* Tech */}
              <Route path="/portfolio/tech/vikram-staff-engineer" element={<VikramStaffEngineer />} />
              <Route path="/portfolio/tech/buildfast-cto" element={<BuildfastCTO />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
