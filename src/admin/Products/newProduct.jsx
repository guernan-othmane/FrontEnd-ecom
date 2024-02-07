import React, { useState } from 'react';
import './NewProduct.css'; // Fichier CSS pour le style

const NewProduct = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [available, setAvailable] = useState(false);

  const handleAddProduct = () => {
    // Logique pour ajouter un produit (à implémenter)
    console.log('Title:', title);
    console.log('Description:', description);
    console.log('Image:', image);
    console.log('Quantity:', quantity);
    console.log('Available:', available);
    // Réinitialiser les champs après l'ajsout
    setTitle('');
    setDescription('');
    setImage('');
    setQuantity(0);
    setAvailable(false);
  };

  return (
    <div className="add-product-container">
      <h2>Add Product</h2>
      <form onSubmit={handleAddProduct}>
        <label>Titre:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />

        <label>Description:</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        <div className='image'>
        <label>Image:</label>
        <input  type="file" value={image} onChange={(e) => setImage(e.target.value)} />
        </div>
        <label>Quantity:</label>
        <input type="number" value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))} />


        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default NewProduct;

