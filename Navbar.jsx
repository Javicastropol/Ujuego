import React, { useState } from 'react';
import { FaSearch, FaUser, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(searchQuery);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src='./logoU.png' alt="Logo para UGAME" className='logoUgame' />
        </Link>        
        <div className="menu">
          <Link to="/" className="menu">
           Inicio
          </Link>
          <Link to="/categories" className="menu" >
          Categorías
          </Link>
          <Link to="/contact" className="menu">
           Contacto
          </Link>
          <Link to="/about" className="menu">
           Nosotros
          </Link>
          <Link to="/cart" className="navbar-icon">
          </Link>          
        </div>
        <form onSubmit={handleSearchSubmit} className="search-form">
          <input
            type="text"
            className="search-input"
            placeholder="Buscar juegos"
            value={searchQuery}
            onChange={handleInputChange}
          />
          <button type="submit" className="search-button">
            <FaSearch />
          </button>
        </form>
        <div className="navbar-icons">
          <Link to="/login" className="navbar-icon">
            <FaUser />
          </Link>
          <Link to="/cart" className="navbar-icon">
            <FaShoppingCart />
          </Link>          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
