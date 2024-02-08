import React, { useState } from 'react';
import './newUser.css'; // Fichier CSS pour le style

const NewUSer = () => {
  const [fullname, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phonenumber, setPhoneNumber] = useState('');

  const handleAddProduct = () => {
    // Logique pour ajouter un produit (à implémenter)
    console.log('FullName:', fullname);
    console.log('Email:', email);
    console.log('PhoneNumber:', phonenumber);
    // Réinitialiser les champs après l'ajsout
    setFullName('');
    setEmail('');
    setPhoneNumber('');
  };

  return (
    <div className="add-product-container">
      <h2>Add User</h2>
      <form onSubmit={handleAddProduct}>
        <label>FullName:</label>
        <input type="text" value={fullname} onChange={(e) => setFullName(e.target.value)} />

        <label>Email:</label>
        <textarea value={email} onChange={(e) => setEmail(e.target.value)} />
        <div className='image'>
        <label>PhoneNumber:</label>
        <input  type="file" value={phonenumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        </div>
        <br />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default NewUSer;