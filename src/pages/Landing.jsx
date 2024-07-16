import React from "react";
import { LandingSection } from "../components/LandingSection";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import EditorSection from "../components/EditorSection";

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
