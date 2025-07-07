import React from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './pages/Home';
import ProductCard from './components/ProductCard';
import ProductDetails from './pages/ProductDetails';
import { addToCart } from './store/cartSlice';

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const hideNavbarRoutes = ['/login', '/signup'];
  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);

  const handleAddToCart = (product, quantity = 1) => {
    dispatch(addToCart({ ...product, quantity }));
  };

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <>
      {!shouldHideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home onProductClick={handleProductClick} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/ProductCard" element={<ProductCard />} />
        <Route
          path="/product/:id"
          element={
            <ProductDetails
              onBack={handleBackClick}
              onAddToCart={handleAddToCart}
            />
          }
        />
      </Routes>
    </>
  );
};

export default App;
