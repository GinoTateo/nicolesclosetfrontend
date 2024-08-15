// src/components/NavBar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav style={navStyle}>
            <h1 style={logoStyle}>Nicole's Closet</h1>
            <ul style={navLinksStyle}>
                <li><Link to="/" style={linkStyle}>Home</Link></li>
                <li><Link to="/inventory" style={linkStyle}>Inventory</Link></li>
                <li><Link to="/add-item" style={linkStyle}>Add Item</Link></li>
                <li><Link to="/about" style={linkStyle}>About</Link></li>
            </ul>
        </nav>
    );
};

const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    backgroundColor: '#333',
    color: '#fff',
};

const logoStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
};

const navLinksStyle = {
    listStyleType: 'none',
    display: 'flex',
    margin: 0,
    padding: 0,
};

const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    padding: '0 15px',
};

export default NavBar;
