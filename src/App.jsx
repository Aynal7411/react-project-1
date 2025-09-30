import { useState } from 'react'
import Navbar from "./components/Navbar";
import './App.css'
import Aynal from './components/Aynal';
import Footer from './components/Footer';
import Contact from "./components/Contact";
function App() {
 

  return (
    <>
     <Navbar />
        <div>
      <h1>Welcome To My React website</h1>
      <p>This is a simple React application with a Navbar component.</p>
        </div>
        <Aynal />
        <Contact />
        <Footer />
    </>
  )
}

export default App
