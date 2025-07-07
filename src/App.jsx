import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './pages/Home'; 
import ProductCard from './components/ProductCard'; 

const App = () => {
  const location = useLocation();
  const hideNavbarRoutes = ['/login', '/signup'];

  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {!shouldHideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/ProductCard" element={<ProductCard />} />
      </Routes>
    </>
  );
};

export default App;
