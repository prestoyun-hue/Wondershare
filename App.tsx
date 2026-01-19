import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import SuccessStories from './components/SuccessStories';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans">
      <Header />
      <main>
        <Hero />
        <Features />
        <SuccessStories />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;