// src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Updated imports
import InventoryList from './components/InventoryList';
import AddInventoryItem from './components/AddInventoryItem';
import NavBar from './components/NavBar';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
    const [inventory, setInventory] = useState([]);

    useEffect(() => {
        axios.get('/api/inventory/')
            .then(response => {
                setInventory(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the inventory!', error);
            });
    }, []);

    const handleAddItem = (newItem) => {
        setInventory([...inventory, newItem]);
    };

    return (
        <Router>
            <NavBar />
            <Routes>  {/* Updated Switch to Routes */}
                <Route path="/" element={<h1>Welcome to Nicole's Closet Inventory Management</h1>} />
                <Route path="/inventory" element={<InventoryList inventory={inventory} setInventory={setInventory} />} />
                <Route path="/add-item" element={<AddInventoryItem onAdd={handleAddItem} />} />
                <Route path="/about" element={<h2>About Nicole's Closet</h2>} />
            </Routes>
        </Router>
    );
};

export default App;
