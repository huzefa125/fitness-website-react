import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Subscription from './components/Subscription';
import Plan from './components/Plan';
import Sign from './components/Sign'; 

function App() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#fafaf7' }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/plan" element={<Plan />} />
          <Route path="/sign" element={<Sign />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
