import React from 'react'
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Subscrition from './components/Subscription';
import Plan from './components/Plan';

function App() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0D0D0D ' }}>
      <BrowserRouter>
       
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/subscription' element={<Subscrition />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Plan' element={<Plan />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
