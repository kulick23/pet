import React from 'react';
import { Header, Hero, About, Gallery, Contact, GiftSlider } from './components';
import '../styles/style.scss';

const App: React.FC = () => {
  return (
    <div className="page-shell">
      <div className="ambient ambient--left" aria-hidden="true" />
      <div className="ambient ambient--right" aria-hidden="true" />
      <Header />
      <main className="page-main">
        <Hero />
        <About />
        <Gallery />
        <GiftSlider />
        <Contact />
      </main>
    </div>
  );
};

export default App;
