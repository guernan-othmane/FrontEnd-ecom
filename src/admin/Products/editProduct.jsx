import React, { useState } from 'react';
import './EditProduct.css'; // CSS file for styling

const EditProduct = ({ product }) => {
  const [title, setTitle] = useState(product?.title || '');
  const [description, setDescription] = useState(product?.description || '');
  const [image, setImage] = useState(product?.image || '');
  const [quantity, setQuantity] = useState(product?.quantity || 0);
  const [available, setAvailable] = useState(product?.available || false);

  const handleEditProduct = () => {
    // Logic for editing a product (to be implemented)
    console.log('Title:', title);
    console.log('Description:', description);
    console.log('Image:', image);
    console.log('Quantity:', quantity);
    console.log('Available:', available);
  };

  return (
    <div className="edit-product-container">
      <h2>Edit Product</h2>
      <form onSubmit={handleEditProduct}>
        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />

        <label>Description:</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />

        <label>Image:</label>
        <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />

        <label>Quantity:</label>
        <input type="number" value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))} />

        <label>Available:</label>
        <input type="checkbox" checked={available} onChange={(e) => setAvailable(e.target.checked)} />

        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditProduct;
