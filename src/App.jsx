import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Service from "./Pages/Service";
import ContactPage from "./Pages/ContactPage";
import Template from "./Pages/Template";  
import { HelmetProvider } from "react-helmet-async";  
function App() {
  return (
   <>
   <HelmetProvider>
   <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/Contact" element={<ContactPage />} />
        <Route path="/template" element={<Template/>}/>
        {/* Add more routes as needed */}
      </Routes>
   
   </Router>
    </HelmetProvider>
   </>
  );
}

export default App;