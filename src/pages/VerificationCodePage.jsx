import React, { useState } from 'react';
import './VerificationCodePage.css';
import { axiosClient } from '../utils/axios';
import { useNavigate } from 'react-router-dom';

const VerificationCodePage = () => {
  const [code, setCode] = useState('');
  const navigate = useNavigate(); // Utilisation de la fonction navigate de 'react-router-dom'

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axiosClient.post('/auth/verify', {
        code,
      });
      if (response.status === 200) {
        setCode('');
        console.log('Code vérifié avec succès !');
        navigate("/"); // Redirection vers la page principale si le code est correct
      } else {
        console.log('Le code est incorrect');
        // Affichage d'un message d'erreur pour informer l'utilisateur que le code est incorrect
        alert('Le code est incorrect');
      }
    } catch (error) {
      console.log(error);
      // Afficher un message d'erreur ou effectuer une autre action appropriée
    }
  };

  return (
    <div className="verification-code-container">
      <h2>Verify your email</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Enter the code pin"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <button type="submit">Check</button>
      </form>
    </div>
  );
};

export default VerificationCodePage;
