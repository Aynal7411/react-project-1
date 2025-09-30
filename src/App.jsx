import { useState } from 'react'
import Navbar from "./components/Navbar";
import './App.css'
import Aynal from './components/Aynal';
import Footer from './components/Footer';
import Contact from "./components/Contact";
import Services from './components/Services';

function App() {
 

  return (
    <>
     <Navbar />
    
        <Aynal />
        <Contact />
        <Services />
        <Footer />
    </>
  )
}

export default App
