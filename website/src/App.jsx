import React, { useRef } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Services from './components/Services';
import Outlet from './components/Outlet';
import Menu from './components/Menu';
import Trainings from './components/Trainings';
import Contact from './components/Contact';
import './styles.css';

function App() {
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const outletRef = useRef(null);
  const menuRef = useRef(null);
  const trainingsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (section) => {
    let ref;
    switch (section) {
      case 'about':
        ref = aboutRef;
        break;
      case 'services':
        ref = servicesRef;
        break;
      case 'outlet':
        ref = outletRef;
        break;
      case 'menu':
        ref = menuRef;
        break;
      case 'trainings':
        ref = trainingsRef;
        break;
      case 'contact':
        ref = contactRef;
        break;
      default:
        ref = aboutRef;
    }
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app">
      <Header scrollToSection={scrollToSection} />
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={servicesRef}>
        <Services />
      </div>
      <div ref={outletRef}>
        <Outlet />
      </div>
      <div ref={menuRef}>
        <Menu />
      </div>
      <div ref={trainingsRef}>
        <Trainings />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
