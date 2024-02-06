import React, { useState } from "react";
import { Link } from "react-router-dom"; // Importer le composant de lien de react-router-dom
import "./SignIn.css"; // Fichier de style pour personnaliser l'apparence

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, vous pouvez ajouter la logique pour soumettre le formulaire
    // par exemple, en appelant une fonction d'authentification
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="signin-container">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label className="label" htmlFor="email">
            Email:
          </label>
          <input
            className="inpt"
            placeholder="Enter your email adress"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label className="label" htmlFor="password">
            Password:
          </label>
          <input
            className="inpt"
            placeholder="Enter your password"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit">Sign In</button>
      </form>
      <div className="signin-links">
        <Link to="/signup">Sign Up</Link> {/* Lien vers la page Sign Up */}
        <Link to="/forgotpassword">Forgot Password?</Link>{" "}
        {/* Lien vers la page Forgot Password */}
      </div>
    </div>
  );
}

export default SignIn;
