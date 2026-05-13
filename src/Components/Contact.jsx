import React, { useEffect } from "react";
import Content from "./Content";
import { Helmet } from "react-helmet-async";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../FireBase/Config";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const [user, loading, error] = useAuthState(auth);

  let navigate = useNavigate();
  useEffect(() => {
    if (!user && !loading) {
      navigate("/Content");
    }
    if (user) {
      if (!user.emailVerified) {
        navigate("/");
      }
    }
  });

  if (loading) {
    return (
      <div>
        <h1 className="text-2xl font-bold">Initialising User...</h1>
      </div>
    );
  }
  if (error) {
    return (
      <div>
        <h1 className="text-2xl font-bold text-red-500">Error: {error}</h1>
      </div>
    );
  }
  if (user) {
    if (user.emailVerified) {
      return (
        <>
          <Helmet>
            <title>Contact Page</title>
            <meta name="description" content="Web site CONTACT description" />
          </Helmet>
          <Content
            title="Contact Us"
            description="Get in touch with us today!"
          />
        </>
      );
    }
  }
}
