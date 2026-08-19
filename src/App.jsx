import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Navigation from './components/layout/Navigation';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Expertise from './components/sections/Expertise';
import Experience from './components/sections/Experience';
import Qualifications from './components/sections/Qualifications';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#FAF8F3] font-sans text-slate-800 antialiased selection:bg-[#E8A0BF] selection:text-white">
        <Navigation />
        <main>
          <Hero />
          <About />
          <Expertise />
          <Experience />
          <Qualifications />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
