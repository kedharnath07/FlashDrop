import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
      <div className="container-fluid px-4 d-flex justify-content-between align-items-center">

        
        <NavLink className="navbar-brand fw-bold text-primary fs-4 d-flex align-items-center" to="/">
          <i className="fas fa-bolt text-warning me-2"></i> FlashDrop
        </NavLink>

        
        <div className="d-flex gap-4 align-items-center">
          <NavLink to="/" className="text-dark text-decoration-none fw-semibold">Home</NavLink>
          <NavLink to="/about" className="text-dark text-decoration-none fw-semibold">About</NavLink>
          <NavLink to="/contact" className="text-dark text-decoration-none fw-semibold">Contact</NavLink>
          <NavLink to="/products" className="text-dark text-decoration-none fw-semibold">Products</NavLink>
          
        </div>

       
        <div className="d-flex">
          <NavLink to="/login" className="btn btn-outline-primary me-2 rounded-pill px-4">
            Login
          </NavLink>
          <NavLink to="/register" className="btn btn-primary rounded-pill px-4">
            Signup
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
