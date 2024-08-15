// src/components/AddInventoryItem.jsx
import React, { useState } from 'react';
import axios from 'axios';

const AddInventoryItem = ({ onAdd, onView }) => {
    const [name, setName] = useState('');
    const [pricePaid, setPricePaid] = useState('');
    const [priceListed, setPriceListed] = useState('');
    const [dateListed, setDateListed] = useState('');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('name', name);
        formData.append('price_paid', pricePaid);
        formData.append('price_listed', priceListed);
        formData.append('date_listed', dateListed);
        formData.append('location', location);
        formData.append('description', description);
        if (image) {
            formData.append('image', image);
        }

        try {
            const response = await axios.post('/api/inventory/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            onAdd(response.data);  // Update parent component with the new item
            setSuccess(true);  // Set success state to true

            // Clear the form
            setName('');
            setPricePaid('');
            setPriceListed('');
            setDateListed('');
            setLocation('');
            setDescription('');
            setImage(null);
        } catch (error) {
            console.error('There was an error uploading the item!', error);
        }
    };

    const handleAddAnother = () => {
        setSuccess(false);  // Reset success message
    };

    return (
        <div className="container mt-4">
            <h2>Add New Inventory Item</h2>
            {success ? (
                <div className="alert alert-success">
                    <h4>Item added successfully!</h4>
                    <button onClick={onView} className="btn btn-primary m-2">View Listing</button>
                    <button onClick={handleAddAnother} className="btn btn-secondary m-2">Add Another Item</button>
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Price Paid</label>
                        <input
                            type="number"
                            className="form-control"
                            value={pricePaid}
                            onChange={(e) => setPricePaid(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Price Listed</label>
                        <input
                            type="number"
                            className="form-control"
                            value={priceListed}
                            onChange={(e) => setPriceListed(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Date Listed</label>
                        <input
                            type="date"
                            className="form-control"
                            value={dateListed}
                            onChange={(e) => setDateListed(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Location</label>
                        <input
                            type="text"
                            className="form-control"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Description</label>
                        <textarea
                            className="form-control"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Image</label>
                        <input
                            type="file"
                            className="form-control"
                            onChange={(e) => setImage(e.target.files[0])}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Add Item</button>
                </form>
            )}
        </div>
    );
};

export default AddInventoryItem;
