// src/components/InventoryList.jsx
import React, { useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const InventoryList = ({ inventory, setInventory }) => {
    useEffect(() => {
        axios.get('/api/inventory/')
            .then(response => {
                setInventory(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the inventory!', error);
            });
    }, [setInventory]);

    return (
        <div className="container mt-4">
            <h1>Inventory List</h1>
            <div className="row">
                {inventory.map(item => (
                    <div key={item.id} className="col-md-4 mb-4">
                        <div className="card">
                            <img
                                src={item.image ? item.image : 'path/to/placeholder.jpg'}
                                className="card-img-top"
                                alt={item.name}
                                style={{ height: '200px', objectFit: 'cover' }}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text"><strong>Paid:</strong> ${item.price_paid}</p>
                                <p className="card-text"><strong>Listed:</strong> ${item.price_listed}</p>
                                <p className="card-text"><strong>Date Listed:</strong> {item.date_listed}</p>
                                <p className="card-text"><strong>Location:</strong> {item.location}</p>
                                <p className="card-text">{item.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InventoryList;
