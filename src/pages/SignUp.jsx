import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";
import { axiosClient } from "../utils/axios";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axiosClient.post('/auth/register', {
        fullname,
        email,
        password,
      });
      
      if (response.status === 201) {
        setFullName('');
        setEmail('');
        setPassword('');
        console.log('Sign Up ajouté avec succès !') ;
        navigate('/signin')
      } else {
       console.log('Une erreur est survenue lors connexion');
      }
    } catch (error) {
      console.log(error);
      // Afficher un message d'erreur ou effectuer une autre action appropriée
    }
    // Ici, vous pouvez ajouter la logique pour soumettre le formulaire de création de compte
    console.log("Full Name:", fullname);
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="input-group">
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            placeholder="Enter your fullname"
            id="fullName"
            value={fullname}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            placeholder="Enter your email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            placeholder="Enter your password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <div className="signup-links">
        <Link to="/signin">Already have an account? Sign In</Link>
      </div>
    </div>
  );
}

export default SignUp;
