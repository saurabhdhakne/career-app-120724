import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { LandingSection } from "../components/LandingSection";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";

const Landing = () => {
  return (
    <>
      <LandingSection />
      <AboutSection />
      <ContactSection />
    </>
  );
};

export default Landing;

//const navigate = useNavigate();
// <button onClick={() => navigate("/login")}>Go to Login</button>
