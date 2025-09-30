import { useState } from 'react'
import Navbar from "./components/Navbar";
import './App.css'
import Aynal from './components/Aynal';
import Footer from './components/Footer';
import Contact from "./components/Contact";
import Services from './components/Services';
import SelectExample from './components/Select';
import DependentDropdown from'./components/Selectm';

function App() {
 

  return (
    <>
     <Navbar />
    
        <Aynal />
        <Contact />
        <Services />
        <SelectExample />
       <DependentDropdown />
        <Footer />
    </>
  )
}

export default App
