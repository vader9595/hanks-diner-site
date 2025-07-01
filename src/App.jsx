import { BrowserRouter as Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import './App.css';

import Footer from "./components/Footer";


import { useState } from 'react';

import Home from "./components/Home";
import CartArea from "./components/CartArea";
import CareerForm from "./components/CareerForm";





function App() {

   const [darkMode, setDarkMode] = useState(false);
   const toggleTheme = () => setDarkMode(!darkMode);


  return (

    
    <div className={darkMode ? 'app dark' : 'app light'}>
    
    <div className = "App">

    <button onClick={toggleTheme}>

          {darkMode ? '☀️ Push for Light Mode' : '  Push for Dark Mode'}
    
    </button>

      <Header/>      
 
      <Routes>
      
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartArea />} />
        <Route path="/career" element={<CareerForm />} />

      </Routes>

      <Footer/>
    </div>

    </div>

  );
}

export default App;
