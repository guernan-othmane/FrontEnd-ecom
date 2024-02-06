import React from "react";
import "./ForgotPassword.css"; // Assurez-vous d'avoir un fichier CSS pour le style

const ForgotPassword = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Ajoutez ici la logique pour envoyer un e-mail de récupération de mot de passe
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-form">
        <h2>Forgot Password</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <button type="submit" className="btn-submit">
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
