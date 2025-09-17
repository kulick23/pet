import React from 'react';
import {Header, Hero, About, Gallery, Contact} from './components';
import '../styles/style.scss';


const App: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Contact />
      </main>
    </div>
  );
};

export default App;