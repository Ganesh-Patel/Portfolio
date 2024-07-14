import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home.jsx'
import Projects from './Components/Projects/Projects.jsx'
import About from './Components/About/About.jsx'
import Footer from './Components/Footer/Footer.jsx';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        {/* Add more routes as needed */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;