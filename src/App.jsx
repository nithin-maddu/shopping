import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Logout from './pages/Logout';
import Signup from './pages/signup';
import Login from './pages/Login';


const App = () => {
  return (
    <div>
      <Routes>
         <Route path="/logout" element={<Logout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Signup />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default App;