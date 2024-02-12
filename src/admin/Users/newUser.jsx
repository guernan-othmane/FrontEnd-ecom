import React, { useState } from "react";
import "./newUser.css"; // Fichier CSS pour le style
import { useNavigate } from "react-router-dom";
import { axiosClient } from "../../utils/axios";

const NewUSer = () => {
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();

  const handleAddUser = async (event) => {
    event.preventDefault();
    try {
      const response = await axiosClient.post('/users/add', {
        fullname,
        email,
        phonenumber
      });
      
      if (response.status === 201) {
        setFullName('');
        setEmail('');
        setPhoneNumber('');
       console.log('user ajouté avec succès !') ;
       navigate('/users')
      } else {
       console.log('Une erreur est survenue lors de l\'ajout du user');
      }
    } catch (error) {
      console.log(error);
      // Afficher un message d'erreur ou effectuer une autre action appropriée
    }
  };

  return (
    <div className="add-product-container">
      <h2>Add User</h2>
      <form onSubmit={(e) => handleAddUser(e)}>
        <label>FullName:</label>
        <input
          type="text"
          value={fullname}
          onChange={(e) => setFullName(e.target.value)}
        />

        <label>Email:</label>
        <textarea value={email} onChange={(e) => setEmail(e.target.value)} />
        <div className="image">
          <label>PhoneNumber:</label>
          <input
            type="text"
            value={phonenumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <br />
        <br /> <br />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default NewUSer;
