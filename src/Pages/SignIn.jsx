import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../FireBase/Config";
import { useAuthState } from "react-firebase-hooks/auth";

import { useNavigate } from "react-router";

export default function SignIn() {
    const [user] = useAuthState(auth);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let navigate = useNavigate();
  return (
    <>
      <Helmet>
        <title>SignIn Page</title>
        <meta name="description" content="Web site SIGNIN description" />
      </Helmet>

      <Navbar />
      <main className="content-home">
        <form>
          <input   onChange={(eo) => {
              setEmail(eo.target.value);
            }} type="email" placeholder="Email" required />
          <input
            onChange={(eo) => {
              setPassword(eo.target.value);
            }}
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                  // Signed in
                  const user = userCredential.user;
                  // ...
                  
                  console.log("User signed in successfully:", user);
                  navigate("/"); // Navigate to the home page after successful sign-in
                })
                .catch((error) => {
                  const errorCode = error.code;
                  const errorMessage = error.message;
                  console.log("Error signing in: ", errorMessage);
                });
            }}
           >
          
            Sign In
          </button> 
          <Link to="/signup">
            <p className="account">Sign Up</p>
          </Link>
        </form>
      </main>
    </>
  );
}
