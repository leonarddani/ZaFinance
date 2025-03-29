import React from 'react';
import Header from './components/Shared/Header';
import HeroSection from './components/Shared/HeroSection';
import Calculator from './components/Shared/Calculator';
import Footer from './components/Shared/Footer';
import MainSection from './components/Shared/MainSection';


const App = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <MainSection />
      <Calculator />
      <Footer />
    </div>
  );
};

export default App;
