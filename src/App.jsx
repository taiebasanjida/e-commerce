import React, { useState } from 'react'; // Correctly import useState
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Register from './components/Register';
import Login from './components/Login';
import FilterData from './pages/FilterData';

function App() {
    const [order, setOrder] = useState([null]); // useState initialized here
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

    // Login Modal খোলার জন্য ফাংশন
    const openLoginModal = () => setIsLoginModalOpen(true);
    // Login Modal বন্ধ করার জন্য ফাংশন
    const closeLoginModal = () => setIsLoginModalOpen(false);

    // Register Modal খোলার জন্য ফাংশন
    const openRegisterModal = () => setIsRegisterModalOpen(true);
    // Register Modal বন্ধ করার জন্য ফাংশন
    const closeRegisterModal = () => setIsRegisterModalOpen(false);

  return (
   <BrowserRouter>
     <Navbar /> 
     {/* Modal Components */}
     {isLoginModalOpen && <Login closeModal={closeLoginModal} />}
     {isRegisterModalOpen && <Register closeModal={closeRegisterModal} />}
     
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout setOrder={setOrder} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/filter-data" element={<FilterData />} /> 
     </Routes>
     <Footer />
   </BrowserRouter>
  );
}

export default App;
