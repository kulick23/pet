import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { SiteLayout } from './components/site/SiteLayout';
import { AboutPage } from './pages/AboutPage';
import { AnimalsPage } from './pages/AnimalsPage';
import { ChallengesPage } from './pages/ChallengesPage';
import { GamePage } from './pages/GamePage';
import { HomePage } from './pages/HomePage';
import { ImpactPage } from './pages/ImpactPage';
import { InitiativePage } from './pages/InitiativePage';
import { InitiativesPage } from './pages/InitiativesPage';
import { PetCarePage } from './pages/PetCarePage';
import '../styles/style.scss';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="initiatives" element={<InitiativesPage />} />
          <Route path="initiatives/:slug" element={<InitiativePage />} />
          <Route path="impact" element={<ImpactPage />} />
          <Route path="green-rush" element={<GamePage />} />
          <Route path="animals" element={<AnimalsPage />} />
          <Route path="petcare" element={<PetCarePage />} />
          <Route path="challenges" element={<ChallengesPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
