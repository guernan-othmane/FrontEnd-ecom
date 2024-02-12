import React, { useState } from 'react';
import './newCategory.css'; // Fichier CSS pour le style

const NewCategory = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');


  const handleAddCategory = () => {
    // Logique pour ajouter un produit (à implémenter)
    console.log('Name:', name);
    console.log('Description:', description);

    // Réinitialiser les champs après l'ajsout
    setName('');
    setDescription('');
  };

  return (
    <div className="add-product-container">
      <h2>Add Category</h2>
      <form onSubmit={handleAddCategory}>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

        <label>Description:</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
    


        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default NewCategory;

