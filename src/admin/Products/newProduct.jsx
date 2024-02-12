import React, { useState } from 'react';
import './NewProduct.css';
import axios from 'axios'; // Importez Axios
import {axiosClient} from '../../utils/axios';
import { CListGroup } from '@coreui/react';
import { Navigate, useNavigate } from 'react-router-dom';

const NewProduct = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState(0);
  
  const navigate = useNavigate();

  const handleAddProduct = async (event) => {
    event.preventDefault();
    try {
      const response = await axiosClient.post('/products/add', {
        title,
        description,
        image,
        price,
      });
      
      if (response.status === 201) {
        setTitle('');
        setDescription('');
        setImage('');
        setPrice(0);
       console.log('Produit ajouté avec succès !') ;
       navigate('/products')
      } else {
       console.log('Une erreur est survenue lors de l\'ajout du produit');
      }
    } catch (error) {
      console.log(error);
      // Afficher un message d'erreur ou effectuer une autre action appropriée
    }
  };


  return (
    <div className="add-product-container">
      <h2>Add Product</h2>
      <form onSubmit={(e) => handleAddProduct(e)}>
        <label>Titre:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        <label>Description:</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        <div className='image'>
        <label>Image:</label>
        <input  type="file" value={image} onChange={(e) => setImage(e.target.value)} />
        <label>Price:</label>
        <input type="number" value={price} onChange={(e) => setPrice(parseInt(e.target.value))} />


        </div>
        

        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default NewProduct;
