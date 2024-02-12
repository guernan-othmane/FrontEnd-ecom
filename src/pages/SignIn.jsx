import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignIn.css";
import { axiosClient } from "../utils/axios";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axiosClient.post("/auth/login", {
        email,
        password,
      });
      if (response.status === 200) {
        setEmail("");
        setPassword("");
        console.log("Sign in ajouté avec succès !");
        navigate("/verify-code");
      } else {
        console.log("Une erreur est survenue lors connexion");
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="signin-container">
      <h2>Sign In</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
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
        <Link to="/signup">Sign Up</Link>
        <Link to="/forgotpassword">Forgot Password?</Link>{" "}
      </div>
    </div>
  );
}

export default SignIn;
