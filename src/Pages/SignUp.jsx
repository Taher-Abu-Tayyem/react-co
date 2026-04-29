import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../FireBase/Config";

import { useNavigate } from "react-router";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();
  const [errorr, setErrorr] = useState(null);

  return (
    <>
      <Helmet>
        <title>SignUp Page</title>
        <meta name="description" content="Web site SIGNUP description" />
      </Helmet>
      <Navbar />
      <main className="content-home">
        <form action="/signup" method="">
          <input
            onChange={(eo) => {
              setEmail(eo.target.value);
            }}
            type="email"
            placeholder="Email"
            required
          />
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
            onClick={(eo) => {
              eo.preventDefault();
              createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                  // Signed up
                  const user = userCredential.user;
                  // ...
                  console.log("User created successfully:", user);
                  navigate("/"); // Navigate to the sign-in page after successful sign-up
                })
                .catch((error) => {
                  const errorCode = error.code;
                  const errorMessage = error.message;
                  console.log(errorCode, errorMessage);
                  setErrorr(errorCode);
                  switch (errorCode) {
                    case "auth/invalid-email":
                      setErrorr("Invalid email.");
                      break;                  
                    case "auth/invalid-credential":
                      setErrorr("Wrong password.");
                      break;
                      case "auth/too-many-requests":
                      setErrorr("Too many requests. Please try again later.");
                      break;
                      case "auth/missing-password":
                      setErrorr("The password is missing.");
                      break;
                    default:
                      setErrorr("An error occurred. Please try again.");
                  }
                  // ..
                });
            }}
            type="submit"
          >
            Sign Up
          </button>
          <Link to="/signin">
            <p className="account">Sign In</p>
          </Link>
          
            {errorr && <span style={{ color: "red" }}>{errorr}</span>}
        
        </form>
      </main>
    </>
  );
}
